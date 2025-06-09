import React, { useEffect, useState } from 'react';
import './Loader.css';

interface LoaderProps {
  onFinish?: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [phase, setPhase] = useState<'initializing' | 'welcome' | 'done'>('initializing');

  useEffect(() => {
    if (phase === 'initializing') {
      const timer = setTimeout(() => setPhase('welcome'), 1500);
      return () => clearTimeout(timer);
    }
    if (phase === 'welcome') {
      // Give time for fade/shrink animation (~2.5s)
      const timer = setTimeout(() => setPhase('done'), 2500);
      return () => clearTimeout(timer);
    }
    if (phase === 'done') {
      if (onFinish) onFinish();
    }
  }, [phase, onFinish]);

  if (phase === 'done') return null;

  return (
    <div className="loader-screen">
      {phase === 'initializing' && (
        <>
          <div className="loader-spinner"></div>
          <div className="loader-text">
            <span>Initializing </span>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
        </>
      )}

      {phase === 'welcome' && (
        <div className="welcome-blur-overlay">
          <div className="welcome-fullscreen">
            Welcome to Sopho's website
          </div>
        </div>
      )}

    </div>
  );
}
