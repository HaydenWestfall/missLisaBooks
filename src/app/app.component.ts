import { ViewportScroller } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { EmailService } from './services/email.service';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { PlatformPageComponent } from './components/platform-page/platform-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NavbarComponent,
    LandingPageComponent,
    BookPageComponent,
    PlatformPageComponent,
    AboutPageComponent,
    ShopPageComponent,
    ContactPageComponent,
    FooterComponent,
  ],
})
export class AppComponent implements OnInit {
  readonly scrollToView = inject(ViewportScroller);
  readonly emailService = inject(EmailService);
  private readonly builder = inject(FormBuilder);

  title = 'missLisaBooks';
  formData: FormGroup;

  ngOnInit() {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.formData = this.builder.group({
      emailAddress: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  public scrollToElement(element: string) {
    this.scrollToView.scrollToAnchor(element);
  }

  public sendEmail(): void {}
}
