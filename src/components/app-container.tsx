interface Props {
  children: React.ReactNode
}

const AppContainer = ({ children }: Props) => {
  return (
    <main className='h-screen bg-gradient-to-br dark:bg-gradient-to-bl transition-colors ease-in-out duration-500 from-white to-gray-900 dark:from-neutral-800  dark:to-zinc-800 flex justify-center items-center overflow-y-auto overflow-x-hidden'>
      <section className='flex flex-col h-full max-w-[85rem] lg:justify-center w-full lg:py-5 relative appContainer'>
        {children}
      </section>
    </main>
  )
}

export default AppContainer
