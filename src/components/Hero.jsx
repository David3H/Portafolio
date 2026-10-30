import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <header id="presentacion" className="max-w-5xl mx-auto text-center pt-24 pb-20 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full uppercase tracking-wider shadow-inner">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span> Disponible para proyectos
          </span>

          <h1 className="text-4xl md:text-7xl font-black mt-6 tracking-tight text-white leading-none">
            Hola, soy Henry <br />
            <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Profesional Developer</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Especializado en diseñar soluciones interactivas completas. Combino interfaces dinámicas junto a lógicas de servidor escalables.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: -3 }}
              href="https://linkedin.com/in/henry-chimborazo-4b6b9a14b"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl shadow-lg text-slate-300 hover:text-cyan-400 transition-all"
            >
              <FaLinkedin size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 3 }}
              href="https://github.com/David3H"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl shadow-lg text-slate-300 hover:text-cyan-400 transition-all"
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:henrychimborazo331@gmail.com"
              className="px-6 py-3 bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-600/20 transition-all flex items-center gap-2"
            >
              Hablemos <FiMail />
            </motion.a>
          </div>
        </motion.div>
      </header>
  )
}
