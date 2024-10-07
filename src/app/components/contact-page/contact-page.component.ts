import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  @Output('showContactForm') showContactForm = new EventEmitter<any>();

  ngOnInit() {
    gsap.fromTo(
      '#contact-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#contact-title',
          start: 'top bottom',
          end: 'top 75%',
          scrub: true,
        },
      }
    );
  }
}
