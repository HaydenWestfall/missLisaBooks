import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reveal the call-to-action buttons once the hero text finishes', () => {
    expect(fixture.nativeElement.querySelectorAll('app-button').length).toBe(0);

    component.showAction.set(true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-button').length).toBe(2);
  });

  it('should show the selected kid when Learn more is opened, and hide it again on close', () => {
    component.openLearnMore();
    fixture.detectChanges();

    expect(component.kidSelected()).toBe(component.kids[component.currentIndex]);
    expect(
      fixture.nativeElement.querySelector('.quote-overlay')
    ).toBeTruthy();

    component.closeLearnMore();
    fixture.detectChanges();

    expect(component.kidSelected()).toBeNull();
  });

  it('should fade in hero words as the character index advances', () => {
    const words = () =>
      Array.from<HTMLElement>(
        fixture.nativeElement.querySelectorAll('#hero-text span')
      );

    expect(words().filter((w) => w.classList.contains('fade')).length).toBe(0);

    component.characterIndex.set(3);
    fixture.detectChanges();

    expect(words().filter((w) => w.classList.contains('fade')).length).toBe(3);
  });
});
