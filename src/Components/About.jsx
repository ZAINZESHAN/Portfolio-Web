import React from 'react'

const About = () => {
    return (
        <section id='about' className='bg-black '>
            <div className='container text-center h-auto py-10'>

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

                <div className='flex xl:flex-row flex-col gap-8 lg:gap-12 xl:gap-24 lg:pt-20 pt-12'>

                    <div className='xl:w-[50%] text-left'>
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

                    <div className='xl:w-[50%] text-left'>
                        <h1 className='font-Viga text-white text-[18px] md:text-[20px] lg:text-[23px] xl:text-[30px] xl:pb-12 lg:pb-8 pb-6'>
                            My Skills <span className='text-accent'>.</span>
                        </h1>{' '}
                        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 xxl:grid-cols-4 text-center gap-8'>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-html5-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-css3-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-javascript-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-reactjs-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-nextjs-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-tailwind-css-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-github-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-bootstrap-fill"></i>
                            <i className="text-white duration-300 hover:text-accent text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:w-[130px] md:h-[120px] w-[90px] h-[80px] lg:w-[150px] lg:h-[140px] flex items-center justify-center bg-[#141414] rounded-lg ri-firebase-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
