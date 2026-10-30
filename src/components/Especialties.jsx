import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';
import { skillsData } from '../data/portfolioData';

export default function Especialties({ itemVariants }) {
    return (
        <section id="habilidades" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
            <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-black text-white flex items-center justify-center gap-2">
                    <FiUser className="text-cyan-400" /> Especialidades Técnicas
                </h2>
                <p className="text-slate-400 mt-2 font-medium">Herramientas globales y stacks que implemento para estructurar software.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
                {skillsData.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ y: -8, borderColor: "rgba(6, 182, 212, 0.4)" }}
                        className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/50 group-hover:scale-110 transition-transform">{skill.icon}</span>
                            <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skill.techs.map((tech, i) => (
                                <span key={i} className="text-xs bg-slate-800/80 text-slate-300 font-semibold px-3 py-1.5 rounded-xl border border-slate-700/50">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
