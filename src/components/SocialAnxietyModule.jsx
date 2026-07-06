import React, { useState } from 'react';

function youtubeEmbedUrl(url) {
  const id = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${id}`;
}

const pages = [
  {
    type: 'intro',
    title: "What you'll learn",
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
  { type: 'transition', text: "Let's start off by learning what Social Anxiety Disorder is" },
  {
    type: 'content',
    title: 'What is social anxiety?',
    body: 'Social anxiety is a common mental health condition. It involves a persistent fear of social situations and worry about how others see you. It can prevent us from living a valued life and doing the things we actually want to do.',
    video: { label: 'Anxiety & Depression Association of America', url: 'https://www.youtube.com/watch?v=WeTbl3AzrtA' },
  },
  {
    type: 'symptoms',
    title: 'Common symptoms of social anxiety',
    items: [
      'Fear of being judged',
      'Intense worry beforehand',
      'Blushing or sweating',
      'Avoiding situations',
      'Fear of embarrassing yourself',
      'Replaying conversations',
    ],
    prompt: 'Take a moment. Do you experience some or all of these?',
  },
  { type: 'transition', text: 'There are 3 components of social anxiety' },
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
  { type: 'transition', text: "Now, let's talk about how the social anxiety cycle works" },
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
    video: { label: 'National Social Anxiety Center', url: 'https://www.youtube.com/watch?v=gHQHl1IKYeg' },
  },
  { type: 'transition', text: "Let's recap the 3 things you learned today" },
  {
    type: 'recap',
    num: 1,
    title: 'What is Social Anxiety Disorder',
    body: 'Social Anxiety Disorder is a persistent fear of social situations and worry about being judged by others.',
  },
  {
    type: 'recap',
    num: 2,
    title: 'There are 3 components',
    body: "The physiological component (what's going on in your body), the behavioral component (how you act), and the cognitive component (what you think).",
  },
  {
    type: 'recap',
    num: 3,
    title: 'The avoidance cycle',
    body: 'Avoidance brings short-term relief, but stops you from learning that you can cope, making the anxiety stronger over time.',
  },
  {
    type: 'reflect-remember',
    reflectTitle: 'Reflect',
    reflectPrompt: 'Think of a time you experienced the social anxiety cycle in the past week. Jot down what happened at each step.',
    reflectExample: 'e.g. I was too nervous to talk to the barista so I avoided it and ordered on the app. Next time I felt even more stressed and now I always order on the app.',
    quiz: {
      question: 'Why does avoidance make anxiety worse over time?',
      options: [
        'It prevents you from learning that social situations are safe',
        'It makes you physically tired',
        'It causes other people to judge you more',
        'It increases your energy levels',
      ],
      correctIndex: 0,
    },
  },
  {
    type: 'completion',
    title: 'Great work',
    body: 'You completed Module 1: Intro to Social Anxiety',
  },
];

export default function SocialAnxietyModule() {
  const [pageIndex, setPageIndex] = useState(0);
  const [reflectionAnswers, setReflectionAnswers] = useState({});
  const [reflectText, setReflectText] = useState('');
  const [quizChoice, setQuizChoice] = useState(null);

  const page = pages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;

  const goNext = () => setPageIndex((i) => Math.min(i + 1, pages.length - 1));
  const goBack = () => setPageIndex((i) => Math.max(i - 1, 0));

  const renderVideo = (video) => (
    <div className="mod-flow-video">
      <iframe
        src={youtubeEmbedUrl(video.url)}
        title={video.label}
        allow="accelerated-video; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      <div className="mod-flow-video-label">{video.label}</div>
    </div>
  );

  const renderPage = () => {
    switch (page.type) {
      case 'intro':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <p className="mod-flow-body">{page.intro}</p>
            <div className="mod-flow-list">
              {page.items.map((item) => (
                <div className="mod-flow-list-item" key={item.label}>
                  <span className="mod-flow-list-label">{item.label}</span>
                  <span className="mod-flow-list-time">{item.time}</span>
                </div>
              ))}
            </div>
            <p className="mod-flow-footer-text">{page.footer}</p>
          </>
        );

      case 'choice':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <p className="mod-flow-body">{page.subtitle}</p>
            <div className="mod-flow-list">
              {page.options.map((opt) => (
                <button className="mod-flow-choice" key={opt.label} onClick={goNext}>
                  <span className="mod-flow-choice-label">{opt.label}</span>
                  <span className="mod-flow-choice-desc">{opt.desc}</span>
                </button>
              ))}
            </div>
          </>
        );

      case 'transition':
        return <h2 className="mod-flow-transition-text">{page.text}</h2>;

      case 'content':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <p className="mod-flow-body">{page.body}</p>
            {page.video && renderVideo(page.video)}
          </>
        );

      case 'symptoms':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <div className="mod-flow-list">
              {page.items.map((item) => (
                <div className="mod-flow-list-item" key={item}>
                  <span className="mod-flow-list-label">{item}</span>
                </div>
              ))}
            </div>
            <p className="mod-flow-footer-text">{page.prompt}</p>
          </>
        );

      case 'components':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <div className="mod-flow-list">
              {page.items.map((item) => (
                <div className="mod-flow-list-item" key={item.num}>
                  <div className="mod-item-num mod-badge-1">{item.num}</div>
                  <div>
                    <div className="mod-flow-list-label">{item.label}</div>
                    <div className="mod-flow-list-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mod-flow-footer-text">{page.footer}</p>
          </>
        );

      case 'example':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <div className="mod-flow-example">
              <div className="mod-flow-example-row">
                <span className="mod-flow-example-tag">The feared situation</span>
                <p>{page.situation}</p>
              </div>
              <div className="mod-flow-example-row">
                <span className="mod-flow-example-tag">Physiological symptoms</span>
                <p>{page.physiological}</p>
              </div>
              <div className="mod-flow-example-row">
                <span className="mod-flow-example-tag">Behavioral component</span>
                <p>{page.behavioral}</p>
              </div>
              <div className="mod-flow-example-row">
                <span className="mod-flow-example-tag">Cognitive component</span>
                <p>{page.cognitive}</p>
              </div>
            </div>
          </>
        );

      case 'reflection':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <p className="mod-flow-body">{page.prompt}</p>
            {page.fields.map((field) => (
              <div className="mod-flow-field" key={field.key}>
                <label className="mod-flow-field-label">{field.label}</label>
                <textarea
                  className="mod-flow-textarea"
                  placeholder={field.placeholder}
                  value={reflectionAnswers[field.key] || ''}
                  onChange={(e) =>
                    setReflectionAnswers((prev) => ({ ...prev, [field.key]: e.target.value }))
                  }
                />
              </div>
            ))}
          </>
        );

      case 'cycle':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <p className="mod-flow-body">{page.intro}</p>
            <div className="mod-flow-list">
              {page.steps.map((step) => (
                <div className="mod-flow-list-item" key={step.num}>
                  <div className="mod-item-num mod-badge-1">{step.num}</div>
                  <div>
                    <div className="mod-flow-list-label">{step.label}</div>
                    <div className="mod-flow-list-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {page.video && renderVideo(page.video)}
          </>
        );

      case 'recap':
        return (
          <>
            <div className="mod-flow-list-item">
              <div className="mod-item-num mod-badge-1">{page.num}</div>
              <div>
                <div className="mod-flow-list-label">{page.title}</div>
                <div className="mod-flow-list-desc">{page.body}</div>
              </div>
            </div>
          </>
        );

      case 'reflect-remember': {
        const { quiz } = page;
        return (
          <>
            <h2 className="mod-flow-heading">{page.reflectTitle}</h2>
            <p className="mod-flow-body">{page.reflectPrompt}</p>
            <p className="mod-flow-example-tag">{page.reflectExample}</p>
            <textarea
              className="mod-flow-textarea"
              value={reflectText}
              onChange={(e) => setReflectText(e.target.value)}
            />
            <h2 className="mod-flow-heading" style={{ marginTop: '2rem' }}>Remember</h2>
            <p className="mod-flow-body">{quiz.question}</p>
            <div className="mod-flow-list">
              {quiz.options.map((opt, i) => {
                let state = '';
                if (quizChoice !== null) {
                  if (i === quiz.correctIndex) state = 'correct';
                  else if (i === quizChoice) state = 'wrong';
                }
                return (
                  <button
                    key={opt}
                    className={`mod-flow-choice mod-flow-quiz-option${state ? ` mod-flow-quiz-${state}` : ''}`}
                    onClick={() => setQuizChoice(i)}
                  >
                    <span className="mod-flow-choice-label">{opt}</span>
                    {state === 'correct' && <span className="mod-flow-quiz-mark">✓</span>}
                    {state === 'wrong' && <span className="mod-flow-quiz-mark">✕</span>}
                  </button>
                );
              })}
            </div>
          </>
        );
      }

      case 'completion':
        return (
          <>
            <h2 className="mod-flow-heading">{page.title}</h2>
            <p className="mod-flow-body">{page.body}</p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mod-flow">
      <div className="mod-eyebrow">Module 1: Intro to Social Anxiety</div>
      <div className="mod-flow-progress-track">
        <div
          className="mod-flow-progress-fill"
          style={{ width: `${((pageIndex + 1) / pages.length) * 100}%` }}
        />
      </div>
      <div className="mod-flow-card">{renderPage()}</div>
      {page.type !== 'choice' && (
        <div className="mod-flow-nav">
          {!isFirst && (
            <button className="mod-flow-btn mod-flow-btn-secondary" onClick={goBack}>
              Back
            </button>
          )}
          {!isLast ? (
            <button className="mod-flow-btn mod-flow-btn-primary" onClick={goNext}>
              Continue
            </button>
          ) : (
            <a className="mod-flow-btn mod-flow-btn-primary" href="/moment_e_docs/intro-anxiety">
              Done
            </a>
          )}
        </div>
      )}
      {page.type === 'choice' && !isFirst && (
        <div className="mod-flow-nav">
          <button className="mod-flow-btn mod-flow-btn-secondary" onClick={goBack}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
