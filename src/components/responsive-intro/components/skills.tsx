import { useState } from 'react'
import Modal from './modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'

export default function SkillsSection() {
  const [isOpen, setIsOpen] = useState(true)

  const handleCLick = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className='flex justify-center items-center h-full'
        onClick={handleCLick}
      >
        <h2 className='text-2xl tracking-wide text-gray-700 dark:text-white'>
          skills
        </h2>
      </div>
    </>
  )
}
