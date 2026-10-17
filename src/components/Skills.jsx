import { useState } from 'react';
import { 
  FileSpreadsheet, 
  Code2, 
  FileText, 
  Presentation, 
  MessageSquare, 
  Users, 
  Clock, 
  Keyboard, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getIconForTechnical = (name) => {
    switch (name) {
      case 'Microsoft Excel':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-400" />;
      case 'C Programming':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Microsoft Word':
        return <FileText className="w-6 h-6 text-indigo-400" />;
      case 'Microsoft PowerPoint':
        return <Presentation className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-slate-400" />;
    }
  };

  const getIconForSoftSkill = (iconName) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-purple-400" />;
      case 'Keyboard':
        return <Keyboard className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-slate-400" />;
    }
  };

  const getBadgeClass = (level) => {
    switch (level) {
      case 'Intermediate':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Basic':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Proficient':
        return 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600/50';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Practical Abilities
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Transparent, genuine proficiencies developed through practical exercises and first-year academic coursework.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Skills ({skillsData.technical.length + skillsData.softSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'technical'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Technical & Software ({skillsData.technical.length})
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'soft'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Professional & Soft Skills ({skillsData.softSkills.length})
            </button>
          </div>
        </div>

        {/* Technical & Software Skills Grid */}
        {(activeTab === 'all' || activeTab === 'technical') && (
          <div className="mb-12">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Technical, Programming & Office Tools</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.technical.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all hover:translate-y-[-2px] shadow-lg group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/70 group-hover:scale-110 transition-transform">
                        {getIconForTechnical(skill.name)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {skill.name}
                        </h4>
                        <span className="text-xs text-slate-400 font-medium">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Level Pill */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeClass(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Level Indicator Bar */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Proficiency Stage</span>
                      <span className="text-slate-300 font-medium">{skill.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft & Professional Skills Grid */}
        {(activeTab === 'all' || activeTab === 'soft') && (
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Interpersonal & Professional Competencies</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 transition-all hover:translate-y-[-2px] shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/70">
                        {getIconForSoftSkill(skill.icon)}
                      </div>
                      <span className="text-[11px] font-semibold text-purple-400 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                        {skill.type}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1.5">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active student practice</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
