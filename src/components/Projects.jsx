import { useState } from 'react';
import { projects } from '/src/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiCode, FiChevronDown } from 'react-icons/fi';

export default function Projects({ itemVariants }) {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleProject = (index) => {
        setExpandedProjects(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
    return (
        <section id="proyectos" className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-900">
            <motion.h2 variants={itemVariants} className="text-3xl font-black text-white mb-12 flex items-center gap-2">
                <FiCode className="text-cyan-400" /> Proyectos Destacados
            </motion.h2>
            <div className="space-y-4">
                {projects.map((project, idx) => {
                    const isOpen = expandedProjects[idx];
                    return (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleProject(idx)}
                                className="w-full p-6 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <FiCode className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                                    <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-slate-400 group-hover:text-cyan-400"
                                >
                                    <FiChevronDown size={22} />
                                </motion.div>
                            </button>

                            {/* Contenido desplegable con animación suave */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 border-t border-slate-800/80 pt-6">
                                            <div className="overflow-hidden bg-slate-900 h-52 relative rounded-xl border border-slate-800 mb-6">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                            </div>

                                            <p className="text-slate-400 text-sm leading-relaxed font-normal">{project.desc}</p>

                                            <div className="flex gap-2 flex-wrap mt-5">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="text-xs bg-slate-800/80 px-3 py-1.5 rounded-xl text-slate-300 border border-slate-700/50 font-medium">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-6 mt-6 border-t border-slate-800/80 pt-4">
                                                {project.link && project.link !== "#" && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 font-bold transition-colors"
                                                    >
                                                        <FiExternalLink /> En Vivo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    )
}
