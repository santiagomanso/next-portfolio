interface Labels {
  seeMore: { [key: string]: string };
  tabTriggers: {
    description: { [key: string]: string };
    developmentChallenges: { [key: string]: string };
    screenshots: { [key: string]: string };
    video: { [key: string]: string };
    desktop: { [key: string]: string };
    tablet: { [key: string]: string };
    mobile: { [key: string]: string };
  };
  keyFeatures: { [key: string]: string };
  buttons: {
    cta: { [key: string]: string };
    sourceCode: { [key: string]: string };
  };
  challengesAndSolutions: { [key: string]: string };
  imageGallery: { [key: string]: string };
  video: { [key: string]: string };
}

export const labels: Labels = {
  seeMore: {
    en: 'See More...',
    es: 'Ver Más...',
    de: 'Mehr Sehen...',
  },
  tabTriggers: {
    description: {
      en: 'Description',
      es: 'Descripción',
      de: 'Beschreibung',
    },
    developmentChallenges: {
      en: 'Development Challenges',
      es: 'Desafíos de desarrollo',
      de: 'Heruasforderungen',
    },
    screenshots: {
      en: 'Screenshots',
      es: 'Imágenes',
      de: 'Bilder',
    },
    video: {
      en: 'Video',
      es: 'Vídeo',
      de: 'Video',
    },
    desktop: {
      en: 'Desktop',
      es: 'Pc',
      de: 'Desktop',
    },
    tablet: {
      en: 'Tablet',
      es: 'Tablet',
      de: 'Tablet',
    },
    mobile: {
      en: 'Mobile',
      es: 'Teléfono',
      de: 'Mobil',
    },
  },
  keyFeatures: {
    en: 'Key Features:',
    es: 'Características principales:',
    de: 'Hauptmerkmale:',
  },
  buttons: {
    cta: {
      en: 'View Live Demo',
      es: 'Ver Demostración',
      de: 'Live-Demo Ansehen',
    },
    sourceCode: {
      en: 'View Source Code',
      es: 'Ver Código Fuente',
      de: 'Quellcode Ansehen',
    },
  },
  challengesAndSolutions: {
    en: 'Challenges and Solutions',
    es: 'Desafíos y Soluciones',
    de: 'Herausforderungen und Lösungen',
  },
  imageGallery: {
    en: 'Image Gallery',
    es: 'Galería de Imágenes',
    de: 'Bildergalerie',
  },
  video: {
    en: 'Project Video',
    es: 'Vídeo del Proyecto',
    de: 'Projektvideo',
  },
};
