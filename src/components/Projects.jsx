import { useState } from 'react';
import { 
  FolderKanban, 
  FileSpreadsheet, 
  Code2, 
  Eye 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'excel') return proj.category === 'Excel';
    if (filter === 'programming') return proj.category === 'Programming';
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Practical Exercises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical Projects Gallery
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hands-on spreadsheets and programming exercises built to solidify data management and logical thinking.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Practice Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('excel')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'excel'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Excel & Spreadsheets (4)
            </button>
            <button
              onClick={() => setFilter('programming')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'programming'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              C Programming (1)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag and Category Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 group-hover:scale-105 transition-transform">
                      {project.category === 'Excel' ? (
                        <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Code2 className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Practice Badge */}
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {project.tag}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Purpose Snippet */}
                <p className="text-xs text-slate-300 font-medium mb-3 line-clamp-2">
                  <span className="text-slate-400">Purpose: </span>
                  {project.purpose}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tools Used Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.slice(0, 3).map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-800/50 text-[11px] text-slate-500">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  First-Year Practical
                </span>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-400 text-xs font-semibold transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detail preview */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
