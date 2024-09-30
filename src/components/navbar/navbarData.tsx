import LanguageSwitcher from '@/components/language-switcher';
import ThemeSwitcher from '@/components/theme-switcher';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {
  faBriefcase,
  faCode,
  faFileLines,
  faFolderOpen,
  faHouse,
  faSun,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface singleLink {
  id: number;
  label: {
    [index: string]: string;
    es: string;
    de: string;
    en: string;
  };
  path: string | boolean;
  icon: React.ReactNode;
  externalHref: boolean;
}

export interface NavDataI {
  home: singleLink;
  links: singleLink[];
}

export const navData: NavDataI = {
  home: {
    id: 2,
    label: { es: 'inicio', de: 'starteseite', en: 'home' },
    path: '/',
    icon: <FontAwesomeIcon icon={faHouse} />,
    externalHref: false,
  },
  links: [
    {
      id: 2,
      path: false,
      label: { es: '', de: '', en: '' },
      icon: <LanguageSwitcher />,
      externalHref: false,
    },
    {
      id: 3,
      path: false,
      label: { es: '', de: '', en: '' },
      icon: <ThemeSwitcher />,
      externalHref: false,
    },
    {
      id: 4,
      label: { en: 'experience', es: 'experiencia', de: 'Erfahrung' },
      path: '/experience',
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      externalHref: false,
    },
    {
      id: 5,
      label: { es: 'portafolio', de: 'portfolio', en: 'portfolio' },
      path: '/portfolio',
      icon: <FontAwesomeIcon icon={faCode} />,
      externalHref: false,
    },
    {
      id: 6,
      label: { es: 'quien soy', de: 'übber mich', en: 'about' },
      path: '/about',
      icon: <FontAwesomeIcon icon={faUser} />,
      externalHref: false,
    },
    {
      id: 7,
      path: 'https://raw.githubusercontent.com/santiagomanso/next-portfolio/refs/heads/main/src/assets/SANTIAGO-CV.pdf',
      label: { es: 'curriculum', de: 'curriculum', en: 'curriculum' },
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
      externalHref: false,
    },
    {
      id: 8,
      path: 'https://github.com/santiagomanso',
      label: { es: 'github', de: 'github', en: 'github' },
      icon: <FontAwesomeIcon icon={faGithubAlt} />,
      externalHref: true,
    },
    {
      id: 9,
      path: 'https://www.linkedin.com/in/santimanso/',
      label: { es: 'linked-in', de: 'linked-in', en: 'linked-in' },
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      externalHref: true,
    },
  ],
};
