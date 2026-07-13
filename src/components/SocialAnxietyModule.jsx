import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'intro',
    intro: 'Today you will learn 3 things about social anxiety',
    items: [
      { label: 'What is social anxiety', time: '3.5 min' },
      { label: 'Symptoms of social anxiety', time: '4.5 min' },
      { label: 'The social anxiety cycle', time: '2 min' },
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
  { type: 'transition', text: "Let's start off by learning what Social Anxiety Disorder is", tint: 'blue' },
  {
    type: 'content',
    title: 'What is social anxiety?',
    body: 'Social anxiety is a common mental health condition. It involves a persistent fear of social situations and worry about how others see you. It can prevent us from living a valued life and doing the things we actually want to do.',
    video: { label: 'Anxiety & Depression Association of America', url: 'https://www.youtube.com/watch?v=WeTbl3AzrtA' },
  },
  {
    type: 'symptoms',
    title: 'Physical symptoms',
    body: 'Social anxiety shows up in the body. These are some of the most common physical reactions people experience.',
    items: [
      'Blushing',
      'Sweating',
      'Trembling or shaking',
      'Racing heart',
      'Nausea or upset stomach',
      'Shortness of breath',
      'Dizziness',
      'Mind going blank',
    ],
    prompt: 'Take a moment. Do you notice any of these in your body?',
  },
  {
    type: 'symptoms',
    title: 'Cognitive symptoms',
    body: 'Social anxiety also affects how we think. These are common thoughts and mental patterns.',
    items: [
      'Fear of being judged',
      'Fear of embarrassing yourself',
      'Intense worry beforehand',
      'Replaying conversations afterward',
      'Overestimating how badly things went',
      'Assuming others noticed your anxiety',
      'Mind-reading ("They think I\'m stupid")',
      'Catastrophizing ("I\'ll humiliate myself")',
    ],
    prompt: 'Do any of these thought patterns feel familiar?',
  },
  {
    type: 'symptoms',
    title: 'Situations that trigger social anxiety',
    body: 'Social anxiety can be triggered by many everyday situations. Some of the most common include:',
    items: [
      'Meeting new people',
      'Speaking in public',
      'Being the center of attention',
      'Eating or drinking in front of others',
      'Starting or joining conversations',
      'Talking to authority figures',
      'Being watched while doing something',
      'Dating or romantic situations',
      'Using the phone in public',
      'Attending parties or social events',
    ],
    prompt: 'Which of these situations feel most difficult for you?',
  },
  { type: 'transition', text: 'There are 3 components of social anxiety', tint: 'sky' },
  {
    type: 'components',
    title: 'The 3 components of social anxiety',
    items: [
      { num: 1, label: 'Physiological', desc: 'What is going on in your body, the physical sensations anxiety creates.' },
      { num: 2, label: 'Behavioral', desc: 'How you act, the things you do or avoid when anxiety takes hold.' },
      { num: 3, label: 'Cognitive', desc: 'What you think, the anxious thoughts and beliefs running through your mind.' },
    ],
    footer: "Let's look at some real examples",
  },
  {
    type: 'example',
    title: 'Example 1',
    situation: 'I had to talk to my boss.',
    physiological: 'The physical symptoms I experienced were pins and needles and sweaty palms.',
    behavioral: 'I tried to cut the conversation short. I was shaking.',
    cognitive: '"She is going to think I\'m stupid." "This shouldn\'t be so difficult for me."',
  },
  {
    type: 'example',
    title: 'Example 2',
    situation: 'I wanted to order a coffee at a busy café.',
    physiological: 'My voice came out quieter than I intended and my hands were trembling slightly.',
    behavioral: 'I rehearsed my order over and over in my head before reaching the counter.',
    cognitive: '"The barista is judging me." "I\'m going to say the wrong thing and look stupid."',
  },
  {
    type: 'example',
    title: 'Example 3',
    situation: 'I ran into an acquaintance unexpectedly at the grocery store.',
    physiological: 'I felt a wave of nausea and my mind went completely blank.',
    behavioral: 'I turned into a different aisle to avoid them and left the shop early.',
    cognitive: '"They saw me and know I ran away." "Normal people don\'t act like this."',
  },
  {
    type: 'reflection',
    title: 'Your turn',
    prompt: 'Describe a recent situation where you felt social anxiety, using the same three components.',
    fields: [
      { key: 'situation', label: 'The situation' },
      { key: 'physiological', label: 'Physiological component', placeholder: 'The physical symptoms I experienced were…' },
      { key: 'behavioral', label: 'Behavioral component', placeholder: 'The way I acted or things I did were…' },
      { key: 'cognitive', label: 'Cognitive component', placeholder: 'The anxious thoughts I had were…' },
    ],
  },
  { type: 'transition', text: "Now, let's talk about how the social anxiety cycle works", tint: 'teal' },
  {
    type: 'cycle',
    title: 'The social anxiety cycle',
    intro: 'Social anxiety maintains itself through a self-sustaining loop. Tap through each step below.',
    steps: [
      { num: 1, label: 'Social anxiety', desc: 'A social situation triggers fear. You worry about being judged, embarrassed, or saying the wrong thing.' },
      { num: 2, label: 'Avoidance', desc: 'To escape the discomfort, you avoid the situation or leave early. This brings relief in the moment.' },
      { num: 3, label: 'Short-term relief', desc: 'Avoiding works for now. The anxiety drops and you feel okay. But you never get the chance to learn it was safe and that you could cope.' },
      { num: 4, label: 'Long-term growth', desc: 'Over time the anxiety gets bigger. Each time you avoid, the fear grows stronger and the cycle starts again.' },
    ],
  },
  {
    type: 'content',
    title: 'Watch: The Social Anxiety Cycle',
    body: 'Watch this video on the social anxiety cycle to learn more.',
    video: { label: 'National Social Anxiety Center', url: 'https://www.youtube.com/watch?v=gHQHl1IKYeg' },
  },
  { type: 'transition', text: "Let's recap the 3 things you learned today", tint: 'blue' },
  {
    type: 'recap',
    title: 'Recap',
    items: [
      {
        num: 1,
        title: 'What is Social Anxiety Disorder',
        body: 'Social Anxiety Disorder is a persistent fear of social situations and worry about being judged by others.',
      },
      {
        num: 2,
        title: 'There are 3 components',
        body: "The physiological component (what's going on in your body), the behavioral component (how you act), and the cognitive component (what you think).",
      },
      {
        num: 3,
        title: 'The avoidance cycle',
        body: 'Avoidance brings short-term relief, but stops you from learning that you can cope, making the anxiety stronger over time.',
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
  { label: 'What is social anxiety', time: '3.5 min', startIndex: 3 },
  { label: 'Physical symptoms', time: '1.5 min', startIndex: 4 },
  { label: 'Cognitive symptoms', time: '1.5 min', startIndex: 5 },
  { label: 'Situations that trigger social anxiety', time: '1.5 min', startIndex: 6 },
  { label: 'The social anxiety cycle', time: '2 min', startIndex: 14 },
];

export default function SocialAnxietyModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-anxiety"
    />
  );
}
