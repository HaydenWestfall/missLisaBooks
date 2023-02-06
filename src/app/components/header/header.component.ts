import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { InteropObservable } from 'rxjs';
import { staggerWords } from './header.animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [staggerWords]
})
export class HeaderComponent implements OnInit {

  @Input('id') id = '';
  @Input('headerColor') headerColor = '';
  @Input('subHeaderColor') subHeaderColor = '';
  @Input('header') header = '';
  @Input('subHeader') subHeader = '';

  headerWords: string[] = [];
  characterIndex = 0;
  shown = false;

  @ViewChild('headerTest')headerTest: HTMLElement

  ngOnInit() {
    this.headerWords = this.header.split('');
  }

  show(): void {
    if (!this.shown) {
      let animationInterval = setInterval(() => {
        this.characterIndex++;
        if (this.characterIndex === this.headerWords.length && this.header !== '') {
          clearInterval(animationInterval);
          animationInterval = null;
          this.shown = true;
          return;
        } else if (this.characterIndex === 'JOSIE and the TOAD'.length && this.header == '') {
          clearInterval(animationInterval);
          animationInterval = null;
          this.shown = true;
          return;
        }
      }, 40);
    }
  }
}
