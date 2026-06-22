import React, { useEffect, useState } from 'react';
import { useAppStore } from '../store';
import { Mic, MicOff, PhoneOff, Star, ArrowLeft } from 'lucide-react';

export const AudioCall: React.FC = () => {
  const {
    activeScenario,
    setScreen,
    setActiveSessionResults,
    addHistoryEntry,
    messages,
  } = useAppStore();

  const [isMuted, setIsMuted] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Timer counter
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!activeScenario) return null;

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleHangUp = () => {
    // Generate a mock score and feedback report based on call length
    const score = Math.floor(Math.random() * 15) + 85; // 85 - 100
    const summary = `Excellent voice chat practice! Pronunciation was clear. You responded immediately without long pauses. In order to sound like a local, focus on the flat retroflex sounds when saying words like 'kannada'.`;

    setActiveSessionResults(score, summary);

    // Save to history
    addHistoryEntry({
      id: 'hist-' + Math.random().toString(36).substring(7),
      scenarioTitle: activeScenario.title,
      scenarioId: activeScenario.id,
      date: new Date().toISOString().split('T')[0],
      score,
      durationMin: Math.ceil(seconds / 60) || 1,
      improvementSummary: summary,
      messages: [
        { id: '1', role: 'assistant', content: activeScenario.openingLine, timestamp: 'Voice Call' },
        { id: '2', role: 'user', content: '[Muted / Voice input transcribed successfully]', timestamp: 'Voice Call' },
        { id: '3', role: 'assistant', content: 'Super! Keep speaking in Kannada!', timestamp: 'Voice Call' }
      ]
    });

    setScreen('Analysis');
  };

  // 12 bars for our waveform visualizer
  const waveBars = Array.from({ length: 14 });

  return (
    <div className="relative min-h-screen bg-samvad-bg-dark text-white flex flex-col justify-between py-10 px-5 transition-colors duration-500 overflow-hidden">
      {/* Floating background orbs - darker mode styles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-samvad-primary opacity-10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-samvad-secondary opacity-10 blur-3xl animate-float-delayed pointer-events-none" />

      {/* Header Context */}
      <div className="flex items-center space-x-3.5 z-10 w-full max-w-md mx-auto">
        <button
          onClick={() => setScreen('ScenarioDetail')}
          className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 transition"
        >
          <ArrowLeft size={16} />
        </button>
        <div>
          <h3 className="font-extrabold text-sm leading-tight truncate max-w-[200px]">
            {activeScenario.title}
          </h3>
          <span className="text-[10px] text-samvad-primary font-black uppercase tracking-wider">
            Voice session with {activeScenario.personaName}
          </span>
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 max-w-md mx-auto w-full">
        {/* Profile/Avatar Indicator */}
        <div className="relative w-28 h-28 mb-10 flex items-center justify-center">
          {/* Pulsing Outer Rings */}
          <div className="absolute inset-0 bg-samvad-primary/10 rounded-full animate-ping pointer-events-none" />
          <div className="absolute -inset-4 bg-samvad-secondary/5 rounded-full animate-pulse pointer-events-none" />
          
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-samvad-primary to-samvad-brand-lavender p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-samvad-card-dark flex items-center justify-center text-white text-3xl font-black">
              {activeScenario.personaName[0]}
            </div>
          </div>
        </div>

        {/* Dynamic Waveform Graph */}
        <div className="flex items-end justify-center space-x-1.5 h-20 w-full mb-4 px-10">
          {waveBars.map((_, i) => {
            // Random duration and delay for the mock waveform bounce
            const heightMultiplier = Math.sin((i / (waveBars.length - 1)) * Math.PI);
            const duration = 0.6 + Math.random() * 0.8;
            const delay = Math.random() * 0.5;

            return (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-samvad-secondary to-samvad-primary rounded-full transition-all duration-300"
                style={{
                  height: `${20 + heightMultiplier * 50}px`,
                  animation: `waveform-pulse ${duration}s ease-in-out infinite alternate`,
                  animationDelay: `${delay}s`,
                  transformOrigin: 'bottom'
                }}
              />
            );
          })}
        </div>

        {/* Timer status */}
        <div className="text-center">
          <span className="text-2xl font-black font-mono tracking-wider">{formatTime(seconds)}</span>
          <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider block mt-1.5">
            {isMuted ? 'Microphone Muted' : 'Speaking Practice Live'}
          </span>
        </div>
      </div>

      {/* Goal reminder bar */}
      <div className="w-full max-w-md mx-auto bg-zinc-900/60 border border-zinc-800/80 p-4 rounded-2xl flex items-start space-x-2.5 mb-8 z-10">
        <Star size={14} className="text-samvad-tertiary mt-0.5 flex-shrink-0" />
        <p className="text-[11px] font-bold text-zinc-300 leading-snug">
          Active goal: {activeScenario.goal}
        </p>
      </div>

      {/* Call controls */}
      <div className="flex items-center justify-center space-x-6 z-10 w-full max-w-md mx-auto">
        {/* Mute Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`p-4 rounded-2xl border transition active:scale-95 flex items-center justify-center ${
            isMuted
              ? 'bg-samvad-primary border-samvad-primary text-white shadow-md'
              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
          }`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <MicOff size={22} /> : <Mic size={22} />}
        </button>

        {/* Hang Up Button */}
        <button
          onClick={handleHangUp}
          className="p-5 rounded-2xl bg-red-600 border border-red-500 text-white shadow-lg active:scale-95 transition flex items-center justify-center hover:bg-red-500"
          title="End Call and View Score"
        >
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
};
