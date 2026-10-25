import { useEffect, useRef, useState } from 'react';
import { PlayIcon, SkipIcon } from '../icons/DesktopIcons';

const DURATION = 30;
const NOTES = [164.81, 196, 220, 246.94, 220, 196, 174.61, 196];

function formatTime(seconds) {
  return `0:${String(Math.max(0, Math.round(seconds))).padStart(2, '0')}`;
}

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const audioContextRef = useRef(null);
  const noteTimerRef = useRef(null);
  const progressTimerRef = useRef(null);
  const noteIndexRef = useRef(0);

  const playNote = () => {
    const context = audioContextRef.current;
    if (!context) return;

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.value = NOTES[noteIndexRef.current % NOTES.length];
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.28);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.3);
    noteIndexRef.current += 1;
  };

  const stopPlayback = () => {
    window.clearInterval(noteTimerRef.current);
    window.clearInterval(progressTimerRef.current);
    noteTimerRef.current = null;
    progressTimerRef.current = null;
    setIsPlaying(false);
  };

  const startPlayback = async () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioContextRef.current) audioContextRef.current = new AudioContext();
    await audioContextRef.current.resume();
    playNote();
    noteTimerRef.current = window.setInterval(playNote, 420);
    progressTimerRef.current = window.setInterval(() => {
      setElapsed((current) => (current >= DURATION ? 0 : current + 0.25));
    }, 250);
    setIsPlaying(true);
  };

  const togglePlayback = () => {
    if (isPlaying) stopPlayback();
    else startPlayback();
  };

  const restartTrack = () => {
    setElapsed(0);
    noteIndexRef.current = 0;
  };

  useEffect(() => () => {
    window.clearInterval(noteTimerRef.current);
    window.clearInterval(progressTimerRef.current);
    audioContextRef.current?.close();
  }, []);

  return (
    <section className="flex h-full min-h-[150px] w-full gap-[14px] rounded-[17px] bg-white p-[17px] shadow-[0_18px_35px_rgba(0,0,0,0.10)]" aria-label="Music player">
      <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-[10px] bg-[#f45740]">
        <p className="absolute left-1 top-1 m-0 font-serif text-[7px] italic text-[#236d45]">NATHANIEL</p>
        <div className="absolute inset-x-0 bottom-3 text-center text-[9px] font-black tracking-[0.2em] text-[#f7d35d]">FOCUS</div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col pt-1">
        <p className="m-0 truncate text-[14px] font-semibold text-[#303030]">Focus Loop</p>
        <p className="mt-1 truncate text-[10px] text-[#949494]">Original sound — Nathaniel</p>
        <div className="mt-3 flex items-center gap-5 text-[#4c4c4c]">
          <button type="button" onClick={restartTrack} className="rounded p-1 transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2" aria-label="Previous track"><SkipIcon direction="previous" className="h-4 w-4" /></button>
          <button type="button" onClick={togglePlayback} className="rounded p-1 transition hover:scale-110 focus-visible:outline focus-visible:outline-2" aria-label={isPlaying ? 'Pause music' : 'Play music'}><PlayIcon playing={isPlaying} className="h-5 w-5" /></button>
          <button type="button" onClick={restartTrack} className="rounded p-1 transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2" aria-label="Next track"><SkipIcon className="h-4 w-4" /></button>
        </div>
        <div className="mt-auto">
          <div className="h-[3px] overflow-hidden rounded-full bg-[#e8e8e8]">
            <div className="h-full rounded-full bg-[#626262] transition-[width] duration-200" style={{ width: `${(elapsed / DURATION) * 100}%` }} />
          </div>
          <div className="mt-1 flex justify-between text-[8px] text-[#aaa]">
            <span>{formatTime(elapsed)}</span><span>-{formatTime(DURATION - elapsed)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MusicPlayer;
