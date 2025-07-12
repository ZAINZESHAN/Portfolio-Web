import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Footer = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true
        })

        sr.reveal(`.footer_heading`, { origin: 'top' });
        sr.reveal(`.footer_content`);
        sr.reveal(`.footert_icons`, { origin: 'right' });
    }, []);

    // const scrollUp = () => {
    //     const scrollBtn = document.getElementById('scroll-up');

    //     if (scrollBtn) {
    //         if (window.scrollY >= 250) {
    //             scrollBtn.classList.remove("-bottom-1/2");
    //             scrollBtn.classList.add("bottom-4");
    //         } else {
    //             scrollBtn.classList.add("-bottom-1/2");
    //             scrollBtn.classList.remove("bottom-4");
    //         }
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollUp);
    //     return () => {
    //         window.removeEventListener('scroll', scrollUp);
    //     };
    // }, []);

    return (
        <section id='footer' className='bg-black'>
            <hr className='border-t border-gray-600 container mx-auto' />
            <div className='container text-center h-auto py-10'>
                <h1 className='footer_heading font-Viga text-white text-[30px] md:text-[40px] lg:text-[32px] xl:text-[50px] xl:pb-3'>
                    Frontend Developer
                    <span className='text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-accent pl-1'>.</span>
                </h1>
                <p className='footer_content text-[14px] md:text-[16px] font-semibold lg:text-[18px] xl:text-[19px] text-gray-200 pb-6 md:pb-10 xl:pb-10'>
                    Crafting intuitive and engaging user experiences with modern web technologies.
                    Let's build something amazing together.
                </p>
                <div className="footert_icons space-x-6 md:space-x-5 pb-10">
                    <a href="https://www.linkedin.com/in/zain-zeeshan-6269372a4/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-fill border border-accent text-[20px] md:text-[14px] xl:text-[25px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                    </a>
                    <a href="https://github.com/ZAINZESHAN" target="_blank" rel="noopener noreferrer">
                        <i className="ri-github-fill border border-accent text-[20px] md:text-[14px] xl:text-[25px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                    </a>
                    <i className="ri-twitter-x-line border border-accent text-[20px] md:text-[14px] xl:text-[25px] rounded-full px-2 py-2 xl:py-2 xl:px-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                    <i className="ri-instagram-line border border-accent text-[20px] md:text-[14px] xl:text-[25px] rounded-full px-2 xl:px-2 py-2 hover:text-white text-accent duration-300 cursor-pointer"></i>
                </div>
                <p className='text-gray-400 text-sm'>
                    © 2025 Zain Zeeshan. All rights reserved.
                </p>
            </div>
            {/* <a
                onClick={scrollUp}
                href='#'
                className='fixed right-4 -bottom-1/2 bg-accent hover:bg-accent shadow-sm inline-block
                px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300'
                id='scroll-up'>
                <i className="ri-arrow-up-double-line text-2xl xl:text-3xl"></i>            </a> */}
        </section>
    );
};

export default Footer;
