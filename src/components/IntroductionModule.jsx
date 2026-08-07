import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'intro',
    intro: 'Today you will learn 4 things about getting started with moment_e',
    items: [
      { label: 'Welcome to the app', time: '2 min' },
      { label: 'What is a challenge hierarchy', time: '3.5 min' },
      { label: 'How to create, modify, and rate a hierarchy with and without AI', time: '4.5 min' },
      { label: 'What is the goal of an exposure and how to reach it using the CEQI tool', time: '4.5 min' },
    ],
    footer: 'About 15 minutes total',
  },
  {
    type: 'choice',
    title: 'How would you like to learn today?',
    subtitle: 'Choose whichever works best for you. Either way takes around 15 minutes.',
    options: [
      { label: 'Step by step', desc: 'I will guide you through each section in order at your own pace' },
      { label: 'Explore freely', desc: 'Pick any topic and explore in whatever order works for you' },
    ],
  },
];

const topics = [];

export default function IntroductionModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/modules"
    />
  );
}
