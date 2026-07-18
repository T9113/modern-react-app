'use client';

import { useRef, useEffect, useState } from 'react';

export default function HomeHeroSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="hero-slider">
      <video
        ref={videoRef}
        className="hero-video"
        src="/videos/home-page.mp4"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
      />
      
    </section>
  );
}
