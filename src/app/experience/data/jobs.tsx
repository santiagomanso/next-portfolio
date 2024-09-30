import { Assets } from '@/assets';
import { StaticImageData } from 'next/image';

export type JobType = {
  id: number;
  company: string;
  position: {
    [index: string]: string;
    es: string;
    de: string;
    en: string;
  };
  responsabilities: {
    [index: string]: string[];
    es: string[];
    de: string[];
    en: string[];
  };
  startDate: string;
  endDate?: string;
  duration: string;
  jobType: string;
  picture: StaticImageData;
  skills: JSX.Element[];
  whatILearned: {
    [index: string]: string[];
    es: string[];
    de: string[];
    en: string[];
  };
  link: string;
};

function calculateDuration(start: string, end?: string) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date(); // Use end date if provided, otherwise use current date

  const startFormatted = `${
    startDate.getMonth() + 1
  }/${startDate.getFullYear()}`;
  const endFormatted = end
    ? `${endDate.getMonth() + 1}/${endDate.getFullYear()}`
    : 'Current Date';

  const duration = Math.round(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30),
  );

  return `${duration}`;
}

export const jobs: JobType[] = [
  {
    id: 1,
    company: 'GetRegulars',
    position: {
      es: 'Desarrollador Fullstack',
      de: 'Fullstack-Entwickler',
      en: 'Fullstack Developer',
    },
    responsabilities: {
      en: [
        'Enhanced proficiency in the T3 stack (Next.js, TypeScript, Prisma, MongoDB) by contributing to a SaaS product for the hospitality industry.',
        'Developed features for digital membership cards, enabling restaurants and bars to offer rewards through a QR code system, improving customer engagement and loyalty.',
        'Implemented authentication using NextAuth, managing user roles and ensuring secure access to the platform.',
        'Collaborated on the design and functionality of digital membership cards, enhancing the user experience and visual appeal of the service.',
      ],
      es: [
        'Mejoré mi competencia en el stack T3 (Next.js, TypeScript, Prisma, MongoDB) al contribuir a un producto SaaS para la industria hotelera.',
        'Desarrollé características para tarjetas de membresía digitales, permitiendo a restaurantes y bares ofrecer recompensas a través de un sistema de código QR, mejorando el compromiso y la lealtad del cliente.',
        'Implementé autenticación utilizando NextAuth, gestionando roles de usuario y asegurando el acceso seguro a la plataforma.',
        'Colaboré en el diseño y funcionalidad de las tarjetas de membresía digitales, mejorando la experiencia del usuario y el atractivo visual del servicio.',
      ],
      de: [
        'Erhöhte die Kompetenz im T3-Stack (Next.js, TypeScript, Prisma, MongoDB) durch die Mitarbeit an einem SaaS-Produkt für die Hotelbranche.',
        'Entwickelte Funktionen für digitale Mitgliedskarten, die es Restaurants und Bars ermöglichen, Belohnungen durch ein QR-Code-System anzubieten, wodurch die Kundenbindung und -loyalität verbessert wurde.',
        'Implementierte Authentifizierung mit NextAuth, verwaltete Benutzerrollen und gewährleistete sicheren Zugang zur Plattform.',
        'Arbeitete an Design und Funktionalität der digitalen Mitgliedskarten, wodurch die Benutzererfahrung und die visuelle Attraktivität des Dienstes verbessert wurden.',
      ],
    },
    startDate: '08/2022',
    endDate: '01/2023',
    duration: calculateDuration('2022-08-01', '2023-01-01'),
    jobType: 'full time - remote',
    picture: Assets.Images.GetRegulars,
    skills: [
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={1}
      >
        <Assets.Icons.React alt='React' className='h-4 w-4 sm:h-6 sm:w-6' />
        React
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={2}
      >
        <Assets.Icons.NextJs
          alt='NextJs'
          className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white'
        />
        NextJs
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={3}
      >
        <Assets.Icons.Tailwind
          alt='Tailwind'
          className='h-4 w-4 sm:h-6 sm:w-6'
        />
        Tailwind CSS
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={4}
      >
        <Assets.Icons.TypeScript
          alt='TypeScript'
          className='h-4 w-4 sm:h-6 sm:w-6'
        />
        TypeScript
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={5}
      >
        <Assets.Icons.JavaScript
          alt='JavaScript'
          className='h-3 w-3 sm:h-5 sm:w-5'
        />
        JavaScript
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={6}
      >
        <Assets.Icons.NodeJs alt='NodeJs' className='h-4 w-4 sm:h-6 sm:w-6' />
        NodeJs
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={7}
      >
        <Assets.Icons.Git alt='Git' className='h-4 w-4 sm:h-6 sm:w-6' />
        Git
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={8}
      >
        <Assets.Icons.GitHub
          alt='Github'
          className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white fill-slate-800'
        />
        Github
      </span>,
    ],
    whatILearned: {
      en: [
        'How to use react-hook-form in conjunction with zod for validation and shadcn/ui to build a multi-step register form, and how to use react-query to fetch data from the API and cache it, and also how to invalidate that cache when the data changes, in order to re-render the component',
        'I learned to set up next-auth with credentials and social providers, and how to manage user roles and secure access to the platform.',
        'During my first experience as a software engineer, I learned about sprints and agile methodologies, and how to work in a remote team, using tools like Slack, Jira, and GitHub.',
      ],
      es: [
        'Cómo utilizar react-hook-form en conjunto con zod para la validación y shadcn/ui para construir un formulario de registro de varios pasos, y cómo utilizar react-query para obtener datos de la API y almacenarlos en caché, y también cómo invalidar esa caché cuando los datos cambian, para volver a renderizar el componente.',
        'Aprendí a configurar next-auth con credenciales y proveedores sociales, y a gestionar roles de usuario y acceso seguro a la plataforma.',
        'Durante mi primera experiencia como ingeniero de software, aprendí sobre sprints y metodologías ágiles, y cómo trabajar en un equipo remoto, utilizando herramientas como Slack, Jira y GitHub.',
      ],
      de: [
        'Wie man react-hook-form in Verbindung mit zod zur Validierung und shadcn/ui zum Erstellen eines mehrstufigen Registrierungsformulars verwendet und wie man react-query verwendet, um Daten von der API abzurufen und zu speichern, sowie wie man diesen Cache ungültig macht, wenn sich die Daten ändern, um das Komponente neu zu rendern.',
        'Ich habe gelernt, next-auth mit Anmeldeinformationen und sozialen Anbietern einzurichten und wie man Benutzerrollen verwaltet und den Zugang zur Plattform sichert.',
        'Während meiner ersten Erfahrung als Softwareentwickler habe ich Sprints und agile Methoden kennengelernt und gelernt, wie man in einem Remote-Team arbeitet, wobei ich Tools wie Slack, Jira und GitHub verwendet habe.',
      ],
    },
    link: 'https://getregulars.com',
  },
  {
    id: 2,
    company: 'Equisalud',
    position: {
      es: 'Desarrollador Frontend',
      de: 'Frontend-Entwickler',
      en: 'Frontend Developer',
    },
    responsabilities: {
      en: [
        'Contributed to the development of three health-related React Native apps that utilize laser and radio frequencies for therapeutic purposes, improving user health management.',
        'Developed a React.js and Express.js dashboard to track user IDs, device TAGs, and subscription statuses, ensuring efficient user and subscription management.',
        'Implemented role-based functionality within the dashboard, enhancing user experience and administrative control.',
        'Collaborated with UX/UI teams to provide insights and feedback, improving the overall design and functionality of the applications.',
      ],
      es: [
        'Contribuí al desarrollo de tres aplicaciones de React Native relacionadas con la salud que utilizan láseres y frecuencias de radio con fines terapéuticos, mejorando la gestión de la salud del usuario.',
        'Desarrollé un tablero de control con React.js y Express.js para rastrear IDs de usuarios, etiquetas de dispositivos y estados de suscripción, asegurando una gestión eficiente de usuarios y suscripciones.',
        'Implementé funcionalidades basadas en roles dentro del tablero, mejorando la experiencia del usuario y el control administrativo.',
        'Colaboré con equipos de UX/UI para proporcionar ideas y comentarios, mejorando el diseño y la funcionalidad general de las aplicaciones.',
      ],
      de: [
        'Beitrag zur Entwicklung von drei gesundheitsbezogenen React Native-Apps, die Laser- und Radiofrequenzen für therapeutische Zwecke nutzen und das Gesundheitsmanagement der Benutzer verbessern.',
        'Entwickelte ein Dashboard mit React.js und Express.js, um Benutzer-IDs, Geräte-TAGs und Abonnementstatus zu verfolgen und eine effiziente Verwaltung von Benutzern und Abonnements zu gewährleisten.',
        'Implementierte rollenbasierte Funktionalitäten im Dashboard, wodurch die Benutzererfahrung und die administrative Kontrolle verbessert wurden.',
        'Arbeitete mit UX/UI-Teams zusammen, um Einblicke und Feedback zu geben und das Gesamtdesign und die Funktionalität der Anwendungen zu verbessern.',
      ],
    },
    startDate: '02/2023',
    endDate: '01/2024',
    duration: calculateDuration('2023-02-01', '2024-01-01'),
    jobType: 'full time - remote',
    picture: Assets.Images.EquiSalud,
    skills: [
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={1}
      >
        <Assets.Icons.React alt='React' className='h-4 w-4 sm:h-6 sm:w-6' />
        React
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={2}
      >
        <Assets.Icons.NextJs
          alt='NextJs'
          className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white'
        />
        NextJs
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={3}
      >
        <Assets.Icons.Tailwind
          alt='Tailwind'
          className='h-4 w-4 sm:h-6 sm:w-6'
        />
        Tailwind CSS
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={4}
      >
        <Assets.Icons.TypeScript
          alt='TypeScript'
          className='h-4 w-4 sm:h-6 sm:w-6'
        />
        TypeScript
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={5}
      >
        <Assets.Icons.JavaScript
          alt='JavaScript'
          className='h-3 w-3 sm:h-5 sm:w-5'
        />
        JavaScript
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={6}
      >
        <Assets.Icons.NodeJs alt='NodeJs' className='h-4 w-4 sm:h-6 sm:w-6' />
        NodeJs
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={7}
      >
        <Assets.Icons.Git alt='Git' className='h-4 w-4 sm:h-6 sm:w-6' />
        Git
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={8}
      >
        <Assets.Icons.GitHub
          alt='Github'
          className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white fill-slate-800'
        />
        Github
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={9}
      >
        <Assets.Icons.Android
          alt='Android'
          className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white fill-slate-800'
        />
        Android
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={10}
      >
        <Assets.Icons.Ios
          alt='Ios'
          className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white fill-slate-800'
        />
        iOS
      </span>,
    ],
    whatILearned: {
      en: [
        'Gained and applied knowledge of React Native to contribute to the development of native applications that control devices through Bluetooth connectivity.',
        'Utilized experience with Next.js to create a landing page for a product that was promoted to customers via an email link.',
        "Collaborated on a control panel called 'BioPanel' using React.js, which tracks statistics on the usage of the 'Biofoton' app and monitors memberships and the tag (serial number) of Biofoton devices.",
        'Learned to use XCode and Android Studio, as well as configure emulators.',
        'Understood the importance of controlling re-renders and optimizing code by memoizing functions with useCallback and useMemo to enhance app performance.',
      ],
      es: [
        'Adquirí y apliqué conocimientos de React Native para contribuir al desarrollo de aplicaciones nativas que controlan dispositivos a través de conectividad Bluetooth.',
        'Utilicé mi experiencia con Next.js para crear una página de aterrizaje de un producto que se promocionó a los clientes mediante un enlace por correo electrónico.',
        "Con React.js, colaboré en un panel de control llamado 'BioPanel' que lleva estadísticas sobre el uso de la app 'Biofoton' y el seguimiento de las membresías y de la etiqueta (número de serie) de los dispositivos de Biofoton.",
        'Aprendí a utilizar XCode y Android Studio, así como a configurar emuladores.',
        'Comprendí la importancia de controlar los re-renderizados y optimizar el código memoizando funciones con useCallback y useMemo para incrementar el rendimiento de la app.',
      ],
      de: [
        'Kenntnisse in React Native erworben und angewendet, um zur Entwicklung von nativen Anwendungen beizutragen, die Geräte über Bluetooth-Konnektivität steuern.',
        'Erfahrung mit Next.js genutzt, um eine Landingpage für ein Produkt zu erstellen, das über einen E-Mail-Link an Kunden beworben wurde.',
        "An einem Kontrollpanel namens 'BioPanel' mitgearbeitet, das mit React.js entwickelt wurde und Statistiken über die Nutzung der 'Biofoton'-App verfolgt und Mitgliedschaften sowie das Etikett (Seriennummer) der Biofoton-Geräte überwacht.",
        'Den Umgang mit XCode und Android Studio gelernt und Emulatoren konfiguriert.',
        'Die Bedeutung der Kontrolle von Re-Renderings und der Optimierung von Code durch Memoisierung von Funktionen mit useCallback und useMemo zur Leistungssteigerung der App verstanden.',
      ],
    },
    link: 'https://getregulars.com',
  },
  {
    id: 3,
    company: 'Rocket Labs',
    position: {
      es: 'Desarollador Frontend',
      de: 'Frontend-Entwickler',
      en: 'Frontend Developer',
    },
    responsabilities: {
      en: [
        'Integrated a development team to build a React Native app for iOS and Android, focusing on user authentication with Firebase, including social logins and Magic Link functionality.',
        "Developed an AI-powered feature allowing users to try on and purchase outfits from brands like Zara and Gucci, enhancing the app's user experience.",
        'Implemented global state management using Redux, improving app performance and maintainability.',
        'Contributed to the development of user dashboards and internal tools using Next.js, enhancing company operations and user experience.',
      ],
      es: [
        'Integré un equipo de desarrollo para crear una aplicación React Native para iOS y Android, centrándose en la autenticación de usuarios con Firebase, incluidas las sesiones sociales y la funcionalidad de Magic Link.',
        'Desarrollé una función impulsada por IA que permite a los usuarios probarse y comprar atuendos de marcas como Zara y Gucci, mejorando la experiencia del usuario en la aplicación.',
        'Implementé la gestión global del estado utilizando Redux, mejorando el rendimiento y la mantenibilidad de la aplicación.',
        'Contribuí al desarrollo de paneles de usuario y herramientas internas utilizando Next.js, mejorando las operaciones de la empresa y la experiencia del usuario.',
      ],
      de: [
        'Integrierte ein Entwicklungsteam, um eine React Native-App für iOS und Android zu erstellen, mit Schwerpunkt auf Benutzerauthentifizierung mit Firebase, einschließlich sozialer Logins und Magic Link-Funktionalität.',
        'Entwickelte eine KI-gestützte Funktion, die es den Benutzern ermöglicht, Outfits von Marken wie Zara und Gucci anzuprobieren und zu kaufen, was die Benutzererfahrung der App verbessert.',
        'Implementierte das globale Zustandsmanagement mit Redux, wodurch die Leistung und Wartbarkeit der App verbessert wurde.',
        'Trug zur Entwicklung von Benutzer-Dashboards und internen Tools mit Next.js bei, was die Unternehmensoperationen und die Benutzererfahrung verbesserte.',
      ],
    },
    startDate: '02/2023',
    duration: calculateDuration('2024-02-01'),
    jobType: 'full time - remote',
    picture: Assets.Images.RocketLabs,
    skills: [
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={1}
      >
        <Assets.Icons.React alt='React' className='h-4 w-4 sm:h-6 sm:w-6' />
        React
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={2}
      >
        <Assets.Icons.ReactNative
          alt='ReactNative'
          className='h-4 w-4 sm:h-6 sm:w-6'
        />
        React Native
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={3}
      >
        <Assets.Icons.Redux alt='Redux' className='h-4 w-4 sm:h-6 sm:w-6' />
        Redux
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={4}
      >
        <Assets.Icons.Firebase
          alt='Firebase'
          className='h-4 w-4 sm:h-6 sm:w-6'
        />
        Firebase
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={5}
      >
        <Assets.Icons.Android alt='Android' className='h-4 w-4 sm:h-6 sm:w-6' />
        Android
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={6}
      >
        <Assets.Icons.Ios alt='Ios' className='h-4 w-4 sm:h-6 sm:w-6' />
        iOS
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={7}
      >
        <Assets.Icons.TypeScript
          alt='TypeScript'
          className='h-4 w-4 sm:h-6 sm:w-6'
        />
        TypeScript
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={8}
      >
        <Assets.Icons.Figma alt='Figma' className='h-4 w-4 sm:h-6 sm:w-6' />
        Figma
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={9}
      >
        <Assets.Icons.JavaScript
          alt='JavaScript'
          className='h-3 w-3 sm:h-5 sm:w-5'
        />
        JavaScript
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={10}
      >
        <Assets.Icons.NodeJs alt='NodeJs' className='h-4 w-4 sm:h-6 sm:w-6' />
        NodeJs
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={11}
      >
        <Assets.Icons.Git alt='Git' className='h-4 w-4 sm:h-6 sm:w-6' />
        Git
      </span>,
      <span
        className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
        key={12}
      >
        <Assets.Icons.GitHub
          alt='Github'
          className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white fill-slate-800'
        />
        Github
      </span>,
    ],
    whatILearned: {
      en: [
        'I improved my practices by implementing the MVC pattern in the frontend, abstracting the business logic from the components into an external hook, thus adhering to the single responsibility principle of the views.',
        'I learned to configure Firebase, Google Cloud, and Apple to implement social media login and Dynamic Links (Magic Link).',
        'I learned to use and configure Redux to manage the global state of the application and create selectors to access these states.',
        'I collaborated with an indexed list algorithm to optimize the rendering of data lists in the application.',
        'I understood how to implement pagination in both the frontend and backend to optimize data loading, improve user experience, and implement infinite scroll.',
      ],
      es: [
        'Implementé el patrón MVC en el frontend, abstrayendo la lógica de negocio de los componentes en un hook externo, cumpliendo así el principio de responsabilidad única de las vistas.',
        'Aprendí a configurar Firebase, Google Cloud y Apple para implementar inicio de sesión con redes sociales y Dynamic Links (Magic Link).',
        'Aprendí a utilizar y configurar Redux para manejar el estado global de la aplicación y crear selectores para acceder a dichos estados.',
        'Colaboré con un algoritmo de lista indexada para optimizar la renderización de listas de datos en la aplicación.',
        'Entendí cómo implementar paginación tanto en el frontend como en el backend para optimizar la carga de datos y mejorar la experiencia del usuario, e implementar un scroll infinito.',
      ],
      de: [
        'Ich habe meine Praktiken verbessert, indem ich das MVC-Muster im Frontend implementiert und die Geschäftslogik aus den Komponenten in einen externen Hook abstrahiert habe, wodurch das Prinzip der einzigen Verantwortung der Ansichten eingehalten wird.',
        'Ich habe gelernt, Firebase, Google Cloud und Apple zu konfigurieren, um die Anmeldung über soziale Netzwerke und Dynamic Links (Magic Link) zu implementieren.',
        'Ich habe gelernt, Redux zu nutzen und zu konfigurieren, um den globalen Zustand der Anwendung zu verwalten und Selektoren zu erstellen, um auf diese Zustände zuzugreifen.',
        'Ich habe an einem indexierten Listenalgorithmus mitgearbeitet, um das Rendern von Datenlisten in der Anwendung zu optimieren.',
        'Ich habe verstanden, wie man die Paginierung sowohl im Frontend als auch im Backend implementiert, um das Laden von Daten zu optimieren, die Benutzererfahrung zu verbessern und unendliches Scrollen zu implementieren.',
      ],
    },
    link: 'https://getregulars.com',
  },
];
