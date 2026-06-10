// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'moment·e',
  tagline: 'Research-grade EMA, built for the real world',
  favicon: 'img/favicon.ico',

  url: 'https://nader938.github.io',
  baseUrl: '/moment_e_docs/',

  organizationName: 'nader938',
  projectName: 'moment_e_docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'moment·e',
        items: [
          { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
          {
            to: '/report',
            label: 'Report a Bug',
            position: 'right',
          },
          {
            href: 'https://github.com/nader938/moment_e_issues',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'v13_04',
        content: '🎉 moment·e v13.04 is live on iOS and Android — <a href="/moment_e_docs/about#version-history">See what\'s new</a>',
        backgroundColor: '#1b1b1d',
        textColor: '#ffffffcc',
        isCloseable: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'About', to: '/about' },
              { label: 'Install', to: '/install' },
              { label: 'Using the App', to: '/using' },
              { label: 'App Screens', to: '/screens' },
            ],
          },
          {
            title: 'Platform',
            items: [
              { label: 'iOS Guide', to: '/install#ios-installation' },
              { label: 'Android Guide', to: '/install#android-installation' },
              { label: 'Requirements', to: '/install#requirements' },
              { label: 'Version History', to: '/about#version-history' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub Issues', href: 'https://github.com/nader938/moment_e_issues' },
              { label: 'Report a Bug', to: '/report' },
              { label: 'The Team', to: '/about#the-team' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} CUTA Lab, San Diego State University · moment·e v13.04`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
