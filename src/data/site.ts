// Single source of truth for profile details. Edit here, not in components.

export const site = {
  name: 'Vishal Tiwari',
  shortName: 'Vishal',
  role: 'Software Engineer',
  focus: 'Backend · Distributed systems · Frontend',
  company: 'Optmyzr',
  location: 'Gurgaon, India',
  email: 'itsvishalcodes@gmail.com',
  url: 'https://portfolio.itsvishalcodes.com',
  // Put a PDF in /public and set e.g. '/Vishal-Tiwari-Resume.pdf' to show a Résumé button.
  resumeUrl: '',
  description:
    'Vishal Tiwari — software engineer with 4+ years building production systems end to end: fault-tolerant backend pipelines, async workflows over third-party APIs, and large React applications. C#/.NET, TypeScript, React, Redis, AWS.',
};

export type Social = { label: string; href: string; handle: string; icon: IconName };
export type IconName = 'github' | 'linkedin' | 'leetcode' | 'mail' | 'arrow' | 'external' | 'sun' | 'moon' | 'copy' | 'check' | 'menu' | 'close' | 'pin' | 'back';

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/itsvishalcodes', handle: '@itsvishalcodes', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/itsvishalcodes', handle: 'in/itsvishalcodes', icon: 'linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/itsvishalcodes/', handle: '@itsvishalcodes', icon: 'leetcode' },
  { label: 'Email', href: 'mailto:itsvishalcodes@gmail.com', handle: 'itsvishalcodes@gmail.com', icon: 'mail' },
];

export const stats = [
  { value: '4+', label: 'years in production engineering', note: 'Apr 2022 → now' },
  { value: '36', label: 'epics owned', note: 'design doc → launch → on-call' },
  { value: '1,000+', label: 'B2B customers on systems I built', note: 'multi-tenant SaaS' },
  { value: '5×', label: 'usage growth', note: 'on a product I built 0 → 1' },
  { value: '10.8 TB', label: 'cloud storage cut', note: 'S3 lifecycle redesign' },
  { value: '1,750+', label: 'commits to production', note: 'non-merge, across 4 stacks' },
];

// Third-party platforms integrated in production (shown as context, not identity).
export const platforms = ['Google Ads', 'Microsoft Advertising', 'Meta', 'LinkedIn', 'Amazon Ads'];

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];
