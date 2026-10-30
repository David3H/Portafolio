import { FiSmartphone, FiMonitor, FiServer
} from 'react-icons/fi';
import { FaDatabase } from 'react-icons/fa6';

export const skillsData = [
    { title: "Prototipado y FrontEnd", icon: <FiMonitor className="text-cyan-400 text-2xl" />, techs: ["Figma", "React", "Tailwind CSS", "TypeScript", "Bootstrap", "Angular"] },
    { title: "BackEnd", icon: <FiServer className="text-2xl" />, techs: ["Node.js", "Express.js", "NestJS", "ASP.NET Core", "Spring Boot", "PHP"] },
    { title: "Base de Datos", icon: <FaDatabase className="text-emerald-400 text-2xl" />, techs: ["PostgreSQL", "Sql Server", "Oracle", "MySql"] },
    { title: "Desarrollo Móvil", icon: <FiSmartphone className="text-purple-400 text-2xl" />, techs: ["Flutter", "React Native", "Ionic"] },
];

export const projects = [
    {
        title: "Web Corporativa",
        desc: "Diseño y desarrollo integral de la plataforma web corporativa para la empresa Rectima Industry Cia. Ltda. Arquitectura moderna y optimizada que mejoró la velocidad de carga y la conversión de clientes potenciales, asegurando una experiencia de usuario fluida y una identidad de marca sólida en línea.",
        tech: ["React", "Node.js", "Sql Server", "Mysql"],
        image: "/src/assets/Presentacion.png",
        link: "https://www.rectima.com.ec/",
    },
    {
        title: "Ventas y Estadisticas App Móvil",
        desc: "Aplicativo mutiplataforma integral para la fuerza de ventas, facilita la recaudación en campo, registro de cheques y depósitos, mas verificación de cumplimiento diario.",
        tech: ["Ionic", "React", "Express.js", "Node.js", "Sql Server"],
        image: "/src/assets/App1.jpg",
        link: "#",
    },
    {
        title: "Sipre App Móvil",
        desc: "Aplicación móvil multiplataforma orientada en modulos para la creación de rutas logisticas, registro de activos, mantenimientos y control de asistencia.",
        tech: ["React Native", "NestJS", "PostgreSQL"],
        image: "/src/assets/App2.jpg",
        link: "#",
    },
];

export const education = [
    { period: "2026 - Actualidad", title: "Maestría en Desarrollo de Software e Inteligencia Artificial", institution: "University of Wales Trinity Saint David", desc: "Especialización en ingeniería de software avanzada, diseño de algoritmos predictivos e implementación de soluciones de Inteligencia Artificial en entornos de producción." },
    { period: "2023 - 2025", title: "Certificación Profesional Developer", institution: "Digital House", desc: "Certificación enfocada en el ciclo completo de desarrollo de software, optimización de código, gestión de bases de datos y despliegue automatizado de aplicaciones." },
    { period: "2019 - 2024", title: "Ingeniero en Tecnologías de la Información", institution: "Universidad Técnica de Ambato", desc: "Especializado en la gestión de infraestructura tecnológica, administración de redes, seguridad de la información y desarrollo de soluciones de software empresarial." },
];

export const experience = [
    { role: "Asistente Tecnología y Desarrollo", company: "Gala Corp.", period: "2026 - Actualidad", desc: "Asistencia técnica integral en proyectos de desarrollo de software, optimización de sistemas informáticos y soporte a la infraestructura tecnológica de la organización." },
    { role: "Asistente Desarrollador de Sistemas", company: "Rectima Industry Cia. Ltda.", period: "2023 - 2025", desc: "Diseño y desarrollo autónomo de sistemas de software integral,  codificación de nuevas funcionalidades, resolución de bugs y soporte técnico en el mantenimiento de los sistemas internos de la empresa." }
];

