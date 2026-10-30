import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
            <footer className="border-t border-slate-900 bg-slate-950/80 py-8 px-6 mt-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>
              <p>&copy; {new Date().getFullYear()} DHCode. Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-6 items-center">
              <a href="#presentacion" className="hover:text-cyan-400 transition-colors">Inicio</a>
              <a href="https://linkedin.com/in/henry-chimborazo-4b6b9a14b" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/David3H" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <FaGithub /> GitHub
              </a>
              <a href="mailto:henrychimborazo331@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <FiMail /> Contacto
              </a>
            </div>
          </div>
        </footer>
  )
}
