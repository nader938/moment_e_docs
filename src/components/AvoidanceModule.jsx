import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'intro',
    intro: 'Today you will learn 4 things about avoidance',
    items: [
      { label: 'What is avoidance', time: '3 min' },
      { label: 'The avoidance cycle', time: '3 min' },
      { label: "Noticing what you're avoiding", time: '2.5 min' },
      { label: 'Building your exposure hierarchy', time: '2 min' },
    ],
    footer: 'About 10.5 minutes total',
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
  { type: 'transition', text: "Let's start by learning what avoidance really is", tint: 'green' },
  {
    type: 'content',
    title: 'What is Avoidance?',
    body: 'Avoidance is something we all do. You may skip the roller coaster ride or run away from a buzzing bee at the park. We avoid these kinds of situations to reduce feelings of fear or discomfort. In small amounts, avoidance is normal and can even help keep us safe. However, when avoidance becomes a pattern, it can start to interfere with daily life. For some people, severe anxiety can lead to avoiding things too often, even when there’s no real danger. This type of avoidance can significantly impact one’s quality of life.\n\nAvoidance is the act of steering clear from any situations, tasks, feelings or thoughts that feel uncomfortable or threatening. It tends to be tied to the sources of your anxiety. Here are a few general examples:',
  },
  {
    type: 'components',
    title: 'A few general examples',
    items: [
      {
        num: 1,
        label: 'Social Anxiety',
        desc: 'You may avoid talking with new people, giving presentations at work or school, being out in public, talking to a waitress or attending parties.',
      },
      {
        num: 2,
        label: 'Panic Disorder',
        desc: 'You may avoid crowded places, being alone, small places like elevators, physical activity that raises your heart rate or visiting places where you experienced a panic attack before.',
      },
      {
        num: 3,
        label: 'Obsessive-Compulsive Disorder',
        desc: 'You may avoid situations that trigger obsessive thoughts. For example, if you have contamination-related obsessions, you might avoid touching certain objects, places that feel dirty or contaminated, or using public restrooms.',
      },
    ],
  },
  {
    type: 'content',
    title: 'The Avoidance Cycle',
    body: "When avoidance becomes a regular pattern, it can actually make your anxiety much worse. This is called the Avoidance Cycle. The more we avoid something, the more our brain starts to think it's a real threat, which makes us want to avoid it even more next time. Over time, we get stuck in a loop where avoiding actually makes things feel scarier or harder than they really are. With anxiety disorders, avoidance can grow so strong that it causes significant problems and prevents us from doing the things we care about.",
  },
  { type: 'transition', text: "Now, let's talk about how to start reducing avoidance", tint: 'teal' },
  {
    type: 'reflection',
    title: "Notice What You're Avoiding (even the small stuff)",
    prompt: "The first step to reducing avoidance is figuring out exactly what you're avoiding. The tricky part is that avoidance can be subtle. Even small actions that seem harmless still tell your brain that something is dangerous. For example, someone with social anxiety might think it's okay to skip talking to the barista when grabbing coffee, but these little things add up and feed into a larger cycle that keeps the anxiety going.",
    fields: [
      {
        key: 'notice',
        label: "What's one small thing you've been avoiding lately, even if it seems minor?",
        placeholder: 'e.g. Avoiding eye contact with the cashier…',
      },
    ],
  },
  {
    type: 'cta',
    title: 'Add the Things You’ve Been Avoiding to Your Exposure Hierarchy',
    body: "Now that you've started noticing your avoidance patterns, the next step is turning them into an exposure hierarchy — a ranked list of situations you can gradually face, starting with what feels most manageable.",
    linkLabel: 'Go to Creating a Hierarchy',
    linkHref: '/moment_e_docs/creating-hierarchy',
  },
  {
    type: 'completion',
    title: 'Great work',
    body: 'You completed Problem Solving: Avoidance',
  },
];

const topics = [
  { label: 'What is avoidance', time: '3 min', startIndex: 3 },
  { label: 'The avoidance cycle', time: '3 min', startIndex: 5 },
  { label: "Noticing what you're avoiding", time: '2.5 min', startIndex: 7 },
  { label: 'Building your exposure hierarchy', time: '2 min', startIndex: 8 },
];

export default function AvoidanceModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
