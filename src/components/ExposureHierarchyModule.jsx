import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'What is an exposure hierarchy?',
    subtitle: '8 mins',
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
  { type: 'transition', text: "Let's start off by learning what an exposure hierarchy is", tint: 'blue' },
  {
    type: 'content',
    title: 'What is an Exposure Hierarchy?',
    body: "An exposure hierarchy is a structured list of specific situations or tasks you will complete, arranged from least to most challenging. The goal is to gradually face feared situations rather than avoiding them, helping you build confidence and reduce anxiety over time.\n\nFor example, if you're working on contamination concerns, your hierarchy might start with touching a doorknob, which feels less challenging, and progress to using a public restroom, which feels more difficult. If you're working on social anxiety, your hierarchy might begin with making brief eye contact with a cashier and gradually progress to giving a presentation in front of a group. This gradual approach helps you face fears step by step while learning that you can tolerate the anxiety that comes with them.",
  },
  { type: 'transition', text: "Let's look at how to build your own hierarchy", tint: 'sky' },
  {
    type: 'components',
    title: 'How do I create my own Exposure Hierarchy?',
    body: 'Below is an exposure hierarchy template.',
    items: [
      {
        num: 1,
        label: 'Exposure',
        desc: 'List actions that will help you gradually face your fears. For example, someone with contamination concerns might include holding a doorknob with bare hands, while someone with social anxiety might include starting a brief conversation with a coworker.',
      },
      {
        num: 2,
        label: 'Statement',
        desc: 'Write a statement of uncertainty that goes along with each exposure. For the doorknob example, you might write, "I may or may not get sick." For the social anxiety example, you might write, "People may or may not judge what I say."',
      },
      {
        num: 3,
        label: 'Safety Behaviors or Compulsions to Resist',
        desc: 'List the behaviors you plan to avoid during the exposure. For the doorknob example, you might write, "I will not use a paper towel to hold the doorknob." For the social anxiety example, you might write, "I will not rehearse everything I want to say beforehand or avoid eye contact."',
      },
    ],
    footer: 'Later in the program, we will provide examples of exposures tailored to different anxiety disorders and OCD subtypes to help you create a personalized hierarchy based on your own fears and treatment goals.',
  },
  { type: 'transition', text: "Let's recap what you learned today", tint: 'blue' },
  {
    type: 'recap',
    title: 'Recap',
    items: [
      {
        num: 1,
        title: 'What is an exposure hierarchy',
        body: 'An exposure hierarchy is a structured list of feared situations, arranged from least to most challenging, that you gradually work through.',
      },
      {
        num: 2,
        title: 'How to build your hierarchy',
        body: 'Each exposure includes a statement of uncertainty and a list of safety behaviors or compulsions to resist while facing it.',
      },
    ],
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Exposure Therapy Basics', href: '/moment_e_docs/intro-exposure' },
      { label: 'How Do We Do Exposures ›', href: '/moment_e_docs/high-quality-exposure' },
    ],
  },
];

const topics = [
  { label: 'What is an exposure hierarchy', time: '3.5 min', startIndex: 3 },
  { label: 'How to build your hierarchy', time: '4.5 min', startIndex: 5 },
];

export default function ExposureHierarchyModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-exposure"
    />
  );
}
