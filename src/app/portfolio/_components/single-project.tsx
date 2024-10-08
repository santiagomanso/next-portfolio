import { useContext, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Project } from '../_data/projects';
import { LanguageContext } from '@/context/LanguageContext';

type Labels = {
  description: { [key: string]: string; es: string; en: string; de: string };
  challanges: { [key: string]: string; es: string; en: string; de: string };
  screenshots: { [key: string]: string; es: string; en: string; de: string };
};

const text: Labels = {
  description: {
    es: 'Descripción',
    en: 'Description',
    de: 'Beschreibung',
  },
  challanges: {
    es: 'Desafíos',
    en: 'Challenges',
    de: 'Herausforderungen',
  },
  screenshots: {
    es: 'Capturas',
    en: 'Screenshots',
    de: 'Screenshots',
  },
};

//interface for props, recieves a single project from ../data/projects.ts
interface SingleProjectProps {
  project: Project;
}

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  // access to player in all event handlers via event.target
  event.target.playVideo();
};
const opts: YouTubeProps['opts'] = {
  height: '380',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const SingleProject: React.FC<SingleProjectProps> = ({ project }) => {
  const { language } = useContext(LanguageContext);
  const [active, setActive] = useState('about');

  const handleClick = (link: string): void => {
    window.open(link, '_blank');
  };

  const renderTabs = () => {
    switch (active) {
      case 'about':
        return (
          <span className='text-black dark:text-gray-100 font-medium text-lg font-console'>
            {project.description[language]}
          </span>
        );

      case 'screenshots':
        return project.screenshots.map((img, index) => {
          return (
            <a
              href={img}
              target='_blank'
              rel='noreferrer'
              key={index}
              className='lg:h-full flex justify-center items-center py-5 lg:py-0 lg:p-0 w-full bg-gradient-to-br'
            >
              <img
                src={img}
                alt=''
                className=' w-full object-scale-down lg:h-full pl-2 pr-8 lg:p-5'
              />
            </a>
          );
        });

      case 'challenges':
        return project.challenges?.map((img, index) => {
          return (
            <a
              href={img}
              target='_blank'
              rel='noreferrer'
              key={index}
              className='lg:h-full flex justify-center items-center py-5 lg:py-0 lg:p-0 w-full bg-gradient-to-br'
            >
              <img
                src={img}
                alt=''
                className=' w-full object-scale-down lg:h-full pl-2 pr-8 lg:p-5'
              />
            </a>
          );
        });

      case 'video':
        return (
          <YouTube
            videoId={project.video}
            opts={opts}
            onReady={onPlayerReady}
          />
        );

      default:
        break;
    }
  };

  return (
    <article className={`flex flex-col  w-full h-full`}>
      <h1 className='text-center text-2xl dark:text-gray-100 lg:text-4xl tracking-wider'>
        {project.name}
      </h1>
      {/* KEYWORDS */}
      <ul className='flex flex-wrap gap-2 lg:gap-4  text-secondary mt-3 lg:mt-4 text-sm lg:text-xl justify-center'>
        {project.stack.map((tech, i) => (
          <li
            key={i}
            className='rounded-[3px] border-solid border-2 border-variant2 px-3 py-1 tracking-widest bg-variant1'
          >
            {tech}
          </li>
        ))}
      </ul>
      {/* sections */}
      <div className='md:mt-5 flex items-start justify-start h-1/2 w-full lg:h-[68%]'>
        {/* LEFT */}
        <div className='h-full w-1/2 hidden lg:flex items-center   justify-center'>
          <img
            src={project.img}
            alt=''
            className=' h-full w-full rounded-l-md'
          />
        </div>
        {/* RIGHT */}
        <div className='mt-2 md:mt-0 w-full lg:w-1/2 h-full flex justify-center items-center rounded-b-md'>
          <div className='mt-0 md:mt-0 h-full w-full'>
            {/* TABS */}
            <ul className='flex flex-wrap justify-start  text-md tracking-wider  bg-secondary dark:bg-variant2 rounded-tr-md rounded'>
              <li
                onClick={() => {
                  setActive('about');
                  // handlerTab(about)
                }}
                className={`flex items-baseline hover:cursor-pointer rounded-tl-md gap-1 ${
                  active === 'about' ? 'bg-slate-500 dark:bg-primary' : ''
                }  px-2 sm:px-4 lg:px-4 py-2 group`}
              >
                <h2 className=' dark:text-gray-200'>
                  {text.description[language]}
                </h2>
                <i
                  className={`fa-solid fa-address-card  ${
                    active === 'about'
                      ? 'text-sky-600'
                      : 'text-variant1 dark:text-secondary group-hover:text-sky-600 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:translate-x-[0.10rem]'
                  }  transition-all duration-300`}
                ></i>
              </li>
              {project.challenges && (
                <li
                  onClick={() => {
                    setActive('challenges');
                    // handlerTab(challenges)
                  }}
                  className={`flex items-baseline hover:cursor-pointer gap-1 ${
                    active === 'challenges'
                      ? 'bg-slate-500 dark:bg-primary'
                      : ''
                  }   px-4 py-2 group`}
                >
                  <h2 className=' dark:text-gray-200'>
                    {text.challanges[language]}
                  </h2>
                  <i
                    className={`fa-solid fa-triangle-exclamation  ${
                      active === 'challenges'
                        ? 'text-yellow-500'
                        : 'text-variant1 dark:text-secondary group-hover:text-yellow-500 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:translate-x-[0.10rem]'
                    }  transition-all duration-300`}
                  ></i>
                </li>
              )}
              <li
                onClick={() => {
                  setActive('screenshots');
                  // handlerTab(screenshots)
                }}
                className={`flex items-baseline hover:cursor-pointer gap-1 ${
                  active === 'screenshots' ? 'bg-slate-500 dark:bg-primary' : ''
                }   px-4 lg:px-4 py-2 group`}
              >
                <h2 className=' dark:text-gray-200'>
                  {text.screenshots[language]}
                </h2>
                <i
                  className={`fa-solid fa-camera  ${
                    active === 'screenshots'
                      ? 'text-green-600'
                      : 'text-variant1 dark:text-secondary group-hover:text-green-600 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:translate-x-[0.10rem]'
                  }  transition-all duration-300`}
                ></i>
              </li>
              {project.video && (
                <li
                  onClick={() => {
                    setActive('video');
                    // handlerTab(video)
                  }}
                  className={`flex items-baseline hover:cursor-pointer gap-1 ${
                    active === 'video' ? 'bg-slate-500 dark:bg-primary' : ''
                  }   px-4 py-2 group`}
                >
                  <h2 className=' dark:text-gray-200'>Video</h2>
                  <i
                    className={`fa-solid fa-video  ${
                      active === 'video'
                        ? 'text-red-500'
                        : 'text-variant1 dark:text-secondary group-hover:text-red-500 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:translate-x-[0.10rem]'
                    }  transition-all duration-300`}
                  ></i>
                </li>
              )}
            </ul>

            {/* DESCRIPTION BOX */}
            <div
              className={`bg-gradient-to-br dark:bg-gradient-to-tr from-gray-200 to-gray-400 text-white text-lg lg:text-2xl font-console font-[200] dark:from-zinc-900 dark:to-variant2 h-[90%] lg:h-[91.7%] overflow-auto border-b-2 border-l-2 border-r-2 border-gray-400 dark:border-neutral-800 rounded-b-md
              ${active === 'about' ? 'px-6 py-2' : ''}
              `}
            >
              {renderTabs()}
            </div>
          </div>
        </div>
      </div>
      {/* call to actions */}
      <div className='mt-16 md:mt-2  flex justify-between md:justify-around lg:justify-evenly md:px-10 lg:px-0 w-full z-30 text-white lg:mt-3 '>
        <button
          onClick={() => handleClick(project.urlCode)}
          className='flex gap-1 items-center text-lg lg:text-xl px-7 lg:px-8 py-1 border-2 border-white border-solid rounded-md bg-variant2'
        >
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='code'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
            className='svg-inline--fa fa-code  text-white  w-5 lg:w-8'
          >
            <path
              fill='currentColor'
              d='M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z'
            ></path>
          </svg>
          <p className='text-white'>code</p>
        </button>
        <button
          onClick={() => handleClick(project.urlDemo)}
          className='flex items-center gap-1 text-lg lg:text-xl px-7 lg:px-8 py-1 border-2 border-white border-solid rounded-md bg-purple-600'
        >
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='eye'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='svg-inline--fa fa-eye fa-w-18 text-white  w-5 lg:w-8'
          >
            <path
              fill='currentColor'
              d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'
            ></path>
          </svg>
          <p className='text-white '>view live</p>
        </button>
      </div>
    </article>
  );
};
export default SingleProject;
