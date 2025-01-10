import { useEffect } from 'react';
import main_img from '..//assets/main-img-2.webp';
import ScrollReveal from 'scrollreveal';
import './Animation.css'; // Importing the CSS file for the animation

const Hero = () => {
    // useEffect(() => {
    //     const sr = ScrollReveal({
    //         origin: 'top',
    //         distance: '60px',
    //         duration: 2500,
    //         delay: 300,
    //         reset: true
    //     });

    //     // Staggered animation for the image
    //     sr.reveal(`.main_img`, { interval: 100, duration: 1500, scale: 1.1, easing: 'ease-in-out' });
    // }, []);

    return (
        <section id='home' className='bg-black border-b'>
            <div className='container w-full h-[88vh] gap-10 lg:gap-0 lg:h-[60vh] xl:h-[85vh] flex items-center justify-center flex-col-reverse lg:flex-row'>
                {/* content */}
                <div className='text-center lg:text-left lg:w-[50%]'>
                    <div className='text-white'>
                        <h5 className='text-[17px] md:text-[19px] lg:text-[15px] xl:text-[22px] text-gray-200'>
                            Software Developer
                        </h5>
                        <h1 className='font-Viga text-[46px] md:text-[55px] lg:text-[40px] xl:text-[70px]'>
                            Hello I'm
                        </h1>
                        <h1 className='font-Viga text-[46px] md:text-[55px] md:mt-[-25px] lg:text-[40px] xl:text-[70px] mt-[-13px] text-accent font-semibold'>
                            Zain Zeeshan
                        </h1>
                        <p className='text-gray-200 text-[15px] md:text-[16px] lg:text-[13px] xl:text-[16px] mt-[10px] pb-[15px] md:pb-[10px] lg:pb-[0px]'>
                            Passionate Frontend Developer with expertise in multiple
                            programming languages and modern web technologies. I create
                            responsive, user-friendly interfaces that enhance user experience.
                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-center lg:justify-start gap-8 md:gap-3 xl:gap-5 text-lg pt-5 xl:pt-10 ">
                        <div>
                            <button className="border border-accent rounded-full text-[19px] md:text-[16px] px-8 py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 hover:text-white text-accent duration-300 cursor-pointer">
                                Download CV <i className="ri-download-2-line"></i>
                            </button>
                        </div>
                        <div className='space-x-5 md:space-x-3 '>
                            <i className="ri-linkedin-fill border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                            <i className="ri-github-fill border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                            <i className="ri-twitter-x-line border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 py-2 xl:py-2 xl:px-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                            <i className="ri-instagram-line border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                        </div>
                    </div>


                </div>
                {/* image */}
                <div className="lg:w-[50%]">
                    <div className='flex justify-end'>
                        <div className='w-[270px] h-[270px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] xl:w-[480px] xl:h-[480px]'>
                            <img className='main_img  border-animation w-full h-full rounded-full' src={main_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
