import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Lacking Motivation',
    subtitle: '10 mins',
    tint: 'forest',
  },
  {
    type: 'choice',
    title: 'How would you like to learn today?',
    subtitle: 'Choose whichever works best for you. Either way takes around 10 minutes.',
    options: [
      { label: 'Step by step', desc: 'I will guide you through each section in order at your own pace' },
      { label: 'Explore freely', desc: 'Pick any topic and explore in whatever order works for you' },
    ],
  },
  {
    type: 'transition',
    text: "Let's explore how motivational interviewing can help you move forward",
    tint: 'forest',
  },
  {
    type: 'content',
    title: 'Motivational Interviewing',
    body: 'Motivational interviewing is a collaborative, goal-oriented approach to helping people find their own reasons to change. It focuses on exploring ambivalence - the feeling of being torn between wanting to change and wanting to stay the same - and strengthening your own motivation.\n\nWatch the videos below to learn more.',
    video: {
      url: 'https://www.youtube.com/watch?v=YIhMsTdZMVM',
      label: 'Motivational Interviewing - Video 1',
    },
  },
  {
    type: 'content',
    title: 'Motivational Interviewing - Continued',
    body: 'This second video dives deeper into motivational interviewing techniques and how they can be applied to your everyday life.',
    video: {
      url: 'https://www.youtube.com/watch?v=DSHh6V9yNzg',
      label: 'Motivational Interviewing - Video 2',
    },
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
  { label: 'Motivational Interviewing', time: '5 min', startIndex: 3 },
  { label: 'Motivational Interviewing - Continued', time: '5 min', startIndex: 4 },
];

export default function LackingMotivationModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
