import { Download, FileText, GraduationCap, Briefcase, Award as AwardIcon } from 'lucide-react';
import { profile, skillCategories, certificates, projects } from '@/data/portfolio';

export default function Resume() {
  const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));
  const uniqueSkills = Array.from(new Set(allSkills));

  return (
    <section id="resume" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-8" />
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>

        {/* Resume document */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center pb-8 border-b border-white/10">
            <h3 className="text-3xl font-bold text-white mb-1">{profile.name}</h3>
            <p className="text-cyan-400 text-lg mb-2">{profile.tagline}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
              <span>{profile.email}</span>
              <span className="text-slate-600">|</span>
              <span>{profile.phone}</span>
              <span className="text-slate-600">|</span>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Education */}
          <div className="py-8 border-b border-white/10">
            <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Education
            </h4>
            <div className="space-y-4">
              {profile.education.map((edu) => (
                <div key={edu.degree} className="pl-4 border-l-2 border-cyan-400/30">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-white font-semibold">{edu.degree}</span>
                    <span className="text-cyan-400 text-sm">{edu.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="py-8 border-b border-white/10">
            <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              Technical Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {uniqueSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="py-8 border-b border-white/10">
            <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <FileText className="w-5 h-5 text-cyan-400" />
              Projects
            </h4>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.title} className="pl-4 border-l-2 border-cyan-400/30">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-white font-semibold">{project.title}</span>
                    <span className="text-slate-500 text-xs">
                      {project.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="pt-8">
            <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <AwardIcon className="w-5 h-5 text-cyan-400" />
              Certificates
            </h4>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between flex-wrap gap-2 pl-4 border-l-2 border-cyan-400/30"
                >
                  <div>
                    <span className="text-white font-medium text-sm">{cert.title}</span>
                    <span className="text-slate-500 text-sm ml-2">— {cert.issuer}</span>
                  </div>
                  <span className="text-cyan-400 text-sm">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
