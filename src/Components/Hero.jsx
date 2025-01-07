import { useEffect } from 'react';
import main_img from '..//assets/main-img-2.webp';
import ScrollReveal from 'scrollreveal';
import './Hero.css'; // Importing the CSS file for the animation

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
        <section className='bg-black'>
            <div className='container w-full h-[85vh] flex items-center'>
                {/* content */}
                <div className='w-[50%] mt-[-40px]'>
                    <div className='text-white'>
                        <h5 className='text-base transform scale-y-150 text-gray-200'>
                            Software Developer
                        </h5>
                        <h1 className='text-[60px]'>
                            Hello I'm
                        </h1>
                        <h1 className='text-[60px] mt-[-23px] text-accent font-semibold'>
                            <span className="">Zain</span> Zeeshan
                        </h1>
                        <p className='text-gray-200 text-[16px] mt-[10px]'>
                            Passionate Frontend Developer with expertise in multiple
                            programming languages and modern web technologies. I create
                            responsive, user-friendly interfaces that enhance user experience.
                        </p>
                    </div>
                    <div className='flex items-center gap-5 text-lg lg:pt-10'>
                        <button className='border border-accent rounded-full px-6 py-3 hover:text-white text-accent duration-300 cursor-pointer'>
                            Download CV <i className="ri-download-2-line hover:text-accent"></i>
                        </button>
                        <i className='ri-linkedin-fill border border-accent rounded-full px-1 hover:text-white text-accent duration-300 cursor-pointer'></i>
                        <i className='ri-github-fill border border-accent rounded-full px-1 hover:text-white text-accent duration-300 cursor-pointer'></i>
                        <i className='ri-twitter-x-line border border-accent rounded-full px-1 hover:text-white text-accent duration-300 cursor-pointer text-base'></i>
                        <i className='ri-instagram-line border border-accent rounded-full px-1 hover:text-white text-accent duration-300 cursor-pointer'></i>
                    </div>
                </div>
                {/* image */}
                <div className="w-[50%] mt-[-40px]">
                    <div className='flex justify-end'>
                        <div className='w-[500px] h-[500px]'>
                            <img className='main_img  border-animation w-full h-full rounded-full' src={main_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
