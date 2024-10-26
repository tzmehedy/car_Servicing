import React from 'react';
import ServicesCard from './ServicesCard';

const Services = ({services}) => {
    return (
      <div className="mt-20">
        <div className="text-center space-y-3">
          <p className="text-[#FF3811] font-bold">Services</p>
          <h1 className='text-3xl font-bold'>Our Service Area</h1>
          <p>
            The majority have suffered alteration in some form, by injected
            humour, or <br /> randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
            {
                services.map(service=> <ServicesCard service={service} key={service._id}></ServicesCard>)
            }
        </div>
      </div>
    );
};

export default Services;