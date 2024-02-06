// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MotionInput Bluetooth Controller',
  tagline: 'Bring MotionInput to Android and transform your smartphone into a Bluetooth controller, revolutionizing the way you interact with your devices. Effortlessly control your smart TV, laptop, or tablet with intuitive motion gestures.',
  favicon: 'img/motioninputlogo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/2023/group23/',

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
      image: 'img/motioninputlogo.png',
      navbar: {
        title: 'MotionInput Bluetooth Controller',
        logo: {
          alt: 'Site Logo',
          src: 'img/motioninputlogo.png',
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
            sidebarId: 'researchSidebar',
            position: 'left',
            label: 'Research',
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
            title: 'Quick Navigation',
            items: [
              {
                label: 'Requirements',
                to: '/docs/requirements/requirements-home',
              },
              {
                label: 'Research',
                to: '/docs/research/research-home',
              },
              {
                label: 'UI Design',
                to: 'docs/ui-design/ui-design-home'
              },
              {
                label: 'System Design',
                to: 'docs/system-design/system-architecture'
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
                label: 'Development Blog',
                to: '/blog'
              }
            ],
          },
          {
            title: 'Appendices',
            items: [
              {
                label: 'User Manual',
                to: 'docs/appendices/user-manual'
              },
              {
                label: 'Deployment Manual',
                to: 'docs/appendices/deployment-manual'
              },
              {
                label: 'GDPR',
                to: 'docs/appendices/GDPR'
              },
              {
                label: 'Data Privacy',
                to: 'docs/appendices/privacy-of-data'
              },
              {
                label: 'Monthly Videos',
                to: 'docs/appendices/monthly-video'
              },
            ]
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
