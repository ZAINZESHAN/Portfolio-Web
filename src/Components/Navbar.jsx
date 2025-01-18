import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Importing ScrollLink
import './Animation.css'; // Importing the CSS file for the animation

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section id='navbar' className='bg-black w-full top-0 left-0 border-b fixed'>
            <nav className='container text-white flex items-center h-24 sm:h-28 justify-between mx-auto'>
                <div className='flex items-center font-Viga'>
                    <div className='hover:text-accent'>
                        <ScrollLink
                            to={'home'}
                            className='cursor-pointer'>
                            <span className='text-3xl md:text-4xl'>Z</span>
                            <span className='text-2xl md:text-3xl'>ai</span>
                            <span className='text-4xl md:text-5xl'>N</span>
                            <span className='text-4xl md:text-5xl text-accent pl-1'>.</span>
                        </ScrollLink>
                    </div>
                </div>
                <div
                    className={`flex gap-8 text-[24px] lg:text-[22px] font-semibold absolute top-0 min-h-[85vh] w-full 
                    backdrop-blur-sm items-center justify-center flex-col 
                    duration-500 ease-in-out transition-all overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:flex-row lg:w-auto ${isOpen ? 'left-0' : '-left-full'}`}
                >
                    <ScrollLink
                        to="home"
                        offset={-100}
                        activeClass="active"
                        className="link cursor-pointer"
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to="about"
                        offset={-100}
                        activeClass="active"
                        className="link cursor-pointer"
                    >
                        About Me
                    </ScrollLink>
                    <ScrollLink
                        to="project"
                        offset={-100}
                        activeClass="active"
                        className="link cursor-pointer"
                    >
                        Projects
                    </ScrollLink>
                    <ScrollLink
                        to="contact"
                        offset={-100}
                        activeClass="active"
                        className="link cursor-pointer"
                    >
                        Contact
                    </ScrollLink>
                </div>

                <div className='flex items-center text-2xl sm:text-3xl cursor-pointer z-50 lg:hidden'>
                    <i
                        onClick={handleToggler}
                        className={`hover transition duration-300 text-accent ${isOpen ? 'ri-close-large-line hover:text-white' : 'ri-menu-3-line hover:text-white'}`}
                    ></i>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
