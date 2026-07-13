import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Self-Care During and After Exposures',
    subtitle: '4 mins',
    tint: 'forest',
  },
  {
    type: 'choice',
    title: 'How would you like to learn today?',
    subtitle: 'Choose whichever works best for you. Either way takes around 4 minutes.',
    options: [
      { label: 'Step by step', desc: 'I will guide you through each section in order at your own pace' },
      { label: 'Explore freely', desc: 'Pick any topic and explore in whatever order works for you' },
    ],
  },
  {
    type: 'transition',
    text: "Let's explore the habits that help you get the most out of treatment",
    tint: 'forest',
  },
  {
    type: 'content',
    title: 'Psychological Hygiene',
    body: 'Most mental health experts recommend paying attention to psychological hygiene. This consists of habits that give us balance in our day-to-day lives. It also enables us to get the most out of treatment and to maintain our treatment gains.',
  },
  {
    type: 'content',
    title: 'Attend to Basic Needs',
    body: 'Eat well and regularly. Stay hydrated.\n\nTry to get 7–9 hours of sleep every night.',
  },
  {
    type: 'content',
    title: 'Exercise Regularly',
    body: 'Physical exercise not only helps us with physical health but also with regulating our emotions.\n\nSee what the CDC recommends: Physical Activity Guidelines for Americans.',
  },
  {
    type: 'content',
    title: 'Socialize',
    body: 'OCD tends to not only isolate us but also to breed in isolation, thereby creating a problematic cycle. To prevent this cycle, we must interact with others on a consistent basis for enjoyment and/or mutual support.',
  },
  {
    type: 'content',
    title: 'Set Achievable Goals',
    body: 'In order to stay motivated during treatment and even after treatment to prevent relapse, we need to manage our expectations and those of others. If we set goals that are too ambitious, we risk getting discouraged.',
  },
  {
    type: 'content',
    title: 'Stay Consistent, Not Rigid',
    body: 'As you take charge of treating OCD, be sure to follow these psychological hygiene habits consistently, but not rigidly.',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Problem Solving', href: '/moment_e_docs/problem-solving' },
    ],
  },
];

const topics = [
  { label: 'Psychological Hygiene', time: '1 min', startIndex: 3 },
  { label: 'Attend to basic needs', time: '0.5 min', startIndex: 4 },
  { label: 'Exercise regularly', time: '0.5 min', startIndex: 5 },
  { label: 'Socialize', time: '0.5 min', startIndex: 6 },
  { label: 'Set achievable goals', time: '0.5 min', startIndex: 7 },
  { label: 'Stay consistent, not rigid', time: '0.5 min', startIndex: 8 },
];

export default function SelfCareModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
