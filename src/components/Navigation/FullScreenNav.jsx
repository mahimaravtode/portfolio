import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'

const navItems = [
  {
    label: 'Home',
    kicker: 'Start here',
    path: '#home',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=640&q=80',
  },
  {
    label: 'Projects',
    kicker: 'Selected work',
    path: '#projects',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=640&q=80',
  },
  {
    label: 'About',
    kicker: 'Skills and story',
    path: '#about',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
  },
  {
    label: 'Contact',
    kicker: 'Work together',
    path: '#contact',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=640&q=80',
  },
]

const FullScreenNav = () => {
  const fullScreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)

  // Prevent body scroll when nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  function scrollToSection(path) {
    const targetId = path.replace('#', '')
    const target = document.getElementById(targetId)

    setNavOpen(false)

    if (!target) return

    window.dispatchEvent(new CustomEvent('section:navigate')) 
    window.history.replaceState(null, '', path)

    setTimeout(() => {
      const sectionTop = target.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: sectionTop, 
        behavior: 'auto',
      })
    }, 450)
  }

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', {
      display: 'block',
    })
    tl.to('.stairing', {
      delay: 0.15,
      height: '100%',
      stagger: {
        amount: -0.3,
      },
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      y: 0,
      stagger: {
        amount: 0.25,
      },
    })
    tl.to('.navlink', {
      opacity: 1,
    }, '-=0.2')
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 85,
      y: 30,
      stagger: {
        amount: 0.08,
      },
    })
    tl.to('.navlink', {
      opacity: 0,
    }, '-=0.05')
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    })
    tl.to('.fullscreennav', {
      display: 'none',
    })
  }

  useGSAP(function () {
    if (navOpen) {
      gsapAnimation()
    } else {
      gsapAnimationReverse()
    }
  }, [navOpen])

  return (
    <div
      ref={fullScreenRef}
      id='fullscreennav'
      className='fullscreennav fixed inset-0 z-[80] hidden h-screen w-full overflow-hidden text-white'
    >
      <div className='fixed inset-0 h-screen w-full'>
        <div className='flex h-full w-full'>
          <div className='stairing h-0 w-1/5 bg-[var(--color-menu-bg)]'></div>
          <div className='stairing h-0 w-1/5 bg-[var(--color-menu-bg-alt)]'></div>
          <div className='stairing h-0 w-1/5 bg-[var(--color-menu-bg)]'></div>
          <div className='stairing h-0 w-1/5 bg-[var(--color-menu-bg-alt)]'></div>
          <div className='stairing h-0 w-1/5 bg-[var(--color-menu-bg)]'></div>
        </div>
      </div>

      <div className='relative flex h-screen flex-col'>
        <div className='navlink flex w-full items-start justify-between border-b border-white/15 p-4 opacity-0 lg:p-6'>
          <Link
            to='/'
            onClick={() => setNavOpen(false)}
            className='font-[font2] text-2xl uppercase leading-none text-white lg:text-4xl'
          >
            Mahima
          </Link>

          <div className='hidden pt-1 font-[font1] text-sm uppercase tracking-[0.28em] text-white/65 md:block'>
            Menu / 04
          </div>

          <button
            onClick={() => setNavOpen(false)}
            className='group relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[var(--color-accent)] lg:h-24 lg:w-24'
            aria-label='Close navigation'
            type='button'
          >
            <span className='absolute h-10 w-[2px] rotate-45 bg-[var(--color-accent)] transition-transform group-hover:rotate-[135deg] lg:h-16 lg:w-[3px]'></span>
            <span className='absolute h-10 w-[2px] -rotate-45 bg-[var(--color-accent)] transition-transform group-hover:rotate-45 lg:h-16 lg:w-[3px]'></span>
          </button>
        </div>

        <nav className='flex flex-1 flex-col justify-center py-8 lg:py-10'>
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className={`link relative origin-top border-t border-white/20 opacity-0 ${index === navItems.length - 1 ? 'border-b' : ''}`}
            >
              <button
                type='button'
                onClick={() => scrollToSection(item.path)}
                className='group relative z-10 grid min-h-24 w-full cursor-pointer items-center gap-4 px-4 py-4 text-left md:grid-cols-[0.2fr_1fr_0.4fr] lg:min-h-36 lg:px-6'
              >
                <span className='font-[font1] text-sm uppercase tracking-[0.22em] text-white/45 lg:text-base'>
                  0{index + 1}
                </span>
                <h1 className='font-[font2] text-[17vw] uppercase leading-[0.72] transition-colors group-hover:opacity-0 group-hover:text-[var(--color-accent)] md:text-center lg:text-[8vw]'>
                  {item.label}
                </h1>
                <span className='font-[font1] text-sm uppercase tracking-[0.16em] text-white/50 md:text-right lg:text-base'>
                  {item.kicker}
                </span>

                <div className='moveLink pointer-events-none absolute inset-0 z-[-1] flex overflow-hidden bg-[var(--color-accent)] text-black'>
                  {[0, 1].map((loop) => (
                    <div key={loop} className='moveX flex items-center'>
                      <h2 className='whitespace-nowrap px-4 pt-4 text-center font-[font2] text-[17vw] uppercase leading-[0.72] lg:text-[8vw]'>
                        Open {item.label}
                      </h2>
                      <img
                        className='h-14 w-32 shrink-0 rounded-full object-cover lg:h-28 lg:w-80'
                        src={item.image}
                        alt=''
                      />
                      <h2 className='whitespace-nowrap px-4 pt-4 text-center font-[font2] text-[17vw] uppercase leading-[0.72] lg:text-[8vw]'>
                        Open {item.label}
                      </h2>
                      <img
                        className='h-14 w-32 shrink-0 rounded-full object-cover lg:h-28 lg:w-80'
                        src={item.image}
                        alt=''
                      />
                    </div>
                  ))}
                </div>
              </button>
            </div>
          ))}
        </nav>

        <div className='navlink grid gap-3 border-t border-white/20 p-4 font-[font1] text-xs uppercase text-white/60 opacity-0 sm:grid-cols-3 lg:p-6 lg:text-sm'>
          <span>Mahima Ravtode</span>
          <span className='sm:text-center'>Web Designer & Developer</span>
          <span className='sm:text-right'>React, Tailwind, UI</span>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
