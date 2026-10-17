import { useState } from 'react';
import { ArrowDown, Mail, FolderKanban, Award, GraduationCap, Zap, Check, Copy, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Decorative gradient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Internships & Projects</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                  {personalInfo.name}
                </span>
              </h1>
              
              {/* Tagline */}
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {personalInfo.title}
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.heroBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02]"
              >
                <FolderKanban className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 text-xs transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 text-xs transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-purple-400" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 text-xs transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="font-bold text-base text-white">{personalInfo.typingSpeed}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">Typing Speed</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-base text-white">90%</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">RS-CIT Score</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-blue-400 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-bold text-base text-white">1st Year</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">B.Tech CSE '30</p>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Image Card & Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer decorative halo border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

              {/* Card Container */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4">
                
                {/* Profile Image Frame with comments for replacement */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80">
                  {/*
                    NOTE FOR HARSHIT:
                    To use your own photo, place your image in the "public" folder
                    (e.g., "public/harshit.jpg") and update `profilePhoto` in
                    `src/data/portfolioData.js`.
                  */}
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback SVG avatar if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />

                  {/* Fallback avatar block */}
                  <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 text-slate-300">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-3xl font-bold text-blue-400 mb-3">
                        HK
                      </div>
                      <p className="font-semibold text-white">{personalInfo.name}</p>
                      <p className="text-xs text-slate-400 mt-1">First-Year B.Tech CSE</p>
                    </div>
                  </div>
                </div>

                {/* Profile Card Footer Summary */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-white">{personalInfo.name}</p>
                    <p className="text-slate-400">JECRC University, Jaipur</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-medium border border-blue-500/20">
                    Class of 2030
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom scroll prompt */}
      <div className="mt-12 flex justify-center">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors py-2 px-3 rounded-full border border-slate-800/60 bg-slate-900/40"
          aria-label="Scroll to About Me section"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
