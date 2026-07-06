import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'How do we do exposures?',
    subtitle: '5 mins',
  },
  {
    type: 'choice',
    title: 'How would you like to learn today?',
    subtitle: 'Choose whichever works best for you. Either way takes around 5 minutes.',
    options: [
      { label: 'Step by step', desc: 'I will guide you through each section in order at your own pace' },
      { label: 'Explore freely', desc: 'Pick any topic and explore in whatever order works for you' },
    ],
  },
  { type: 'transition', text: "Let's take a look at how to do exposures well", tint: 'blue' },
  {
    type: 'content',
    title: 'Watch: How to Do Exposures',
    body: 'This video covers common mistakes people make during exposures and how to do them well.',
    video: { label: 'OCD and Anxiety', url: 'https://www.youtube.com/watch?v=K2VGYeTCMJM' },
  },
  { type: 'transition', text: "Let's recap what you learned today", tint: 'blue' },
  {
    type: 'recap',
    title: 'Recap',
    items: [
      {
        num: 1,
        title: 'How to do exposures well',
        body: 'A good exposure means fully facing the situation without relying on safety behaviors, reassurance, or subtle avoidance that quietly reduce the challenge.',
      },
    ],
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Exposure Therapy Basics', href: '/moment_e_docs/intro-exposure' },
      { label: 'Problem Solving ›', href: '/moment_e_docs/problem-solving' },
    ],
  },
];

const topics = [
  { label: 'How to do exposures well', time: '5 min', startIndex: 3 },
];

export default function HighQualityExposureModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-exposure"
    />
  );
}
