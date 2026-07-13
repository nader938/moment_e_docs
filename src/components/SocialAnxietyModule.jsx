import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'intro',
    intro: 'Today you will learn 4 things about social anxiety',
    items: [
      { label: 'What is social anxiety', time: '3.5 min' },
      { label: 'Symptoms of social anxiety', time: '4.5 min' },
      { label: 'The social anxiety cycle', time: '2 min' },
      { label: 'Cognitive restructuring', time: '5 min' },
    ],
    footer: 'About 15 minutes total',
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
    body: 'Click on each component below to learn more.',
    items: [
      { num: 1, label: 'Physiological', desc: 'What is going on in your body, the physical sensations anxiety creates.' },
      { num: 2, label: 'Behavioral', desc: 'How you act, the things you do or avoid when anxiety takes hold.' },
      { num: 3, label: 'Cognitive', desc: 'What you think, the anxious thoughts and beliefs running through your mind.' },
    ],
    footer: "Let's look at some real examples",
  },
  {
    type: 'example',
    title: 'Example 1: The Boss Situation',
    illustration: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="24" fill="#EBF3FB"/>
        {/* desk */}
        <rect x="20" y="78" width="80" height="8" rx="3" fill="#1B3F6E"/>
        <rect x="28" y="86" width="6" height="16" rx="2" fill="#1B3F6E"/>
        <rect x="86" y="86" width="6" height="16" rx="2" fill="#1B3F6E"/>
        {/* monitor */}
        <rect x="38" y="46" width="44" height="30" rx="4" fill="#2E6DA4"/>
        <rect x="42" y="50" width="36" height="22" rx="2" fill="#A8D0F0"/>
        <rect x="55" y="76" width="10" height="4" rx="1" fill="#2E6DA4"/>
        {/* person */}
        <circle cx="60" cy="30" r="10" fill="#2E6DA4"/>
        <path d="M44 46c0-8.837 7.163-14 16-14s16 5.163 16 14" fill="#1B3F6E"/>
      </svg>
    ),
    situation: 'I had to talk to my boss.',
    physiological: 'The physical symptoms I experienced were pins and needles and sweaty palms.',
    behavioral: 'I tried to cut the conversation short. I was shaking.',
    cognitive: '"She is going to think I\'m stupid." "This shouldn\'t be so difficult for me."',
  },
  {
    type: 'example',
    title: 'Example 2: Ordering a Coffee',
    illustration: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="24" fill="#EBF3FB"/>
        {/* cup */}
        <path d="M38 50h44l-6 36H44L38 50z" fill="#2E6DA4"/>
        <rect x="38" y="44" width="44" height="8" rx="3" fill="#1B3F6E"/>
        {/* handle */}
        <path d="M82 58c8 0 12 4 12 10s-4 10-12 10" stroke="#1B3F6E" strokeWidth="4" strokeLinecap="round" fill="none"/>
        {/* steam */}
        <path d="M52 38c0-4 4-4 4-8" stroke="#A8D0F0" strokeWidth="3" strokeLinecap="round"/>
        <path d="M60 36c0-4 4-4 4-8" stroke="#A8D0F0" strokeWidth="3" strokeLinecap="round"/>
        <path d="M68 38c0-4 4-4 4-8" stroke="#A8D0F0" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    situation: 'I wanted to order a coffee at a busy café.',
    physiological: 'My voice came out quieter than I intended and my hands were trembling slightly.',
    behavioral: 'I rehearsed my order over and over in my head before reaching the counter.',
    cognitive: '"The barista is judging me." "I\'m going to say the wrong thing and look stupid."',
  },
  {
    type: 'example',
    title: 'Example 3: The Grocery Store',
    illustration: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="24" fill="#EBF3FB"/>
        {/* cart body */}
        <path d="M30 36h8l10 38h34l8-28H46" stroke="#1B3F6E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* wheels */}
        <circle cx="58" cy="82" r="6" fill="#2E6DA4"/>
        <circle cx="82" cy="82" r="6" fill="#2E6DA4"/>
        {/* items in cart */}
        <rect x="52" y="52" width="12" height="14" rx="2" fill="#A8D0F0"/>
        <rect x="68" y="54" width="10" height="12" rx="2" fill="#5BA4D4"/>
        {/* handle */}
        <path d="M22 36h10" stroke="#1B3F6E" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
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
  { type: 'transition', text: "Now let's explore cognitive restructuring", tint: 'teal' },
  {
    type: 'content',
    title: 'Cognitive Restructuring',
    body: 'There are ways we can "categorize" some of our anxious and unhelpful thoughts. Why would we care to do this? By categorizing our anxious thoughts, we can observe if there are certain patterns to our thinking.\n\nFurthermore, identifying these patterns can give us a headstart in how to combat our "frequent flier" anxious thoughts, because we can be aware that we have a tendency to fall into a particular pattern.\n\nTake a look at these commonly-identified patterns of anxious thoughts. Click on each one to learn more.',
  },
  {
    type: 'components',
    title: 'Patterns of anxious thoughts',
    body: 'Click on each pattern below to learn more.',
    items: [
      { num: 1, label: 'Black and White Thinking', desc: 'Seeing everything in extremes; there is no room for the middle ground. People are right or wrong and situations are good or bad.' },
      { num: 2, label: 'Mental Filtering', desc: 'Only seeing the negative parts of situations, or only seeing what is wrong with yourself. For example, you might leave a party only remembering that you forgot someone\'s name or spilled your drink.' },
      { num: 3, label: 'Overgeneralizing', desc: 'Believing that the results of one situation predict the results of all future situations. If your thoughts often involve "all," "never," "always," and "every" you might be overgeneralizing. For example: "I will always be a failure in social situations."' },
      { num: 4, label: 'Jumping to Conclusions', desc: 'Believing that you know what others are thinking (mind reading) or predicting the future (fortune-telling). For example: "He must think I am boring to talk to" or "I am going to embarrass myself at this party."' },
      { num: 5, label: 'Emotional Reasoning', desc: 'Believing that if you feel something it must be true. You might believe that because you feel anxious, there is something in a situation to be feared. Feelings can have many causes and do not always reflect reality.' },
      { num: 6, label: 'Personalizing', desc: 'Blaming yourself for external events outside of your control. Whether you are partly to blame or not to blame at all, you believe that external events are entirely your fault.' },
      { num: 7, label: 'Catastrophizing', desc: 'Turning small problems into big ones or blowing things out of proportion. For example, thinking that giving a poor presentation at work will mean your coworkers will dislike you and you may lose your job.' },
      { num: 8, label: 'Shoulding and Musting', desc: 'Thoughts such as "I must always do everything perfectly" or "I should always agree with what people say." These are arbitrary rules that are not always helpful to cling to.' },
      { num: 9, label: 'Labeling', desc: 'Making global statements about people or situations based on specific circumstances. For example, labeling yourself as "boring" despite evidence to the contrary.' },
      { num: 10, label: 'Magnification and Minimization', desc: 'Magnifying good things about other people while minimizing good things about yourself. This goes beyond being humble; people with this pattern do not recognize their own good qualities.' },
      { num: 11, label: 'Maladaptive Thoughts', desc: 'Thoughts that are not necessarily distorted, but not helpful to dwell on. For example, "I\'ve never done this before" might be true, but it\'s not helpful to dwell on. Ask yourself: Does this thought help my mood? Does it help me think productively about the situation?' },
    ],
  },
  {
    type: 'content',
    title: 'How to dispute these thoughts',
    body: 'How can you dispute some of these thoughts? By asking yourself questions about the truthfulness of the thoughts. For example: are the thoughts you are having 100% accurate?\n\nOver the next week, continue monitoring the physiological, behavioral, and cognitive components of situations where you felt socially anxious, but now:\n\n1. Start to categorize your thoughts using the patterns above.\n\n2. Determine if the thoughts are 100% accurate.',
  },
  { type: 'transition', text: "Let's recap the 4 things you learned today", tint: 'blue' },
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
      {
        num: 4,
        title: 'Cognitive restructuring',
        body: 'By categorizing anxious thoughts into patterns, we can identify our "frequent fliers" and learn to question whether those thoughts are 100% accurate.',
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
  { label: 'Cognitive restructuring', time: '5 min', startIndex: 17 },
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
