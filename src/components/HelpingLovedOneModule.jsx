import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'How do I help a loved one do an exposure?',
    subtitle: '5 mins',
    tint: 'forest',
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
  {
    type: 'transition',
    text: "Let's explore how to support a loved one through an exposure",
    tint: 'forest',
  },
  {
    type: 'content',
    title: 'How do I help a loved one do an exposure?',
    body: 'Supporting someone you care about through an exposure can be a meaningful way to help them face their fears. At the same time, it can feel challenging or even uncomfortable.\n\nThis module will guide you in providing support that is helpful, encouraging, and effective - without getting in the way of their progress.',
  },
  {
    type: 'content',
    title: '1. Understand the goal of exposure',
    body: 'The goal of an exposure is for your loved one to face the fear without avoiding or doing any safety behaviors that they usually rely on. The discomfort they feel is part of the process - it\'s not dangerous, even if it looks distressing.\n\nIt can be tempting to step in to "make things easier" or reassure them. However, doing so will actually reduce the effectiveness of the exposure.\n\nThink of it like learning to ride a bike. When helping someone ride a bike, you need to let them find their own balance. If you hold the handlebars every time, they\'ll never learn to ride on their own.',
  },
  {
    type: 'content',
    title: '2. Support Without Rescuing',
    body: 'When helping with an exposure, the goal is to support them without rescuing them. There\'s a big difference between supporting and rescuing.\n\nExamples of supporting:\n• "I know this is hard, but I believe in you."\n• Helping them prepare: gathering materials or accompanying them to the location\n• "I\'m here with you, but I won\'t give reassurance."\n\nExamples of rescuing:\n• Doing the feared task for them\n• Reassuring them repeatedly ("It\'s okay, nothing bad will happen")\n• Letting them avoid something they fear\n\nThe most helpful role you can play is one that encourages them to stay in the discomfort, rather than trying to remove it.',
  },
  {
    type: 'content',
    title: '3. Keep Your Own Emotions in Check',
    body: 'It\'s natural to feel anxious, frustrated, or even sad while watching someone you care about in distress. Remember: their discomfort is temporary, and it\'s a necessary part of change.\n\nSome strategies to manage your own emotions:\n• Take deep breaths and focus on your own calmness\n• Remind yourself that discomfort does not equal danger\n• Think of their growth as the bigger goal\n\nYour calm presence helps your loved one feel supported without interfering.',
  },
  {
    type: 'content',
    title: '4. Celebrate Effort',
    body: 'Exposure is about practice, not perfection. Celebrate your loved one\'s effort, their courage to face discomfort, and the steps they are taking - even if they didn\'t complete the exposure perfectly.\n\nSaying things like:\n• "I\'m proud of you for trying that, even though it was hard"\n• "Look at how far you\'ve come since we started"',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Problem Solving', href: '/moment_e_docs/problem-solving' },
      { label: 'Being Uncomfortable ›', href: '/moment_e_docs/being-uncomfortable' },
    ],
  },
];

const topics = [
  { label: 'Understand the goal of exposure', time: '1 min', startIndex: 4 },
  { label: 'Support without rescuing', time: '1.5 min', startIndex: 5 },
  { label: 'Keep your own emotions in check', time: '1 min', startIndex: 6 },
  { label: 'Celebrate effort', time: '1 min', startIndex: 7 },
];

export default function HelpingLovedOneModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
