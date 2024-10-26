import React from 'react';
import Hero from '../../Components/Hero';
import About from './AboutUs/About';
import ContactInfo from './ContactInfo/ContactInfo';
import Team from './Team/Team';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Testimonials from './Testimonials/Testimonials';
import { useLoaderData } from 'react-router-dom';
import Services from './Services/Services';

const Home = () => {
    const services = useLoaderData()
    return (
      <div className="mt-10">
        <Hero></Hero>
        <About></About>
        <Services services={services}></Services>
        <ContactInfo></ContactInfo>
        <Team></Team>
        <WhyChooseUs></WhyChooseUs>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;