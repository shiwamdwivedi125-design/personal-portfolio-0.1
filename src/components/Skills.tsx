import { useEffect, useRef, useState } from 'react';
import { Layout, Server, Database, Code } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, typeof Layout> = {
  layout: Layout,
  server: Server,
  database: Database,
  code: Code,
};

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            What I bring to the table
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div
                key={category.title}
                className="bg-slate-950/50 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 group"
                style={{
                  transitionDelay: `${catIdx * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-slate-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
                          style={{
                            width: visible ? `${skill.level}%` : '0%',
                            transitionDelay: `${catIdx * 100 + idx * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
