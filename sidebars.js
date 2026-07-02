/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    { type: 'doc', id: 'intro', label: 'Home' },
    { type: 'doc', id: 'install', label: 'Install the App' },
    {
      type: 'category',
      label: 'App Tutorial Videos',
      link: { type: 'doc', id: 'using' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'tutorial-setup', label: 'Set Up' },
        { type: 'doc', id: 'tutorial-cognitive', label: 'Cognitive Tasks' },
        { type: 'doc', id: 'tutorial-graphing', label: 'Graphing' },
        { type: 'doc', id: 'tutorial-questionnaires', label: 'Questionnaires' },
      ],
    },
    {
      type: 'category',
      label: 'Learning Modules',
      link: { type: 'doc', id: 'modules' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'intro-anxiety', label: 'Introduction to anxiety' },
        { type: 'doc', id: 'intro-exposure', label: 'Exposure therapy basics' },
        { type: 'doc', id: 'creating-hierarchy', label: 'Creating a hierarchy' },
        { type: 'doc', id: 'high-quality-exposure', label: 'High quality exposures' },
        { type: 'doc', id: 'problem-solving', label: 'Problem solving' },
      ],
    },
    { type: 'doc', id: 'report', label: 'Report a Bug' },
  ],
};

module.exports = sidebars;
