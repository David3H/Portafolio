# Portafolio Profesional de Desarrollo Web, TI e IA

¡Bienvenido al repositorio de mi portafolio profesional! Este proyecto es una aplicación web moderna, modular y totalmente responsiva diseñada para mostrar mi trayectoria como **Ingeniero en Tecnologías de la Información**, especializado en **Desarrollo de Software Full Stack** e **Inteligencia Artificial**.

La aplicación destaca por una arquitectura limpia basada en componentes reutilizables, animaciones fluidas y un diseño optimizado para todo tipo de pantallas (móviles, tablets y escritorio).

---

## Tecnologías y Herramientas Utilizadas

El proyecto fue construido utilizando herramientas modernas del ecosistema frontend:

*   **Core:** [React](https://react.dev) + [TypeScript](https://typescriptlang.org) (Tipado estricto para un código más seguro y robusto).
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com) (Diseño utilitario con modo oscuro nativo, gradientes y diseño responsivo basado en Grid/Flexbox).
*   **Animaciones:** [Framer Motion](https://framer.com) (Animaciones sutiles de entrada, efectos al hacer scroll y micro-interacciones interactivas en tarjetas).
*   **Iconos:** [React Icons](https://github.io) (Conjunto modular de iconos vectoriales de *Feather Icons*).
*   **Calidad de Código:** [ESLint](https://eslint.org) (Configuración estricta para garantizar buenas prácticas y mantener un estándar de código limpio).

---

## Arquitectura y Estructura del Proyecto

El código sigue el principio de **Responsabilidad Única**, separando los datos estáticos de la lógica visual para facilitar el mantenimiento y asegurar la escalabilidad:

```text
src/
├── data/
│   └── portfolioData.ts       # Centralización de textos, proyectos, estudios y habilidades.
├── components/
│   ├── Hero.tsx               # Presentación principal con llamada a la acción.
│   ├── Projects.tsx           # Galería de proyectos con renderizado condicional de enlaces.
│   ├── ExperienceEducation.tsx# Grid de dos columnas (Trayectoria Profesional y Formación Académica).
│   └── Especialties.tsx       # Sección de Especialidades Técnicas con categorización e iconos.
├── layout/
|   ├── Footer.tsx             # Accesos directos a redes profesionales..
│   └── Header.tsx             # Información general y navegación
├── App.tsx                    # Orquestador principal y contenedor de animaciones globales.
├── main.tsx                   # Punto de entrada de la aplicación.
└── index.css                  # Directivas de Tailwind CSS.
```

---

## Características Principales

1.  **Diseño Mobile-First & Responsivo:** Se adapta perfectamente desde pantallas de teléfonos móviles pequeños hasta monitores de alta resolución mediante un sistema de rejillas adaptables (`grid-cols-1 lg:grid-cols-2`).
2.  **Renderizado Condicional Avanzado:** La sección de proyectos valida dinámicamente si existe un despliegue en vivo o un repositorio; si no está disponible, el enlace se desactiva elegantemente evitando enlaces rotos (`#`).
3.  **Seguridad en Enlaces Externos:** Todos los hipervínculos que abren pestañas nuevas implementan las propiedades de seguridad `target="_blank"` y `rel="noopener noreferrer"`.
4.  **Modularidad Dinámica:** Los datos de texto se inyectan dinámicamente en los componentes a través de tipados estrictos en TypeScript (`interface Props`), lo que permite actualizar todo el contenido del portafolio modificando un solo archivo de configuración (`portfolioData.ts`).

---

## Instalación y Uso Local

Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com
    cd TU_REPOSITORIO
    ```

2.  **Instalar las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    *La aplicación se abrirá automáticamente en tu navegador local (usualmente en `http://localhost:5173`).*

4.  **Ejecutar el linter (ESLint):**
    Para verificar que el código cumple con todas las reglas de calidad establecidas:
    ```bash
    npm run lint
    ```

5.  **Construir para producción:**
    Genera los archivos optimizados y listos para producción en la carpeta `dist`:
    ```bash
    npm run build
    ```
