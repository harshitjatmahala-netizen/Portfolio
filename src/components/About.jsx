import { GraduationCap, MapPin, Lightbulb, Rocket, HeartHandshake, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Current Education",
      value: "B.Tech in CSE (First Year)",
      desc: "JECRC University, Jaipur (Graduation: 2030)",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: Rocket,
      title: "Future Aspiration",
      value: "Aspiring Tech Entrepreneur",
      desc: "Passionate about creating useful software products and businesses",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      icon: Lightbulb,
      title: "Current Focus",
      value: "Spreadsheets & C Programming",
      desc: "Building rock-solid logic and data manipulation foundations",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      icon: HeartHandshake,
      title: "Work Philosophy",
      value: "Willingness to Learn & Grow",
      desc: "Approaching every task with curiosity, honesty, and consistency",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            A genuine overview of my background, learning trajectory, and long-term goals.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span>My Journey as a First-Year CSE Student</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.aboutMe.story}
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.aboutMe.mission}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Core Career & Intellectual Interests:
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.aboutMe.careerInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-medium hover:border-blue-500/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Location & Academic Base */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>JECRC University • Batch 2026–2030</span>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all hover:translate-y-[-2px] shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.border} border shrink-0`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </p>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        {item.value}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
