const Contact = () => {
  return (
    <main className='min-h-screen bg-[var(--color-contact-bg)] px-4 pb-12 pt-36 text-white lg:px-6 lg:pt-44'>
      <section  id="contact"  className='mx-auto flex max-w-7xl flex-col gap-16'>
        <div>
          <p className='font-[font1] text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]'>Contact</p>
          <h1 className='mt-5 max-w-5xl font-[font2] text-[18vw] uppercase leading-[0.78] lg:text-[6vw]'>
            Lets build something sharp.
          </h1>
        </div>

        <div className='grid gap-8 border-t border-white/25 pt-8 lg:grid-cols-[1.2fr_0.8fr]'>
          <p className='max-w-3xl font-[font1] text-2xl leading-tight text-white/80 lg:text-5xl'>
            I am open to frontend roles, freelance websites, portfolio redesigns, and React interfaces that need clean structure with a memorable visual system.
          </p>

          <div className='space-y-5 font-[font1] text-xl lg:text-2xl'>
            <a className='block border-b border-white/25 pb-4 transition-colors hover:text-[var(--color-accent)]' href='mailto:mahima@example.com'>
              mahima@example.com
            </a>
            <a className='block border-b border-white/25 pb-4 transition-colors hover:text-[var(--color-accent)]' href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
              LinkedIn
            </a>
            <a className='block border-b border-white/25 pb-4 transition-colors hover:text-[var(--color-accent)]' href='https://github.com' target='_blank' rel='noreferrer'>
              GitHub
            </a>
            <p className='pt-4 text-white/55'>Based in India. Available remotely.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
