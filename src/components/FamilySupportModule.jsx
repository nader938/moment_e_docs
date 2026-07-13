import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Family Member Support',
    subtitle: '3 mins',
    tint: 'forest',
  },
  {
    type: 'transition',
    text: 'Resources and support for family members',
    tint: 'forest',
  },
  {
    type: 'content',
    title: 'Resources for Family Members',
    body: 'Family members, here are a few resources we commonly recommend:\n\n1. The International OCD Foundation\'s article: IOCDF Families: What You Can Do to Help\niocdf.org/families/\n\n2. The Gateway Institute Family Support Group - a free virtual monthly support group for family members of individuals with OCD\nwww.gatewayocd.com/family-support-group/',
  },
  {
    type: 'completion',
    title: 'Thank you for supporting your loved one!',
    links: [
      { label: '‹ Problem Solving', href: '/moment_e_docs/problem-solving' },
    ],
  },
];

const topics = [
  { label: 'Resources for family members', time: '2 min', startIndex: 2 },
];

export default function FamilySupportModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/problem-solving"
    />
  );
}
