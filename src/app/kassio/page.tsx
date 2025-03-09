'use client';

import { AnimateEnter } from '@/components';
import { Gift, SpeakerHigh } from '@phosphor-icons/react';
import { useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';

export default function KassioPage() {
  const [showGift, setShowGift] = useState(false);

  const openGift = () => {
    audioRef.current?.pause();
    setShowGift(true);
    confetti({
      particleCount: 2000,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      document.getElementById('youtube-video')?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleClickToPlayMusic() {
    if (audioRef.current === null) {
      audioRef.current = new Audio('/parabens.mp3');

      confetti({
        particleCount: 2000,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
    const audio = audioRef.current;

    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimateEnter delay={0.2}>
        <div className="flex flex-col items-center mb-4">
          <button
            className="py-4 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold text-lg px-8 rounded-md mb-4 flex gap-2 items-center"
            onClick={handleClickToPlayMusic}
          >
            <SpeakerHigh />
            Clique aqui para tocar a música
          </button>
        </div>
      </AnimateEnter>

      <AnimateEnter delay={0.4}>
        <div className="flex justify-center mb-4">
          <Image
            src="/kea.jpeg"
            width={160}
            height={40}
            alt="Vovô"
            className="rounded-full border-4 border-slate-200 h-60 w-60 object-cover"
          />
        </div>
      </AnimateEnter>

      <AnimateEnter delay={0.6}>
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-transparent bg-clip-text">
          O Melhor Vovô do Mundo!
        </h1>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <p className="text-lg text-slate-900 font-medium text-center px-4">
          Querido Vovô Kassio, você é muito especial para mim! Desejo muita saúde, alegria e muitos
          momentos felizes!
        </p>
      </AnimateEnter>
      <AnimateEnter delay={1.2}>
        <button
          className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold text-lg px-8 py-6 flex items-center rounded-md"
          onClick={openGift}
        >
          <Gift className="mr-2 h-5 w-5" /> Clique aqui para abrir o presente
        </button>
      </AnimateEnter>

      <div
        className={`mt-8 transition-all duration-500 ${showGift ? 'opacity-100' : 'opacity-0'}`}
        id="youtube-video"
      >
        {showGift && (
          <iframe
            width="100%"
            height="240"
            src="/video.mp4"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )}
      </div>
    </div>
  );
}
