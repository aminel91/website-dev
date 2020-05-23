const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Amine Laarej',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Amine Laarej',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Amine Laarej',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Amine Laarej',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Amine Laarej',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
