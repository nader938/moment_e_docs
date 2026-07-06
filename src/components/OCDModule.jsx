import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'intro',
    intro: 'Today you will learn 3 things about OCD',
    items: [
      { label: 'What is OCD', time: '3 min' },
      { label: 'Symptoms of OCD', time: '4.5 min' },
      { label: 'The OCD cycle', time: '2.5 min' },
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
  { type: 'transition', text: "Let's start off by learning what OCD is", tint: 'blue' },
  {
    type: 'components',
    title: 'What is OCD?',
    body: "Below you will read about obsessions and compulsions, and watch a video about the central role of uncertainty in OCD.\n\nObsessive-compulsive disorder (OCD) is a mental health disorder that affects approximately 2% of the world's population. There are two key features of OCD.",
    listTitle: 'The two key features of OCD',
    items: [
      {
        num: 1,
        label: 'Obsessions',
        desc: 'unwanted, intrusive thoughts, images, or urges that trigger intense distress -- anxiety, doubt, disgust, or discomfort when something seems not just right. Note that the clinical definition of an obsession is different from the colloquial meaning, a preoccupation that could be a positive or negative state of mind.',
      },
      {
        num: 2,
        label: 'Compulsions',
        desc: 'mental activity, physical behaviors, or avoidance that the person engages in to try to decrease the distress caused by the obsessions.',
      },
    ],
  },
  {
    type: 'content',
    title: 'When does it become OCD?',
    body: 'Almost everyone has had the experience of obsessions and compulsions, but for a diagnosis of OCD, the cycle of obsessions and compulsions is so relentless that it takes up a lot of time, attention, and energy, and gets in the way of meaningful activities.\n\nDifficulty tolerating uncertainty is a central feature of OCD. It encompasses both the need for predictability and paralyzing doubt.',
  },
  {
    type: 'content',
    title: 'Watch: Uncertainty in OCD',
    body: 'A closer look at the central role of uncertainty in OCD.',
    video: { label: 'Mindset Family Therapy', url: 'https://www.youtube.com/watch?v=hIUkN59EtQo' },
  },
  {
    type: 'link-out',
    title: 'Learn more',
    body: 'For more detailed information on OCD obsessions and compulsions, see:',
    linkLabel: 'iocdf.org/about-ocd',
    linkHref: 'https://iocdf.org/about-ocd/',
  },
  { type: 'transition', text: "Now, let's talk about how the OCD cycle works", tint: 'teal' },
  {
    type: 'cycle',
    title: 'The OCD cycle',
    intro: 'OCD maintains itself through a self-sustaining loop. Tap through each step below.',
    steps: [
      { num: 1, label: 'Trigger', desc: 'An intrusive thought, image, or urge shows up, often about something feeling wrong, dangerous, or uncertain.' },
      { num: 2, label: 'Obsession & distress', desc: 'The thought creates intense anxiety, doubt, disgust, or discomfort that feels urgent and hard to ignore.' },
      { num: 3, label: 'Compulsion', desc: 'You perform a mental or physical ritual, or avoid the situation, to try to make the distress go away.' },
      { num: 4, label: 'Reinforcement', desc: 'The relief is only temporary, but it teaches your brain the obsession was truly dangerous, so the cycle starts again, often stronger.' },
    ],
  },
  { type: 'transition', text: "Let's recap the 3 things you learned today", tint: 'blue' },
  {
    type: 'recap',
    title: 'Recap',
    items: [
      {
        num: 1,
        title: 'What is OCD',
        body: 'OCD is a mental health disorder affecting about 2% of people, built on a repeating cycle of obsessions and compulsions.',
      },
      {
        num: 2,
        title: 'Obsessions and compulsions',
        body: 'Obsessions are intrusive, distressing thoughts, images, or urges. Compulsions are the mental or physical actions used to relieve that distress.',
      },
      {
        num: 3,
        title: 'The OCD cycle',
        body: 'Compulsions bring short-term relief, but they teach the brain the obsession was dangerous, making the cycle stronger over time.',
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
  { label: 'What is OCD', time: '3 min', startIndex: 3 },
  { label: 'Symptoms of OCD', time: '4.5 min', startIndex: 3 },
  { label: 'The OCD cycle', time: '2.5 min', startIndex: 8 },
];

export default function OCDModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-anxiety"
    />
  );
}
