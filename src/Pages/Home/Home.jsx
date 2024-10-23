import React from 'react';
import Hero from '../../Components/Hero';
import About from './AboutUs/About';
import ContactInfo from './ContactInfo/ContactInfo';
import Team from './Team/Team';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div className='mt-10'>
            <Hero></Hero>
            <About></About>
            <ContactInfo></ContactInfo>
            <Team></Team>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;