import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
  return (
    <section className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid1.png' alt='grid 1' className='w-full sm:h-[276px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>Hi, I'm Pakoor</p>
              <p className='grid-subtext'>I'm a freelance web developer based in Indonesia. I have a passion for web development and love to create for web and mobile devices.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid2.png' alt='grid 2' className='w-full sm:h-[276px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>I have experience working with a range of different technologies and frameworks. From frontend to backend, I can help you build your next project.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className='grid-headtext'>I Work remotly accros most timezone</p>
              <p className='grid-subtext'>I have experience working with clients from all over the world. I am comfortable working remotely and can adapt to any timezone.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
            </div>
          </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid3.png' alt='grid 3' className='w-full sm:h-[266px] h-fit object-contain'/>

            <div>
              <p className='grid-headtext'>My Passion for coding</p>
              <p className='grid-subtext'>I have a passion for coding and love to create for web and mobile devices. I am always looking to learn new things and improve my skills.</p>
            </div>
          </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src='/assets/grid4.png' alt='grid 4' className='w-full sm:h-[266px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>My Process</p>
              <p className='grid-subtext'>I have a passion for coding and love to create for web and mobile devices. I am always looking to learn new things and improve my skills.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About