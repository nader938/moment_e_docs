import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'intro',
    intro: 'Today you will learn 3 things about generalized anxiety disorder',
    items: [
      { label: 'What is GAD', time: '3 min' },
      { label: 'Symptoms of GAD', time: '4.5 min' },
      { label: 'The GAD cycle', time: '2.5 min' },
    ],
    footer: 'About 10 minutes total',
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
  { type: 'transition', text: "Let's start off by learning what GAD is", tint: 'blue' },
  {
    type: 'content',
    title: 'What is generalized anxiety disorder?',
    body: 'Generalized anxiety disorder (GAD) is a type of anxiety disorder that involves ongoing, excessive worry about many different areas of life, such as work, school, health, finances, or family. People with GAD experience a more constant sense of anxiety and worry that can linger throughout the day, making it difficult to relax or feel at ease.',
    video: { label: 'Osmosis from Elsevier', url: 'https://www.youtube.com/watch?v=-4ZH0_XwQnk' },
  },
  { type: 'transition', text: "Let's look at the common symptoms of GAD", tint: 'sky' },
  {
    type: 'symptoms',
    title: 'Common symptoms of GAD',
    body: 'In addition to excessive worry, people with GAD often experience several of the following:',
    items: [
      'Feeling restless or "on edge"',
      'Becoming easily fatigued',
      'Difficulty concentrating or feeling like the mind goes blank',
      'Irritability',
      'Muscle tension',
      'Sleep problems, such as difficulty falling asleep, staying asleep, or restless sleep',
    ],
    prompt: 'These symptoms can make it difficult to work, study, maintain relationships, or enjoy daily activities.',
  },
  { type: 'transition', text: "Now, let's talk about how the GAD cycle works", tint: 'teal' },
  {
    type: 'cycle',
    title: 'The GAD cycle',
    intro: 'GAD maintains itself through a self-sustaining loop. Tap through each step below.',
    steps: [
      { num: 1, label: 'Trigger thought', desc: "A worry pops up about something in daily life, work, health, finances, or family, even when there's no clear danger." },
      { num: 2, label: 'Excessive worry', desc: 'The mind starts spiraling, jumping from one worry to the next, and it feels hard to stop or control.' },
      { num: 3, label: 'Physical tension', desc: 'The ongoing worry keeps your body on alert, leading to muscle tension, restlessness, fatigue, and trouble sleeping.' },
      { num: 4, label: 'Reinforcement', desc: "The mind treats worrying like it's helping you prepare or stay safe, so the pattern of chronic worry continues." },
    ],
  },
  { type: 'transition', text: "Let's recap the 3 things you learned today", tint: 'blue' },
  {
    type: 'recap',
    title: 'Recap',
    items: [
      {
        num: 1,
        title: 'What is GAD',
        body: 'GAD involves persistent, excessive worry about everyday life that is hard to control and lasts most days for six months or more.',
      },
      {
        num: 2,
        title: 'Symptoms of GAD',
        body: 'GAD often comes with restlessness, fatigue, trouble concentrating, irritability, muscle tension, and sleep problems.',
      },
      {
        num: 3,
        title: 'The GAD cycle',
        body: 'Chronic worry keeps the body on alert, and the mind mistakes worrying for helpful preparation, which keeps the cycle going.',
      },
    ],
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Introduction to Anxiety', href: '/moment_e_docs/intro-anxiety' },
      { label: 'Exposure Therapy Basics ›', href: '/moment_e_docs/intro-exposure' },
    ],
  },
];

const topics = [
  { label: 'What is GAD', time: '3 min', startIndex: 3 },
  { label: 'Symptoms of GAD', time: '4.5 min', startIndex: 5 },
  { label: 'The GAD cycle', time: '2.5 min', startIndex: 7 },
];

export default function GADModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-anxiety"
    />
  );
}
