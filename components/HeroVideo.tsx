"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduceMotion) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div aria-hidden className="hero-glow">
      <video
        ref={videoRef}
        className="hero-video"
        src="/video/hero.mp4"
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="hero-video-overlay" />
      <div className="hero-grain" />
    </div>
  );
}
