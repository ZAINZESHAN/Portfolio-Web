import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const About = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true
        })

        sr.reveal(`.about_heading`, { origin: 'top' });
        sr.reveal(`.about_content`);
        sr.reveal(`.about_icons`, { origin: 'right' });
    }, []);

    return (
        <section id='about' className='bg-black'>
            <div className='container text-center h-auto pt-20 pb-10 '>

                <div className='about_heading'>

                    <h1 className='font-Viga text-white pb-3 text-[30px] md:text-[40px] lg:text-[32px] xl:text-[50px]'>
                        About Me
                        <span className='text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-accent pl-1'>
                            .
                        </span>
                    </h1>
                    <p className='text-[14px] md:text-[16px] font-semibold lg:text-[18px] xl:text-[19px] text-gray-200'>
                        Here you will find more information about me, my journey as a
                        developer, my passion for crafting innovative solutions, and the
                        skills I bring to the table.
                    </p>
                </div>

                <div className='flex xl:flex-row flex-col gap-8 lg:gap-12 xl:gap-24 lg:pt-20 pt-12'>

                    <div className='xl:w-[50%] text-left about_content'>
                        <h1 className='font-Viga text-white text-[18px] md:text-[20px] lg:text-[23px] xl:text-[30px] xl:pb-12 lg:pb-8 pb-4'>
                            I Am a Passionate Developer <span className='text-accent'>.</span>
                        </h1>
                        <div className='flex flex-col gap-3 xl:gap-5'>
                            <p className='text-[14px] md:text-[16px] xl:text-[18px] text-gray-200'>
                                My name is <span className='font-Viga text-accent text-[16px] md:text-[18px] lg:text-[20px] font-bold'>Zain Zeeshan</span>, and I am a passionate frontend developer
                                with a solid foundation in web technologies. Over the past three
                                years, I have honed my skills in HTML, CSS, JavaScript, and
                                frameworks like React and Next.js. My journey in the tech world
                                has been driven by a desire to create engaging and user-friendly
                                web applications that enhance the user experience.
                            </p>
                            <p className='text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-gray-200'>
                                Currently, I am expanding my skill set by delving into backend
                                development. This transition allows me to understand the full
                                stack of web development, enabling me to build more robust and
                                dynamic applications. I believe that having a comprehensive
                                knowledge of both frontend and backend technologies will make me a
                                more versatile developer and enhance my ability to contribute to
                                any project.
                            </p>
                            <p className='text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-gray-200'>
                                I am actively seeking new opportunities to apply my skills
                                and continue my professional growth. I am open to collaborating on
                                exciting projects that challenge my abilities and allow me to
                                learn from others in the field. If you're looking for a dedicated
                                and enthusiastic developer, I would love to connect and explore
                                potential collaborations.
                            </p>
                        </div>
                    </div>
                    <div className='xl:w-[50%] text-left about_icons'>
                        <h1 className='font-Viga text-white text-[18px] md:text-[20px] lg:text-[23px] xl:text-[30px] xl:pb-12 lg:pb-8 pb-6'>
                            My Skills <span className='text-accent'>.</span>
                        </h1>
                        <div className='flex flex-col gap-3 xl:gap-5'>
                            <p className='text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-gray-200 pb-7'>
                                With my skills and passion for technology, I am ready to bring your ideas to life—let's create something amazing together!
                            </p>
                        </div>
                        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 xxl:grid-cols-4 text-center gap-8'>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-html5-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>HTML5</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-css3-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Css3</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-javascript-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>JavaScript</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-reactjs-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>ReactJS</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-nextjs-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Next.js</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-tailwind-css-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Tailwind</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-github-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>GitHub</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-bootstrap-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Bootstrap</span>
                            </div>

                            <div className=' group flex flex-col items-center relative'>
                                <i className="text-gray-200 duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-firebase-fill"></i>
                                <span className='absolute bottom-1/2 -translate-y-14 text-[14px] md:text-[16px] lg:text-[16px] w-[60px] md:w-[100px] lg:w-[120px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold px-2 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Firebase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
