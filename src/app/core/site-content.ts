/**
 * Single source of truth for everything written on the site.
 *
 * Copy, links, books and photos all live here so they can be updated without
 * touching a template. Lines marked `CONFIRM:` were written to fill out the
 * new booking-focused sections and should be checked against how Lisa
 * actually runs her visits before this goes live.
 */

export const CONTACT = {
  email: 'lisahildebrand@misslisabooks.com',
  instagram: 'https://www.instagram.com/misslisabooks/',
  instagramHandle: '@misslisabooks',
  // CONFIRM: shown so schools know roughly how far Lisa travels.
  baseLocation: 'Ludlow Falls, Ohio',
  travelNote: 'Traveling throughout Ohio and the surrounding states',
} as const;

export const NAV_LINKS = [
  { id: 'visits', label: 'School Visits' },
  { id: 'books', label: 'Books' },
  { id: 'mission', label: 'Our Why' },
  { id: 'about', label: 'About' },
] as const;

/* -------------------------------------------------------------------------
   Hero
   ------------------------------------------------------------------------- */
export const HERO = {
  eyebrow: 'Author visits · Read-alouds · Book signings',
  /** Lisa's motto — the line the whole site is built around. */
  title: 'Let’s be irrationally crazy about as many kids as we possibly can.',
  lede:
    'Miss Lisa is a special education teacher of 26 years turned children’s author. ' +
    'She brings her true-story picture books into schools, libraries and community ' +
    'events — and every child goes home with a signed copy of their own.',
  proofPoints: [
    'A signed book for every child',
    'Built for every kind of reader',
    'Schools, libraries & events',
  ],
} as const;

/* -------------------------------------------------------------------------
   The three children who inspired the books
   ------------------------------------------------------------------------- */
export interface Kid {
  readonly id: string;
  readonly name: string;
  readonly quote: string;
  readonly quoteGivenBy: string;
  readonly image: string;
  readonly imagePosition: string;
  readonly alt: string;
  readonly accent: string;
}

export const KIDS: readonly Kid[] = [
  {
    id: 'riggs',
    name: 'Riglee “Riggs” Leighner',
    quote:
      'Riglee is a one of a kind kid. I am in awe of him everyday. As he learns, I learn. His effort and determination in the classroom is an inspiration to all.',
    quoteGivenBy: 'Maddie Mollette',
    image: 'assets/img/riggs.webp',
    imagePosition: '50% 22%',
    alt: 'Riggs smiling while sitting on a porch chair',
    accent: 'var(--sky-soft)',
  },
  {
    id: 'maddalena',
    name: 'Maddalena Ranelli',
    quote: 'Maddie is amazing! I can’t wait to see how she changes the world!',
    quoteGivenBy: 'Dr. Bethany Brady',
    image: 'assets/img/maddalena.webp',
    imagePosition: '50% 20%',
    alt: 'Maddalena posing confidently with her hands on her hips',
    accent: 'var(--clay-soft)',
  },
  {
    id: 'faith',
    name: 'Faith Jackson',
    quote:
      'When you meet Faith, her spunk and tenacity are catalysts for personal growth and strength. My thought being… if Faith can do all the things she does, we can all push ourselves to do better, too.',
    quoteGivenBy: 'Katie Puhl',
    image: 'assets/img/faith.webp',
    imagePosition: '50% 22%',
    alt: 'Faith laughing with delight while riding her adaptive bike',
    accent: 'var(--sage-soft)',
  },
] as const;

/* -------------------------------------------------------------------------
   Visits — the primary reason schools and libraries are here
   ------------------------------------------------------------------------- */
export interface VisitFormat {
  readonly id: string;
  readonly tag: string;
  readonly tagClass: string;
  readonly title: string;
  readonly audience: string;
  readonly description: string;
  readonly details: readonly string[];
}

