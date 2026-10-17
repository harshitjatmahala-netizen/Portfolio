import { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Eye } from 'lucide-react';
import { educationData, certificationData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Education() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="education" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal engineering education and state-certified information technology qualifications.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: University Education */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative group">
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  Undergraduate Degree
                </span>
              </div>

              {/* Degree Title */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {educationData.degree}
              </h3>

              {/* Institution */}
              <p className="text-base font-semibold text-blue-400 mb-4 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{educationData.institution}</span>
              </p>

              {/* Timeline Meta */}
              <div className="flex flex-wrap gap-4 py-3 px-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Current: <strong>{educationData.status}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Expected Graduation: <strong>{educationData.expectedGraduation}</strong></span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Academic Focus & Activities
                </h4>
                {educationData.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Department of Computer Science & Engineering</span>
              <span className="font-semibold text-slate-300">Class of 2030</span>
            </div>
          </div>

          {/* Card 2: RS-CIT Certification */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative group">
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Award className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Score: {certificationData.score}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {certificationData.title}
              </h3>

              {/* Authority */}
              <p className="text-base font-semibold text-emerald-400 mb-4">
                {certificationData.authority}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {certificationData.description}
              </p>

              {/* Certificate Image Preview Frame */}
              <div 
                onClick={() => setModalOpen(true)}
                className="cursor-pointer group/img relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950/90 h-64 sm:h-72 flex items-center justify-center p-2 mb-4 transition-all hover:border-emerald-500/50"
                title="Click to view full certificate"
              >
                <img
                  src={certificationData.image}
                  alt="Harshit Kumar's RS-CIT certificate from VMOU Kota"
                  className="max-h-full max-w-full object-contain rounded-lg group-hover/img:scale-102 transition-transform duration-300 shadow-md"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold rounded-xl backdrop-blur-[2px]">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span>Click to view full certificate</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Official Credential Preview
              </span>
              <button
                onClick={() => setModalOpen(true)}
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Full Certificate</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
