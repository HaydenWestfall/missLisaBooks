import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-platform-page',
  templateUrl: './platform-page.component.html',
  styleUrls: ['./platform-page.component.scss']
})
export class PlatformPageComponent {
  SvgIcon = SvgIcon;

  cards: any[] = [
    { description: 'Anyone with a disability who refuses ro allow  that particular disability to interfere with advancing in life. My Illustrator is a perfect exmaple of this!', image: '../../../../assets/img/child-learning-1.jpg' },
    { description: 'Struggling readers who benefit from repetition of text, along with the simple enjoyment of a true childhood story', image: '../../../../assets/img/child-learning-2.jpg' },
    { description: 'Intervention specialists all over the world who can’t help but believe that all children can learn to read', image: '../../../../assets/img/child-learning-3.jpg' }
  ]

  constructor(public scrollToView: ViewportScroller) { }

  public scrollToElement(element: string) {
    console.log(element);
    
    this.scrollToView.scrollToAnchor(element);
  }
}
