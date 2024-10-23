import React from 'react';
import Hero from '../../Components/Hero';
import About from './AboutUs/About';
import ContactInfo from './ContactInfo/ContactInfo';

const Home = () => {
    return (
        <div className='mt-10'>
            <Hero></Hero>
            <About></About>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;