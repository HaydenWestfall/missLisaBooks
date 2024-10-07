import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SvgIcon } from './utility/svg-icons/svg-icons.component';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { EmailService } from './services/email.service';
import { showForm } from 'src/animation';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [showForm],
})
export class AppComponent implements OnInit {
  title = 'missLisaBooks';
  SvgIcon = SvgIcon;
  formData: FormGroup;

  showContactForm = false;

  constructor(
    public scrollToView: ViewportScroller,
    private builder: FormBuilder,
    public emailService: EmailService
  ) {}

  ngOnInit() {
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
