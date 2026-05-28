import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [, setNavOpen] = useContext(NavbarContext)
    const [navColor] = useContext(NavbarColorContext)

    return (
        <div className='z-40 flex fixed top-0 w-full items-start justify-between'>
            <div className='lg:p-5 p-2 '>
                <Link to='/' className='block font-[font2] text-2xl uppercase leading-none lg:text-4xl' style={{ color: navColor }}>
                    Mahima
                </Link>
            </div>
            <button type='button' aria-label='Open navigation' onClick={()=>{
                setNavOpen(true)
            }} onMouseEnter={() => {
                navGreenRef.current.style.height = '100%'
            }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48 cursor-pointer'>
                <div ref={navGreenRef} className='absolute top-0 h-0 w-full bg-[var(--color-accent)] transition-all'></div>
                <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                    <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                    <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                </div>
            </button>
        </div>
    )
}

export default Navbar
