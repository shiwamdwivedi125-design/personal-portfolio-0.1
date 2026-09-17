import { Award, Calendar, Building2 } from 'lucide-react';
import { certificates } from '@/data/portfolio';

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={cert.title}
              className="group relative bg-slate-950/50 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-cyan-400" />
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>{cert.issuer}</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{cert.year}</span>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
