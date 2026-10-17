import { 
  FileSpreadsheet, 
  Table, 
  Laptop, 
  Calendar, 
  Briefcase, 
  Send, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { opportunitiesData } from '../data/portfolioData';

export default function Opportunities() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-400" />;
      case 'Table':
        return <Table className="w-6 h-6 text-blue-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-indigo-400" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-purple-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="opportunities" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open to Opportunities
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            As an eager first-year engineering student, I am actively seeking practical roles where I can contribute dependable work, learn industry workflows, and add real value.
          </p>
        </div>

        {/* Opportunities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {opportunitiesData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-3px] shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 inline-block mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-blue-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for immediate onboarding</span>
              </div>
            </div>
          ))}

          {/* Student Commitment Promise Card */}
          <div className="bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 inline-block mb-4">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                My Commitment as a Student
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Punctual, dedicated, fast learner with 30 WPM typing speed, sharp spreadsheet acumen, and strong enthusiasm to take on challenges.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-blue-500/20">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss an Opportunity</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