/** CONFIRM: formats, group sizes and run times. */
export const VISIT_FORMATS: readonly VisitFormat[] = [
  {
    id: 'assembly',
    tag: 'Most requested',
    tagClass: 'tag--clay',
    title: 'School assembly read-aloud',
    audience: 'Pre-K through 5th grade',
    description:
      'Miss Lisa reads the book out loud, then tells the real story behind it — the actual kids, the actual snapping turtles, the actual toad in the kitchen. Kids find out that stories come from their own lives.',
    details: [
      'One grade band or the whole school',
      'About 45 minutes, plus signing time',
      'Signing table set up before or after',
    ],
  },
  {
    id: 'classroom',
    tag: 'Small group',
    tagClass: 'tag--sky',
    title: 'Classroom & intervention groups',
    audience: 'Struggling and emerging readers',
    description:
      'A closer, quieter session written for the readers Miss Lisa spent 26 years teaching. Repetitive text, plenty of turns to read out loud, and no one put on the spot.',
    details: [
      'One class or a small reading group',
      'About 30 minutes per group',
      'Pairs well with an assembly the same day',
    ],
  },
  {
    id: 'library',
    tag: 'Families welcome',
    tagClass: 'tag--honey',
    title: 'Library story time & book signings',
    audience: 'Libraries, festivals & events',
    description:
      'Story time for families, a table full of books, and Miss Lisa signing every copy by hand. A warm, low-key event that works just as well in a library corner as a festival tent.',
    details: [
      'Weekday, evening or weekend',
      'Story time plus open signing',
      'Books available to purchase on site',
    ],
  },
] as const;

/** CONFIRM: what Lisa guarantees for every booking. */
export const VISIT_INCLUDES: readonly string[] = [
  'A live read-aloud from Miss Lisa herself',
  'The true story behind the book',
  'Kids’ Q&A — they ask, Miss Lisa answers',
  'A signed copy for every child in the room',
  'A signing table for families and staff',
  'Photos your school is free to share',
] as const;

export const VISIT_STEPS = [
  {
    number: '01',
    title: 'Tell Miss Lisa about your school',
    body: 'Grade levels, roughly how many kids, the dates you have in mind, and anything special about your group.',
  },
  {
    number: '02',
    title: 'Plan the day together',
    body: 'Assembly, classroom sessions, or both — plus how many signed books you would like on hand for the kids.',
  },
  {
    number: '03',
    title: 'Miss Lisa comes to you',
    body: 'She reads, she answers every last question, and she signs a book for every child before she leaves.',
  },
] as const;

export const PRICING = {
  title: 'What does a visit cost?',
  body:
    'Every event is a little different, so pricing is put together per visit rather than off a price list. ' +
    'It depends on things like travel, how many sessions you would like, the size of your group, and how many ' +
    'signed books you want in kids’ hands.',
  note:
    'Send over the details and Miss Lisa will come back with a quote for your event. Schools and libraries ' +
    'working with a tight budget are always welcome to ask — she would rather find a way than turn kids away.',
} as const;

/* -------------------------------------------------------------------------
   Books — two released today, more on the way
   ------------------------------------------------------------------------- */
export interface BookLink {
  readonly label: string;
  readonly url: string;
}

export interface Book {
  readonly id: string;
  readonly title: string;
  readonly status: 'available' | 'coming-soon';
  readonly badge?: string;
  readonly cover: string;
  readonly coverAlt: string;
  readonly blurb: readonly string[];
  readonly hook?: string;
  readonly links: readonly BookLink[];
}

export const BOOKS: readonly Book[] = [
  {
    id: 'hatching-snappers',
    title: 'Hatching Snappers',
    status: 'available',
    badge: 'Amazon #1 New Release',
    cover: 'assets/img/book_stack.webp',
    coverAlt: 'Hatching Snappers picture book, stacked copies',
    blurb: [
      'Madison and her little brother live out in the country, surrounded by wildlife. Early one summer morning, Madison and her mom discover a snapping turtle laying eggs.',
      'Madison is determined to save those eggs from the local wildlife — but it turns out that is not an easy job.',
      'Based on a true story, follow Madison’s adventure in a heartwarming tale of determination and nature.',
    ],
    hook: 'Is she up to the task?',
    links: [
      { label: 'Amazon', url: 'https://tinyurl.com/454z84ty' },
      {
        label: 'Barnes & Noble',
        url: 'https://www.barnesandnoble.com/w/hatching-snappers-lisa-hildebrand/1146124224?ean=9781632967145',
      },
      {
        label: 'Lucid Books',
        url: 'https://lucidbooks.com/books/hatching-snappers/',
      },
    ],
  },
  {
    id: 'josie-and-the-toad',
    title: 'Josie and the Toad',
    status: 'available',
    cover: 'assets/img/Josie_and_toad.webp',
    coverAlt: 'Josie and the Toad picture book cover',
    blurb: [
      'Dawson and his older sister, Maddie, live in the country where they are surrounded by wildlife. Over the course of one summer, their mom finds herself with a small mystery on her hands.',
      'An enormous toad keeps turning up inside their house — always in the middle of the night. No one can work out how it gets in, until one night the mystery is finally solved.',
    ],
    // CONFIRM: retailer links for this title. Until they are added, readers
    // are pointed at Lisa's inbox rather than a dead link.
    links: [
      { label: 'Ask about copies', url: 'mailto:misslisabooks@gmail.com' },
    ],
  },
] as const;

