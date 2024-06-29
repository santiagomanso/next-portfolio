import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
export default function LinkedInLink() {
  return (
    <a
      href='https://www.linkedin.com/in/santimanso/'
      target='_blank'
      rel='noreferrer'
      className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg relative z-0'
    >
      <p className='hidden'>linkedin</p>
      <p className='hidden'>linked in</p>
      <p className='hidden'>linked-in</p>
      <FontAwesomeIcon
        icon={faLinkedin}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-700 dark:text-white'
      />
    </a>
  );
}
