import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-platform-page',
  templateUrl: './platform-page.component.html',
  styleUrls: ['./platform-page.component.scss']
})
export class PlatformPageComponent implements AfterViewInit {
  SvgIcon = SvgIcon;

  cards: any[] = [
    { description: 'Anyone with a disability who refuses ro allow  that particular disability to interfere with advancing in life. My Illustrator is a perfect exmaple of this!', image: '../../../../assets/img/child-learning-1.jpg' },
    { description: 'Struggling readers who benefit from repetition of text, along with the simple enjoyment of a true childhood story', image: '../../../../assets/img/child-learning-2.jpg' },
    { description: 'Intervention specialists all over the world who can’t help but believe that all children can learn to read', image: '../../../../assets/img/child-learning-3.jpg' }
  ];

  observer = new IntersectionObserver((entries) => {
    console.log('platform observer');
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.headerPlat.show();
      }
    });
  });

  @ViewChild('headerPlat') headerPlat: HeaderComponent;

  constructor(public scrollToView: ViewportScroller) { }

  ngAfterViewInit() {
    const test = document.getElementById('platHeader');
    this.observer.observe(test);
  }

  public scrollToElement(element: string) {
    this.scrollToView.scrollToAnchor(element);
  }
}
