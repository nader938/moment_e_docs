import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'How to Form New Habits that Stick',
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
  {
    type: 'transition',
    text: "Let's explore how habits form and how to make them stick",
    tint: 'forest',
  },
  {
    type: 'content',
    title: 'How to Form New Habits that Stick',
    body: 'We are our habits, good or bad. "We are what we repeatedly do. Excellence, then, is not an act, but a habit." - Will Durant.\n\nSo how do we form habits from things we\'d like to do more consistently, whether it is practicing mindfulness, spending less time on our phones, or exercising regularly?\n\nStarting a new behavior is a great first step, but the real challenge is making it a lasting part of our daily routines. That\'s where habits come in.\n\nIn this module, we\'ll walk through 6 key questions to guide you in forming new habits that stick.',
  },
  {
    type: 'content',
    title: '1. What are habits?',
    body: 'The first step to forming a new habit is understanding what a habit is and why it matters. A habit is a behavior that becomes automatic over time. Building habits is one of the most effective ways to make healthy or helpful behaviors a regular part of your life. Rather than relying on motivation or daily decisions, habits allow us to take action with little conscious effort.\n\nFor example, you probably brush your teeth each morning without thinking about it or check your phone when you hear a notification. These are habits at work.\n\nSimilarly, doing exposures can become a normal part of life once you incorporate it into your daily activities - for example, when brushing your teeth you can touch the sink before you brush your teeth if you worry about germs.',
  },
  {
    type: 'content',
    title: '2. How do habits actually form?',
    body: 'Repetition. Repetition. Repetition.\n\nIf you do the same thing in the same situation over and over, over time, you start to link the behavior with the context, so eventually it becomes automatic.\n\nFor example, if you always stretch right after waking up, your body and mind will start to expect it, making it feel more natural and effortless. Eventually, you\'ll feel the urge to stretch without having to remind yourself.\n\nSimilarly, if you challenge yourself when you feel fearful, you will begin to seek those opportunities.',
  },
  {
    type: 'content',
    title: '3. How do I get myself to repeat a behavior?',
    body: 'Habit formation is a learned process that takes intention and repetition, but you don\'t have to do it alone. This is where cues come in.\n\nCues are triggers - such as a time of day, a location, or an emotion - that prompt you to engage in a habit. They help guide your behavior until it becomes automatic.\n\nWhen starting a new habit, you can create cues for yourself. For example, setting a daily reminder on your phone can help support consistent practice of the habit until it sticks.\n\nGetting to the office or work could be a cue that you should say hello and ask how someone\'s morning has been if you fear conversations.',
  },
  {
    type: 'content',
    title: '4. How can self-monitoring help?',
    body: 'Self-monitoring means checking in with yourself to see whether you followed through on the habit.\n\nKeeping track - whether in a journal, an app, or a simple checklist - can help build awareness, keep you accountable, and highlight your progress over time.\n\nA simple list of every day you did a deliberate exposure will soon help keep the momentum going.',
  },
  {
    type: 'content',
    title: '5. What is automaticity, and why is it important?',
    body: 'Automaticity means that the habit happens with little effort or thought. As you consistently practice the behavior, it requires less mental energy and becomes easier to perform.\n\nReaching this stage is important because it allows us to maintain the habit in the long term.',
  },
  {
    type: 'content',
    title: '6. How can rewards help habits stick?',
    body: 'When something feels good - like when it\'s fun, relaxing, or gives you a sense of accomplishment - you\'re more likely to keep doing it. That is how habits start to take root. The more rewarding something is, the faster it can become second nature.\n\nFinding small ways to reward yourself after completing a habit can go a long way in helping it stick. For example, you could treat yourself to your favorite music or watch a funny video.\n\nYou can call a trusted friend to brag about your latest challenge - like doing a tough hike that gets your heart pounding if you fear heart attacks.',
  },
  {
    type: 'content',
    title: 'Give it a try!',
    body: '1. Choose one habit to add to your routine (e.g., doing exposures or practicing psychological hygiene)\n\n2. Identify a clear cue (e.g., a specific time and action) and set phone reminders.\n\n3. Set regular check-in dates to self-monitor your progress and note whether you completed the habit.\n\n4. Decide on a simple reward to enjoy after completing the habit.\n\n5. Repeat consistently to help the habit become automatic.',
  },
  {
    type: 'content',
    title: 'What to read and watch to learn more',
    body: '📄 Applying the Science of Habit Formation to Evidence-Based Psychological Treatments for Mental Illness - Allison G Harvey, Ph.D.\n\n📖 Atomic Habits - here is a 15-minute summary by James Clear called "Advantages of creating systems and not just setting goals" on Peter Attia, M.D.\'s podcast.',
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
  { label: 'What are habits?', time: '1 min', startIndex: 4 },
  { label: 'How do habits actually form?', time: '1 min', startIndex: 5 },
  { label: 'How do I get myself to repeat a behavior?', time: '1 min', startIndex: 6 },
  { label: 'How can self-monitoring help?', time: '1 min', startIndex: 7 },
  { label: 'What is automaticity?', time: '1 min', startIndex: 8 },
  { label: 'How can rewards help habits stick?', time: '1 min', startIndex: 9 },
];

export default function HabitFormationModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
