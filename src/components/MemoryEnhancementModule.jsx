import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'How to Enhance Memory',
    subtitle: '6 mins',
    tint: 'forest',
  },
  {
    type: 'choice',
    title: 'How would you like to learn today?',
    subtitle: 'Choose whichever works best for you. Either way takes around 6 minutes.',
    options: [
      { label: 'Step by step', desc: 'I will guide you through each section in order at your own pace' },
      { label: 'Explore freely', desc: 'Pick any topic and explore in whatever order works for you' },
    ],
  },
  { type: 'transition', text: "Let's start off by learning why memory matters", tint: 'forest' },
  {
    type: 'content',
    title: 'How to Enhance Memory',
    body: 'We rely on our memory every day, whether we’re trying to remember someone’s name, keep track of a to-do list, or apply something we’ve learned in the past. For instance, in this program, you’re seeing new information, and in order for this to be helpful you have to remember it! Remembering things isn’t always easy. The good news? Memory is a skill, and like any skill, it can be improved.\n\nIn this module, we’ll explore practical ways to boost your memory and make information stick.',
  },
  { type: 'transition', text: "Let's look at strategies that build stronger memories", tint: 'forest' },
  {
    type: 'components',
    title: 'Part 1: Strategies That Help Build Stronger Memories',
    body: 'These are called constructive supports because they help your brain create stronger, longer-lasting memories.',
    items: [
      { num: 1, label: 'Categorizing', desc: 'Group similar things together. For example if you are learning new coping skills, you might group them by when to use them: "when I feel anxious" or "before bed."' },
      { num: 2, label: 'Evaluating', desc: 'Think about why something matters. Ask yourself, "How does this apply to me?"' },
      { num: 3, label: 'Applying', desc: 'Try using what you’ve learned. For example, if you learn techniques to do an exposure challenge well, try it in your next exposure challenge. Practicing helps the memory stick.' },
      { num: 4, label: 'Cue-based reminders', desc: 'Use reminders that show up at the right time, like setting a phone alarm or putting a sticky note where you’ll see it.' },
    ],
  },
  { type: 'transition', text: "Now let's look at strategies for remembering in the moment", tint: 'forest' },
  {
    type: 'components',
    title: 'Part 2: Strategies That Help You Remember in the Moment',
    body: 'These are called non-constructive support because they help you remember things now, even if it is short-term.',
    items: [
      { num: 1, label: 'Repeating', desc: 'Go over something more than once, say it out loud or write it down.' },
      { num: 2, label: 'Practice Remembering', desc: 'Instead of just rereading, try to recall the information from memory. Doing this over time makes it stick better.' },
      { num: 3, label: 'Attention Recruitment', desc: 'Pay attention when learning something new. Turn off distractions and find a quiet place.' },
      { num: 4, label: 'Praising Recall', desc: 'Celebrate when you remember something! A simple, "I remembered that!" or a small reward can help boost your brain to keep learning.' },
    ],
  },
  {
    type: 'content',
    title: 'Give it a try!',
    body: 'Pick one memory strategy from this module that stood out to you and try using it at least once today.\n\nMaybe it’s setting a phone reminder or asking yourself, "How does this new information apply to me personally?"',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Problem Solving', href: '/moment_e_docs/problem-solving' },
      { label: 'Finding Your Community ›', href: '/moment_e_docs/finding-community' },
    ],
  },
];

const topics = [
  { label: 'Why memory matters', time: '2 min', startIndex: 3 },
  { label: 'Strategies that build memories', time: '2 min', startIndex: 5 },
  { label: 'Strategies to remember in the moment', time: '2 min', startIndex: 7 },
];

export default function MemoryEnhancementModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
