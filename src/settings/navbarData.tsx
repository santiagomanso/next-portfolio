import LanguageSwitcher from '@/components/language-switcher'
import ThemeSwitcher from '@/components/theme-switcher'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import {
  faBriefcase,
  faFileLines,
  faHouse,
  faSun,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface singleLink {
  id: number
  label: {
    [index: string]: string
    es: string
    de: string
    en: string
  }
  path?: string
  icon: React.ReactNode
}

interface NavDataI {
  home: singleLink
  links: singleLink[]
}

export const navData: NavDataI = {
  home: {
    id: 2,
    label: { es: 'inicio', de: 'starteseite', en: 'home' },
    path: '/',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  links: [
    {
      id: 2,
      label: { es: '', de: '', en: '' },
      icon: <LanguageSwitcher />,
    },
    {
      id: 3,
      label: { es: '', de: '', en: '' },
      icon: <ThemeSwitcher />,
    },
    {
      id: 4,
      label: { es: 'portafolio', de: 'starteseite', en: 'portfolio' },
      path: '/portfolio',
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
      id: 5,
      label: { es: 'quien soy', de: 'übber mich', en: 'about' },
      path: '/about',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      id: 6,
      label: { es: 'curriculum', de: 'curriculum', en: 'curriculum' },
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    {
      id: 7,
      label: { es: 'github', de: 'github', en: 'github' },
      icon: <FontAwesomeIcon icon={faGithubAlt} />,
    },
    {
      id: 8,
      label: { es: 'linked-in', de: 'linked-in', en: 'linked-in' },
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
  ],
}
