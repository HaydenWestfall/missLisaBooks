import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { gsap } from 'gsap';
import { ButtonComponent } from '../button/button.component';
import { KidInfoComponent } from '../kid-info/kid-info.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [ButtonComponent, KidInfoComponent],
})
export class LandingPageComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly scrollToView = inject(ViewportScroller);

  readonly characterIndex = signal(0);
  readonly showAction = signal(false);
  readonly kidSelected = signal<any>(null);

  readonly heroText =
    'Lets Be Irrationally Crazy About As Many Kids As We Possibly Can';
  readonly heroTextChunks: string[] = this.heroText.split(' ');

  readonly kids: any[] = [
    {
      id: 'kid1',
      name: 'Riglee "Riggs" Leighner',
      quote:
        '“Riglee is a one of a kind kid. I am in awe of him everyday. As he learns, I learn. His effort and determination in the classroom is an inspiration to all.”',
      quoteGivenBy: 'Maddie Mollette',
      image: '../assets/img/riggs.webp',
      imagePos: 'unset',
      bg: '#DEE7FC',
    },
    {
      id: 'kid2',
      name: 'Maddalena Ranelli',
      quote:
        '"Maddie is amazing! I can\'t wait to see how she changes the world!"',
      quoteGivenBy: 'Dr. Bethany Brady',
      image: '../assets/img/maddalena.webp',
      imagePos: '0 -28px',
      bg: '#F4D7D7',
    },
    {
      id: 'kid3',
      name: 'Faith Jackson',
      quote:
        '"When you meet Faith, her spunk and tenacity are catalysts for personal growth and strength. My thought being…. If Faith can do all the things she does, we can all push ourselves to do better, too."',
      quoteGivenBy: 'Katie Puhl',
      image: '../assets/img/faith.webp',
      imagePos: '0 -60px',
      bg: '#D9DCB8',
    },
  ];

  currentIndex = 0;
  totalImages = 3; // Only count the original images (not the duplicate)
  timeline?: gsap.core.Timeline;

  direction = -1;
  xPos = 0;

  private animationFrameId: number | null = null;
  private typewriterInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.setupTimeline();
  }

  ngOnDestroy() {
    this.timeline?.kill();

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.typewriterInterval !== null) {
      clearInterval(this.typewriterInterval);
    }
  }

  setupTimeline() {
    this.timeline = gsap.timeline({
      repeat: -1, // Infinite loop
    });

    this.timeline.to('.images', {
      x: '0%',
      duration: 0,
      ease: 'none',
    });

    // Create an animation for each image slide
    for (let i = 1; i <= this.totalImages; i++) {
      this.timeline.to(
        '.images',
        {
          x: `-${i * 100}%`,
          duration: 1,
          ease: 'power2.inOut',
        },
        '+=3.5'
      ); // Hold each image for 4 seconds before sliding to the next
    }

    this.timeline.play();
  }

  openLearnMore(): void {
    const scrollPosition = gsap.getProperty('.images', 'x') as number;
    if (scrollPosition < 0 && scrollPosition >= -100) {
      this.currentIndex = 1;
    } else if (scrollPosition < -100 && scrollPosition >= -200) {
      this.currentIndex = 2;
    } else {
      this.currentIndex = 0;
    }
    this.kidSelected.set(this.kids[this.currentIndex]);
    this.timeline?.pause();
  }

  closeLearnMore(): void {
    this.kidSelected.set(null);
    this.timeline?.resume();
  }

  ngAfterViewInit() {
    this.show();

    gsap.to(document.getElementById('dash-border-wrapper'), {
      scrollTrigger: {
        trigger: document.getElementById('dash-border-wrapper'),
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (this.direction = e.direction * -1),
      },
      rotate: '-100px',
    });

    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  public scrollToElement(element: string) {
    this.scrollToView.scrollToAnchor(element);
  }

  show(): void {
    this.typewriterInterval = setInterval(() => {
      this.characterIndex.update((index) => index + 1);

      if (this.characterIndex() === this.heroTextChunks.length) {
        clearInterval(this.typewriterInterval);
        this.typewriterInterval = null;
        this.showAction.set(true);
      }
    }, 40);
  }

  animate = () => {
    gsap.set(document.getElementById('dash-border'), { rotate: this.xPos });
    this.animationFrameId = requestAnimationFrame(this.animate);
    this.xPos += 0.3;
  };
}
