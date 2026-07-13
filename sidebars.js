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
        { type: 'doc', id: 'tutorial-hierarchy', label: 'Hierarchy Tool' },
      ],
    },
    {
      type: 'category',
      label: 'Learning Modules',
      link: { type: 'doc', id: 'modules' },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Introduction to anxiety',
          link: { type: 'doc', id: 'intro-anxiety' },
          collapsed: true,
          items: [
            { type: 'doc', id: 'gad', label: 'Generalized Anxiety Disorder' },
            { type: 'doc', id: 'panic-disorder', label: 'Panic Disorder' },
            { type: 'doc', id: 'social-anxiety', label: 'Social Anxiety' },
            { type: 'doc', id: 'ocd', label: 'OCD' },
          ],
        },
        {
          type: 'category',
          label: 'Exposure therapy basics',
          link: { type: 'doc', id: 'intro-exposure' },
          collapsed: true,
          items: [
            { type: 'doc', id: 'exposure-therapy', label: 'What is exposure therapy' },
            { type: 'doc', id: 'creating-hierarchy', label: 'What is an exposure hierarchy' },
            { type: 'doc', id: 'high-quality-exposure', label: 'How do we do exposures' },
            { type: 'doc', id: 'mindfulness-during-exposure', label: 'Mindfulness during exposure' },
            { type: 'doc', id: 'valued-exposures', label: 'Doing valued exposures' },
          ],
        },
        {
          type: 'category',
          label: 'Problem solving',
          link: { type: 'doc', id: 'problem-solving' },
          collapsed: true,
          items: [
            { type: 'doc', id: 'avoidance', label: 'Avoidance' },
            { type: 'doc', id: 'habit-formation', label: 'Habit formation' },
            { type: 'doc', id: 'memory-enhancement', label: 'Memory enhancement' },
            { type: 'doc', id: 'finding-community', label: 'Finding your community' },
            { type: 'doc', id: 'value-of-mistakes', label: 'Value of mistakes' },
            { type: 'doc', id: 'living-with-uncertainty', label: 'Living with uncertainty' },
            { type: 'doc', id: 'helping-loved-one', label: 'Helping a loved one do an exposure' },
            { type: 'doc', id: 'being-uncomfortable', label: 'Being uncomfortable' },
            { type: 'doc', id: 'lacking-motivation', label: 'Lacking motivation' },
            { type: 'doc', id: 'self-care', label: 'Self-care during and after exposures' },
            { type: 'doc', id: 'family-support', label: 'Family member support' },
          ],
        },
      ],
    },
    { type: 'doc', id: 'report', label: 'Report a Bug' },
  ],
};

module.exports = sidebars;
