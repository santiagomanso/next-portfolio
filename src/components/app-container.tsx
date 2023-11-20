interface Props {
  children: React.ReactNode
}

const AppContainer = ({ children }: Props) => {
  return (
    <main className='h-screen bg-gradient-to-br dark:bg-gradient-to-bl transition-colors ease-in-out duration-500 from-gray-200 via-white to-gray-900 dark:from-neutral-900  dark:to-zinc-800 flex justify-center items-center overflow-y-auto overflow-x-hidden'>
      <section className='flex flex-col h-full max-w-[85rem] lg:justify-center w-full lg:py-5 relative'>
        {children}
      </section>
    </main>
  )
}

export default AppContainer
