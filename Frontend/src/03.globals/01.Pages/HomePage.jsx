import React from 'react';
import Navbar from '../03.Components/Navbar';
import Hero from '../02.Sections/Hero';
import Footer from '../02.Sections/Footer';


const HomePage = () => {
    return (
        <div className='h-screen'> 
            <main>
                <Navbar />
                <Hero />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;