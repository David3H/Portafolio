import { experience, education } from '/src/data/portfolioData';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ExperienceEducation({ itemVariants }) {
  return (
    <section id="experiencia" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <div>
              <motion.h2 variants={itemVariants} className="text-3xl font-black text-white mb-12 flex items-center gap-2">
                <FiBriefcase className="text-purple-400" /> Trayectoria Profesional
              </motion.h2>

              <div className="space-y-8 relative before:absolute before:inset-0 before:right-auto before:left-3.5 before:w-0.5 before:bg-slate-800">
                {experience.map((exp, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="relative pl-10 group">
                    <div className="absolute left-1.5 top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors duration-300 shadow-sm" />
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl shadow-xl group-hover:border-purple-500/40 transition-all">
                      <span className="text-xs text-purple-400 font-bold tracking-wider uppercase">{exp.period}</span>
                      <h3 className="text-xl font-black text-white mt-1">{exp.role}</h3>
                      <h4 className="text-sm text-slate-400 font-semibold mb-3">{exp.company}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h2 variants={itemVariants} className="text-3xl font-black text-white mb-12 flex items-center gap-2">
                <FiBookOpen className="text-cyan-400" /> Formación Académica
              </motion.h2>

              <div className="space-y-8 relative before:absolute before:inset-0 before:right-auto before:left-3.5 before:w-0.5 before:bg-slate-800">
                {education.map((edu, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="relative pl-10 group">
                    <div className="absolute left-1.5 top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300 shadow-sm" />
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl shadow-xl group-hover:border-cyan-500/40 transition-all">
                      <span className="text-xs text-cyan-400 font-bold tracking-wider uppercase">{edu.period}</span>
                      <h3 className="text-xl font-black text-white mt-1">{edu.title}</h3>
                      <h4 className="text-sm text-slate-400 font-semibold mb-3">{edu.institution}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{edu.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>
  )
}
