import { StaticImageData } from 'next/image';

export interface CertificateInterface {
  title: { [index: string]: string };
  issuedAt: { [index: string]: string };
  link: string;
}

export const certificatesData: CertificateInterface[] = [
  {
    title: {
      en: 'TypeScript Essential Training',
      es: 'Entrenamiento esencial de TypeScript',
      de: 'TypeScript Grundlagen Training',
    },
    issuedAt: {
      en: 'Issued at: December 20th, 2023',
      es: 'Emitido el: 20 de diciembre de 2023',
      de: 'Ausgestellt am: 20. Dezember 2023',
    },
    link: 'https://media.licdn.com/dms/image/v2/D4D22AQH9QLFtC7-fOg/feedshare-shrink_1280/feedshare-shrink_1280/0/1703083529107?e=1731542400&v=beta&t=sMnYpSwioo9cNANCqPb9rcxzkggA08QU3EW6QMGVfXQ',
  },
  {
    title: {
      en: 'React: from zero to expert (Hooks y MERN)',
      es: 'React: de cero a experto (Hooks y MERN)',
      de: 'React: von null auf Experte (Hooks und MERN)',
    },
    issuedAt: {
      en: 'Issued at: January 6th, 2023',
      es: 'Emitido el: 06 de enero de 2022',
      de: 'Ausgestellt am: 6. Januar 2023',
    },
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-1c58357a-7533-4646-bb3c-8d31a091ddf1.jpg?v=1728487987000',
  },
  {
    title: {
      en: 'Fullstack developer with TypeScript',
      es: 'Desarrollador Fullstack con TypeScript',
      de: 'Fullstack-Entwickler mit TypeScript',
    },
    issuedAt: {
      en: 'issued at: May 5th, 2023',
      es: 'Emitido el: 5 de mayo de 2023',
      de: 'Ausgestellt am: 5. Mai 2023',
    },
    link: 'https://media.licdn.com/dms/image/D4E2DAQGqcvUctYP70A/profile-treasury-document-images_800/1/1684356071097?e=1729123200&v=beta&t=-x8T3NxKLW4M8XBHjMLK5ssIxXDro1r1NmLvi1wLc0s',
  },
];
