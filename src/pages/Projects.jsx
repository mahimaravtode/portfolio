import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const projects = [{
    title1: 'PJC',
    type1: 'Brand experience',
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    title2: 'Widescape',
    type2: 'Digital campaign',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    title1: 'OKA',
    type1: 'Creative platform',
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    title2: 'Opto',
    type2: 'Product story',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    title1: 'La Majeure',
    type1: 'Sound identity',
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    title2: 'Shelton',
    type2: 'Visual system',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
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
    <div id='projects' className='bg-[#f7f4ec] px-2 pb-12 pt-28 text-[#101010] lg:px-4 lg:pb-20'>
      <div className='flex flex-col min-h-[50vh] justify-end border-b border-black/15 pb-5 lg:pb-8'>
        <div className='mb-5 flex items-end justify-between gap-6'>
          <p className='max-w-[460px] font-[font1] text-sm uppercase leading-tight text-black/55 lg:text-base'>
            Selected work shaped through strategy, identity and digital craft.
          </p>
          <span className='hidden rounded-full border border-black/20 px-5 py-2 font-[font1] text-sm uppercase text-black/65 lg:block'>
            06 cases
          </span>
        </div>
        <h2 className='font-[font2] text-[22vw] uppercase leading-[0.78] tracking-normal lg:text-[11vw]'>Projets</h2>
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
