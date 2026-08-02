import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render every page section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    for (const section of [
      'app-navbar',
      'app-landing-page',
      'app-book-page',
      'app-platform-page',
      'app-about-page',
      'app-shop-page',
      'app-contact-page',
      'app-footer',
    ]) {
      expect(compiled.querySelector(section)).toBeTruthy();
    }
  });
});
