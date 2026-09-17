import { GraduationCap, MapPin, Mail, Phone, User } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Who I Am
                </h3>
                <p className="text-slate-400 leading-relaxed">{profile.about}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="truncate">{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <User className="w-5 h-5 text-cyan-400" />
                <span>{profile.role}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Facts
              </h3>
              {[
                { label: 'Name', value: profile.name },
                { label: 'Role', value: profile.tagline },
                { label: 'Education', value: 'B.Tech CS' },
                { label: 'Focus', value: 'Full Stack Development' },
                { label: 'Status', value: 'Open to work' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education timeline */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-cyan-400" />
            Education
          </h3>
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600" />
            {profile.education.map((edu, idx) => (
              <div key={idx} className="relative mb-8 last:mb-0">
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950" />
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-cyan-400 font-medium">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
