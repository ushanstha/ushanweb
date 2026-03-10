import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Network, 
  ShieldCheck, 
  Cpu, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Award, 
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Bot,
  Send,
  MessageSquare,
  Globe
} from 'lucide-react';
import { PORTFOLIO_DATA } from './constants';
import { GoogleGenAI } from '@google/genai';

const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" className={`${className} animate-pulse-glow`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left Dark Pillar */}
    <path d="M15 30V85L55 100V85H30V40L15 30Z" fill="#1e3a8a" />
    <path d="M15 30H30V85L15 75V30Z" fill="#1e40af" />
    
    {/* Geometric Right Pillar */}
    <path d="M55 100L85 85V20H70V75L55 85V100Z" fill="#0284c7" />
    <path d="M70 20L85 35V20H70Z" fill="#7dd3fc" />
    <path d="M70 35L85 50V35H70Z" fill="#38bdf8" />
    <path d="M70 50L85 65V50H70Z" fill="#0ea5e9" />
    <path d="M70 65L85 85H70V65Z" fill="#0284c7" />
    
    {/* Connection Detail */}
    <path d="M30 85L55 100V85H30Z" fill="#1d4ed8" />
  </svg>
);

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Experience', 'Skills', 'Certs', 'Education', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-blue-500/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group">
          <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Ushan<span className="text-blue-500">.</span></span>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-blue-500 font-medium transition-all uppercase tracking-wider text-sm hover:-translate-y-0.5">
              {link}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none hover:text-blue-500 transition-colors">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 py-6 px-6 flex flex-col space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-blue-500 text-lg font-medium py-2 border-b border-slate-900/50"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="mb-12 reveal-on-scroll">
    <div className="flex items-center space-x-3 text-blue-500 mb-2">
      <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
        {icon}
      </div>
      <span className="font-mono tracking-widest text-sm uppercase">{subtitle || 'Module'}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
    <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
  </div>
);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-2xl reveal-on-scroll">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-500 uppercase">Input.Name</label>
            <input 
              required
              type="text" 
              placeholder="Your full name"
              className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all placeholder:text-slate-700"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-500 uppercase">Input.Email</label>
            <input 
              required
              type="email" 
              placeholder="your@email.com"
              className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all placeholder:text-slate-700"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-500 uppercase">Input.Subject</label>
          <input 
            required
            type="text" 
            placeholder="Project inquiry / Network consulting"
            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all placeholder:text-slate-700"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-500 uppercase">Input.Message</label>
          <textarea 
            required
            rows={4}
            placeholder="Tell me about your requirements..."
            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all placeholder:text-slate-700"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>
        <button 
          type="submit"
          disabled={status !== 'idle'}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center space-x-2 active:scale-[0.98]"
        >
          {status === 'idle' && <><Send size={18} /> <span>TRANSMIT_MESSAGE</span></>}
          {status === 'sending' && <span className="animate-pulse">SENDING...</span>}
          {status === 'sent' && <span>MESSAGE_SENT_SUCCESSFULLY</span>}
        </button>
      </form>
    </div>
  );
};

const AskAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an AI assistant for Ushan Shrestha's portfolio. 
        Context: ${JSON.stringify(PORTFOLIO_DATA)}. 
        Answer this visitor question briefly and professionally: ${query}`,
      });
      setResponse(res.text || 'I could not process that request.');
    } catch (err) {
      setResponse('AI Connection Error. System offline.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 p-8 rounded-3xl bg-slate-900 border border-blue-500/10 relative overflow-hidden group reveal-on-scroll shadow-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
        <Bot size={120} className="text-blue-500" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center space-x-3 text-blue-500 mb-4 animate-float">
          <Bot className="w-6 h-6" />
          <h3 className="font-mono text-lg font-bold tracking-tighter">NAVY_ASSISTANT_V2.exe</h3>
        </div>
        <p className="text-slate-400 mb-6 max-w-2xl text-sm md:text-base">
          Query my neural engine for specific insights into my network architecture experience and vendor proficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="What firewalls has Ushan migrated?" 
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all shadow-inner"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          />
          <button 
            onClick={handleAsk}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50 shadow-lg active:scale-95"
          >
            {loading ? 'PROCESSING...' : 'EXECUTE'}
          </button>
        </div>
        {response && (
          <div className="mt-6 p-5 bg-slate-950 border-l-4 border-blue-600 rounded-r-xl font-mono text-xs md:text-sm text-slate-300 animate-in fade-in slide-in-from-top-4 duration-500 leading-relaxed shadow-lg">
            <span className="text-blue-500 mr-2">&gt;</span> {response}
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 bg-grid selection:bg-blue-600/30">
      <Nav />

      {/* Hero Section */}
      <header className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 font-mono text-xs md:text-sm tracking-widest animate-float">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse mr-3 shadow-[0_0_8px_rgba(37,99,235,1)]"></span>
              CORE_SYSTEM: STABLE
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter">
              USHAN <span className="gradient-text-flow">SHRESTHA</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
              Senior Network Administrator specialized in <span className="text-white font-semibold">Infrastructure Security</span>, 
              <span className="text-white font-semibold"> Cloud Connectivity</span>, and 
              <span className="text-white font-semibold"> Network Optimization</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2 text-slate-400 hover:text-blue-500 transition-all cursor-default glass-card px-5 py-2.5 rounded-full border border-slate-800">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-sm font-medium">{PORTFOLIO_DATA.contact.address}</span>
              </div>
              <a 
                href={PORTFOLIO_DATA.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-blue-500 transition-all glass-card px-5 py-2.5 rounded-full border border-slate-800 cursor-pointer hover:shadow-blue-500/10 shadow-lg"
              >
                <Linkedin size={16} className="text-blue-600" />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Summary */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal-on-scroll">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Operational Overview</h2>
            <p className="text-xl text-slate-400 leading-relaxed font-light border-l-4 border-blue-600 pl-8 bg-gradient-to-r from-blue-600/5 to-transparent py-4 rounded-r-2xl">
              "{PORTFOLIO_DATA.summary}"
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center hover:border-blue-600/30 transition-all hover:scale-105 shadow-xl group">
              <div className="text-5xl font-black text-blue-600 mb-1 tracking-tighter group-hover:animate-float">3+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono">Years_Exp</div>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center hover:border-blue-600/30 transition-all hover:scale-105 shadow-xl group">
              <div className="text-5xl font-black text-blue-600 mb-1 tracking-tighter group-hover:animate-float">5+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono">Vendors</div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section id="experience" className="mb-32 scroll-mt-24">
          <SectionHeading icon={<Terminal />} title="Deployment History" subtitle="System_Logs" />
          <div className="space-y-20">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="group relative pl-8 md:pl-0 reveal-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:left-1/2"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-600 md:left-1/2 md:translate-x-[-50%] group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(37,99,235,1)] transition-all"></div>
                
                <div className={`md:flex md:items-start ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} space-y-2 mb-6 md:mb-0`}>
                    <div className="text-blue-500 font-mono text-sm tracking-widest">{exp.period}</div>
                    <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <div className="text-lg text-slate-500 font-medium">{exp.company}</div>
                  </div>
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="glass-card p-8 rounded-3xl group-hover:border-blue-600/40 transition-all shadow-xl hover:shadow-blue-500/10">
                      <ul className="space-y-4 text-slate-400">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 group/li">
                            <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 group-hover/li:translate-x-1 transition-transform" />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <section id="skills" className="scroll-mt-24">
            <SectionHeading icon={<Cpu />} title="Technical Stack" subtitle="Modules_Loaded" />
            <div className="flex flex-wrap gap-3">
              {PORTFOLIO_DATA.skills.map((skill, idx) => (
                <div key={skill} className="reveal-on-scroll px-4 py-2 bg-slate-900/50 border border-slate-800 text-slate-400 rounded-xl hover:border-blue-600/50 hover:text-white hover:bg-blue-600/10 transition-all font-mono text-xs uppercase tracking-wider hover:scale-105" style={{ animationDelay: `${idx * 0.05}s` }}>
                  {skill}
                </div>
              ))}
            </div>
            <div className="mt-12 p-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-600/20 relative overflow-hidden group reveal-on-scroll">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
              <h4 className="text-white font-black text-xl mb-4 flex items-center gap-3">
                <ShieldCheck className="text-blue-500 animate-pulse-glow" />
                SECURITY_PROTOCOL
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Expertise in high-availability firewall clustering, Next-Gen Security services, and legacy-to-modern infrastructure migration across multi-vendor environments.
              </p>
            </div>
          </section>

          <section id="certs" className="scroll-mt-24">
            <SectionHeading icon={<Award />} title="Validated Data" subtitle="Authentication" />
            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div key={cert.name} className="reveal-on-scroll flex items-center space-x-4 p-6 glass-card rounded-3xl hover:translate-x-2 transition-all group" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 transition-colors">
                    <ShieldCheck className="text-blue-500 w-7 h-7 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-blue-500 transition-colors">{cert.name}</h4>
                    <p className="text-xs text-slate-600 font-mono mt-1 uppercase tracking-widest">STATUS: VERIFIED</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Education */}
        <section id="education" className="mb-32 scroll-mt-24">
          <SectionHeading icon={<GraduationCap />} title="Academic Root" subtitle="Genesis" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={edu.degree} className="reveal-on-scroll p-10 rounded-3xl glass-card group relative overflow-hidden" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/5 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                  <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full font-mono text-xs border border-blue-500/20 whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-slate-400 text-lg font-medium">{edu.institution}</p>
                <p className="text-slate-600 text-sm mt-3 uppercase tracking-[0.2em] font-mono">CREDENTIAL_COMPLETED</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Assistant Hook */}
        <section id="ask-ai" className="mb-32">
          <AskAI />
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="mb-32 scroll-mt-24">
          <SectionHeading icon={<MessageSquare />} title="Secure Communication" subtitle="Contact_Interface" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
              <h3 className="text-3xl font-black text-white leading-tight uppercase">Ready to optimize your infrastructure?</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Send a message through the secure terminal for professional inquiries, network audits, or consulting opportunities.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl group transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase">Operational Base</p>
                    <p className="text-white font-bold">{PORTFOLIO_DATA.contact.address}</p>
                  </div>
                </div>
                <a 
                  href={PORTFOLIO_DATA.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass-card rounded-2xl group transition-all duration-300 hover:shadow-blue-500/20"
                >
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase">Professional Hub</p>
                    <p className="text-white font-bold group-hover:text-blue-500 transition-colors">Ushan Shrestha</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-20 px-6 bg-black relative scanline-container overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none opacity-20"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
          <div className="flex items-center space-x-3 group">
            <Logo className="w-12 h-12 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-white font-bold text-2xl tracking-tighter">Ushan<span className="text-blue-500">.</span></span>
          </div>
          
          <div className="text-slate-600 font-mono text-xs uppercase tracking-[0.3em] text-center max-w-xs md:max-w-none">
            &copy; {new Date().getFullYear()} USHAN_SHRESTHA // INFRASTRUCTURE_PORTFOLIO v3.0.0_NAVY_ANIMATED
          </div>

          <div className="flex space-x-6">
            <a 
              href={PORTFOLIO_DATA.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-400 hover:text-blue-500 hover:border-blue-500/40 hover:scale-110 transition-all cursor-pointer shadow-lg"
            >
              <Linkedin size={22} />
            </a>
            <a href="#" className="flex items-center space-x-3 px-6 py-3.5 bg-blue-600 rounded-xl text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
              <span className="font-mono text-xs">RESUME.PDF</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;