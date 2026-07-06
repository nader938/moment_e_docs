import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'What is exposure therapy?',
    subtitle: '10 mins',
    tint: 'exposure',
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
  { type: 'transition', text: "Let's start off by learning what exposure therapy is", tint: 'blue' },
  {
    type: 'components',
    title: 'What is exposure therapy?',
    video: { label: 'OCD and Anxiety', url: 'https://www.youtube.com/watch?v=z0n3MjHKmBc' },
    body: 'Cognitive Behavioral Therapy (CBT) is a group of therapies that focuses on breaking the cycle between thoughts, feelings, and behaviors that keeps anxiety going. Exposure therapy is one of the most effective CBT treatments for anxiety disorders. It helps people gradually face feared situations, thoughts, sensations, or memories while learning new ways to respond.',
    listTitle: 'Exposure therapy consists of two key components:',
    items: [
      {
        num: 1,
        label: 'Exposure',
        desc: 'Gradually approaching the thoughts, images, physical sensations, objects, or situations that trigger anxiety rather than avoiding them.',
      },
      {
        num: 2,
        label: 'Reducing safety behaviors or compulsions',
        desc: 'Making a commitment to resist the urges to avoid, escape, seek reassurance, engage in compulsions, or rely on other safety behaviors that temporarily reduce anxiety. Although this can feel uncomfortable at first, staying with the anxiety without relying on these behaviors allows your brain to learn that the feared situation is safer than it expected.',
      },
    ],
    footer: 'With repeated practice, anxiety becomes more manageable and often decreases over time.',
  },
  { type: 'transition', text: "Let's look at another way to think about exposure therapy", tint: 'sky' },
  {
    type: 'content',
    title: "Your brain's alarm system",
    source: { label: 'the International OCD Foundation (iocdf.org)', href: 'https://iocdf.org/about-ocd/ocd-treatment/erp/' },
    body: 'Think of your anxiety as an alarm system. If an alarm goes off, what does it mean? The alarm is there to get your attention. If an intruder is trying to break into your house, the alarm goes off, wakes you up, and gets you to act to protect yourself and your family. But what if the alarm system went off every time a bird landed on the roof? Your body would respond to that alarm in much the same way as it would to a real threat, even though there is no actual danger.\n\nFor people with anxiety disorders, the brain\'s alarm system can become overly sensitive. Instead of warning you only about real danger, it begins to react to situations that are safe or only mildly threatening as though they are dangerous.\n\nWhen your anxiety alarm goes off, it tells you that you are in danger rather than, "Pay attention, you might be in danger."\n\nAs a result, your brain may send you frequent false alarms, even in situations where you logically know that the likelihood of something bad happening is very small. This can make everyday situations feel overwhelming.\n\nExposure therapy helps break this cycle. By gradually facing feared situations and reducing safety behaviors or compulsions, you give your brain the opportunity to learn that the situation is not as dangerous as it predicted. Over time, your alarm system becomes more accurate and less likely to react to situations that are actually safe.\n\nStarting exposure therapy can feel challenging because it may seem like you are choosing to face danger. In reality, you are teaching your brain to better distinguish between real threats and false alarms. With repeated practice, your anxiety becomes more manageable, your confidence grows, and everyday situations become easier to face.',
  },
  { type: 'transition', text: "Let's recap what you learned today", tint: 'blue' },
  {
    type: 'recap',
    title: 'Recap',
    items: [
      {
        num: 1,
        title: 'What is exposure therapy',
        body: 'Exposure therapy helps you gradually face feared situations while reducing safety behaviors and compulsions that keep anxiety going.',
      },
      {
        num: 2,
        title: "Your brain's alarm system",
        body: "Anxiety disorders can make your brain's alarm system overly sensitive, reacting to safe situations as though they're dangerous. Exposure therapy helps your brain learn the situation is actually safe.",
      },
    ],
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Exposure Therapy Basics', href: '/moment_e_docs/intro-exposure' },
      { label: 'What is an Exposure Hierarchy ›', href: '/moment_e_docs/creating-hierarchy' },
    ],
  },
];

const topics = [
  { label: 'What is exposure therapy', time: '3 min', startIndex: 3 },
  { label: "Your brain's alarm system", time: '4 min', startIndex: 5 },
];

export default function ExposureTherapyModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-exposure"
    />
  );
}
