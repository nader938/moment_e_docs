import React, { useRef, useState } from 'react';

const groups = [
  {
    label: 'Set Up',
    tutorials: [
      {
        id: 'signin',
        label: 'Signing In',
        desc: 'Sign in with your email and password, or continue with Google.',
        src: '/moment_e_docs/img/signin_demo.mp4',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#1a5f8e" strokeWidth="1.8"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      },
      {
        id: 'notifications',
        label: 'Notifications',
        desc: "Enable push notifications so you don't miss a task.",
        src: '/moment_e_docs/img/notifications_demo.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      },
      {
        id: 'version',
        label: 'Checking Your App Version',
        desc: 'Learn where to find your current app version.',
        src: '/moment_e_docs/img/version_demo.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#1a5f8e" strokeWidth="1.8"/><path d="M12 8h.01M12 12v4" stroke="#1a5f8e" strokeWidth="2" strokeLinecap="round"/></svg>,
      },
      {
        id: 'apple-watch',
        label: 'Connecting to Apple Watch',
        desc: 'How to connect moment_e to your Apple Watch to collect sensor data like heart rate. Note: you will need to have your Apple Watch already set up before following these steps.',
        src: '/moment_e_docs/img/apple_watch_setup.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="3" stroke="#1a5f8e" strokeWidth="1.8"/><path d="M7 8h10M7 16h10" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/><path d="M10 3V1M14 3V1M10 21v2M14 21v2" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      },
      {
        id: 'home',
        label: 'Navigating the Home Screen',
        desc: 'A quick tour of the moment_e home screen and its key sections.',
        src: '/moment_e_docs/img/home_screen_demo.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 12L12 3l9 9M5 10v9a1 1 0 0 0 1 1h4v-4h4v4h4a1 1 0 0 0 1-1v-9" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      },
    ],
  },
  {
    label: 'Cognitive Tasks',
    tutorials: [
      {
        id: 'cognitive-intro',
        label: 'Introduction to the Tasks',
        desc: 'A quick overview of the cognitive tasks in moment_e.',
        src: '/moment_e_docs/img/cognitive_intro.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#1a6e82" strokeWidth="1.8"/><path d="M12 8h.01M12 12v4" stroke="#1a6e82" strokeWidth="2" strokeLinecap="round"/></svg>,
      },
      {
        id: 'focus',
        label: 'How to do the Focus Task',
        desc: 'Step-by-step walkthrough of the focus task in moment_e.',
        src: '/moment_e_docs/img/flanker_demo.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#1a5f8e" strokeWidth="1.8"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      },
      {
        id: 'scrambled',
        label: 'How to do the Scrambled Sentence Task',
        desc: 'Learn how to complete the scrambled sentence task.',
        src: '/moment_e_docs/img/sst_demo.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h10M4 18h13" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/><path d="M17 15l3 3-3 3" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      },
    ],
  },
  {
    label: 'Graphing',
    tutorials: [
      {
        id: 'graph',
        label: 'How to Graph Your Data',
        desc: 'Learn how to visualize your data to track your progress and symptoms over time.',
        src: '/moment_e_docs/img/graph_demo.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      },
      {
        id: 'sensor',
        label: 'Sensor Data Tutorial',
        desc: 'Understand how sensor data is collected and displayed in the app.',
        src: null,
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#1a5f8e" strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      },
    ],
  },
  {
    label: 'Questionnaires',
    tutorials: [
      {
        id: 'questionnaire',
        label: 'Completing a Questionnaire',
        desc: 'How to find and complete questionnaires in moment_e.',
        src: '/moment_e_docs/img/questionnaire_demo.mov',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 12h6M9 16h4" stroke="#1a5f8e" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      },
    ],
  },
];

function VideoPlaceholder() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 20px 32px' }}>
      <div style={{ width: 'min(220px, 60vw)', background: '#1a1a1a', borderRadius: 40, padding: 4, boxShadow: '0 0 0 1px #444, 0 20px 50px rgba(0,0,0,0.25)' }}>
        <div style={{ borderRadius: 36, overflow: 'hidden', background: '#2a2a2a', aspectRatio: '9/16', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#555" strokeWidth="1.5"/><path d="M12 8v4M12 16h.01" stroke="#555" strokeWidth="2" strokeLinecap="round"/></svg>
          <span style={{ color: '#666', fontSize: 13, fontWeight: 500 }}>Video coming soon</span>
        </div>
      </div>
    </div>
  );
}

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 20px 32px' }}>
      <div style={{ width: 'min(220px, 60vw)', background: '#1a1a1a', borderRadius: 40, padding: 4, boxShadow: '0 0 0 1px #444, 0 20px 50px rgba(0,0,0,0.25)' }}>
        <div style={{ borderRadius: 36, overflow: 'hidden', position: 'relative' }}>
          <video
            ref={videoRef}
            src={src}
            loop
            playsInline
            controls
            style={{ width: '100%', display: 'block', marginTop: '-11%', marginBottom: '-2%' }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          {!playing && (
            <div onClick={toggle} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.15)', cursor: 'pointer', zIndex: 3, paddingBottom: '48px' }}>
              <div style={{ width: 58, height: 58, borderRadius: '50%', background: 'rgba(255,255,255,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><polygon points="7,4 20,12 7,20" fill="#1e3a5f"/></svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TutorialHub({ group: groupName, hideLabel }) {
  const [open, setOpen] = useState(null);
  const filtered = groupName ? groups.filter(g => g.label === groupName) : groups;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 640, margin: '0 auto', width: '100%' }}>
      {filtered.map((group) => (
        <div key={group.label}>
          {!hideLabel && (
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1a5f8e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, paddingLeft: 4 }}>
              {group.label}
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {group.tutorials.map((t) => {
              const isOpen = open === t.id;
              return (
                <div key={t.id} style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', transition: 'box-shadow 0.15s' }}>
                  <div
                    onClick={() => setOpen(isOpen ? null : t.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 20px', cursor: 'pointer' }}
                  >
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: '#edf4fb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{t.icon}</div>
                    <span style={{ flex: 1, fontSize: 'clamp(15px, 3.5vw, 20px)', fontWeight: 600, color: '#0d2d4a', lineHeight: 1.3 }}>{t.label}</span>
                    <span style={{ fontSize: 24, color: '#9ab8cc', fontWeight: 300, transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>
                  </div>
                  {isOpen && (
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', padding: '0 20px 24px' }}>
                      <p style={{ fontSize: 16, color: '#0d2d4a', margin: '16px 0 0' }}>{t.desc}</p>
                      {t.src ? <VideoPlayer src={t.src} /> : <VideoPlaceholder />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
