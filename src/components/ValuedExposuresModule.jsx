import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Doing Valued Exposures',
    subtitle: '4 mins',
    tint: 'teal',
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
    text: "Let's explore what is your \"why\" for trying exposures",
    tint: 'teal',
  },
  {
    type: 'content',
    title: 'What is Your "Why"?',
    body: 'Everyone has a reason for why they are trying out exposure. For some people it is being able to go to the grocery store without dread, or sitting through a meeting without your heart racing, being present for your kids, reconnecting with friends you have been avoiding, or getting back to activities you used to love.\n\nYour "why" is personal. It does not have to be dramatic or profound. It just has to be real to you.\n\nWhen treatment feels hard (and sometimes it will) your "why" is what you come back to. It is the reason you keep showing up, keep doing the exposures, even when it is hard.',
  },
  {
    type: 'content',
    title: 'Finding your "why"',
    body: 'Take a moment to think about what has brought you here. Ask yourself:\n\nThere are no right or wrong answers. Your "why" might be a person, a feeling, a goal, or just a version of yourself you want to get back to.',
    questions: [
      'What would my life look like if anxiety was not holding me back?',
      'What activities or relationships have I pulled away from because of anxiety?',
      'Who or what am I doing this for?',
    ],
  },
  {
    type: 'content',
    title: 'Make your "why" specific',
    body: 'Once you have identified your "why," write it down. Take a photo of it if you can. The more specific it is, the more it will mean to you when things get hard.',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Exposure Therapy Basics', href: '/moment_e_docs/intro-exposure' },
    ],
  },
];

const topics = [
  { label: 'What is your "why"?', time: '1.5 min', startIndex: 3 },
  { label: 'Finding your "why"', time: '1.5 min', startIndex: 4 },
  { label: 'Make your "why" specific', time: '1 min', startIndex: 5 },
];

export default function ValuedExposuresModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-exposure"
    />
  );
}
