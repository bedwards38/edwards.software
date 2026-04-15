interface Locale {
  code: string;
  lang: string;
  openGraph: string;
}

export const defaultLocaleCode = "en";
export const defaultLanguage = "English";

export const locales: Locale[] = [
  {
    code: "en",
    lang: "English",
    openGraph: "en_US",
  },
  {
    code: "es",
    lang: "Spanish",
    openGraph: "es_ES",
  },
  {
    code: "de",
    lang: "German",
    openGraph: "de_DE",
  },
];

export interface Translations {
  // Navigation & Meta
  "site.title"?: string;
  "site.description"?: string;
  "site.about.title"?: string;
  "site.about.description"?: string;
  "site.projects.title"?: string;
  "site.projects.description"?: string;
  "site.experience.title"?: string;
  "site.experience.description"?: string;
  "site.404.title"?: string;
  "site.404.description"?: string;

  // Button Components
  "button.link.back"?: string;
  "button.toggle.theme"?: string;
  "button.switch.locale"?: string;

  // Locale Labels
  "locale.label.english"?: string;
  "locale.label.spanish"?: string;
  "locale.label.german"?: string;

  // Hero Component
  "hero.cta"?: string[];
  "hero.cta[0]"?: string;
  "hero.cta[1]"?: string;
  "hero.cta[2]"?: string;

  // Card Component
  "card.featured"?: string;
  "card.prototype"?: string;
  "card.button.description"?: string;

  // Explanation Button Group Component
  "explanation.button.link"?: string;
  "explanation.button.repo"?: string;
  "explanation.button.demo"?: string;
  "explanation.button.images"?: string;

  // Card Filter Component
  "card.filter.all"?: string;

  // Dialog Component
  "dialog.label"?: string;
  "dialog.gallery.label"?: string;
  "dialog.button.close"?: string;

  // Footer
  "footer.copyright"?: string;
  "footer.contact"?: string;

  // 404 Page
  "404.prompt"?: string;

  // Home Page
  "home.prompt"?: string;

  // About Page
  "page.about.title"?: string;
  "page.about.prompt"?: string;
  "page.about.education.title"?: string;

  // About Education Page
  "page.about-education.prompt"?: string;

  // Projects Page
  "page.projects.title"?: string;
  "page.projects.prompt"?: string;
  "page.projects.filter.command"?: string;

  // Project Explanation Page
  "page.project-explanation.prompt"?: string;

  // Experience Page
  "page.experience.title"?: string;
  "page.experience.prompt"?: string;
  "page.experience.filter.command"?: string;

  // Experience Explanation Page
  "page.experience-explanation.prompt"?: string;
}

