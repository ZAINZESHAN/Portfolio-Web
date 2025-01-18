import React from 'react'
import work_img from '../assets/work.jfif'

const Projects = () => {
  return (
    <section id='project' className='bg-black'>
      <div className='container py-10 text-white'>
        <div className='lg:w-[50%]'>
          <h1 className='text-[30px] font-Rubik'>02</h1>
          <h1 className='font-Viga text-white text-[24px] md:text-[20px] lg:text-[23px] xl:text-[40px]'>Frontend Project</h1>
          <p className='text-[14px] text-gray-200 pt-1 pb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            labore a explicabo.
          </p>
          <h3 className='text-white text-[16px] font-bold pb-2'>Html 5, Css 3, Javascript</h3>
        </div>
        <div>
          <img src={work_img} alt="" />
          <i className="text-[40px] ri-arrow-right-line"></i>
          <i className='text-[40px] ri-github-fill'></i>
        </div>
      </div>
    </section>
  )
}

export default Projects
