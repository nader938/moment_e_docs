import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Avoidance',
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
  { type: 'transition', text: "Let's start off by learning about avoidance", tint: 'forest' },
  {
    type: 'content',
    title: 'Avoidance',
    body: "Avoidance is something we all do. You may skip the roller coaster ride or run away from a buzzing bee at the park. We avoid these kinds of situations to reduce feelings of fear or discomfort. In small amounts, avoidance is normal and can even help keep us safe. However, when avoidance becomes a pattern, it can start to interfere with daily life. For some people, severe anxiety can lead to avoiding things too often, even when there’s no real danger. This type of avoidance can significantly impact one’s quality of life.\n\nIn this module, you’ll learn what avoidance is, when it becomes a problem, how it can increase anxiety over time, and how to begin facing the things you’ve been avoiding.",
  },
  {
    type: 'content',
    title: '1. What is Avoidance?',
    body: 'Avoidance is the act of steering clear from any situations, tasks, feelings or thoughts that feel uncomfortable or threatening. It tends to be tied to the sources of your anxiety. Here are a few general examples:\n\nSocial Anxiety: You may avoid talking with new people, giving presentations at work or school, being out in public, talking to a waitress or attending parties.\n\nPanic Disorder: You may avoid crowded places, being alone, small places like elevators, physical activity that raises your heart rate or visiting places where you experienced a panic attack before.\n\nObsessive-Compulsive Disorder: You may avoid situations that trigger obsessive thoughts. For example, if you have contamination-related obsessions, you might avoid touching certain objects, places that feel dirty or contaminated, or using public restrooms.',
  },
  {
    type: 'content',
    title: '2. The Avoidance Cycle',
    body: "When avoidance becomes a regular pattern, it can actually make your anxiety much worse. This is called The Avoidance Cycle. The more we avoid something, the more our brain starts to think it's a real threat, which makes us want to avoid it even more next time. Over time, we get stuck in a loop where avoiding actually makes things feel scarier or harder than they really are. With anxiety disorders, avoidance can grow so strong that it causes significant problems and prevents us from doing the things we care about.",
  },
  {
    type: 'content',
    title: "3. Notice What You’re Avoiding (even the small stuff)",
    body: "The first step to reducing avoidance is figuring out exactly what you’re avoiding. The tricky part is that avoidance can be subtle. Even small actions that seem harmless still tell your brain that something is dangerous. For example, someone with social anxiety might think it’s okay to skip talking to the barista when grabbing coffee, but these little things add up and feed into a larger cycle that keeps the anxiety going.",
  },
  {
    type: 'content',
    title: '4. Add the Things You’ve Been Avoiding to Your Exposure Hierarchy',
    body: 'The most effective way to reduce avoidance is through exposure practice. Once you’ve identified what you’re avoiding, the next step is to add those things to your exposure hierarchy.',
  },
  {
    type: 'content',
    title: '5. Continue with Your Daily Exposure Challenges',
    body: 'Now that you’ve added your avoided situations to your exposure hierarchy, begin facing them day by day.',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Problem Solving', href: '/moment_e_docs/problem-solving' },
      { label: 'Memory Enhancement ›', href: '/moment_e_docs/memory-enhancement' },
    ],
  },
];

const topics = [
  { label: 'What is avoidance', time: '1.5 min', startIndex: 4 },
  { label: 'The avoidance cycle', time: '1.5 min', startIndex: 5 },
  { label: "Noticing what you're avoiding", time: '1 min', startIndex: 6 },
  { label: 'Building your exposure hierarchy', time: '0.5 min', startIndex: 7 },
  { label: 'Daily exposure challenges', time: '0.5 min', startIndex: 8 },
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