export const translations: Record<string, Translations> = {
  en: {
    "site.title": "edwards.software",
    "site.description":
      "A full stack software engineer's development portfolio. Specialized in microservice architecture and legacy system modernization.",
    "site.about.title": "~/about",
    "site.about.description":
      "A short look into the history of Braedyn Edwards",
    "site.projects.title": "~/projects",
    "site.projects.description": "Braedyn Edwards' created projects",
    "site.experience.title": "~/experience",
    "site.experience.description": "Braedyn Edwards' career experience",
    "site.404.title": "not found",
    "site.404.description": "Not found page for edwards.software",
    "button.link.back": "Go Back",
    "button.toggle.theme": "Toggle Theme",
    "button.switch.locale": "Switch Language",
    "locale.label.english": "English",
    "locale.label.spanish": "Spanish",
    "locale.label.german": "German",
    "hero.cta": ["cd ~/about", "cd ~/projects", "cd ~/experience"],
    "hero.cta[0]": "cd ~/about",
    "hero.cta[1]": "cd ~/projects",
    "hero.cta[2]": "cd ~/experience",
    "card.featured": "PINNED",
    "card.prototype": "PROTOTYPE",
    "card.button.description": "explore",
    "explanation.button.link": "[link]",
    "explanation.button.repo": "[repo]",
    "explanation.button.demo": "[demo]",
    "explanation.button.images": "[images]",
    "card.filter.all": "all",
    "dialog.label": "Dialog",
    "dialog.gallery.label": "Gallery",
    "dialog.button.close": "Close dialog",
    "404.prompt": "[~]$ cd ${path}",
    "home.prompt": "[~]$ ./greetings",
    "page.about.title": "About Me",
    "page.about.prompt": "[~/about]$ ./identify",
    "page.about.education.title": "Education History",
    "page.about-education.prompt": "[~/about/education]$ ./explain",
    "page.projects.title": "Project History",
    "page.projects.prompt": "[~/projects]$ ./history",
    "page.projects.filter.command": "ls -C technologies/",
    "page.project-explanation.prompt": "[~/projects/${project}]$ ./explain",
    "page.experience.title": "Experience History",
    "page.experience.prompt": "[~/experience]$ ./history",
    "page.experience.filter.command": "ls -C technologies/",
    "page.experience-explanation.prompt":
      "[~/experience/${experience}]$ ./explain",
    "footer.contact": "cat email.txt",
    "footer.copyright": "© {year} edwards.software",
  },
  es: {
    "site.description":
      "Portafolio de desarrollo integral para ingenieros de software. Especializado en arquitectura de microservicios y modernización de sistemas heredados.",
    "site.about.title": "~/sobre",
    "site.about.description":
      "Un breve vistazo a la historia de Braedyn Edwards",
    "site.projects.title": "~/proyectos",
    "site.projects.description": "Proyectos creados por Braedyn Edwards",
    "site.experience.title": "~/experiencia",
    "site.experience.description": "Experiencia profesional de Braedyn Edwards",
    "site.404.title": "no encontrado",
    "site.404.description": "Página no encontrada para edwards.software",
    "button.link.back": "Volver",
    "button.toggle.theme": "Cambiar Tema",
    "button.switch.locale": "Lenguaje de Brujas",
    "locale.label.english": "Inglés",
    "locale.label.spanish": "Español",
    "locale.label.german": "Alemán",
    "hero.cta": ["cd ~/sobre", "cd ~/proyectos", "cd ~/experiencia"],
    "hero.cta[0]": "cd ~/sobre",
    "hero.cta[1]": "cd ~/proyectos",
    "hero.cta[2]": "cd ~/experiencia",
    "card.featured": "PINNED",
    "card.prototype": "PROTOTIPO",
    "card.button.description": "explorar",
    "explanation.button.link": "[enlace]",
    "explanation.button.images": "[imágenes]",
    "card.filter.all": "todo",
    "dialog.label": "Diálogo",
    "dialog.gallery.label": "Galería",
    "dialog.button.close": "Cerrar diálogo",
    "home.prompt": "[~]$ ./saludos",
    "page.about.title": "Sobre Mí",
    "page.about.prompt": "[~/sobre]$ ./identificar",
    "page.about.education.title": "Historial de Educación",
    "page.about-education.prompt": "[~/sobre/educación]$ ./explicar",
    "page.projects.title": "Historial del Proyectos",
    "page.projects.prompt": "[~/proyectos]$ ./historia",
    "page.projects.filter.command": "ls -C tecnologías/",
    "page.experience.title": "Historial de Experiencias",
    "page.experience.prompt": "[~/experiencia]$ ./historia",
    "page.experience.filter.command": "ls -C tecnologías/",
  },
  de: {
    "site.description":
      "Das Entwicklungsportfolio eines Full-Stack-Softwareentwicklers. Spezialisiert auf Microservice-Architekturen und die Modernisierung von Legacy-Systemen.",
    "site.about.title": "~/um",
    "site.about.description":
      "Ein kurzer Blick in die Geschichte von Braedyn Edwards",
    "site.projects.title": "~/projekte",
    "site.projects.description": "Von Braedyn Edwards erstellte Projekte",
    "site.experience.title": "~/erfahrung",
    "site.experience.description": "Braedyn Edwards’ Berufserfahrung",
    "site.404.title": "nicht gefunden",
    "site.404.description": "Seite für edwards.software nicht gefunden",
    "button.link.back": "Geh Zurück",
    "button.toggle.theme": "Design Ändern",
    "dialog.label": "Diálog",
    "button.switch.locale": "Sprache Wechseln",
    "locale.label.english": "Englisch",
    "locale.label.spanish": "Spanisch",
    "locale.label.german": "Deutsch",
    "hero.cta": ["cd ~/um", "cd ~/projekte", "cd ~/erfahrung"],
    "hero.cta[0]": "cd ~/um",
    "hero.cta[1]": "cd ~/projekte",
    "hero.cta[2]": "cd ~/erfahrung",
    "card.featured": "STECKEN",
    "card.prototype": "PROTOTYP",
    "card.button.description": "erkunden",
    "explanation.button.link": "[link]",
    "explanation.button.images": "[bilder]",
    "card.filter.all": "alle",
    "dialog.gallery.label": "Galerie",
    "dialog.button.close": "Dialog Schließen",
    "home.prompt": "[~]$ ./grüße",
    "page.about.title": "Über mich",
    "page.about.prompt": "[~/um]$ ./identifizieren",
    "page.about.education.title": "Bildungsweg",
    "page.about-education.prompt": "[~/um/ausbildung]$ ./erklären",
    "page.projects.title": "Projektgeschichte",
    "page.projects.prompt": "[~/projekte]$ ./historie",
    "page.projects.filter.command": "ls -C technologien/",
    "page.experience.title": "Beruflicher Werdegang",
    "page.experience.prompt": "[~/erfahrung]$ ./historie",
    "page.experience.filter.command": "ls -C technologien/",
  },
};
