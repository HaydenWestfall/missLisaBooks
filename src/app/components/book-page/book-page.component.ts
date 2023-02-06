import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements AfterViewInit {

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          this.header.show();
        }, 300);
      }
    });
  });

  @ViewChild('header') header: HeaderComponent;

  constructor(public scrollToView: ViewportScroller) {}

  ngAfterViewInit() {
    this.observer.observe(document.getElementById('bookHeader'));
  }
}
