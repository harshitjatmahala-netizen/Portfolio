import { X, Award, ExternalLink } from 'lucide-react';
import { certificationData } from '../data/portfolioData';

export default function CertificateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-5 sm:p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pr-8">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {certificationData.title}
            </h3>
            <p className="text-xs text-slate-400">
              Issued by {certificationData.authority} • Score: {certificationData.score}
            </p>
          </div>
        </div>

        {/* Certificate Image Frame */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-2">
          <img
            src={certificationData.image}
            alt="Harshit Kumar's RS-CIT certificate from VMOU Kota"
            className="w-auto max-w-full max-h-[68vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <strong className="text-emerald-400">Verified Credential:</strong> Awarded to Harshit Kumar by VMOU Kota (Score: 90% Distinction).
          </p>
          <a
            href={certificationData.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium shrink-0 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Original Image</span>
          </a>
        </div>
      </div>
    </div>
  );
}
