type LabelType = {
  title: { [key: string]: string };
  description: { [key: string]: string };
  miscellanous: {
    title: { [key: string]: string };
    description: { [key: string]: string };
  };
  birthday: {
    label: { [key: string]: string };
    dateOfBirth: { [key: string]: string };
  };
  location: {
    title: { [key: string]: string };
    description: { [key: string]: string };
  };
  hobbies: {
    title: { [key: string]: string };
    description: { [key: string]: string };
  };
  tabTriggers: {
    bio: { [key: string]: string };
    certifications: { [key: string]: string };
    media: { [key: string]: string };
  };
  certificationsDescription: { [key: string]: string };
  close: { [key: string]: string };
};

export const labels: LabelType = {
  title: {
    en: 'About',
    es: 'Sobre mi',
    de: 'Über mich',
  },
  description: {
    en: "Hi! 👋🏼 I'm Santi, a software developer with expertise in frontend and backend technologies. I’ve worked with companies like Rocket Labs, building impactful mobile and web features using tools like React, Next.js, and Firebase. My experience includes AI-powered e-commerce features, robust authentication systems, and optimizing data rendering with pagination and infinite scroll. I prioritize clean, maintainable code, following best practices like the MVC pattern. Always eager for new challenges, my goal is to build software that works efficiently and delivers real value to users.",

    es: '¡Hola! 👋🏼 Soy Santi, un desarrollador de software con experiencia en tecnologías frontend y backend. He trabajado con empresas como Rocket Labs, creando funciones para aplicaciones móviles y web usando herramientas como React, Next.js y Firebase. Mi experiencia incluye funciones con IA para e-commerce, sistemas de autenticación robustos y optimización de datos con paginación y scroll infinito. Priorizo el código limpio y mantenible, siguiendo prácticas como el patrón MVC. Siempre listo para nuevos retos, mi objetivo es crear software eficiente y útil para los usuarios.',
    de: 'Hallo! 👋🏼 Ich bin Santi, ein Softwareentwickler mit Erfahrung in Frontend- und Backend-Technologien. Ich habe für Unternehmen wie Rocket Labs gearbeitet und mobile sowie Web-Funktionen mit React, Next.js und Firebase entwickelt. Meine Erfahrung umfasst KI-gestützte E-Commerce-Funktionen, robuste Authentifizierungssysteme und die Optimierung der Datendarstellung mit Paginierung und endlosem Scrollen. Ich lege Wert auf sauberen, wartbaren Code und befolge Best Practices wie das MVC-Muster. Ich freue mich auf neue Herausforderungen und darauf, Software zu entwickeln, die effizient ist und echten Mehrwert bietet.',
  },
  miscellanous: {
    title: { en: 'Miscellaneous', es: 'Curiosidades', de: 'Verschiedenes' },
    description: {
      en: 'Here are some additional details about me.',
      es: 'Aquí hay algunos detalles adicionales sobre mí.',
      de: 'Hier sind einige zusätzliche Details über mich.',
    },
  },
  birthday: {
    label: {
      en: 'Birthday',
      es: 'Cumpleaños',
      de: 'Geburtstag',
    },
    dateOfBirth: {
      es: '5 de Abril 🐏',
      en: 'April 5 🐏',
      de: '5. April 🐏',
    },
  },
  location: {
    title: { es: 'Ubicación', en: 'Location', de: 'Standort' },
    description: {
      es: 'Copenhague, Dinamarca 🇩🇰.',
      en: 'Copenhagen, Denmark 🇩🇰.',
      de: 'Kopenhagen, Dänemark 🇩🇰.',
    },
  },
  hobbies: {
    title: {
      es: 'Hobbies',
      en: 'Hobbies',
      de: 'Hobbys',
    },
    description: {
      es: 'Toco la guitarra 🎸 y juego tenis 🎾.',
      en: 'I play the guitar 🎸 and tennis 🎾.',
      de: 'Ich spiele Gitarre 🎸, Tennis 🎾.',
    },
  },
  tabTriggers: {
    bio: {
      en: 'bio',
      es: 'bio',
      de: 'bio',
    },
    certifications: {
      en: 'certifications',
      es: 'certificaciones',
      de: 'zertifikate',
    },
    media: {
      en: 'media',
      es: 'medios',
      de: 'medien',
    },
  },
  certificationsDescription: {
    en: 'Here are some of the certifications I have earned.',
    es: 'Aquí hay algunas de las certificaciones que he obtenido.',
    de: 'Hier sind einige der Zertifikate, die ich erworben habe.',
  },
  close: {
    en: 'Close',
    es: 'Cerrar',
    de: 'Schließen',
  },
};
