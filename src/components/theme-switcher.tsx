'use client'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import React, { SetStateAction, useEffect, useState } from 'react'

interface Props {
  setOpen?: React.Dispatch<SetStateAction<boolean>>
  isResponsive?: boolean
  isClicked?: boolean
}

const ThemeSwitcher = ({ setOpen, isResponsive, isClicked }: Props) => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div
      onClick={handleClick}
      className={`flex transition-colors rounded-full ${
        isResponsive
          ? 'bg-gradient-to-br from-slate-800 to-blue-800 dark:from-green-500 dark:to-teal-900 border h-[25px] px-2 border-sky-100 dark:border-green-300 w-[64px]'
          : ''
      }`}
    >
      <div
        className={`transition-all ease-in-out duration-300 flex justify-center items-center ${
          theme === 'dark' ? 'translate-x-[32px] ' : 'translate-x-0 '
        } `}
      >
        {theme === 'dark' ? (
          <FontAwesomeIcon
            icon={faSun}
            className={`text-lg cursor-pointer  ${
              isResponsive
                ? 'text-white'
                : 'text-zinc-700 dark:hover:text-yellow-500 dark:text-gray-500 hover:text-purple-600'
            }`}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className={`text-lg cursor-pointer ${
              isResponsive
                ? 'text-white'
                : 'text-zinc-700 hover:text-purple-600'
            } dark:text-gray-500`}
          />
        )}
      </div>
    </div>
  )
}

export default ThemeSwitcher
