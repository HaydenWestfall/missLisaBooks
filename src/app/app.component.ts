import { Component } from '@angular/core';
import { SiteHeaderComponent } from './sections/site-header/site-header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { VisitsComponent } from './sections/visits/visits.component';
import { MissionComponent } from './sections/mission/mission.component';
import { BooksComponent } from './sections/books/books.component';
import { AboutComponent } from './sections/about/about.component';
import { BookingComponent } from './sections/booking/booking.component';
import { SiteFooterComponent } from './sections/site-footer/site-footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    VisitsComponent,
    MissionComponent,
    BooksComponent,
    AboutComponent,
    BookingComponent,
    SiteFooterComponent,
  ],
})
export class AppComponent {}
