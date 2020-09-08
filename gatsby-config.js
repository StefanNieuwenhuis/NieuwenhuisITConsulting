module.exports = {
  siteMetadata: {
    title: `Freelance Front End Development | Nieuwenhuis IT Consulting`,
    description: `I’m a freelance Front End Developer specializing in React, Angular, Web Components and in building a web interface with better user experiences.`,
    author: 'Stefan Nieuwenhuis',
    keywords: [
      'React',
      'Angular',
      'Web Components',
      'Freelance',
      'Front End',
      'Web Development',
      'Web Design',
    ],
    siteUrl: 'https://stefannieuwenhuis.dev',
    routes: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Services',
        path: '/services/',
      },
      {
        name: 'Blog',
        path: '/blog/',
      },
      {
        name: 'Contact',
        path: '/contact/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
