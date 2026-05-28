import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Agence from './Agence'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <main id='home' className='relative w-screen overflow-hidden bg-[var(--color-home-bg)] text-white'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20'></div>
      <div className='pointer-events-none absolute inset-x-4 top-20 h-px bg-white/10 lg:inset-x-6'></div>
      <div className='relative flex min-h-screen w-screen flex-col justify-between overflow-hidden px-4 pb-5 pt-24 lg:px-6 lg:pb-6 lg:pt-8'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </main>
    <Agence />
    <Projects />
    <Contact />
    </>
  )
}

export default Home
