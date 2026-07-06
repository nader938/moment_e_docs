import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Finding Your Community',
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
  { type: 'transition', text: "Let's start off by learning why community matters", tint: 'forest' },
  {
    type: 'content',
    title: 'Finding Your Community',
    body: 'I’m already working on building healthy habits and doing my exposures. Why do I also need to be social?\n\nIt turns out that strong relationships are the most significant factor in determining good health, according to a decade-long Harvard Study of Adult Development. Specifically, if you are dealing with OCD, it is important to note that OCD symptoms encourage isolation, and OCD symptoms also breed in isolation, thus creating a vicious cycle. This means that creating a community is not just for fun; it helps with managing OCD.\n\nSo how do you form good relationships? This can feel overwhelming at first, but let’s break it into steps:',
  },
  { type: 'transition', text: "Let's break it into steps", tint: 'forest' },
  {
    type: 'content',
    title: '1. Examine your values',
    body: 'The first step to finding the right community is to examine your values. For many of us our family, friends, job, and hobbies begin to form the communities we belong to. The community you choose based on a careful examination of your values are the ones that are likely to make the most impact on your life.',
  },
  {
    type: 'content',
    title: '2. Do some research',
    body: 'A good place to start may be using the internet to find groups based on a shared interest. Are you a dog lover? There are many rescue groups that will have like minded volunteers there. If you are a fan of theater, the thespian groups may be right for you. And every physical activity, like sailing, walking, running, pickleball, dance, beach volleyball, and many more will have its own group. There are also book clubs and language learning conversation meetups. If you are looking to develop public speaking skills, Toastmasters, might be right for you. There are also communities that focus on a particular type of mental health, e.g., the International Obsessive Compulsive Foundation (IOCDF) might have a support group for you. The critical point is to find a group with members who share your interest.',
  },
  {
    type: 'content',
    title: '3. Show up (and show up again)',
    body: 'Showing up to the first meetup of a new group can be daunting. But remember, you have been doing exposures and have already shown a willingness to be uncomfortable. So show up, participate, and give each group a fair chance by showing up again at least a few times. And then be prepared for some trial-and-error here. Once you’ve shown up to a group enough times to know it’s not for you, you can move on to a different group.',
  },
  {
    type: 'content',
    title: '4. How do I find time to do all this?',
    body: 'Creating a community does take time and patience. But the hope is that you are doing this in a way that helps you meet multiple values, e.g., a walking group can help fulfill the value of exercise and being social at the same time. Most of all, remind yourself that being unwell takes up valuable time and building relationships helps us be well.',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Problem Solving', href: '/moment_e_docs/problem-solving' },
      { label: 'Value of Mistakes ›', href: '/moment_e_docs/value-of-mistakes' },
    ],
  },
];

const topics = [
  { label: 'Examine your values', time: '1.5 min', startIndex: 5 },
  { label: 'Do some research', time: '1.5 min', startIndex: 6 },
  { label: 'Show up (and show up again)', time: '1.5 min', startIndex: 7 },
  { label: 'How do I find time to do all this?', time: '1.5 min', startIndex: 8 },
];

export default function FindingCommunityModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
