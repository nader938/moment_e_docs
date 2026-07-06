import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'intro',
    intro: 'Today you will learn 3 things about panic disorder',
    items: [
      { label: 'What is panic disorder', time: '3 min' },
      { label: 'Symptoms of a panic attack', time: '4.5 min' },
      { label: 'The panic cycle', time: '2.5 min' },
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
  { type: 'transition', text: "Let's start off by learning what panic disorder is", tint: 'blue' },
  {
    type: 'content',
    title: 'What is panic disorder?',
    body: 'Panic disorder is an anxiety disorder in which a person experiences recurrent, unexpected panic attacks and develops an ongoing fear of having more attacks. This fear may lead them to avoid places or situations where they think an attack could occur, interfering with daily life.',
  },
  { type: 'transition', text: "Let's look at what a panic attack can feel like", tint: 'sky' },
  {
    type: 'symptoms',
    title: 'What is a panic attack?',
    body: 'A panic attack is a sudden episode of intense fear or discomfort that usually peaks within about 10 minutes, although some symptoms may last longer. Symptoms can include:',
    items: [
      'Racing heartbeat',
      'Feeling faint or dizzy',
      'Sweating',
      'Nausea or a churning stomach',
      'Chest pain',
      'Shortness of breath',
      'Trembling or shaky limbs',
      'Hot flushes or chills',
      'A choking sensation',
      'Numbness, pins and needles, or tingling',
      'Dry mouth',
      'A feeling of dread or fear of dying',
      'Feeling disconnected from your body',
    ],
    prompt: 'Take a moment. Have you experienced some or all of these during a panic attack?',
  },
  {
    type: 'content',
    title: 'Watch: Panic Disorder and Panic Attacks',
    body: 'A closer look at the causes, symptoms, diagnosis, and treatment of panic disorder.',
    video: { label: 'Osmosis from Elsevier', url: 'https://www.youtube.com/watch?v=YxELZyA2bJs' },
  },
  { type: 'transition', text: "Now, let's talk about how the panic cycle works", tint: 'teal' },
  {
    type: 'cycle',
    title: 'The panic cycle',
    intro: 'Panic disorder maintains itself through a self-sustaining loop. Tap through each step below.',
    steps: [
      { num: 1, label: 'A panic attack occurs', desc: 'A panic attack happens, often suddenly and without a clear reason, bringing on intense physical and mental symptoms.' },
      { num: 2, label: 'Fear of another attack', desc: 'Afraid of it happening again, you start to avoid situations or places where you fear another attack might strike.' },
      { num: 3, label: 'Living in fear of fear', desc: 'Avoiding those situations creates a cycle of living in fear of fear itself, not just of the original trigger.' },
      { num: 4, label: 'The cycle grows', desc: 'This fear of fear adds to your overall sense of panic, and can actually make future attacks more likely.' },
    ],
  },
  { type: 'transition', text: "Let's recap the 3 things you learned today", tint: 'blue' },
  {
    type: 'recap',
    title: 'Recap',
    items: [
      {
        num: 1,
        title: 'What is panic disorder',
        body: 'Panic is the most severe form of anxiety, and a panic attack brings a sudden rush of intense physical and mental symptoms.',
      },
      {
        num: 2,
        title: 'Symptoms of a panic attack',
        body: 'Panic attacks can cause a racing heart, shortness of breath, dizziness, and many other physical sensations, usually lasting 5 to 20 minutes.',
      },
      {
        num: 3,
        title: 'The panic cycle',
        body: 'Avoiding feared situations can create a cycle of living in fear of fear, which adds to your sense of panic over time.',
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
  { label: 'What is panic disorder', time: '3 min', startIndex: 3 },
  { label: 'Symptoms of a panic attack', time: '4.5 min', startIndex: 5 },
  { label: 'The panic cycle', time: '2.5 min', startIndex: 8 },
];

export default function PanicDisorderModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-anxiety"
    />
  );
}
