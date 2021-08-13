import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dogukan Ermis - Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Crafting user-friendly interfaces with an emphasis on performance and security. Two years of experience in web development working on Luxembourg&apos;s most popular websites.',
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
    info: 'The no. 1 real estate portal in Luxembourg and Greater Region. Adverts for houses, apartments, offices.',
    info2: 'ReactJS, Redux, JavaScript, TypeScript',
    url: 'https://www.athome.lu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'luxauto1.png',
    title: 'Luxauto',
    info: 'Purchase and sale of used cars in Luxembourg, France, Belgium and Germany. Adverts for cars, vehicles, motorbikes.',
    info2: 'JavaScript, PHP, SQL',
    url: 'https://www.luxauto.lu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'athomefinance1.png',
    title: 'atHome Finance',
    info: 'atHomeFinance helps you to find the best home loan at a great rate.',
    info2: 'React, PHP',
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

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
