// App.js
import React, { useState, useEffect } from 'react';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Loader from './Components/Loader';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Show loader for 3 seconds

    }, []);

    return (
        <>
            {loading ? (
                <Loader/> // Show loader while loading
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Contact />
                    <Work />
                </>
            )}
        </>
    );
}

export default App;
