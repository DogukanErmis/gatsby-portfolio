import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dogukan Ermis - Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Crafting user-friendly interfaces with an emphasis on performance and security. Worked on Luxembourg&apos;s most popular websites.',
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Dogukan Ermis',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'favicon1.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/dogukan-ermis/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'athome1.png',
    title: 'atHome',
    info: 'Bug fixes and improvement of the most popular real estate portal in Luxembourg and Greater Region.',
    info2: 'ReactJS, Redux, JavaScript, TypeScript',
    url: 'https://www.athome.lu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'luxauto1.png',
    title: 'Luxauto',
    info: 'Development of the new user profile page and the new vehicle publishing feature leading to a 30% increase in revenue for the brand.',
    info2: 'JavaScript, PHP, SQL',
    url: 'https://www.luxauto.lu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'athomefinance1.png',
    title: 'atHome Finance',
    info: 'Creation of several automation tools for the finance department.',
    info2: 'ReactJS, PHP',
    url: 'https://www.athome.lu/en/finance/mortgage',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'info@dogukanermis.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dogukan-ermis/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dogukanermis/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:info@dogukanermis.com',
    },
  ],
};
