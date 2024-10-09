import { Assets } from '@/assets';
import { StaticImageData } from 'next/image';

export interface MediaInterface {
  image: StaticImageData;
  alt: { [key: string]: string };
  description: { [key: string]: string };
}

export const mediaData: MediaInterface[] = [
  {
    image: Assets.Images.Media1,
    alt: {
      en: 'Smiling developer.',
      es: 'Desarrollador sonriente.',
      de: 'Lächelnder Entwickler.',
    },
    description: {
      en: 'The last thing that the bug on line 114 sees. 🐞',
      es: 'Lo último que ve el bug en la línea 114. 🐞',
      de: 'Das letzte, was der Bug in Zeile 114 sieht. 🐞',
    },
  },
  {
    image: Assets.Images.Media2,
    alt: {
      en: 'Flutter Con. ',
      es: 'Conferencia de Flutter. ',
      de: 'Flutter Kon. ',
    },
    description: {
      en: 'Flutter conference in Berlin 2023 04/05/2023, may the fourth be with you. 🍿',
      es: 'Conferencia de Flutter en Berlín 04/05/2023, que la fuerza te acompañe. 🍿',
      de: 'Flutter-Konferenz in Berlin 04/05/2023, möge die vierte mit dir sein. 🍿',
    },
  },
  {
    image: Assets.Images.Media3,
    alt: {
      en: 'React Berlin Meeting.',
      es: 'Reunión de React en Berlín.',
      de: 'React Berlin Meeting.',
    },
    description: {
      en: 'React Meeting, introducing new hook "use". ⚛️',
      es: 'Reunión de React, presentando el nuevo hook "use". ⚛️',
      de: 'React Meeting, Einführung des neuen Hooks "use". ⚛️',
    },
  },
  {
    image: Assets.Images.Media4,
    alt: {
      en: 'First Macbook Pro.',
      es: 'Primer Macbook Pro.',
      de: 'Erstes Macbook Pro.',
    },
    description: {
      en: 'Setting up my first MacOS environment. 🍏',
      es: 'Configurando mi primer entorno MacOS. 🍏',
      de: 'Einrichten meiner ersten MacOS-Umgebung. 🍏',
    },
  },
];
