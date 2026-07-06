import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Living with Uncertainty',
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
  { type: 'transition', text: "Let's start off by learning why uncertainty is unavoidable", tint: 'forest' },
  {
    type: 'content',
    title: 'Living with Uncertainty',
    body: "I'm already feeling anxious, and you are telling me that what I am afraid of might actually happen?\n\nIn a word, yes. I know that is probably not what you wanted to hear, but we all live with uncertainty in an uncertain world. Every day we leave the house, we could get into a car accident, get stuck in traffic, or run into someone we'd rather avoid. Uncertainty is simply part of being alive, no matter how much we might wish it weren't.\n\nSo how do you live with uncertainty? This can feel overwhelming at first, but let's break it into steps:",
  },
  {
    type: 'content',
    title: '1. Examine the Probability of the Bad Outcome',
    body: 'The first step to living with uncertainty is to look honestly at how likely the feared outcome actually is. Our anxious mind often treats a small chance as if it were a sure thing. Ask yourself: how often does this actually happen, compared to how much I worry about it?',
  },
  {
    type: 'content',
    title: '2. Examine the Cost of Being Certain to Be Safe',
    body: 'Trying to reach total certainty before feeling safe usually means avoiding, checking, or seeking reassurance over and over. That costs time, energy, and freedom, often far more than simply accepting some uncertainty and moving forward with your day.',
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
  { label: 'Examine the probability of the bad outcome', time: '1.5 min', startIndex: 4 },
  { label: 'Examine the cost of being certain to be safe', time: '1.5 min', startIndex: 5 },
];

export default function LivingWithUncertaintyModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
