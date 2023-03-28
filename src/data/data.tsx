import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

const BIRTH_DATE = '09/27/1989';
const START_WORK_DATE = '06/01/2011';
const getAge = (date: string): number => {
  const birthDate = new Date(date);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Radu Anastase Resume',
  description: "This is my CV as a React site",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Radu Anastase`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Romania based <strong className="text-stone-100">Frontend Software Engineer</strong>, with {getAge(START_WORK_DATE)}+ years of experience,
        helping companies design and create high quality software solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me creating Bible games for children for <strong>FunBible.net</strong>,
        reading <strong className="text-stone-100">comic books</strong>,
        playing some <strong className="text-stone-100">ping pong</strong>, or almost dying from <strong>CrossFit</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a proud father of two, dedicated to create a positive impact in the world. I'm curious about new tech
  and always eager to learn new things. I'm fond of React + TypeScript combination, but I do my best to find the best tech stack for each project.`,
  aboutItems: [
    {label: 'Location', text: 'Brasov, Romania', Icon: MapIcon},
    {label: 'Age', text: String(getAge(BIRTH_DATE)), Icon: CalendarIcon},
    {label: 'Nationality', text: 'Romanian', Icon: FlagIcon},
    {label: 'Interests', text: 'Education, comic books, ping pong', Icon: SparklesIcon},
    {label: 'Study', text: 'Polytechnic University of Bucharest', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Full time contractor', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'TypeScript',
        level: 7,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Angular',
        level: 8,
      },
      {
        name: 'Redux',
        level: 7,
      },
      {
        name: 'RxJs',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 4,
      }
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Romanian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FunBible.net',
    description: 'This project was created right in the midst of the pandemic to help parents and children find activities and games on biblical themes.',
    url: 'https://funbible.net',
    image: porfolioImage1,
  },
  {
    title: 'AskData.com',
    description: 'Askdata is the first platform that makes data interaction frictionless.',
    url: 'https://askdata.com',
    image: porfolioImage2,
  },
  {
    title: 'Farmers Business Network',
    description: 'FBN helps Family Farmers maximize their profit potential with data and technology, direct-to-farm commerce, community and a sustainability platform.',
    url: 'https://fbn.com',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2012',
    location: 'Polytechnic University of Bucharest',
    title: 'Bachelor\'s Degree in Automation and Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mircea Dinoiu',
      text: 'I\'ve been working with Radu for several years now. Overall it was one of the most productive professional relationships I had.\n' +
          'His maturity, responsibility for every day work and attention to deliver a great product rather than a good product are rare skills that he developed in a pretty impressing way.\n' +
          'He can overcome any technical challenge and is open to changes and to futuristic solutions.\n' +
          'Radu is a keeper!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Octavian Lelescu',
      text: 'I worked with Radu in the same development team at Softvision and it was a pleasure to work with him. \n' +
          'Besides being a joy to work with, Radu is a take-charge person who is able to present creative ideas and communicate the benefits. \n' +
          'For these reasons, and many others, I highly recommend Radu and would make a great asset to any organization.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'raduanastasedev@gmail.com',
      href: 'mailto:raduanastasedev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Brasov, Romania',
      href: 'https://goo.gl/maps/pNMTtu9EppCwvveT7',
    },
    {
      type: ContactType.Instagram,
      text: '@radu_anastase',
      href: 'https://www.instagram.com/radu_anastase/',
    },
    {
      type: ContactType.Github,
      text: 'raduanastase',
      href: 'https://github.com/raduanastase',
    },
    {
      type: ContactType.Twitter,
      text: 'radu_anastase',
      href: 'https://twitter.com/radu_anastase',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/raduanastase'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/2806832/raduanastase'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/raduanastase/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/radu_anastase/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/radu_anastase'},
];
