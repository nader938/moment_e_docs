/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    { type: 'doc', id: 'intro', label: 'Home' },
    { type: 'doc', id: 'about', label: 'About' },
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: ['install', 'using'],
    },
    { type: 'doc', id: 'screens', label: 'App Screens' },
    { type: 'doc', id: 'report', label: 'Report a Bug' },
  ],
};

module.exports = sidebars;
