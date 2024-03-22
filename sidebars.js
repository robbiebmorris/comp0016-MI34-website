/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  //requirementsSidebar: [
  //  {
  //    type: 'category',
  //    label: 'Requirements',
  //    items: ['requirements/requirements-home', 'requirements/gathering-requirements', 'requirements/personas', 'requirements/moscow'],
  //  },
  //],

  //researchSidebar: [
  //  {
  //    type: 'category',
  //    label: 'Research',
  //    items: ['research/project-research', 'research/technology-research'],
  //  },
  //],

  //uiDesignSidebar: [
  //  {
  //    type: 'category',
  //    label: 'UI Design',
  //    items: ['ui-design/design-principles', 'ui-design/sketches', 'ui-design/final-wireframe'],
  //  },
  //],

  //systemSidebar: [
  //  {
  //    type: 'category',
  //    label: 'System Design',
  //    items: ['system-design/system-architecture','system-design/backend-architecture','system-design/design-goals'],
  //  },
  //],

//  implementationSidebar: [
//    {
//      type: 'category',
//      label: 'Implementation',
//      items: ['implementation/implementation-home'],
//    },
//  ],

//  testingSidebar: [
//    {
//      type: 'category',
//      label: 'Testing',
//      items: ['testing/testing-home'],
//    },
//  ],

//  evaluationSidebar: [
//    {
//      type: 'category',
//      label: 'Evaluation',
//      items: ['evaluation/evaluation-home'],
//    //   className: 'hidden'
//    },
//  ],

  appendicesSidebar: [
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendices/user-manual',
        'appendices/deployment-manual',
        'appendices/GDPR',
        'appendices/privacy-of-data',
        'appendices/monthly-video'
      ],
    },
  ],
};

export default sidebars;
