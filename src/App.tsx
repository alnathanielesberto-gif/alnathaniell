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
  Layout,
  BarChart3,
  BookOpen,
  ArrowRight,
  Plus,
  TrendingUp,
  Search,
  TrendingDown,
  GraduationCap,
  Globe,
  Calendar,
  Briefcase,
  Languages
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area
} from 'recharts';

const IconTooltip = ({ children, text }: { children: React.ReactNode; text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-flex items-center" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] font-bold rounded shadow-lg whitespace-nowrap z-[60] pointer-events-none"
          >
            {text}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

const TechnicalGraphic = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
      <motion.circle 
        cx="400" cy="400" r="300" 
        stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" 
        className="text-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle 
        cx="400" cy="400" r="200" 
        stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" 
        className="text-primary"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Schematic Lines */}
      <motion.path 
        d="M400 100 V700 M100 400 H700 M200 200 L600 600 M600 200 L200 600" 
        stroke="currentColor" strokeWidth="0.5" 
        className="text-slate-300"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Nodes */}
      {[
        { x: 400, y: 100 }, { x: 400, y: 700 }, 
        { x: 100, y: 400 }, { x: 700, y: 400 },
        { x: 200, y: 200 }, { x: 600, y: 600 },
        { x: 600, y: 200 }, { x: 200, y: 600 }
      ].map((node, i) => (
        <motion.circle 
          key={i}
          cx={node.x} cy={node.y} r="4" 
          fill="currentColor" 
          className="text-primary"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Data Flow Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={`p-${i}`}
          r="2"
          fill="currentColor"
          className="text-primary"
          animate={{
            cx: [400, 700, 400, 100, 400],
            cy: [100, 400, 700, 400, 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
        />
      ))}
    </svg>
  </div>
);

const SkillBar = ({ name, level, color = "bg-primary", dark = false }: { name: string; level: number; color?: string; dark?: boolean }) => (
  <div className="mb-6 group">
    <div className="flex justify-between items-center mb-2">
      <span className={`text-sm sm:text-base font-bold transition-colors ${dark ? 'text-white group-hover:text-primary-light' : 'text-slate-700 group-hover:text-primary'}`}>{name}</span>
      <span className={`text-xs font-bold ${dark ? 'text-slate-400' : 'text-slate-400'}`}>{level}%</span>
    </div>
    <div className={`h-3.5 ${dark ? 'bg-white/10' : 'bg-slate-100'} rounded-full overflow-hidden shadow-inner relative`}>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`h-full rounded-full ${color} relative overflow-hidden shadow-lg`}
      >
        {/* Animated Shine Effect */}
        <motion.div 
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 skew-x-[-20deg]"
        />
      </motion.div>
    </div>
  </div>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-2">
      {children}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600">
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
    className="bg-neutral-bg p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
      <IconTooltip text={title}>
        <Icon size={24} />
      </IconTooltip>
    </div>
    <h3 className="text-xl font-bold mb-3 text-text-main">{title}</h3>
    <p className="text-slate-600 mb-6 flex-grow">{description}</p>
    <ul className="space-y-3 mt-auto">
      {items.map((item, idx) => (
        <li key={idx} className="grid grid-cols-[20px_1fr] gap-3 text-sm text-slate-700 items-start">
          <IconTooltip text="Verified Skill">
            <CheckCircle2 size={18} className="text-secondary mt-0.5 shrink-0" />
          </IconTooltip>
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ToolBadge: React.FC<{ name: string }> = ({ name }) => (
  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
    {name}
  </span>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'notion' | 'dashboard' | 'sop'>('notion');
  const [notionTasks, setNotionTasks] = useState([
    { id: 1, title: 'Q1 Operations Audit', status: 'To Do', priority: 'High', date: 'Mar 15' },
    { id: 2, title: 'SOP Documentation', status: 'To Do', priority: 'Medium', date: 'Mar 18' },
    { id: 3, title: 'CRM Cleanup', status: 'In Progress', priority: 'High', date: 'Mar 12' },
    { id: 4, title: 'Weekly Reporting', status: 'Done', priority: 'Low', date: 'Mar 10' },
  ]);
  const [salesMetric, setSalesMetric] = useState('revenue');
  const [sopSearch, setSopSearch] = useState('');
  const [selectedSop, setSelectedSop] = useState<null | { title: string; category: string; content: string }>(null);

  const moveTask = (id: number) => {
    setNotionTasks(prev => prev.map(task => {
      if (task.id === id) {
        const statuses = ['To Do', 'In Progress', 'Done'];
        const nextStatus = statuses[(statuses.indexOf(task.status) + 1) % statuses.length];
        return { ...task, status: nextStatus };
      }
      return task;
    }));
  };

  const salesData = [
    { name: 'Mon', revenue: 4000, leads: 24, conversion: 12 },
    { name: 'Tue', revenue: 3000, leads: 18, conversion: 10 },
    { name: 'Wed', revenue: 5000, leads: 32, conversion: 15 },
    { name: 'Thu', revenue: 2780, leads: 15, conversion: 8 },
    { name: 'Fri', revenue: 1890, leads: 12, conversion: 7 },
    { name: 'Sat', revenue: 2390, leads: 20, conversion: 11 },
    { name: 'Sun', revenue: 3490, leads: 28, conversion: 14 },
  ];

  const sops = [
    { title: 'Client Onboarding Workflow', category: 'Operations', time: '15 min read', status: 'Verified', content: 'Step 1: Send welcome email.\nStep 2: Schedule kickoff call.\nStep 3: Set up shared folder.' },
    { title: 'Weekly Data Backup Protocol', category: 'IT Support', time: '5 min read', status: 'Verified', content: 'Step 1: Check server status.\nStep 2: Run backup script.\nStep 3: Verify backup integrity.' },
    { title: 'CRM Lead Management Guide', category: 'Sales', time: '10 min read', status: 'Draft', content: 'Step 1: Qualify lead.\nStep 2: Assign to sales rep.\nStep 3: Log interaction in CRM.' },
    { title: 'Emergency System Troubleshooting', category: 'Technical', time: '20 min read', status: 'Verified', content: 'Step 1: Identify the issue.\nStep 2: Check error logs.\nStep 3: Restart services.' }
  ];

  const filteredSops = sops.filter(sop => 
    sop.title.toLowerCase().includes(sopSearch.toLowerCase()) || 
    sop.category.toLowerCase().includes(sopSearch.toLowerCase())
  );
  
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
      title: "Operations Systems Setup",
      description: "Organizing workflows using Notion, Trello, and Google Workspace to create structured environments.",
      items: [
        "Google Drive & folder structure setup",
        "Notion workspace architecture",
        "Trello board organization",
        "Task tracking systems"
      ]
    },
    {
      icon: FileText,
      title: "Process Documentation",
      description: "Creating SOPs and documentation so teams work consistently and efficiently.",
      items: [
        "Standard Operating Procedures (SOPs)",
        "Workflow documentation",
        "Onboarding guides",
        "Knowledge base creation"
      ]
    },
    {
      icon: Database,
      title: "Data Organization & Reporting",
      description: "Maintaining clean spreadsheets and dashboards for business insights and data-driven decisions.",
      items: [
        "Excel & Google Sheets automation",
        "Data cleaning & CRM management",
        "Weekly progress tracking",
        "Automated reporting dashboards"
      ]
    },
    {
      icon: Cpu,
      title: "Technical & Remote Support",
      description: "Troubleshooting systems and supporting remote team operations with technical precision.",
      items: [
        "System setup & configuration",
        "Technical troubleshooting",
        "Remote team coordination",
        "Issue tracking & resolution"
      ]
    }
  ];

  const portfolio = [
    {
      title: "Notion Dashboard",
      description: "A comprehensive hub for task tracking, project management, and team documentation.",
      image: "https://picsum.photos/seed/notion/800/600"
    },
    {
      title: "Google Sheets Dashboard",
      description: "Automated reporting system with visual progress tracking and data analysis.",
      image: "https://picsum.photos/seed/dashboard/800/600"
    },
    {
      title: "Process Documentation System",
      description: "Structured SOP library and workflow maps for consistent team operations.",
      image: "https://picsum.photos/seed/sop/800/600"
    }
  ];

  const toolCategories = [
    {
      title: "Productivity",
      tools: ["Google Workspace", "Microsoft 365"]
    },
    {
      title: "Project Management",
      tools: ["Notion", "Trello"]
    },
    {
      title: "Communication",
      tools: ["Zoom", "Google Meet", "Microsoft Teams"]
    },
    {
      title: "AI Tools",
      tools: ["ChatGPT", "Claude", "Copilot", "Gemini"]
    }
  ];

  const whyChooseMe = [
    {
      title: "Engineering background",
      desc: "Strong problem-solving skills and technical precision."
    },
    {
      title: "Organized & detail-oriented",
      desc: "Meticulous workflow management and data accuracy."
    },
    {
      title: "Clear communication",
      desc: "Effective coordination with remote teams globally."
    },
    {
      title: "Reliable & deadline-focused",
      desc: "Consistent delivery and dependable availability."
    },
    {
      title: "Systems thinker",
      desc: "I improve processes, not just complete tasks."
    }
  ];

  const workProcess = [
    {
      step: "1",
      title: "Understand Your Workflow",
      desc: "Review your current systems and processes to identify bottlenecks."
    },
    {
      step: "2",
      title: "Organize Tasks & Systems",
      desc: "Build structured workflows using your preferred tools."
    },
    {
      step: "3",
      title: "Document & Standardize",
      desc: "Create SOPs and documentation for team consistency."
    },
    {
      step: "4",
      title: "Maintain & Improve",
      desc: "Keep operations running smoothly and continuously optimize."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* SOP Modal */}
      <AnimatePresence>
        {selectedSop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedSop(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{selectedSop.category}</span>
                    <span className="text-[10px] text-slate-400">•</span>
                    <span className="text-xs text-slate-400">{selectedSop.time}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{selectedSop.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedSop(null)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={24} className="text-slate-400" />
                </button>
              </div>
              <div className="p-8">
                <div className="prose prose-slate max-w-none">
                  <div className="flex items-center gap-4 mb-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Document Status</p>
                      <p className="text-sm font-bold text-blue-900">This SOP is currently {selectedSop.status.toLowerCase()}.</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-4">Procedure Steps:</h4>
                  <div className="space-y-4">
                    {selectedSop.content.split('\n').map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-slate-600 leading-relaxed">{step.replace(/Step \d+: /, '')}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedSop(null)}
                    className="px-6 py-3 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10 modal-header-controls">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <IconTooltip text="Document">
                      <FileText size={24} />
                    </IconTooltip>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Professional Resume</h3>
                    <p className="text-xs text-slate-500">Al Nathaniel C. Esberto</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="p-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 text-sm font-bold shadow-md shadow-primary/20"
                  >
                    <IconTooltip text="Print Resume">
                      <FileText size={18} />
                    </IconTooltip> Download PDF
                  </button>
                  <button 
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2.5 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    <IconTooltip text="Close Modal">
                      <X size={24} />
                    </IconTooltip>
                  </button>
                </div>
              </div>

              {/* Modal Content (The Resume) */}
              <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-slate-50">
                <div id="resume-content" className="bg-white shadow-sm border border-slate-200 rounded-xl p-8 sm:p-12 max-w-[800px] mx-auto text-slate-800 font-sans leading-relaxed">
                  {/* Header */}
                  <header className="border-b-2 border-primary pb-6 mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Al Nathaniel C. Esberto</h1>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5"><IconTooltip text="Email"><Mail size={14} className="text-primary" /></IconTooltip> alnathanielesberto@gmail.com</span>
                      <span className="flex items-center gap-1.5"><IconTooltip text="Phone"><Phone size={14} className="text-primary" /></IconTooltip> +639389737413</span>
                      <span className="flex items-center gap-1.5"><IconTooltip text="Location"><MapPin size={14} className="text-primary" /></IconTooltip> Pasig City, Philippines</span>
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
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Technical Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                      <SkillBar name="Technical Troubleshooting" level={90} />
                      <SkillBar name="Documentation" level={95} />
                      <SkillBar name="Data Organization" level={85} />
                      <SkillBar name="Systems Design" level={80} />
                      <SkillBar name="Process Mapping" level={85} />
                      <SkillBar name="Workflow Optimization" level={90} />
                      <SkillBar name="Data Entry" level={95} />
                      <SkillBar name="Web Research" level={90} />
                    </div>
                  </section>

                  {/* Soft Skills */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Soft Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                      <SkillBar name="Communication" level={95} />
                      <SkillBar name="Time Management" level={90} />
                      <SkillBar name="Attention to Detail" level={95} />
                      <SkillBar name="Problem Solving" level={88} />
                      <SkillBar name="Remote Coordination" level={92} />
                      <SkillBar name="Independent Work" level={95} />
                    </div>
                  </section>

                  {/* Tech Proficiency */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Software Proficiency</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                      <SkillBar name="Google Workspace" level={95} color="bg-blue-500" />
                      <SkillBar name="Microsoft 365" level={90} color="bg-indigo-500" />
                      <SkillBar name="Notion" level={92} color="bg-slate-800" />
                      <SkillBar name="Trello" level={88} color="bg-blue-600" />
                      <SkillBar name="ChatGPT / AI Tools" level={95} color="bg-emerald-500" />
                      <SkillBar name="Canva" level={85} color="bg-pink-500" />
                      <SkillBar name="CapCut" level={80} color="bg-purple-500" />
                      <SkillBar name="Zoom / MS Teams" level={95} color="bg-blue-400" />
                      <SkillBar name="Discord" level={90} color="bg-indigo-400" />
                    </div>
                  </section>

                  {/* Education */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Education</h2>
                    <div>
                      <h3 className="font-bold text-slate-900">Bachelor of Science in Electronics Engineering</h3>
                      <p className="text-sm text-slate-600">Rizal Technological University | 2023</p>
                      <p className="text-xs text-slate-500 mt-1 italic">Academic Honors: Dean's Lister (6 semesters), DOST Scholar</p>
                    </div>
                  </section>

                  {/* Experience */}
                  <section className="mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Relevant Experience</h2>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-slate-900">Game Tester</h3>
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
                          <h3 className="font-bold text-slate-900">IT Support Specialist</h3>
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
                  <footer className="mt-12 pt-6 border-t border-slate-100 text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">Generated via alnathanielesberto.com</p>
                  </footer>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <IconTooltip text="Portfolio Logo">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">A</div>
              </IconTooltip>
              <span className="font-bold text-text-main tracking-tight hidden sm:block">Al Nathaniel Esberto</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#tools" className="hover:text-primary transition-colors">Tools</a>
              <a href="#process" className="hover:text-primary transition-colors">Process</a>
              <a href="#contact" className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-all shadow-sm">Hire Me</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-primary transition-colors"
              >
                <IconTooltip text={isMenuOpen ? "Close Menu" : "Open Menu"}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </IconTooltip>
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
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4 text-sm font-medium text-slate-600">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Services</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Portfolio</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Experience</a>
                <a href="#tools" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Tools</a>
                <a href="#process" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Process</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 bg-accent text-white rounded-xl text-center hover:bg-accent/90 transition-all shadow-sm">Hire Me</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-white overflow-hidden relative">
        <TechnicalGraphic />
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight mb-6 leading-tight">
                Technical Operations Virtual Assistant
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Helping startups organize workflows, documentation, and remote operations. Engineering-trained VA specializing in Notion systems, process documentation, and workflow organization.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#portfolio" 
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  View My Work <IconTooltip text="Next Section"><ChevronRight size={20} /></IconTooltip>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  Contact Me <IconTooltip text="Send Email"><Mail size={20} /></IconTooltip>
                </motion.a>
                <div className="flex items-center gap-4 px-4">
                  <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/al-nathaniel-esberto-59b481299/" target="_blank" className="p-3 text-slate-400 hover:text-primary transition-colors">
                    <IconTooltip text="LinkedIn Profile">
                      <Linkedin size={24} />
                    </IconTooltip>
                  </motion.a>
                  <motion.a whileHover={{ y: -3 }} href="mailto:alnathanielesberto@gmail.com" className="p-3 text-slate-400 hover:text-primary transition-colors">
                    <IconTooltip text="Email Me">
                      <Mail size={24} />
                    </IconTooltip>
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
              <div className="relative z-10">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
                  <img 
                    src="https://media.discordapp.net/attachments/1126870477340676148/1471184307417514024/upwork_al.png?ex=69afa0e8&is=69ae4f68&hm=965cb329046bfff5e74b7911734070a6bfcd0bc748d32cc394003ae75f88d8a6&=&format=webp&quality=lossless&width=686&height=686" 
                    alt="Al Nathaniel Esberto" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Technical Elements */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-primary z-20 border border-slate-100"
                >
                  <IconTooltip text="Workflow Systems"><Settings size={32} /></IconTooltip>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-secondary z-20 border border-slate-100"
                >
                  <IconTooltip text="Data Organization"><Database size={32} /></IconTooltip>
                </motion.div>

                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10"
                />
              </div>

              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* How I Help Businesses Section */}
      <section id="services" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Clients care about solutions, not just skills.">How I Help Businesses</SectionTitle>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-neutral-bg scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Interactive examples of systems I can build for your business.">Systems I Specialize In</SectionTitle>
          
          <div className="flex flex-col gap-8">
            {/* Tab Controls */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'notion', title: 'Notion Task Board', icon: Layout, desc: 'Project management' },
                { id: 'dashboard', title: 'Sales Dashboard', icon: BarChart3, desc: 'Data analysis' },
                { id: 'sop', title: 'SOP Library', icon: BookOpen, desc: 'Process documentation' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id as any)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all ${
                    activeDemo === tab.id 
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]' 
                      : 'bg-white text-slate-600 border-slate-100 hover:border-primary/30'
                  }`}
                >
                  <IconTooltip text={tab.title}>
                    <tab.icon size={18} />
                  </IconTooltip>
                  <div className="text-left">
                    <span className="block font-bold text-sm leading-tight">{tab.title}</span>
                    <span className={`block text-[10px] ${activeDemo === tab.id ? 'text-white/70' : 'text-slate-400'}`}>
                      {tab.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Demo Display Area */}
            <div className="w-full">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden min-h-[500px] flex flex-col">
                {/* Demo Header */}
                <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="ml-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
                      {activeDemo === 'notion' && 'Project Workspace'}
                      {activeDemo === 'dashboard' && 'Operations Analytics'}
                      {activeDemo === 'sop' && 'Knowledge Base'}
                    </span>
                  </div>
                </div>

                {/* Demo Content */}
                <div className="flex-1 p-6 sm:p-8">
                  <AnimatePresence mode="wait">
                    {activeDemo === 'notion' && (
                      <motion.div
                        key="notion"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full"
                      >
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-2xl font-bold text-slate-800">Startup Workflow Board</h3>
                          <button 
                            onClick={() => {
                              const newTask = { 
                                id: Date.now(), 
                                title: 'New Task ' + (notionTasks.length + 1), 
                                status: 'To Do', 
                                priority: 'Medium', 
                                date: 'Today' 
                              };
                              setNotionTasks([...notionTasks, newTask]);
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-sm hover:scale-105 transition-all"
                          >
                            <IconTooltip text="Add Task">
                              <Plus size={16} />
                            </IconTooltip> New Task
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          {['To Do', 'In Progress', 'Done'].map((status) => (
                            <div key={status} className="space-y-4">
                              <div className="flex items-center gap-2 mb-4">
                                <div className={`w-2 h-2 rounded-full ${status === 'Done' ? 'bg-green-500' : status === 'In Progress' ? 'bg-blue-500' : 'bg-slate-400'}`} />
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{status}</span>
                                <span className="ml-auto text-xs font-bold text-slate-300">{notionTasks.filter(t => t.status === status).length}</span>
                              </div>
                              {notionTasks.filter(t => t.status === status).map((task) => (
                                <motion.div
                                  key={task.id}
                                  layout
                                  onClick={() => moveTask(task.id)}
                                  whileHover={{ y: -2 }}
                                  className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:border-primary/30 transition-all group"
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                                      task.priority === 'High' ? 'bg-red-50 text-red-600' : 
                                      task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                      {task.priority}
                                    </span>
                                    <span className="text-[9px] text-slate-400">{task.date}</span>
                                  </div>
                                  <p className="text-sm font-semibold text-slate-700 mb-2 group-hover:text-primary transition-colors">{task.title}</p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <div className="w-5 h-5 rounded-full bg-slate-200" />
                                      <div className="h-1.5 w-12 bg-slate-100 rounded-full" />
                                    </div>
                                    <IconTooltip text="Move to Next Status">
                                      <ArrowRight size={14} className="text-slate-300 group-hover:text-primary transition-colors" />
                                    </IconTooltip>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          ))}
                        </div>
                        <p className="mt-8 text-xs text-center text-slate-400 italic">Click any task card to move it through the workflow.</p>
                      </motion.div>
                    )}

                    {activeDemo === 'dashboard' && (
                      <motion.div
                        key="dashboard"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full flex flex-col"
                      >
                        <div className="flex items-center justify-between mb-8">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-800">Operations Analytics</h3>
                            <p className="text-sm text-slate-500">Real-time performance tracking</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <select 
                              value={salesMetric}
                              onChange={(e) => setSalesMetric(e.target.value)}
                              className="text-xs font-bold text-slate-500 bg-slate-100 border-none rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors"
                            >
                              <option value="revenue">Revenue</option>
                              <option value="leads">Leads</option>
                              <option value="conversion">Conversion Rate</option>
                            </select>
                            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-1">
                              <TrendingUp size={12} />
                              +12.5%
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                          {[
                            { label: 'Total Revenue', val: '$42,500', color: 'text-primary' },
                            { label: 'New Leads', val: '148', color: 'text-green-600' },
                            { label: 'Conv. Rate', val: '18.2%', color: 'text-blue-600' },
                            { label: 'Avg. Value', val: '$2.4k', color: 'text-purple-600' }
                          ].map((stat) => (
                            <div key={stat.label} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                              <p className={`text-xl font-bold ${stat.color}`}>{stat.val}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex-1 min-h-[250px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={salesData}>
                              <defs>
                                <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                              <YAxis hide />
                              <Tooltip 
                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                              />
                              <Area type="monotone" dataKey={salesMetric} stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorMetric)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </motion.div>
                    )}

                    {activeDemo === 'sop' && (
                      <motion.div
                        key="sop"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full"
                      >
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-2xl font-bold text-slate-800">Knowledge Base</h3>
                          <div className="relative">
                            <IconTooltip text="Search SOPs">
                              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            </IconTooltip>
                            <input 
                              type="text" 
                              placeholder="Search SOPs..." 
                              value={sopSearch}
                              onChange={(e) => setSopSearch(e.target.value)}
                              className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 w-48 sm:w-64 outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                          {filteredSops.map((sop) => (
                            <motion.div
                              key={sop.title}
                              whileHover={{ x: 5 }}
                              onClick={() => setSelectedSop(sop)}
                              className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer hover:border-primary/30 transition-all"
                            >
                              <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                <IconTooltip text="Document">
                                  <FileText size={20} />
                                </IconTooltip>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{sop.category}</span>
                                  <span className="text-[10px] text-slate-400">•</span>
                                  <span className="text-xs text-slate-400">{sop.time}</span>
                                </div>
                                <h4 className="font-bold text-slate-700">{sop.title}</h4>
                              </div>
                              <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${sop.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                {sop.status}
                              </div>
                              <IconTooltip text="View SOP">
                                <ChevronRight size={18} className="text-slate-300" />
                              </IconTooltip>
                            </motion.div>
                          ))}
                          {filteredSops.length === 0 && (
                            <div className="text-center py-20">
                              <p className="text-slate-400">No SOPs found matching your search.</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Proficiency Section */}
      <section id="tools" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <IconTooltip text="Processor Architecture">
                <Cpu size={120} strokeWidth={1} />
              </IconTooltip>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <IconTooltip text="Tech Operations">
                    <Settings className="text-white" size={28} />
                  </IconTooltip>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Tech Proficiency</h2>
              </div>

              <div className="mb-12">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Software Proficiency</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                  <SkillBar name="Google Workspace" level={95} color="bg-blue-400" dark />
                  <SkillBar name="Microsoft 365" level={90} color="bg-indigo-400" dark />
                  <SkillBar name="Notion" level={92} color="bg-slate-400" dark />
                  <SkillBar name="Trello" level={88} color="bg-blue-500" dark />
                  <SkillBar name="ChatGPT / Claude / Gemini" level={95} color="bg-emerald-400" dark />
                  <SkillBar name="Canva / CapCut" level={82} color="bg-pink-400" dark />
                  <SkillBar name="Zoom / MS Teams" level={95} color="bg-blue-300" dark />
                  <SkillBar name="Discord" level={90} color="bg-indigo-300" dark />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-12 pt-10 border-t border-white/10">
                <div>
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Technical Skills</h3>
                  <div className="space-y-1">
                    <SkillBar name="Technical Troubleshooting" level={90} color="bg-primary" dark />
                    <SkillBar name="Documentation" level={95} color="bg-primary" dark />
                    <SkillBar name="Systems Design" level={80} color="bg-primary" dark />
                    <SkillBar name="Workflow Optimization" level={90} color="bg-primary" dark />
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Soft Skills</h3>
                  <div className="space-y-1">
                    <SkillBar name="Communication" level={95} color="bg-secondary" dark />
                    <SkillBar name="Time Management" level={90} color="bg-secondary" dark />
                    <SkillBar name="Problem Solving" level={88} color="bg-secondary" dark />
                    <SkillBar name="Remote Coordination" level={92} color="bg-secondary" dark />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-10 pt-10 border-t border-white/10">
                <div>
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Education</h3>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-white">
                      <IconTooltip text="Academic Degree">
                        <GraduationCap size={24} />
                      </IconTooltip>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">BS Electronics Engineering</h4>
                      <p className="text-slate-400">Rizal Technological University</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Languages</h3>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-white">
                      <IconTooltip text="Language Proficiency">
                        <Languages size={24} />
                      </IconTooltip>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">English <span className="text-slate-400 font-normal text-sm ml-2">(Fluent)</span></h4>
                      <p className="text-slate-400">Filipino <span className="text-slate-400 font-normal text-sm ml-2">(Native)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Growth Section */}
      <section id="experience" className="py-24 bg-neutral-bg scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="lg:w-1/3">
              <SectionTitle subtitle="My professional journey and certifications.">Experience & Growth</SectionTitle>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <IconTooltip text="Achievements">
                    <Trophy className="text-primary" size={24} />
                  </IconTooltip>
                  <h3 className="text-xl font-bold text-slate-800">Certifications</h3>
                </div>
                <div className="space-y-8">
                  {[
                    { title: "Google Workspace Certification", issuer: "Google", year: "2026" },
                    { title: "Virtual Assistant Fundamentals", issuer: "Coursera", year: "2026" },
                    { title: "Inbound Marketing Certification", issuer: "HubSpot Academy", year: "2026" }
                  ].map((cert, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-slate-100">
                      <h4 className="font-bold text-slate-800 leading-tight mb-1">{cert.title}</h4>
                      <p className="text-sm text-slate-500">{cert.issuer} • {cert.year}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              {[
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
              ].map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">{exp.role}</h3>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                    </div>
                    <div className="px-4 py-1.5 bg-slate-100 rounded-full text-sm font-bold text-slate-600">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-neutral-bg hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Remote Work Readiness */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-10">
              <IconTooltip text="Connectivity">
                <Wifi className="text-primary" size={24} />
              </IconTooltip>
              <h3 className="text-2xl font-bold text-slate-800">Remote Work Readiness</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-12">
              <div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Connectivity</h4>
                <p className="font-bold text-slate-800">Primary: 200 Mbps Fiber</p>
                <p className="text-slate-500 text-sm">Backup: 50 Mbps PLDT</p>
              </div>
              <div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Power Reliability</h4>
                <p className="font-bold text-slate-800">UPS with 2-hour battery</p>
                <p className="text-slate-500 text-sm">Nearby coworking access</p>
              </div>
              <div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Availability</h4>
                <p className="font-bold text-slate-800">Flexible Schedule</p>
                <p className="text-slate-500 text-sm">US/UK/AU Timezones</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 bg-neutral-bg scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Building trust through engineering-grade precision.">Why Clients Choose Me</SectionTitle>
          <div className="grid md:grid-cols-5 gap-6">
            {whyChooseMe.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-slate-100 text-center"
              >
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconTooltip text="Verified">
                    <CheckCircle2 size={20} />
                  </IconTooltip>
                </div>
                <h3 className="font-bold text-text-main mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="My systematic approach to operational excellence.">My Work Process</SectionTitle>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            {workProcess.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/20">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-text-main mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Let’s Work Together</h2>
            <p className="text-xl text-white/90">
              Available for remote roles supporting operations, documentation, and workflow systems. If you need someone who can bring structure and efficiency to your business, I’d be happy to help.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.a 
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              href="mailto:alnathanielesberto@gmail.com" 
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <IconTooltip text="Send Email">
                  <Mail size={24} />
                </IconTooltip>
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
                <IconTooltip text="LinkedIn Profile">
                  <Linkedin size={24} />
                </IconTooltip>
              </div>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="font-medium">Connect with me</p>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              href="#" 
              target="_blank" 
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <IconTooltip text="External Link">
                  <ExternalLink size={24} />
                </IconTooltip>
              </div>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">OnlineJobs Profile</p>
              <p className="font-medium">View Profile</p>
            </motion.a>
          </div>
          
          <div className="mt-20 text-center">
            <div className="text-white/70 text-sm mb-8 flex items-center justify-center gap-2">
              <IconTooltip text="Location"><MapPin size={16} /></IconTooltip> Based in Pasig City, Philippines • Working Globally
            </div>
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
