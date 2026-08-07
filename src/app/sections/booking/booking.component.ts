import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  type AbstractControl,
} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { IconComponent } from '../../ui/icon.component';
import { CONTACT, EVENT_TYPES } from '../../core/site-content';

/** Cloudflare Worker that relays this form to SMTP2Go. */
const BOOKING_ENDPOINT = 'https://booking.misslisabooks.com';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  imports: [ReactiveFormsModule, IconComponent],
})
export class BookingComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly contact = CONTACT;
  readonly eventTypes = EVENT_TYPES;

  /** Set once the request has been sent (or handed off as a fallback). */
  readonly submitted = signal(false);
  readonly sending = signal(false);
  readonly sendFailed = signal(false);
  readonly copied = signal(false);
  readonly showValidation = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    organization: ['', Validators.required],
    role: [''],
    location: [''],
    eventType: [this.eventTypes[0] as string, Validators.required],
    timeframe: [''],
    groupSize: [''],
    message: [''],
    // Honeypot — left blank by real visitors, hidden from sighted/screen-reader users.
    company: [''],
  });

  /** True once a field should start showing its error state. */
  isInvalid(name: string): boolean {
    const control: AbstractControl | null = this.form.get(name);
    if (!control) return false;
    return control.invalid && (control.touched || this.showValidation());
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.showValidation.set(true);
      this.form.markAllAsTouched();
      // Move focus to the first problem so keyboard and screen reader users
      // are not left guessing why nothing happened.
      const firstInvalid = Object.keys(this.form.controls).find(
        (key) => this.form.get(key)?.invalid,
      );
      document.getElementById(`field-${firstInvalid}`)?.focus();
      return;
    }

    this.sending.set(true);
    this.sendFailed.set(false);

    try {
      await firstValueFrom(
        this.http.post(BOOKING_ENDPOINT, this.form.getRawValue()),
      );
      this.submitted.set(true);
    } catch {
      // The worker/API is unreachable — fall back to the visitor's own mail
      // client so the request still gets to Lisa.
      this.sendFailed.set(true);
      window.location.href = this.mailtoHref();
      this.submitted.set(true);
    } finally {
      this.sending.set(false);
    }
  }

  /** The plain-text version, shown as a fallback if the mail client no-shows. */
  messageBody(): string {
    const v = this.form.getRawValue();
    const lines = [
      `Hi Lisa,`,
      ``,
      `We would love to have you visit us.`,
      ``,
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `School / organization: ${v.organization}`,
    ];

    if (v.role) lines.push(`Role: ${v.role}`);
    if (v.location) lines.push(`Location: ${v.location}`);
    lines.push(`Type of event: ${v.eventType}`);
    if (v.timeframe) lines.push(`Dates in mind: ${v.timeframe}`);
    if (v.groupSize) lines.push(`Roughly how many kids: ${v.groupSize}`);
    if (v.message) lines.push(``, v.message);

    lines.push(``, `Thank you!`, v.name);
    return lines.join('\n');
  }

  mailtoHref(): string {
    const organization = this.form.getRawValue().organization;
    const subject = `Visit request — ${organization}`;
    return (
      `mailto:${this.contact.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(this.messageBody())}`
    );
  }

  async copyMessage(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.messageBody());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    } catch {
      // Clipboard blocked (insecure context or denied) — the message is
      // already on screen for the visitor to select manually.
      this.copied.set(false);
    }
  }

  reset(): void {
    this.form.reset({ eventType: this.eventTypes[0] });
    this.submitted.set(false);
    this.showValidation.set(false);
  }
}
