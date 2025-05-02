import React, { useState, useRef, useEffect } from "react";
import "./ChromieDemo.css";

// Feature information database
const featureInfo = {
  "learning-styles": {
    text: "I support different learning styles! Some children learn by seeing, others by hearing, reading, or doing. I adapt my communication to work for everyone!",
    audio: "/assets/audio/learning-styles.mp3",
    video: "/assets/videos/learning-styles-demo.mp4",
    title: "Multi-modal Learning Support",
  },
  "contextual-delivery": {
    text: "I provide just-in-time education! When I detect potential risks, I can immediately provide age-appropriate guidance.",
    audio: "/assets/audio/contextual-delivery.mp3",
    video: "/assets/videos/contextual-delivery-demo.mp4",
    title: "Contextual Education Delivery",
  },
  "password-generator": {
    text: "My story-based password generator creates memorable but secure passwords! Each story creates a unique, secure password that's easy to remember.",
    audio: "/assets/audio/password-generator.mp3",
    video: "/assets/videos/password-demo.mp4",
    title: "Story-based Password Generator",
  },
  "content-analysis": {
    text: "I can identify potential cyberbullying and inappropriate content to keep children safe online!",
    audio: "/assets/audio/content-analysis.mp3",
    video: "/assets/videos/analysis-demo.mp4",
    title: "Content Analysis System",
  },
  privacy: {
    text: "Privacy is important! I work entirely within your browser and don't send any data elsewhere. All monitoring happens locally!",
    audio: "/assets/audio/privacy.mp3",
    video: "/assets/videos/privacy-demo.mp4",
    title: "Privacy-preserving Design",
  },
  accessibility: {
    text: "I'm designed to be accessible for everyone! You can adjust my text size, colours, and contrast to make everything easier to read.",
    audio: "/assets/audio/accessibility.mp3",
    video: "/assets/videos/accessibility-demo.mp4",
    title: "Accessibility Tools",
  },
  "typing-monitor": {
    text: "I can remind you to take breaks while typing! Good digital habits are important for physical and mental health.",
    audio: "/assets/audio/typing-monitor.mp3",
    video: "/assets/videos/typing-monitor-demo.mp4",
    title: "Typing Monitor",
  },
};

const ChromieDemo = ({ onFeatureActive }) => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showRing, setShowRing] = useState(false);

  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  useEffect(() => {
    const features = document.querySelectorAll("[data-feature]");
    features.forEach((feature) => {
      feature.addEventListener("mouseenter", handleFeatureEnter);
      feature.addEventListener("mouseleave", handleFeatureLeave);
    });

    return () => {
      features.forEach((feature) => {
        feature.removeEventListener("mouseenter", handleFeatureEnter);
        feature.removeEventListener("mouseleave", handleFeatureLeave);
      });
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  const handleFeatureEnter = (e) => {
    const featureId = e.currentTarget.dataset.feature;
    if (!featureInfo[featureId]) return;

    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left - 120,
      y: rect.top - 30,
    });

    setActiveFeature(featureId);
    onFeatureActive?.(true);
    setIsVideoPlaying(true);

    setShowRing(true);
    setTimeout(() => setShowRing(false), 600);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = featureInfo[featureId].audio;
      audioRef.current
        .play()
        .catch((err) => console.log("Audio playback prevented:", err));
    }
  };

  const handleFeatureLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveFeature(null);
      setIsVideoPlaying(false);
      onFeatureActive?.(false);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 300);
  };

  return (
    <div className="chromie-demo-container">
      {/* Cow character */}
      {activeFeature && (
        <div
          className="chromie-demo-cow"
          style={{
            left: `${Math.max(0, position.x)}px`,
            top: `${Math.max(0, position.y)}px`,
          }}
        >
          {showRing && <div className="teleport-ring" />}
          <img
            src="/assets/images/chromie-mascot.png"
            alt="Chromie the Space Cow"
          />
        </div>
      )}

      {/* Speech bubble */}
      {activeFeature && (
        <div
          className="speech-bubble active"
          style={{
            left: `${Math.max(20, position.x + 100)}px`,
            top: `${Math.max(20, position.y)}px`,
          }}
        >
          <h4>{featureInfo[activeFeature]?.title}</h4>
          <p>{featureInfo[activeFeature]?.text}</p>
        </div>
      )}

      {/* Video player with dreamy particles */}
      {activeFeature && isVideoPlaying && (
        <div className="video-player">
          <div className="dream-particles">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                  background: `radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0))`,
                  width: `${8 + Math.random() * 8}px`,
                  height: `${8 + Math.random() * 8}px`,
                }}
              />
            ))}
          </div>

          <video
            ref={videoRef}
            autoPlay
            muted
            controls
            src={featureInfo[activeFeature]?.video}
          />
        </div>
      )}

      {/* Hidden audio element */}
      <audio ref={audioRef} className="hidden-audio" />
    </div>
  );
};

export default ChromieDemo;
