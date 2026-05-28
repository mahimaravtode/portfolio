import Video from './Video'

const HomeHeroText = () => {
  return (
    <section className='mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center font-[font1]'>
      <div className='mb-8 grid gap-3 border-b border-white/20 pb-4 font-[font1] text-xs uppercase text-white/65 sm:grid-cols-3 lg:mb-10 lg:text-sm'>
        <span>Mahima Ravtode</span>
        <span className='sm:text-center'>Web Designer & Frontend Developer</span>
        <span className='sm:text-right'>React, Tailwind, UI</span>
      </div>

      <p className='mx-auto mb-5 max-w-3xl text-center font-[font1] text-sm uppercase tracking-[0.28em] text-[var(--color-accent)] lg:text-base'>
        I design premium web experiences with React, Tailwind, and motion-rich UI.
      </p>

      <h1 className='text-center font-[font2] text-[18vw] uppercase leading-[0.76] lg:text-[8vw]'>
        Web Designer
      </h1>

      <div className='mt-2 flex items-center justify-center gap-2 text-center font-[font2] text-[13vw] uppercase leading-[0.84] lg:gap-5 lg:text-[8vw]'>
        <span>Creates</span>
        <div className='h-[9vw] w-[22vw] min-w-24 overflow-hidden rounded-full border border-white/30 shadow-[0_0_50px_var(--color-accent-glow)] lg:h-[6vw] lg:w-[15vw]'>
          <Video />
        </div>
        <span>Bold</span>
      </div>

      <div className='mt-2 text-center font-[font2] text-[13vw] uppercase leading-[0.84] lg:text-[8vw]'>
        Digital Work
      </div>

      <div className='mt-8 grid gap-3 border-t border-white/20 pt-4 font-[font1] text-xs uppercase text-white/60 sm:grid-cols-3 lg:mt-12 lg:text-sm'>
        <p>Portfolio websites</p>
        <p className='sm:text-center'>React + Tailwind UI</p>
        <p className='sm:text-right'>Smooth animation</p>
      </div>
    </section>
  )
}

export default HomeHeroText
