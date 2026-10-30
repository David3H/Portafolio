
import { motion } from 'framer-motion';
import ExperienceEducation from './components/ExperienceEducation';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Especialties from './components/Especialties';
import Projects from './components/Projects';
import Hero from './components/Hero';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };


  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 font-sans relative overflow-hidden">

      <div className="absolute top-0 left-1/4 h-125 w-125 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-1/4 h-150 w-150 rounded-full bg-purple-500/10 blur-[150px] pointer-events-none -z-10" />

      <Header />

      <Hero />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>

        <Especialties itemVariants={itemVariants} />

        <Projects itemVariants={itemVariants} />

        <ExperienceEducation itemVariants={itemVariants} />

        <Footer />

      </motion.div>
    </div>
  );
}