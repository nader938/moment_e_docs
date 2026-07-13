import React from 'react';
import ModuleFlow from './ModuleFlow';

const pages = [
  {
    type: 'title-card',
    title: 'Mindfulness During Exposure',
    subtitle: '8 mins',
    tint: 'teal',
  },
  {
    type: 'choice',
    title: 'How would you like to learn today?',
    subtitle: 'Choose whichever works best for you. Either way takes around 8 minutes.',
    options: [
      { label: 'Step by step', desc: 'I will guide you through each section in order at your own pace' },
      { label: 'Explore freely', desc: 'Pick any topic and explore in whatever order works for you' },
    ],
  },
  {
    type: 'transition',
    text: "Let's explore how mindfulness supports your exposure work",
    tint: 'teal',
  },
  {
    type: 'content',
    title: 'Mindfulness and Anxiety',
    body: 'Here you will watch a video about Mindfulness and Anxiety. Below, you will read about the role of Mindfulness in treating OCD.',
    video: {
      url: 'https://www.youtube.com/watch?v=rCp1l16GCXI',
      label: 'Mindfulness and Anxiety',
    },
  },
  {
    type: 'content',
    title: 'Mindfulness in the Treatment of OCD',
    body: 'By Alegra Kastens, M.A., LMFT\n\nMindfulness skills are valuable to learn before doing the ERP work, as they help people accept the presence of thoughts and feelings (like anxiety or discomfort) that arise during exposures without engaging with them compulsively.',
  },
  {
    type: 'content',
    title: 'What is mindfulness?',
    body: 'Mindfulness is the practice of non-judgmentally observing thoughts, feelings, urges and sensations that we experience as humans. It involves accepting the presence of such stimuli without resistance. While we cannot always control what we are thinking or feeling, we do get to decide where to turn our attention to.\n\nPeople with OCD typically spend far too much time attending to unwanted thoughts and feelings that are not important or helpful to engage with. Through mindfulness, they learn to turn the mind back to the present moment instead of following thoughts down the rabbit hole and getting stuck in a spiral of mental compulsions.\n\nWhen people first learn about mindfulness, an image of someone sitting down meditating with their eyes closed often comes to mind. While mindfulness is a part of meditation, one does not have to do a formal meditation to practice mindfulness. We can utilize mindfulness skills at any point in the day, whether that be sitting at work, walking to the train, watching TV, etc.',
  },
  {
    type: 'content',
    title: 'Acceptance',
    body: 'When we observe our internal experiences as they are, without judgment, it helps us practice acceptance of these experiences without resistance. Acceptance is a crucial part of OCD recovery. This word often scares people with OCD who assume acceptance means that we agree with or enjoy our thoughts and feelings. That is not what acceptance entails.\n\nAcceptance is synonymous with allowance - allowing thoughts, feelings, sensations, urges and images to exist. This does not mean that we accept them as truths or facts, or that we enjoy them. It means that we accept their presence. When we accept the presence of thoughts and feelings, we are signaling to our brain that we are not actually in danger.\n\nThis is essential for people with OCD who receive false alarms from a malfunctioning fear center in the brain. By practicing acceptance, we show the brain that these are not real alarms. We can begin to rewire the brain.',
  },
  {
    type: 'content',
    title: 'How to apply mindfulness skills',
    body: 'Mindfulness is an attitude of acceptance and a mental action that guides where our attention goes. The mental action involves noticing a thought, feeling, image, sensation, or urge - deciding whether it is helpful or not to pay attention to it - and bringing oneself back to the present moment if it is not helpful to engage with. Anything related to OCD is not helpful to engage with.\n\nSome acceptance responses to use when intrusive thoughts or feelings arise:\n\n"I\'m having the thought that [obsession]. This thought can be here."\n\n"I notice I\'m feeling anxious. Anxiety can accompany me while I run errands."\n\n"That\'s a thought. Thank you, brain."\n\nNote: We do not say "This is just a thought" - the word "just" is a judgment and can become reassurance. We observe thoughts and feelings as they are: thoughts and feelings.\n\nThen, turn the mind to the present moment and engage with something values-based. This is healthy redirection - allowing thoughts and feelings to exist while redirecting to something meaningful. It is not a distraction, in which we try to avoid having thoughts or feelings.',
  },
  {
    type: 'content',
    title: 'The Bee on the Shoulder',
    body: 'A helpful metaphor for mindfulness: imagine there is a bee on your shoulder and you really don\'t like bees.\n\nMindfulness is NOT saying "Stare at the bee all day. Look at it and try to figure out why it\'s there." That is paying far too much attention to the bee.\n\nMindfulness is also NOT saying "Push that bee away! Get it off of your shoulder!" That is resistance.\n\nInstead, mindfulness says: "This bee can be on my shoulder while I move about my day." We don\'t engage with the bee but we do allow it to exist.',
  },
  {
    type: 'completion',
    title: 'Great work!',
    links: [
      { label: '‹ Exposure Therapy Basics', href: '/moment_e_docs/intro-exposure' },
    ],
  },
];

const topics = [
  { label: 'Mindfulness and Anxiety (video)', time: '3 min', startIndex: 3 },
  { label: 'What is mindfulness?', time: '1.5 min', startIndex: 5 },
  { label: 'Acceptance', time: '1.5 min', startIndex: 6 },
  { label: 'How to apply mindfulness skills', time: '1.5 min', startIndex: 7 },
  { label: 'The Bee on the Shoulder', time: '1 min', startIndex: 8 },
];

export default function MindfulnessModule() {
  return (
    <ModuleFlow
      pages={pages}
      topics={topics}
      doneHref="/moment_e_docs/intro-exposure"
    />
  );
}
