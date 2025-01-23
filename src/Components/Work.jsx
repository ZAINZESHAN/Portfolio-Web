import React, { useState } from 'react';
import work_img1 from '../assets/work-1.jfif';
import work_img2 from '../assets/work-2.jfif';
import work_img3 from '../assets/work-3.jfif';
import work_img4 from '../assets/work-4.jfif';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import WorkSliderBtns from './WorkSliderBtns';

const slideData = [
  { index: '01', title: 'Portfolio Website', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, labore a explicabo.', skills: 'Html 5, Css 3, Javascript', img: work_img1 },
  { index: '02', title: 'E-commerce Website', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, labore a explicabo.', skills: 'Html 5, Css 3, Javascript', img: work_img2 },
  { index: '03', title: 'Plant Website', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, labore a explicabo.', skills: 'Html 5, Css 3, Javascript', img: work_img3 },
  { index: '04', title: 'Past-App', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, labore a explicabo.', skills: 'Html 5, Css 3, Javascript', img: work_img4 },
];

const Work = () => {
  const [icon, setIcon] = useState('fa-solid fa-arrow-right-long');
  const [headingColor, setHeadingColor] = useState('white');
  const [skillColor, setSkillColor] = useState('accent');

  const handleArrowIcon = () => {
    if (icon === 'fa-solid fa-arrow-right-long') {
      setIcon('text-accent fa-solid fa-arrow-trend-up');
      setHeadingColor('accent');
      setSkillColor('white');
    } else {
      setIcon('fa-solid fa-arrow-right-long');
      setHeadingColor('white');
      setSkillColor('accent');
    }
  };

  return (
    <section id='work' className='bg-black'>
      <div className='container py-10 text-white'>
        <div className='container py-10 text-white text-center'>
          <h1 className='font-Viga text-white pb-3 text-[30px] md:text-[40px] lg:text-[32px] xl:text-[50px]'>
            My Work
            <span className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-accent pl-1'>.</span>
          </h1>
          <p className='text-[14px] md:text-[16px] font-semibold lg:text-[18px] xl:text-[19px] text-gray-200'>
            Here you will find more information about me, my journey as a developer, my passion for crafting innovative solutions, and the skills I bring to the table.
          </p>

          <div className='pt-10 md:pt-16'>
            <style>
              {`
                .swiper-pagination-bullet {
                  background-color: #00cc7a;
                  padding: 4px;
                }
                .swiper-pagination-bullet-active {
                  background-color: #00cc7a;
                }
              `}
            </style>
            <Swiper
              modules={[Pagination, Scrollbar, Navigation]}
              spaceBetween={40}
              navigation
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className='p-32'
            >
              {slideData.map(({ index, title, description, skills, img }) => (
                <SwiperSlide key={index} className='pb-1 lg:pb-10 xl:pb-14'>
                  <div className='text-left flex h-[42vh] md:h-[54vh] lg:h-auto lg:flex-row flex-col lg:justify-between md:gap-5 lg:gap-10 xl:gap-20 relative'>
                    <div className='lg:w-[50%]'>
                      <h1 className='text-[40px] md:text-[50px] lg:text-[50px] xl:text-[70px] font-Bungee'>{index}</h1>
                      <h1 className={`font-Viga text-${headingColor} text-[26px] md:text-[30px] lg:text-[25px] xl:text-[45px] mt-0 lg:mt-[-10px] lg:pb-[6px] xl:pb-[10px]`}>
                        {title}
                        <span className='text-3xl md:text-4xl lg:text-3xl xl:text-5xl text-accent pl-1'>.</span>
                      </h1>
                      <p className='text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-[#8c8b8b] pt-1 pb-[14px] xl:pb-[22px]'>
                        {description}
                      </p>
                      <h3 className={`text-${skillColor} text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-bold xl:pb-2`}>
                        {skills}
                      </h3>
                      <hr className='border-t-2 border-[#2b2b2b] mt-4 lg:mb-2 xl:mb-7' />
                      <div className='absolute lg:static bottom-0'>
                        <i
                          className={`text-[20px] md:text-[25px] lg:text-[20px] xl:text-[30px] p-2 xl:p-3 bg-[#141414] rounded-full cursor-pointer hover:text-accent mr-2 ${icon}`}
                          onClick={handleArrowIcon}
                        ></i>
                        <i className='text-[20px] md:text-[25px] lg:text-[20px] xl:text-[30px] p-2 xl:p-3 bg-[#141414] rounded-full cursor-pointer hover:text-accent ri-github-fill'></i>
                      </div>
                    </div>
                    <div className='lg:w-[50%]'>
                      <img src={img} alt='Project Image' className='w-[100%] h-[100%]' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
