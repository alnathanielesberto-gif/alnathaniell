/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Settings, 
  Database, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ExternalLink, 
  FileText, 
  Trophy,
  Wifi,
  Battery,
  Monitor,
  ChevronRight,
  Github,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-2">
      {children}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-1 bg-primary mt-4 rounded-full" 
    />
  </motion.div>
);

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  items: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, items, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-neutral-bg dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-text-main dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{description}</p>
    <ul className="space-y-3 mt-auto">
      {items.map((item, idx) => (
        <li key={idx} className="grid grid-cols-[20px_1fr] gap-3 text-sm text-slate-700 dark:text-slate-300 items-start">
          <CheckCircle2 size={18} className="text-secondary mt-0.5 shrink-0" />
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ToolBadge: React.FC<{ name: string }> = ({ name }) => (
  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
    {name}
  </span>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             localStorage.getItem('theme') === 'dark' ||
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('resume-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('resume-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('resume-open');
    };
  }, [isResumeOpen]);

  const services = [
    {
      icon: Settings,
      title: "Operations & Systems",
      description: "Organizing digital chaos into structured, efficient workflows that save time and reduce errors.",
      items: [
        "Google Drive & folder structure setup",
        "Workflow documentation & SOP creation",
        "Process mapping & task tracking",
        "Notion & Trello workspace organization"
      ]
    },
    {
      icon: Database,
      title: "Data & Reporting",
      description: "Accurate data management and spreadsheet optimization to help you make data-driven decisions.",
      items: [
        "Fast & accurate data entry",
        "Excel & Google Sheets automation",
        "Data cleaning & CRM management",
        "Lead generation & web research"
      ]
    },
    {
      icon: Cpu,
      title: "Technical Support",
      description: "Bridging the gap between technical issues and administrative precision for remote teams.",
      items: [
        "Basic IT troubleshooting",
        "System setup & configuration",
        "Structured bug & issue documentation",
        "Remote team coordination"
      ]
    },
    {
      icon: Zap,
      title: "AI-Enhanced Productivity",
      description: "Leveraging cutting-edge AI tools to streamline documentation and optimize business processes.",
      items: [
        "ChatGPT, Claude & Gemini optimization",
        "AI-driven workflow automation",
        "Drafting documentation with AI",
        "Summarizing complex data efficiently"
      ]
    }
  ];

  const experience = [
    {
      role: "Game Tester",
      company: "Yield Guild Games",
      period: "March 2025 – January 2026",
      desc: "Documented usability issues and bugs in structured reports to improve workflow communication. Coordinated with distributed teams through feedback channels and testing tasks."
    },
    {
      role: "IT Support Specialist",
      company: "ModernTech Computer Services Inc.",
      period: "February 2023 – May 2023",
      desc: "Coordinated deployment and configuration of computer systems across banking locations. Provided client-facing technical support and troubleshooting."
    }
  ];

  const tools = [
    "Google Workspace", "Microsoft 365", "Notion", "Trello", "Zoom", 
    "Microsoft Teams", "Canva", "ChatGPT", "Claude", "Gemini", "Copilot", "CapCut"
  ];

  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Technical Troubleshooting", "Documentation", "Data Organization", "Systems Design", "Process Mapping", "Workflow Optimization", "Data Entry", "Web Research"]
    },
    {
      title: "Software Proficiency",
      skills: ["Google Workspace", "Microsoft 365", "Notion", "Trello", "Canva", "ChatGPT", "Claude", "Gemini", "Copilot", "CapCut", "Zoom", "MS Teams", "Discord"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Time Management", "Attention to Detail", "Problem Solving", "Remote Coordination", "Independent Work"]
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-sm"
          >
            <motion.div 
              id="resume-modal-root"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900 sticky top-0 z-10 modal-header-controls">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Professional Resume</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Al Nathaniel C. Esberto</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="p-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 text-sm font-bold shadow-md shadow-primary/20"
                  >
                    <FileText size={18} /> Download PDF
                  </button>
                  <button 
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Content (The Resume) */}
              <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-slate-50 dark:bg-slate-950">
                <div id="resume-content" className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl p-8 sm:p-12 max-w-[800px] mx-auto text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                  {/* Header */}
                  <header className="border-b-2 border-primary pb-6 mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Al Nathaniel C. Esberto</h1>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1.5"><Mail size={14} className="text-primary" /> alnathanielesberto@gmail.com</span>
                      <span className="flex items-center gap-1.5"><Phone size={14} className="text-primary" /> +639389737413</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Pasig City, Philippines</span>
                    </div>
                  </header>

                  {/* Summary */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Professional Summary</h2>
                    <p className="text-sm">
                      Results-driven Virtual Assistant with hands-on experience supporting remote teams through technical troubleshooting, documentation, and task coordination. Proficient in Google Workspace, Microsoft 365, Notion, Trello, Canva, and AI tools including ChatGPT to streamline workflows and improve productivity. Reliable and detail-oriented, with strong communication skills and the ability to manage tasks independently.
                    </p>
                  </section>

                  {/* Skills */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Key Skills</h2>
                    <p className="text-sm font-medium">
                      Technical Troubleshooting | Documentation | Data Organization | Google Workspace | Microsoft 365 | ChatGPT/AI Tools | Trello | Notion | Canva | Communication | Time Management | Attention to Detail
                    </p>
                  </section>

                  {/* Tech Proficiency */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Tech Proficiency</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>AI Tools:</strong> ChatGPT, Gemini, Claude, Copilot</p>
                        <p><strong>Productivity:</strong> Google Workspace, MS 365</p>
                      </div>
                      <div>
                        <p><strong>Project Management:</strong> Notion, Trello</p>
                        <p><strong>Design:</strong> Canva, CapCut</p>
                      </div>
                    </div>
                  </section>

                  {/* Education */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Education</h2>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Bachelor of Science in Electronics Engineering</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Rizal Technological University | 2023</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 italic">Academic Honors: Dean's Lister (6 semesters), DOST Scholar</p>
                    </div>
                  </section>

                  {/* Experience */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Relevant Experience</h2>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-slate-900 dark:text-white">Game Tester</h3>
                          <span className="text-xs font-bold text-slate-500">2025 – 2026</span>
                        </div>
                        <p className="text-xs text-primary font-bold mb-2">Yield Guild Games — Remote</p>
                        <ul className="text-sm list-disc list-outside ml-4 space-y-1">
                          <li>Documented usability issues and bugs in structured reports.</li>
                          <li>Coordinated with distributed teams through feedback channels.</li>
                          <li>Managed independent workloads while meeting remote deadlines.</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-slate-900 dark:text-white">IT Support Specialist</h3>
                          <span className="text-xs font-bold text-slate-500">2023</span>
                        </div>
                        <p className="text-xs text-primary font-bold mb-2">ModernTech Computer Services Inc.</p>
                        <ul className="text-sm list-disc list-outside ml-4 space-y-1">
                          <li>Coordinated deployment and configuration of computer systems.</li>
                          <li>Provided client-facing technical support and troubleshooting.</li>
                          <li>Managed data transfers and system setups with accurate documentation.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Certifications */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Certifications</h2>
                    <ul className="text-sm space-y-1">
                      <li>• Google Workspace Certification – Google – 2026</li>
                      <li>• Virtual Assistant Fundamentals – Coursera – 2026</li>
                      <li>• Inbound Marketing Certification – HubSpot Academy – 2026</li>
                    </ul>
                  </section>

                  {/* Footer */}
                  <footer className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">Generated via alnathanielesberto.com</p>
                  </footer>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">A</div>
              <span className="font-bold text-text-main dark:text-white tracking-tight hidden sm:block">Al Nathaniel Esberto</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-all shadow-sm">Hire Me</a>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Skills</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Services</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Experience</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 bg-accent text-white rounded-xl text-center hover:bg-accent/90 transition-all shadow-sm">Hire Me</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-white dark:to-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for New Projects
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main dark:text-white tracking-tight mb-6 leading-tight">
                Virtual Assistant | IT Support Specialist | Data Entry Expert
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I’m <span className="text-primary font-bold">Al Nathaniel Esberto</span>. I specialize in Google Workspace, Excel, and Notion—ready to support your remote operations with precision and efficiency.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  Let's Talk <ChevronRight size={20} />
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#2D9CDB", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsResumeOpen(true)}
                  className="px-8 py-4 bg-white dark:bg-slate-900 text-primary dark:text-primary border-2 border-primary rounded-xl font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  View Resume <FileText size={20} />
                </motion.button>
                <div className="flex items-center gap-4 px-4">
                  <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/al-nathaniel-esberto-59b481299/" target="_blank" className="p-3 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a whileHover={{ y: -3 }} href="mailto:alnathanielesberto@gmail.com" className="p-3 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                    <Mail size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative z-10">
                <img 
                  src="https://media.discordapp.net/attachments/1126870477340676148/1471184307417514024/upwork_al.png?ex=69a860a8&is=69a70f28&hm=59bb95dabbed496fa91e93c61ebbbae33bf2ce69da797a257c184e2ad8f5e346&=&format=webp&quality=lossless&width=686&height=686" 
                  alt="Al Nathaniel Esberto" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-950 scroll-mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle subtitle="A systems thinker, not just task-based.">Professional Summary</SectionTitle>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I am a versatile <strong>Virtual Assistant and IT Support Specialist</strong> with a strong foundation in Electronics Engineering. I specialize in optimizing digital operations through expert management of Google Workspace, Excel, and Notion.
                </p>
                <p>
                  My approach combines technical problem-solving with administrative excellence, ensuring that data is managed with precision and workflows are streamlined for maximum efficiency. I don’t just complete tasks; I engineer systems that improve how work is executed in remote-ready environments.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "Detail-oriented", "Deadline-focused", "Independent", "Reliable Power/Net"
                  ].map((trait, i) => (
                    <motion.div 
                      key={trait}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{trait}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 dark:bg-slate-900/50 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Settings className="text-primary" /> Tech Proficiency
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-4">Core Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map(tool => (
                      <ToolBadge key={tool} name={tool} />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">Education</p>
                    <p className="font-bold text-white">BS Electronics Engineering</p>
                    <p className="text-sm text-slate-400">Rizal Technological University</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">Languages</p>
                    <p className="font-bold text-white">English (Fluent)</p>
                    <p className="text-sm text-slate-400">Filipino (Native)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-neutral-bg dark:bg-slate-900/50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="A comprehensive overview of my professional toolkit.">Core Competencies</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-6 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span 
                      key={sIdx} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-xl text-sm font-medium border border-primary/10 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-950 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTitle subtitle="Comprehensive support designed to scale your operations.">How I Can Support Your Business</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                index={idx}
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                items={service.items} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-neutral-bg dark:bg-slate-900/50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <SectionTitle subtitle="My professional journey and certifications.">Experience & Growth</SectionTitle>
              <div className="space-y-6 mt-8">
                <div className="p-6 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/10 dark:border-primary/20">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <Trophy size={18} /> Certifications
                  </h4>
                  <ul className="space-y-4">
                    <li className="text-sm">
                      <p className="font-bold text-text-main dark:text-white">Google Workspace Certification</p>
                      <p className="text-slate-500 dark:text-slate-400">Google • 2026</p>
                    </li>
                    <li className="text-sm">
                      <p className="font-bold text-text-main dark:text-white">Virtual Assistant Fundamentals</p>
                      <p className="text-slate-500 dark:text-slate-400">Coursera • 2026</p>
                    </li>
                    <li className="text-sm">
                      <p className="font-bold text-text-main dark:text-white">Inbound Marketing Certification</p>
                      <p className="text-slate-500 dark:text-slate-400">HubSpot Academy • 2026</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 pb-8 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-950 shadow-sm" />
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold text-text-main dark:text-white">{exp.role}</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300 mb-3">{exp.company}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
              
              <div className="mt-12 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="text-lg font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                  <Wifi size={20} className="text-primary" /> Remote Work Readiness
                </h4>
                <div className="grid sm:grid-cols-3 gap-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Connectivity</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Primary: 200 Mbps Fiber</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Backup: 50 Mbps PLDT</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Power Reliability</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">UPS with 2-hour battery</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Nearby coworking access</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Availability</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Flexible Schedule</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">US/UK/AU Timezones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-white overflow-hidden relative scroll-mt-16">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Let’s build organized systems and efficient workflows together.</h2>
            <p className="text-xl text-white/90">
              I am currently seeking a long-term remote position where I can contribute to operational efficiency and support business growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.a 
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              href="mailto:alnathanielesberto@gmail.com" 
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">Email Me</p>
              <p className="font-medium truncate">alnathanielesberto@gmail.com</p>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              href="https://www.linkedin.com/in/al-nathaniel-esberto-59b481299/" 
              target="_blank" 
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="font-medium">Connect with me</p>
            </motion.a>
            
            <motion.div 
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transition-colors text-center group cursor-default"
            >
              <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">Call/Text</p>
              <p className="font-medium">+63 938 973 7413</p>
            </motion.div>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-white/70 text-sm mb-8 flex items-center justify-center gap-2">
              <MapPin size={16} /> Based in Pasig City, Philippines • Working Globally
            </p>
            <div className="h-px w-full bg-white/20 mb-8" />
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Al Nathaniel Esberto. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
