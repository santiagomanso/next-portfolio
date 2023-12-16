'use client'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { SetStateAction, useEffect, useState } from 'react'

interface Props {
  setOpen?: React.Dispatch<SetStateAction<boolean>>
  isResponsive?: boolean
  isClicked?: boolean
}

const ThemeSwitcher = ({ setOpen, isResponsive, isClicked }: Props) => {
  const [isSelected, setIsSelected] = useState('dark')
  const handleSelect = () => {
    if (setOpen) {
      //setOpen(false)
    }
    isSelected === 'dark' ? setIsSelected('light') : setIsSelected('dark')
  }

  useEffect(() => {
    isSelected === 'dark'
      ? (document.documentElement.classList.add('dark'), setIsSelected('dark'))
      : (document.documentElement.classList.remove('dark'),
        setIsSelected('light'))
  }, [isSelected])

  useEffect(() => {
    if (isClicked) {
      setIsSelected('dark')
    } else {
      setIsSelected('light')
    }
  }, [isClicked])

  return (
    <div
      onClick={handleSelect}
      className={`flex transition-colors rounded-full ${
        isResponsive
          ? 'bg-gradient-to-br from-slate-800 to-blue-800 dark:from-green-500 dark:to-teal-900 border h-[25px] px-2 border-sky-100 dark:border-green-300 w-[64px]'
          : ''
      }`}
    >
      <div
        className={`transition-all ease-in-out duration-300 flex justify-center items-center ${
          isSelected === 'dark' ? 'translate-x-[32px] ' : 'translate-x-0 '
        } `}
      >
        {isSelected === 'dark' ? (
          <FontAwesomeIcon
            icon={faSun}
            className={`text-lg cursor-pointer ${isResponsive ? '' : ''}`}
          />
        ) : (
          <FontAwesomeIcon icon={faMoon} className={`text-lg cursor-pointer`} />
        )}
      </div>
    </div>
  )
}

export default ThemeSwitcher
