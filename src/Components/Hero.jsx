import { useEffect } from 'react';
import frontend from '../assets/frontend.jfif';
import ScrollReveal from 'scrollreveal';
import './Animation.css'; // Importing the CSS file for the animation
import Resume from '../assets/GYM ROUTINE.pdf';

const Hero = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true
        });

        sr.reveal('.home_data');
        sr.reveal('.home_image', { origin: 'right' }, { scale: 0.5 });
    }, []);

    return (
        <section id="home" className="bg-black w-full">
            <div className="container relative w-full gap-10 lg:gap-0 lg:h-[60vh] xl:h-[81vh] pt-20 md:pt-8 lg:pt-0 flex items-center justify-center flex-col-reverse lg:flex-row mt-8 sm:mt-16 md:mt-24 xl:-mt-[]">
                {/* Content */}
                <div className="home_data text-center lg:text-left lg:w-[50%]">
                    <div className="text-white">
                        <h5 className="text-[17px] md:text-[19px] lg:text-[15px] xl:text-[22px] text-gray-200">
                            Software Developer
                        </h5>
                        <h1 className="font-Viga text-[46px] md:text-[55px] lg:text-[40px] xl:text-[70px]">
                            Hello I'm
                        </h1>
                        <h1 className="text_typing font-Viga text-[46px] md:text-[55px] md:mt-[-25px] lg:text-[40px] lg:pt-[8px] xl:pt-0 xl:text-[70px] mt-[-13px] font-semibold" data-text="Zain Zeeshan!">
                            Zain Zeeshan!
                        </h1>
                        <p className="text-gray-200 text-[15px] md:text-[16px] lg:text-[13px] xl:text-[16px] mt-[10px] pb-[15px] md:pb-[10px] lg:pb-[0px]">
                            Passionate Frontend Developer with expertise in multiple
                            programming languages and modern web technologies. I create
                            responsive, user-friendly interfaces that enhance user experience.
                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-center lg:justify-start gap-8 md:gap-3 xl:gap-5 text-lg pt-5 xl:pt-10 ">
                        <div>
                            <a href={Resume} download>
                                <button className="border border-accent rounded-full text-[19px] md:text-[16px] px-8 py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 hover:text-white text-accent duration-300 cursor-pointer">
                                    Download CV <i className="ri-download-2-line"></i>
                                </button>
                            </a>
                        </div>
                        <div className="space-x-5 md:space-x-3">
                            <a href="https://www.linkedin.com/in/zain-zeeshan-6269372a4/" target="_blank" rel="noopener noreferrer">
                                <i className="ri-linkedin-fill border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                            </a>
                            <a href="https://github.com/ZAINZESHAN" target="_blank" rel="noopener noreferrer">
                                <i className="ri-github-fill border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                            </a>
                            <i className="ri-twitter-x-line border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 py-2 xl:py-2 xl:px-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                            <i className="ri-instagram-line border border-accent text-[20px] md:text-[14px] xl:text-[20px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="lg:w-[50%]">
                    <div className="flex justify-end">
                        <div className="w-[270px] h-[270px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] xl:w-[480px] xl:h-[480px]">
                            <img className="home_image w-full border-animation h-full rounded-full" src={frontend} alt="" />
                            {/* <img className="home_image border-animation w-full h-full rounded-full" src='data:image/jpeg;base64,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' alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
