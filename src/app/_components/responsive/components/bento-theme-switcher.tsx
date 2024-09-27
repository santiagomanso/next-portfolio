'use client';
import { Switch } from '@/components/ui/switch';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import React, { SetStateAction, useEffect, useState } from 'react';

interface Props {
  border?: boolean;
}

export default function ThemeSwitcher({ border = true }: Props) {
  const { theme, setTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<string>('');

  const handleClick = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    theme && setResolvedTheme(theme);
  }, [theme]);

  return (
    <article
      className={`dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  h-full justify-center items-center flex ${
        border ? 'border-[1px]' : ''
      }`}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={resolvedTheme === 'dark' ? faMoon : faSun}
        className={`text-2xl ${
          resolvedTheme === 'dark' ? 'text-yellow-500' : 'text-purple-500'
        }`}
      />
    </article>
  );
}
