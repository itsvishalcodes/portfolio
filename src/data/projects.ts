import type { IconName } from './site';

export type Project = {
  name: string;
  blurb: string;
  details: string[];
  stack: string[];
  status: 'Live' | 'Building' | 'Shipped' | 'Retired' | 'Open source';
  year: string;
  // Detail page at /projects/<slug>/. Makes the whole card a link.
  slug?: string;
  // External links; the icon defaults to GitHub.
  links?: { label: string; href: string; icon?: IconName }[];
};

export const projects: Project[] = [
  {
    name: 'LPU Re-Touched',
    blurb: 'A faster, friendlier rebuild of my university’s student app.',
    details: [
      'The official app had no public API, so I proxied its traffic with Fiddler, worked out the private endpoints, and rebuilt the student experience in React Native.',
      'Reached 150+ downloads and a 4★ rating from 24 reviews on the Play Store. Rebuilt on Expo in 2026.',
    ],
    stack: ['React Native', 'Expo', 'REST', 'Reverse engineering'],
    status: 'Live',
    year: '2021 · 2026',
    slug: 'lpu-retouched',
    links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.lpuretouched', icon: 'play' }],
  },
  {
    name: 'Slate',
    blurb: 'Split anything, settle on UPI, clean slate.',
    details: [
      'India-first expense splitting that closes the loop other apps leave open: settling the money over UPI inside the flow.',
      'Android-first Flutter app with a Go API. No money touches the server — settlement is a payer-initiated UPI deep link. Phone-number auth via Firebase, copy in English, Hindi and Hinglish.',
    ],
    stack: ['Flutter', 'Dart', 'Go', 'MongoDB', 'Firebase Auth'],
    status: 'Building',
    year: '2026',
  },
  {
    name: 'Resume Builder',
    blurb: 'Markdown in, one-page ATS-safe PDF out.',
    details: [
      'Dependency-free Node script: Markdown → HTML → headless Chrome PDF. Fails the build if the résumé spills past one page, and keeps native list bullets so ATS parsers read the text layer in order.',
    ],
    stack: ['Node.js', 'Headless Chrome', 'Markdown'],
    status: 'Open source',
    year: '2026',
    links: [{ label: 'Source', href: 'https://github.com/itsvishalcodes/Resume-Builder' }],
  },
  {
    name: 'Wordle clone',
    blurb: 'Wordle for Android and iOS, built for a timed eLitmus event.',
    details: ['Six guesses, colored-tile feedback, built with React Native, Expo and TypeScript.'],
    stack: ['React Native', 'Expo', 'TypeScript'],
    status: 'Open source',
    year: '2022',
    links: [{ label: 'Source', href: 'https://github.com/itsvishalcodes/Wordle-eLitmus' }],
  },
  {
    name: 'This portfolio',
    blurb: 'Static, fast, and easy to keep current.',
    details: [
      'Astro with content collections for case studies, Tailwind CSS v4, view transitions, light/dark themes, and a GitHub Actions deploy to GitHub Pages.',
    ],
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    status: 'Live',
    year: '2026',
    links: [{ label: 'Source', href: 'https://github.com/itsvishalcodes/portfolio' }],
  },
];

export const earlier = [
  { name: 'Custom Web Crawler', stack: 'Python', href: 'https://github.com/itsvishalcodes/Custom-Web-Crawler' },
  { name: 'Library Management System', stack: 'C++', href: 'https://github.com/itsvishalcodes/Library-Management-System' },
  { name: 'Blogging site', stack: 'Laravel', href: 'https://github.com/itsvishalcodes/Blogging-site-LaravelProject' },
  { name: 'Competitive coding', stack: 'C++', href: 'https://github.com/itsvishalcodes/Competitive_Coding_Cpp' },
];
