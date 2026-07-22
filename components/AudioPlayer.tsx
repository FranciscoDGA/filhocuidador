"use client";

import { useState, useEffect, useRef } from "react";

interface AudioPlayerProps {
  text: string;
}

export default function AudioPlayer({ text }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setIsSupported("speechSynthesis" in window);
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function handlePlayPause() {
    if (!isSupported) return;

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
    } else {
      // Clean text - remove HTML tags
      const cleanText = text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "pt-BR";
      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  }

  if (!isSupported) return null;

  return (
    <div className="bg-brand-primary/[0.03] border border-border-base p-4 mb-6">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayPause}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary text-white hover:bg-brand-primary/90 transition-colors shrink-0"
          aria-label={isPlaying ? "Pausar leitura" : "Ouvir artigo"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        <div>
          <p className="text-sm font-medium text-brand-primary">
            {isPlaying ? "Ouvindo artigo..." : "Ouça este artigo"}
          </p>
          <p className="text-xs text-brand-secondary/60">
            {isPlaying ? "Clique para pausar" : "Clique para iniciar a leitura em áudio"}
          </p>
        </div>
      </div>
    </div>
  );
}
