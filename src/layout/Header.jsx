import { motion } from 'framer-motion';

export default function Header() {
    return (
        <nav className="border-b border-slate-800/80 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50 px-6 py-4 shadow-lg shadow-black/20">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="font-black text-xl tracking-wide bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
                >
                    &lt;DHCode /&gt;
                </motion.span>
                <div className="hidden md:flex gap-8 text-sm text-slate-300 font-semibold">
                    <a href="#presentacion" className="hover:text-cyan-400 transition-colors">Presentación</a>
                    <a href="#habilidades" className="hover:text-cyan-400 transition-colors">Habilidades</a>
                    <a href="#experiencia" className="hover:text-cyan-400 transition-colors">Trayectoria y Formación</a>
                    <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
                </div>
            </div>
        </nav>
    )
}
