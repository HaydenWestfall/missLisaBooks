import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements AfterViewInit {

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.header.show();
      }
    });
  });

  @Output('showContactForm') showContactForm = new EventEmitter<any>();
  @ViewChild('header') header: HeaderComponent;

  constructor(public scrollToView: ViewportScroller) {}

  ngAfterViewInit() {
    this.observer.observe(document.getElementById('contactHeader'));
  }

}
