'use client'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { SetStateAction, useEffect, useState } from 'react'

interface Props {
  setOpen?: React.Dispatch<SetStateAction<boolean>>
}

const ThemeSwitcher = ({ setOpen }: Props) => {
  const [isSelected, setIsSelected] = useState('dark')
  const handleSelect = () => {
    if (setOpen) {
      //setOpen(false)
    }
    isSelected === 'dark' ? setIsSelected('light') : setIsSelected('dark')
  }

  useEffect(() => {
    isSelected === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isSelected])

  return (
    <div
      onClick={handleSelect}
      className='flex transition-colors rounded-full w-[30px] bg-indigo-600'
    >
      <div
        className={`${
          isSelected === 'dark' ? 'translate-x-full ' : 'translate-x-0 '
        } transition-all ease-in-out duration-300 flex justify-center items-center`}
      >
        {isSelected === 'dark' ? (
          <FontAwesomeIcon icon={faSun} className={`text-xl cursor-pointer`} />
        ) : (
          <FontAwesomeIcon icon={faMoon} className={`text-xl cursor-pointer`} />
        )}
      </div>
    </div>
  )
}

export default ThemeSwitcher
