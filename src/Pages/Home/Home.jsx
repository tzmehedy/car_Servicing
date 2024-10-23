import React from 'react';
import Hero from '../../Components/Hero';
import About from './AboutUs/About';

const Home = () => {
    return (
        <div className='mt-10'>
            <Hero></Hero>
            <About></About>
        </div>
    );
};

export default Home;