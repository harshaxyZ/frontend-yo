import React, { useState } from 'react';
import { useAppStore } from '../store';
import { Award, Share2, ArrowRight, CheckCircle, MessageSquare, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const Analysis: React.FC = () => {
  const {
    activeSessionScore,
    activeSessionFeedback,
    messages,
    setScreen,
    activeScenario
  } = useAppStore();

  const [isConvoOpen, setIsConvoOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const score = activeSessionScore || 88;
  const feedback = activeSessionFeedback || "Good practice session! You successfully achieved the target goals. Continue speaking to improve your fluency and speed.";

  const handleShare = () => {
    navigator.clipboard.writeText(`I just scored ${score}/100 practicing Kannada on SAMVAD! Join me and learn on-device.`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Mock improvements based on score range
  const improvements = [
    { title: "Vocabulary Range", desc: "Successfully used standard nouns. Try to substitute 'coffee' with 'kaapi' or 'water' with 'neeru'." },
    { title: "Grammar & Structure", desc: "Subject-object-verb order was mostly correct. Keep suffix tags in mind when asking questions." },
    { title: "Pronunciation Clues", desc: "Ensure your retroflex consonant sounds are flat rather than rounded when pronouncing words like 'Soudha'." }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-6 px-4 md:py-10 pb-24 md:pb-10 min-h-screen text-samvad-text-primary-light dark:text-samvad-text-primary-dark">
      <div className="grain-overlay" />

      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-black tracking-widest uppercase text-samvad-secondary bg-samvad-secondary/10 px-3 py-1.5 rounded-full">
          Report Card
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight mt-4">Session Analysis</h2>
        <p className="text-sm text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark mt-2">
          Your conversation has been graded by our evaluation engine. Here is your feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Big Radial Score Circular Progress */}
        <div className="md:col-span-1 p-6 bg-samvad-card-light dark:bg-samvad-card-dark border border-gray-150/50 dark:border-zinc-800 rounded-2xl shadow-real flex flex-col items-center justify-center text-center">
          <div className="relative w-36 h-36 flex items-center justify-center mb-4">
            {/* SVG circle container */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="64"
                className="stroke-gray-100 dark:stroke-zinc-800 fill-none"
                strokeWidth="10"
              />
              <circle
                cx="72"
                cy="72"
                r="64"
                className="stroke-samvad-primary fill-none transition-all duration-1000"
                strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 64}`}
                strokeDashoffset={`${2 * Math.PI * 64 * (1 - score / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black">{score}%</span>
              <span className="text-[9px] uppercase font-black text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark tracking-wider">Fluency Score</span>
            </div>
          </div>
          <span className="text-xs font-extrabold text-samvad-tertiary bg-amber-50 dark:bg-amber-950/20 px-3 py-1 rounded-full flex items-center">
            <Award size={12} className="mr-1" /> Excellent Progress
          </span>
        </div>

        {/* Improvement Summary Card */}
        <div className="md:col-span-2 p-5 bg-samvad-card-light dark:bg-samvad-card-dark border border-gray-150/50 dark:border-zinc-800 rounded-2xl shadow-real flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-samvad-primary mb-3">
              <Sparkles size={16} />
              <h3 className="font-bold text-sm uppercase tracking-wider">Evaluation Summary</h3>
            </div>
            <p className="text-xs font-semibold leading-relaxed text-samvad-text-primary-light dark:text-samvad-text-primary-dark">
              {feedback}
            </p>
          </div>

          <div className="flex space-x-2.5 mt-5">
            <button
              onClick={handleShare}
              className={`flex-1 py-3 border font-extrabold text-xs rounded-xl flex items-center justify-center spring-transition active:scale-95 ${
                copied
                  ? 'bg-samvad-secondary border-samvad-secondary text-white shadow'
                  : 'border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-samvad-text-primary-light hover:border-gray-300'
              }`}
            >
              <Share2 size={13} className="mr-2" />
              {copied ? 'Copied Link!' : 'Share Results'}
            </button>
            <button
              onClick={() => setScreen('Home')}
              className="flex-1 py-3 bg-samvad-primary hover:bg-samvad-primary/95 text-white font-extrabold text-xs rounded-xl flex items-center justify-center shadow active:scale-95 spring-transition shimmer-sweep"
            >
              <span>Dashboard</span>
              <ArrowRight size={13} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Target points for improvement */}
      <div className="mb-6 p-5 bg-samvad-card-light dark:bg-samvad-card-dark border border-gray-150/50 dark:border-zinc-800 rounded-2xl shadow-real">
        <h3 className="text-sm font-bold uppercase tracking-wider text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark mb-4">
          Areas to Focus On
        </h3>
        <div className="space-y-4">
          {improvements.map((imp, idx) => (
            <div key={idx} className="flex items-start">
              <div className="p-1.5 bg-samvad-primary/10 rounded-lg text-samvad-primary mr-3.5 mt-0.5">
                <CheckCircle size={14} />
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-none">{imp.title}</h4>
                <p className="text-xs text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark mt-1.5 leading-relaxed">
                  {imp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Conversation Link Accordion */}
      {messages.length > 0 && (
        <div className="p-5 bg-samvad-card-light dark:bg-samvad-card-dark border border-gray-150/50 dark:border-zinc-800 rounded-2xl shadow-real">
          <button
            onClick={() => setIsConvoOpen(!isConvoOpen)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark flex items-center">
              <MessageSquare size={16} className="mr-2 text-samvad-secondary" />
              View Practice Transcript ({messages.length} messages)
            </span>
            {isConvoOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isConvoOpen && (
            <div className="mt-4 space-y-3 pl-1 max-h-60 overflow-y-auto no-scrollbar border-t border-gray-50 dark:border-zinc-900 pt-3">
              {messages.map((m) => {
                const isUser = m.role === 'user';
                return (
                  <div key={m.id} className="flex flex-col text-xs leading-relaxed">
                    <span className={`font-black uppercase tracking-wider text-[9px] ${isUser ? 'text-samvad-primary' : 'text-samvad-secondary'}`}>
                      {isUser ? 'You' : activeScenario?.personaName || 'AI'}
                    </span>
                    <p className="font-medium mt-0.5 text-samvad-text-primary-light dark:text-samvad-text-primary-dark">
                      {m.content}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
