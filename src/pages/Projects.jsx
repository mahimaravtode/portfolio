import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const projects = [{
    title1: 'DurXen',
    type1: 'React Admin Dashboard',
    image1: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    title2: 'OkYA',
    type2: 'AI Dashboard & Chatbot',
    image2: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
  }, {
    title1: 'Dubai Advanced Marine',
    type1: 'Yacht & Maritime Website',
    image1: 'https://images.unsplash.com/photo-1501769214405-5e86e98ade4a?auto=format&fit=crop&w=1200&q=80',
    title2: 'Framer Motion UI',
    type2: 'Motion-led Landing Page',
    image2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  }, {
    title1: 'SaaS Admin Template',
    type1: 'Enterprise Dashboard',
    image1: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    title2: 'Design System',
    type2: 'Component Library',
    image2: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80'
  }]

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.2
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div id='projects' className='bg-[var(--color-project-bg)] px-2 pb-12 pt-28 text-[var(--color-project-text)] lg:px-4 lg:pb-20'>
      <div className='flex flex-col min-h-[50vh] justify-end border-b border-black/15 pb-5 lg:pb-8'>
        <div className='mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <p className='max-w-[460px] font-[font1] text-sm uppercase leading-tight text-black/55 lg:text-base'>
            Selected projects built with React, Tailwind CSS, Chakra UI, and motion design.
          </p>
          <span className='hidden rounded-full border border-black/20 px-5 py-2 font-[font1] text-sm uppercase text-black/65 lg:block'>
            06 cases
          </span>
        </div>
        <h2 className='font-[font2] text-[22vw] uppercase leading-[0.78] tracking-normal lg:text-[11vw]'>Selected Work</h2>
      </div>

      <div className='lol pt-4 lg:pt-6'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero mb-3 flex h-[860px] w-full flex-col gap-3 overflow-hidden lg:mb-4 lg:h-[800px] lg:flex-row lg:gap-4'>
            <ProjectCard
              project={{
                image: elem.image1,
                title: elem.title1,
                type: elem.type1,
                number: `0${idx * 2 + 1}`
              }}
            />
            <ProjectCard
              project={{
                image: elem.image2,
                title: elem.title2,
                type: elem.type2,
                number: `0${idx * 2 + 2}`
              }}
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects
