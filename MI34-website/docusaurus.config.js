// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Motion Input Bluetooth Controller',
  tagline: 'Bring MotionInput to Android and transform your smartphone into a Bluetooth controller, revolutionizing the way you interact with your devices. Effortlessly control your smart TV, laptop, or tablet with intuitive motion gestures.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UCL Team 23', // Usually your GitHub org/user name.
  projectName: 'MotionInput Bluetooth Controller', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MotionInput Bluetooth Controller',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'requirementsSidebar',
            position: 'left',
            label: 'Requirements',
          },
          {
            type: 'docSidebar',
            sidebarId: 'algorithmsSidebar',
            position: 'left',
            label: 'Algorithms',
          },
          {
            type: 'docSidebar',
            sidebarId: 'uiDesignSidebar',
            position: 'left',
            label: 'UI Design',
          },
          {
            type: 'docSidebar',
            sidebarId: 'systemSidebar',
            position: 'left',
            label: 'System Design',
          },
          {
            type: 'docSidebar',
            sidebarId: 'implementationSidebar',
            position: 'left',
            label: 'Implementation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'testingSidebar',
            position: 'left',
            label: 'Testing',
          },
          {
            type: 'docSidebar',
            sidebarId: 'evaluationSidebar',
            position: 'left',
            label: 'Evaluation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'appendicesSidebar',
            position: 'left',
            label: 'Appendices',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/robbiebmorris/comp0016-MI34-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Info',
          },
          {
            title: 'Quick Navigation',
            items: [
              {
                label: 'Requirements',
                to: '/docs/requirements/requirements-home',
              },
              {
                label: 'Algorithms',
                to: '/docs/algorithms/algorithms-home'
              },
              {
                label: 'UI Design',
                to: 'docs/ui-design/ui-design-home'
              },
              {
                label: 'System Design',
                to: 'docs/system-design/system-design-home'
              },
              {
                label: 'Implementation',
                to: 'docs/implementation/implementation-home'
              },
              {
                label: 'Testing',
                to: 'docs/testing/testing-home'
              },
              {
                label: 'Evaluation',
                to: 'docs/evaluation/evaluation-home'
              },
              {
                label: 'Appendices',
                to: 'docs/appendices/user-manual'
              },
              {
                label: 'Blog',
                to: '/blog'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Project Github',
                href: 'https://github.com/Ulk-G/COMP0016-Group23-App',
              },
              {
                label: 'Website Github',
                href: 'https://github.com/robbiebmorris/comp0016-MI34-website',
              },
              {
                label: 'UCL',
                href: 'https://www.ucl.ac.uk/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
