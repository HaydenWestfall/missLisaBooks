import { Component } from '@angular/core';
import { IconComponent } from '../../ui/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import { BOOKS, BOOKS_UPCOMING, CONTACT } from '../../core/site-content';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [IconComponent, RevealDirective],
})
export class BooksComponent {
  readonly upcoming = BOOKS_UPCOMING;
  readonly contact = CONTACT;

  /** The newest release gets the large treatment; the rest flow into a grid. */
  readonly featured = BOOKS[0];
  readonly others = BOOKS.slice(1);

  /** One dot per planned book, filled in for the ones already out. */
  readonly seriesDots: readonly boolean[] = Array.from(
    { length: BOOKS_UPCOMING.count },
    (_, i) => i < BOOKS_UPCOMING.released
  );

  /** Blank spines on the "coming soon" card — one per title still to write. */
  readonly plannedSlots: readonly number[] = Array.from(
    { length: Math.max(BOOKS_UPCOMING.count - BOOKS.length, 0) },
    (_, i) => i
  );
}
