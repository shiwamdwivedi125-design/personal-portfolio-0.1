import { useState } from 'react';
import { Github, ExternalLink, CheckCircle } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const allTechs = [
    'All',
    ...Array.from(new Set(projects.flatMap((p) => p.technologies))),
  ];

  const filtered =
    selectedTech === 'All'
      ? projects
      : projects.filter((p) => p.technologies.includes(selectedTech));

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-8" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedTech === tech
                  ? 'bg-cyan-400 text-slate-950'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:border-cyan-400/30'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-1.5 mb-5">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium hover:bg-cyan-400/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
