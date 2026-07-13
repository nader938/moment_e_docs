import React, { useState } from 'react';

function youtubeEmbedUrl(url) {
  const id = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${id}`;
}

const BADGE_COLORS = [
  { bg: '#1B3F6E', fg: '#fff' },
  { bg: '#0EA5A5', fg: '#fff' },
  { bg: '#5BA4D4', fg: '#fff' },
  { bg: '#C4B5FD', fg: '#4C1D95' },
  { bg: '#A8D4E8', fg: '#1B3F6E' },
];
const badgeColor = (i) => BADGE_COLORS[(i - 1) % BADGE_COLORS.length];

const PILL_COLORS = [
  { bg: '#DBEAFE', border: '#BFDBFE', fg: '#1e40af' },
  { bg: '#FCE7F3', border: '#F9A8D4', fg: '#9d174d' },
  { bg: '#FEF3C7', border: '#FDE68A', fg: '#92400e' },
  { bg: '#D1FAE5', border: '#6EE7B7', fg: '#065f46' },
  { bg: '#E0E7FF', border: '#C7D2FE', fg: '#3730a3' },
  { bg: '#F3E8FF', border: '#DDD6FE', fg: '#6b21a8' },
];
const pillColor = (i) => PILL_COLORS[i % PILL_COLORS.length];

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="#1B3F6E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CompassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="#0EA5A5" strokeWidth="1.6" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" stroke="#0EA5A5" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="#C0D8EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const TopicsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#1B3F6E" strokeWidth="1.8" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#1B3F6E" strokeWidth="1.8" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#1B3F6E" strokeWidth="1.8" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#1B3F6E" strokeWidth="1.8" />
  </svg>
);
const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TRANSITION_GRADIENTS = {
  blue: 'linear-gradient(180deg, #ffffff 0%, #ddeeff 15%, #e8f0fb 50%, #f4f7fd 80%, #ffffff 100%)',
  sky: 'linear-gradient(180deg, #ffffff 0%, #d4e8f5 15%, #e2f0f9 50%, #f2f8fd 80%, #ffffff 100%)',
  teal: 'linear-gradient(180deg, #ffffff 0%, #d2ebe9 15%, #e0f2f0 50%, #f0f9f8 80%, #ffffff 100%)',
  green: 'linear-gradient(180deg, #ffffff 0%, #d8f0dc 15%, #e6f6e9 50%, #f4faf5 80%, #ffffff 100%)',
  forest: 'linear-gradient(180deg, #ffffff 0%, #bfe8c4 15%, #9edda6 50%, #e3f6e5 80%, #ffffff 100%)',
  exposure: 'linear-gradient(180deg, #ffffff 0%, #cdeaf3 15%, #a9dde9 50%, #eaf8fa 80%, #ffffff 100%)',
};

const TRANSITION_TEXT_COLORS = {
  green: '#2a5c28',
  forest: '#2a5c28',
};

export default function ModuleFlow({ pages, topics, doneHref, doneLabel = 'Back to start', originHref }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [reflectionAnswers, setReflectionAnswers] = useState({});
  const [reflectTexts, setReflectTexts] = useState({});
  const [quizChoices, setQuizChoices] = useState({});
  const [openCards, setOpenCards] = useState({});
  const [view, setView] = useState('flow');
  const [exploring, setExploring] = useState(false);

  const page = pages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;
  const backHref = originHref || doneHref;
  const choiceIndex = pages.findIndex((p) => p.type === 'choice');

  const goToTopic = (startIndex) => {
    setPageIndex(startIndex);
    setView('flow');
  };
  const openPicker = () => setView('picker');
  const backToChoice = () => {
    setPageIndex(choiceIndex);
    setView('flow');
  };

  const goNext = () => setPageIndex((i) => Math.min(i + 1, pages.length - 1));
  const goBack = () => setPageIndex((i) => Math.max(i - 1, 0));
  const fieldKey = (key) => `${pageIndex}:${key}`;
  const cardKey = (n) => `${pageIndex}:${n}`;

  const renderVideo = (video) => (
    <div className="pm-video">
      <iframe
        src={youtubeEmbedUrl(video.url)}
        title={video.label}
        allow="accelerated-video; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      <div className="pm-video-label">Source: {video.label}</div>
    </div>
  );

  const renderFlipList = (items) => (
    <div>
      {items.map((item) => {
        const key = cardKey(item.num);
        const open = !!openCards[key];
        const color = badgeColor(item.num);
        return (
          <div
            key={item.num}
            className={`pm-flip-card${open ? ' open' : ''}`}
            onClick={() => setOpenCards((prev) => ({ ...prev, [key]: !prev[key] }))}
          >
            <div className="pm-flip-front">
              <div className="pm-flip-icon" style={{ background: color.bg, color: color.fg }}>{item.num}</div>
              <div className="pm-flip-text">{item.label}</div>
            </div>
            {open && <div className="pm-flip-back">{item.desc}</div>}
            <span className="pm-flip-chevron">⌄</span>
          </div>
        );
      })}
    </div>
  );

  const renderPage = () => {
    switch (page.type) {
      case 'intro':
        return (
          <>
            <h1 className="pm-h1">{page.intro}</h1>
            <div className="pm-simple-list">
              {page.items.map((item) => (
                <div className="pm-simple-row" key={item.label}>
                  <span>{item.label}</span>
                  <span className="pm-simple-time">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="pm-done-banner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#166534" strokeWidth="1.8" /><path d="M12 7v5l3 3" stroke="#166534" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <p>{page.footer}</p>
            </div>
          </>
        );

      case 'choice':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            <p className="pm-p">{page.subtitle}</p>
            {page.options.map((opt, i) => (
              <div
                className="pm-choice-card"
                key={opt.label}
                onClick={() => {
                  if (i === 1 && topics && topics.length) {
                    setExploring(true);
                    openPicker();
                  } else {
                    goNext();
                  }
                }}
              >
                <div className="pm-choice-top">
                  <div className={`pm-choice-icon${i === 1 ? ' teal' : ''}`}>
                    {i === 1 ? <CompassIcon /> : <ArrowIcon />}
                  </div>
                  <div className="pm-choice-label">{opt.label}</div>
                </div>
                <p className="pm-choice-desc">{opt.desc}</p>
              </div>
            ))}
          </>
        );

      case 'transition':
        return (
          <div className="pm-transition-wrap" style={{ background: TRANSITION_GRADIENTS[page.tint || 'blue'] }}>
            <h1 className="pm-transition-text" style={TRANSITION_TEXT_COLORS[page.tint] ? { color: TRANSITION_TEXT_COLORS[page.tint] } : undefined}>{page.text}</h1>
          </div>
        );

      case 'title-card': {
        const tcColor = TRANSITION_TEXT_COLORS[page.tint];
        return (
          <div className="pm-transition-wrap" style={{ background: '#ffffff' }}>
            <h1 className="pm-transition-text" style={tcColor ? { color: tcColor } : undefined}>{page.title}</h1>
            {page.subtitle && <p className="pm-titlecard-subtitle" style={tcColor ? { color: tcColor } : undefined}>{page.subtitle}</p>}
            <button
              className="pm-btn-next pm-titlecard-start"
              style={tcColor ? { background: tcColor } : undefined}
              onClick={goNext}
            >
              Start
            </button>
          </div>
        );
      }

      case 'content':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            {page.source && (
              <p className="pm-excerpt-note">
                Excerpt from{' '}
                <a href={page.source.href} target="_blank" rel="noopener noreferrer">
                  {page.source.label}
                </a>
              </p>
            )}
            {page.body.split('\n\n').map((para, i) => (
              <p className="pm-p" key={i}>
                {para.split('\n').map((line, j, arr) => (
                  <React.Fragment key={j}>{line}{j < arr.length - 1 && <br />}</React.Fragment>
                ))}
              </p>
            ))}
            {page.questions && (
              <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {page.questions.map((q, i) => (
                  <p key={i} style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0d2b4a', margin: 0, lineHeight: 1.4 }}>{q}</p>
                ))}
              </div>
            )}
            {page.video && renderVideo(page.video)}
          </>
        );

      case 'symptoms':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            {page.body && page.body.split('\n\n').map((para, i) => (
              <p className="pm-p" key={i}>{para}</p>
            ))}
            <div className="pm-pill-row">
              {page.items.map((item, i) => {
                const c = pillColor(i);
                return (
                  <div className="pm-pill" style={{ background: c.bg, border: `1.5px solid ${c.border}`, color: c.fg }} key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
            <p className="pm-p" style={{ fontWeight: 700, color: '#0d2b4a' }}>{page.prompt}</p>
          </>
        );

      case 'components':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            {page.video && renderVideo(page.video)}
            {page.body && page.body.split('\n\n').map((para, i) => (
              <p className="pm-p" key={i}>{para}</p>
            ))}
            {page.listTitle && <h2 className="pm-subheading">{page.listTitle}</h2>}
            {renderFlipList(page.items)}
            {page.footer && <p className="pm-p" style={{ marginTop: '14px' }}>{page.footer}</p>}
          </>
        );

      case 'example':
        return (
          <>
            {page.illustration && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>{page.illustration}</div>
            )}
            <h1 className="pm-h1">{page.title}</h1>
            <div className="pm-key-term">
              <strong>The feared situation</strong>
              <p>{page.situation}</p>
            </div>
            <div className="pm-key-term">
              <strong>Physiological symptoms</strong>
              <p>{page.physiological}</p>
            </div>
            <div className="pm-key-term">
              <strong>Behavioral component</strong>
              <p>{page.behavioral}</p>
            </div>
            <div className="pm-key-term">
              <strong>Cognitive component</strong>
              <p>{page.cognitive}</p>
            </div>
          </>
        );

      case 'reflection':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            <p className="pm-p">{page.prompt}</p>
            {page.fields.map((field) => (
              <div className="pm-field" key={field.key}>
                {field.label && <label className="pm-field-label">{field.label}</label>}
                <textarea
                  className="pm-textarea"
                  placeholder={field.placeholder}
                  value={reflectionAnswers[fieldKey(field.key)] || ''}
                  onChange={(e) =>
                    setReflectionAnswers((prev) => ({ ...prev, [fieldKey(field.key)]: e.target.value }))
                  }
                />
              </div>
            ))}
          </>
        );

      case 'cycle':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            <p className="pm-p">{page.intro}</p>
            {renderFlipList(page.steps)}
            {page.video && renderVideo(page.video)}
          </>
        );

      case 'recap':
        return (
          <>
            {page.title && <h1 className="pm-h1">{page.title}</h1>}
            {page.items.map((item) => {
              const color = badgeColor(item.num);
              return (
                <div className="pm-recap-card" key={item.num}>
                  <div className="pm-flip-icon" style={{ background: color.bg, color: color.fg }}>{item.num}</div>
                  <div>
                    <div className="pm-flip-text">{item.title}</div>
                    <div className="pm-flip-back" style={{ marginTop: '6px', paddingTop: 0, border: 'none' }}>{item.body}</div>
                  </div>
                </div>
              );
            })}
          </>
        );

      case 'cta':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            <p className="pm-p">{page.body}</p>
            <a className="pm-btn-next pm-cta-link" href={page.linkHref}>{page.linkLabel}</a>
          </>
        );

      case 'link-out':
        return (
          <>
            <h1 className="pm-h1">{page.title}</h1>
            <p className="pm-p">{page.body}</p>
            <a className="pm-external-link" href={page.linkHref} target="_blank" rel="noopener noreferrer">
              {page.linkLabel}
              <ExternalIcon />
            </a>
          </>
        );

      case 'reflect-remember': {
        const { quiz } = page;
        const selected = quizChoices[pageIndex] ?? null;
        return (
          <>
            <h1 className="pm-h1">{page.reflectTitle}</h1>
            <p className="pm-p">{page.reflectPrompt}</p>
            <p className="pm-hint">{page.reflectExample}</p>
            <textarea
              className="pm-textarea"
              value={reflectTexts[pageIndex] || ''}
              onChange={(e) => setReflectTexts((prev) => ({ ...prev, [pageIndex]: e.target.value }))}
            />
            <h1 className="pm-h1" style={{ marginTop: '1.75rem' }}>Remember</h1>
            <p className="pm-p">{quiz.question}</p>
            {quiz.options.map((opt, i) => {
              let cls = 'pm-q-opt';
              if (selected !== null) {
                if (i === quiz.correctIndex) cls += ' correct';
                else if (i === selected) cls += ' wrong';
              }
              return (
                <div key={opt} className={cls} onClick={() => setQuizChoices((prev) => ({ ...prev, [pageIndex]: i }))}>
                  {opt}
                </div>
              );
            })}
          </>
        );
      }

      case 'completion':
        return (
          <div className="pm-complete">
            <div className="pm-complete-ring-wrap">
              <div className="pm-ring pm-ring-1" />
              <div className="pm-ring pm-ring-2" />
              <div className="pm-ring pm-ring-3" />
              <div className="pm-check-circle">
                <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
                  <path d="M10 22l9 9 15-15" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="pm-check-path" />
                </svg>
              </div>
              <div className="pm-dot pm-dot-1" />
              <div className="pm-dot pm-dot-2" />
              <div className="pm-dot pm-dot-3" />
            </div>
            <h1 className="pm-complete-title">{page.title}</h1>
            {page.body && <p className="pm-complete-body">{page.body}</p>}
            {page.links && (
              <div className="pm-complete-links">
                {page.links.map((link) => (
                  <a className="pm-btn-back" href={link.href} key={link.label}>{link.label}</a>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const renderPicker = () => (
    <>
      <h1 className="pm-h1">Where would you like to start?</h1>
      <p className="pm-p">Tap any topic to jump straight in.</p>
      <div className="pm-simple-list">
        {topics.map((t, i) => (
          <button
            key={t.label}
            className="pm-topic-row"
            onClick={() => goToTopic(t.startIndex)}
          >
            <div className="pm-item-num" style={{ background: badgeColor(i + 1).bg, color: badgeColor(i + 1).fg }}>
              {i + 1}
            </div>
            <div className="pm-topic-text">
              <div className="pm-topic-label">{t.label}</div>
              {t.time && <div className="pm-topic-time">{t.time}</div>}
            </div>
            <ChevronIcon />
          </button>
        ))}
      </div>
    </>
  );

  if (view === 'picker') {
    return (
      <div className="pm-app">
        <div className="pm-topbar">
          <div className="pm-progress-wrap">
            <div className="pm-progress-label">Explore freely</div>
          </div>
        </div>
        <div className="pm-scroll-area">{renderPicker()}</div>
        <div className="pm-bottom-nav">
          <button className="pm-btn-back" onClick={backToChoice}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`pm-app${page.type === 'transition' || page.type === 'title-card' ? ' pm-app--bleed' : ''}`}>
      <div className="pm-topbar">
        <div className="pm-progress-wrap">
          <div className="pm-progress-bar">
            <div className="pm-progress-fill" style={{ width: `${((pageIndex + 1) / pages.length) * 100}%` }} />
          </div>
          <div className="pm-progress-label">{pageIndex + 1} / {pages.length}</div>
        </div>
      </div>
      <div className={`pm-scroll-area${page.type === 'transition' ? ' pm-scroll-area--bleed' : ''}`}>
        {renderPage()}
      </div>
      {page.type !== 'choice' && page.type !== 'title-card' && !(isLast && page.links) && (
        <div className="pm-bottom-nav">
          {isFirst ? (
            <a className="pm-btn-back" href={backHref}>Back</a>
          ) : (
            <button className="pm-btn-back" onClick={goBack}>Back</button>
          )}
          {exploring && !isLast && (
            <button className="pm-btn-icon" onClick={openPicker} title="Topics" aria-label="Topics">
              <TopicsIcon />
            </button>
          )}
          {!isLast ? (
            <button className="pm-btn-next" onClick={goNext}>Continue</button>
          ) : (
            <a className="pm-btn-next" href={doneHref}>{doneLabel}</a>
          )}
        </div>
      )}
      {page.type === 'choice' && (
        <div className="pm-bottom-nav">
          {isFirst ? (
            <a className="pm-btn-back" href={backHref}>Back</a>
          ) : (
            <button className="pm-btn-back" onClick={goBack}>Back</button>
          )}
        </div>
      )}
    </div>
  );
}
