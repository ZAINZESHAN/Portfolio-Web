import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggler = () => {
        setIsOpen(!isOpen);
    };

    const scrollHeader = () => {
        const header = document.getElementById('navbar');
        if (header) {
            if (window.scrollY >= 100) {
                header.classList.add("border-b-2", "border-[#00cc7a]");
            } else {
                header.classList.remove("border-b-2", "border-[#00cc7a]");
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);

    return (
        <section id="navbar" className="bg-black w-full top-0 left-0 fixed z-50">
            <nav className="container text-white flex items-center h-24 sm:h-28 justify-between mx-auto">
                <div className="flex items-center font-Viga">
                    <div className="hover:text-accent">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={300}
                            className="cursor-pointer"
                        >
                            <span className="text-3xl md:text-4xl">Z</span>
                            <span className="text-2xl md:text-3xl">ai</span>
                            <span className="text-4xl md:text-5xl">N</span>
                            <span className="text-4xl md:text-5xl text-accent pl-1">.</span>
                        </Link>
                    </div>
                </div>

                <div
                    className={`flex gap-10 text-[24px] lg:text-[21px] xl:text-[23px] font-semibold absolute top-0 min-h-[85vh] w-full
                    backdrop-blur-sm items-center justify-center flex-col 
                    duration-500 ease-in-out transition-all overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:flex-row lg:w-auto ${isOpen ? 'left-0' : '-left-full'
                        }`}
                >
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={300}
                        offset={-110}
                        activeClass='active'
                        className="link cursor-pointer hover:text-accent"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={300}
                        offset={-110}
                        activeClass='active'
                        className="link cursor-pointer hover:text-accent"
                    >
                        About
                    </Link>
                    <Link
                        to="work"
                        spy={true}
                        smooth={true}
                        duration={300}
                        offset={-110}
                        activeClass='active'
                        className="link cursor-pointer hover:text-accent"
                    >
                        Work
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={300}
                        offset={-110}
                        activeClass='active'
                        className="link cursor-pointer hover:text-accent"
                    >
                        Contact
                    </Link>
                </div>

                <div className="flex items-center text-2xl sm:text-3xl cursor-pointer z-50 lg:hidden">
                    <i
                        onClick={handleToggler}
                        className={`hover transition duration-300 text-accent ${isOpen ? 'ri-close-large-line hover:text-white' : 'ri-menu-3-line hover:text-white'
                            }`}
                    ></i>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
