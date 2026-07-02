import React, { useRef, useState } from 'react';

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="using-iphone">
      <div className="using-iphone-screen" style={{ position: 'relative' }}>
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
          <div
            onClick={toggle}
            style={{
              position: 'absolute', inset: 0, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.15)', cursor: 'pointer', zIndex: 3,
              paddingBottom: '48px',
            }}
          >
            <div style={{
              width: 58, height: 58, borderRadius: '50%',
              background: 'rgba(255,255,255,0.93)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <polygon points="7,4 20,12 7,20" fill="#1e3a5f"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
