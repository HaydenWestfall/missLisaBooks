import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild,
} from '@angular/core';
import { animatedBackground, fadeInOut, fadeInOutQuick } from 'src/animation';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [animatedBackground, fadeInOutQuick],
})
export class LandingPageComponent implements AfterViewInit {
  SvgIcon = SvgIcon;

  test: any;
  scrollPosition = 0;
  scrollIncrement = 0;
  characterIndex = 0;
  showAction = false;

  heroText: string =
    'Lets Be Irrationally Crazy About As Many Kids As We Possibly Can';
  heroTextChunks: string[] = this.heroText.split(' ');

  selectedKidId = null;
  kidIds = ['kid1', 'kid2', 'kid3'];

  kidSelected = null;
  kids: any[] = [
    {
      id: 'kid1',
      name: 'Riglee "Riggs" Leighner',
      quote:
        '“Riglee is a one of a kind kid. I am in awe of him everyday. As he learns, I learn. His effort and determination in the classroom is an inspiration to all.”',
      quoteGivenBy: 'Maddie Mollette',
      image: '../assets/img/boy.png',
      bg: '#DEE7FC',
    },
    {
      id: 'kid2',
      name: 'Maddalena Ranelli',
      quote:
        '"Maddie is amazing! I can\'t wait to see how she changes the world!"',
      quoteGivenBy: 'Dr. Bethany Brady',
      image: '../assets/img/girl.png',
      bg: '#F4D7D7',
    },
    {
      id: 'kid3',
      name: 'Faith Jackson',
      quote:
        '"When you meet Faith, her spunk and tenacity are catalysts for personal growth and strength. My thought being…. If Faith can do all the things she does, we can all push ourselves to do better, too."',
      quoteGivenBy: 'Katie Puhl',
      image: '../assets/img/girl2.png',
      bg: '#D9DCB8',
    },
  ];

  @ViewChild('headerPlat') header: HTMLElement;

  constructor(public scrollToView: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  }

  ngAfterViewInit() {
    let width = document.getElementById('test')?.offsetWidth ?? 0;
    let height = document.getElementById('test')?.offsetHeight ?? 0;
    let topspace = (height / 4) * 3;
    let leftspace = width / 2;

    this.scrollIncrement = leftspace / topspace;

    this.show();
  }

  public scrollToElement(element: string) {
    this.scrollToView.scrollToAnchor(element);
  }

  show(): void {
    let animationInterval = setInterval(() => {
      this.characterIndex++;
      if (this.characterIndex === this.heroTextChunks.length) {
        clearInterval(animationInterval);
        animationInterval = null;
        this.showAction = true;
        return;
      }
    }, 40);
  }
}