/** CONFIRM: the series is planned to run to eight books. */
export const BOOKS_UPCOMING = {
  title: 'More stories are already on the way',
  body:
    'Miss Lisa is writing toward a series of eight books, all pulled from real childhood moments and all built ' +
    'with struggling readers in mind. New titles are announced on Instagram first.',
  count: 8,
  released: 2,
} as const;

/* -------------------------------------------------------------------------
   The people
   ------------------------------------------------------------------------- */
export interface Person {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly photo: string;
  readonly photoAlt: string;
  readonly bio: readonly string[];
}

export const PEOPLE: readonly Person[] = [
  {
    id: 'lisa',
    name: 'Lisa Hildebrand',
    role: 'Author & creator',
    photo: 'assets/img/lisa_headshot.webp',
    photoAlt: 'Lisa Hildebrand, author of Miss Lisa Books',
    bio: [
      'Lisa is a wife and mother of two who lives in Ludlow Falls, Ohio. She graduated from Slippery Rock University with a BA in both Special Education and Elementary Education, and has spent the last 26 years working in special education.',
      'Lisa is a lover of all things for children. When she is not at work she can be found kayaking, reading, or riding her bike — and spending countless hours convincing friends and family to try something new with her, whether that is the ukulele, sleeping in a floating tent, or cardio drumming.',
    ],
  },
  {
    id: 'parker',
    name: 'Parker Buhrman',
    role: 'Illustrator',
    photo: 'assets/img/parker_headshot.webp',
    photoAlt: 'Parker Buhrman, illustrator for Miss Lisa Books',
    bio: [
      'Parker and his high school sweetheart, Olivia, were born, raised, and still live in Arcanum, Ohio. He has always had a love for the arts and a creative mind that never seems to shut off new ideas.',
      'Parker was born with colorblindness, and has found he genuinely enjoys the challenge that comes with bringing his illustrations to full color. When he is not drawing he is renovating their 1800s home, making music with friends, or planning his next road trip across the country.',
    ],
  },
] as const;

export const MISSION = {
  eyebrow: 'Our why',
  title: 'The kids who started all of this',
  lede:
    'These three are the reason Miss Lisa Books exists. Lisa is inspired by anyone who refuses to let a ' +
    'disability decide what they are capable of — and she wants every child in every room she visits to ' +
    'hear that out loud.',
  beliefs: [
    {
      image: 'assets/img/web_1.webp',
      imagePosition: 'center',
      alt: 'Miss Lisa reading to a classroom of students seated on the floor',
      title: 'Nothing is off the table',
      body: 'Miss Lisa is inspired by anyone with a disability who refuses to let it interfere with getting on in life. Her illustrator is a perfect example.',
    },
    {
      image: 'assets/img/web_2.webp',
      imagePosition: 'center',
      alt: 'A group of students holding tote bags after a school visit',
      title: 'Written for struggling readers',
      body: 'The series is written for readers who benefit from repetition of text, wrapped around the simple enjoyment of a true childhood story.',
    },
    {
      image: 'assets/img/web_3.webp',
      imagePosition: 'center top',
      alt: 'Miss Lisa with a young boy holding stuffed animals and a copy of Josie and the Toad',
      title: 'Every child can learn to read',
      body: 'Miss Lisa is motivated by intervention specialists all over the world who cannot help but believe that all children can learn to read.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------
   Booking form options
   ------------------------------------------------------------------------- */
export const EVENT_TYPES = [
  'School assembly',
  'Classroom or intervention group',
  'Library story time',
  'Community event or festival',
  'Book signing',
  'Something else',
] as const;
