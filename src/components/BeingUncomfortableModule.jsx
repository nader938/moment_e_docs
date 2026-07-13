import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: "But I don't like feeling Uncomfortable",
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
    text: "Let's explore why discomfort is a critical part of change",
    tint: 'forest',
  },
  {
    type: 'content',
    title: "But I don't like feeling Uncomfortable",
    body: "When doing exposures, sometimes they feel really uncomfortable. It is natural to think, \"I don't want to keep doing this\" or \"I can't handle this much discomfort.\" This is really part of the process of change.\n\nFeeling uncomfortable is no fun but it is actually a critical part of the process.\n\nHere, we'll explore why feeling uncomfortable during your exposures is not only expected, but essential. We'll also discuss why leaning into that discomfort is the best thing you can do.",
  },
  {
    type: 'content',
    title: '1. Discomfort is not the same as DANGER',
    body: 'During an exposure challenge, discomfort can take many forms - e.g., rapid heart rate, shortness of breath, hot flushes, etc. These responses have evolved as part of the fight-or-flight response, a survival mechanism that helps us respond to immediate threats. However, they are not helpful when the "threat" is not real (e.g., fear of contamination, unwanted intrusive thoughts, etc.).\n\nIt may feel like this discomfort will keep increasing until something catastrophic happens. But the reality is, the system is designed to help us survive - so it may be uncomfortable, but it is not dangerous, and it will not last forever.\n\nKnowing this, you can remind yourself when doing exposures.',
  },
  {
    type: 'content',
    title: '2. Choosing discomfort',
    body: 'We choose discomfort in many areas of our lives. For example, not many people look forward to going to the dentist, especially if they know they have a cavity. They do it because it pays in the long run. Same goes for working out when we would rather stay in bed.\n\nThere are also bigger challenges like running a marathon that people choose to test their limits. Exposures can be your marathon - a challenge that will make a big impact on your life. As the saying goes, no pain, no gain, and that applies here just as it does in running a marathon.\n\nSo you do hard things because you value them and believe you can cope with the discomfort to gain results.',
  },
  {
    type: 'content',
    title: '3. Find your own value in being uncomfortable',
    body: 'A helpful first step is to pause and think of a time when you did something uncomfortable - whether small or big - and found it to be worthwhile. Then ask yourself, "What did I gain from my willingness to experience this discomfort?"\n\nMaybe it led to a moment of joy, improved health, greater confidence, helped someone else, or simply made your day more productive. These are some of the things that make life rich and fulfilling, and more often than not, they are waiting for us on the other side of discomfort.',
  },
  {
    type: 'content',
    title: '4. Apply this to your exposure challenges',
    body: 'Now let\'s bring this understanding to your exposure challenges. When you start to think "I don\'t want to feel uncomfortable," pause and remind yourself of the goals you are working towards.\n\nAnd that, over time, a more fulfilling life lies on the other side of this discomfort.',
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
  { label: 'Discomfort is not the same as danger', time: '1.5 min', startIndex: 4 },
  { label: 'Choosing discomfort', time: '1 min', startIndex: 5 },
  { label: 'Find your own value in being uncomfortable', time: '1 min', startIndex: 6 },
  { label: 'Apply this to your exposure challenges', time: '1 min', startIndex: 7 },
];

export default function BeingUncomfortableModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
