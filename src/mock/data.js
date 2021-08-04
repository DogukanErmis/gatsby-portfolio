import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dogukan Ermis - Web Application Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Dogukan Ermis, Web application developer based in Belgium - Personal Website and Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Dogukan Ermis',
  subtitle: 'Web Application Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'myAvatar.png',
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
    title: 'atHome.lu',
    info: '',
    info2: '',
    url: 'https://www.athome.lu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'luxauto1.png',
    title: 'Luxauto.lu',
    info: '',
    info2: '',
    url: 'https://www.luxauto.lu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'athomefinance1.png',
    title: 'atHome Finance',
    info: '',
    info2: '',
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
