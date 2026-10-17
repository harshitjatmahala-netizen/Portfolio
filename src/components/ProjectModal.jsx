import { X, FileSpreadsheet, Code2, CheckCircle2, Info } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pr-8">
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            {project.category === 'Excel' ? (
              <FileSpreadsheet className="w-7 h-7 text-emerald-400" />
            ) : (
              <Code2 className="w-7 h-7 text-blue-400" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {project.tag}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>Project Purpose</span>
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.purpose}
          </p>
        </div>

        {/* Full Description */}
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Detailed Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tools & Concepts Used */}
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Tools & Concepts Practiced
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Key Learning Outcomes
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer & Note for Harshit */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="italic text-center sm:text-left">
            * Practice exercise developed during first-year studies.
          </p>
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
