// Single source of truth for profile details. Edit here, not in components.

export const site = {
  name: 'Vishal Tiwari',
  shortName: 'Vishal',
  role: 'Full-Stack Software Engineer',
  company: 'Optmyzr',
  location: 'Gurgaon, India',
  email: 'itsvishalcodes@gmail.com',
  url: 'https://portfolio.itsvishalcodes.com',
  // Put a PDF in /public and set e.g. '/Vishal-Tiwari-Resume.pdf' to show a Résumé button.
  resumeUrl: '',
  description:
    'Vishal Tiwari — full-stack software engineer. 4+ years building Optmyzr’s PPC optimization platform with React/Redux, C#/.NET and PHP across the Google, Microsoft, Meta, LinkedIn and Amazon Ads APIs.',
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
  { value: '4+', label: 'years at Optmyzr', note: 'intern → SDE' },
  { value: '1,750+', label: 'commits shipped', note: 'non-merge, May 2022 → now' },
  { value: '36', label: 'epics owned', note: 'across search & social' },
  { value: '475+', label: 'Jira issues resolved', note: 'of 620+ assigned since late 2024' },
  { value: '5', label: 'ad platform APIs', note: 'Google · Microsoft · Meta · LinkedIn · Amazon' },
  { value: '10.8 TB', label: 'S3 storage reclaimed', note: 'via lifecycle expiry' },
];

export const platforms = ['Google Ads', 'Microsoft Advertising', 'Meta (Facebook & Instagram)', 'LinkedIn Ads', 'Amazon Ads'];

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];
