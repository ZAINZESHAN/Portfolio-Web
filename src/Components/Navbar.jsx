import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-black w-full top-0 left-0 '>
            <nav className='container text-white flex items-center h-24 sm:h-28 justify-between mx-auto'> {/* Increased heights here */}
                <div className='flex items-center font-Viga'>
                    <div className=''>
                        <span className='text-3xl md:text-4xl'>Z</span>
                        <span className='text-2xl md:text-3xl'>ai</span>
                        <span className='text-4xl md:text-5xl'>N</span>
                        <span className='text-4xl md:text-5xl text-accent pl-1'>.</span>
                    </div>
                    {/* <img src={logo} className='w-[33%] ml-[-20px]' alt="" /> */}
                </div>
                <div className={`flex gap-8 text-[22px] font-semibold absolute top-0 min-h-[80vh] w-full 
             backdrop-blur-sm items-center justify-center flex-col 
             overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:flex-row lg:w-auto ${isOpen ? 'left-[0]' : 'left-[-100%]'}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover transition duration-300  ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `hover transition duration-300 ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`
                        }
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `hover transition duration-300 ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `hover transition duration-300 ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                <div className='flex items-center text-2xl sm:text-3xl cursor-pointer z-50 lg:hidden'>
                    <i
                        onClick={handleToggler}
                        className={`hover transition duration-300 text-accent ${isOpen ? 'ri-close-large-line hover:text-white' : 'ri-menu-3-line hover:text-white'}`}
                    ></i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
