import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Value of Mistakes',
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
  { type: 'transition', text: "Let's start off by learning why mistakes matter", tint: 'forest' },
  {
    type: 'content',
    title: 'Value of Mistakes',
    body: "But I hate making mistakes.\n\nMistakes are how we learn. We learned to walk as toddlers, and years later we might learn quantum mechanics, all through making mistakes along the way. I know that is probably not what you wanted to hear, but we all live with uncertainty in an uncertain world.\n\nEvery day we leave the house, we could get into a car accident, forget something important, or say the wrong thing to a friend. Uncertainty and the chance of making a mistake are simply part of being alive.\n\nSo how do you live with mistakes? We welcome them as learning opportunities.",
  },
  {
    type: 'content',
    title: '1. Examine the Lesson Hidden in the Mistake',
    body: 'The first step to living with mistakes is to look for what they can teach you. Instead of only focusing on what went wrong, ask yourself: what does this show me about what to do differently next time? Every mistake carries a small lesson, and finding it turns the mistake into something useful instead of just something painful.',
  },
  {
    type: 'content',
    title: '2. Examine the Real Cost of the Mistake',
    body: 'Mistakes often feel much bigger in the moment than they really are. Ask yourself what the real, lasting cost of this mistake actually is. Will it matter in a week, a month, or a year? Most mistakes are far less costly than our anxious mind makes them feel, and many can be fixed, learned from, or simply let go.',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Problem Solving', href: '/moment_e_docs/problem-solving' },
      { label: 'Living with Uncertainty ›', href: '/moment_e_docs/living-with-uncertainty' },
    ],
  },
];

const topics = [
  { label: 'Examine the lesson hidden in the mistake', time: '1.5 min', startIndex: 4 },
  { label: 'Examine the real cost of the mistake', time: '1.5 min', startIndex: 5 },
];

export default function ValueOfMistakesModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
