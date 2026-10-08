import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // If supabase is not configured, show a friendly message instead of calling API.
    if (!supabase) {
      setStatus('error');
      setErrorMsg(
        'Contact form is not configured on this environment. Please email me at ' +
          profile.email
      );
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate-400 leading-relaxed mb-6">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new opportunities and ideas.
            </p>

            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
              { icon: MapPin, label: 'Location', value: profile.location, href: '#' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-cyan-400/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-slate-950/50 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-slate-950/50 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-slate-950/50 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-950/50 border border-white/10 rounded-2xl p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
