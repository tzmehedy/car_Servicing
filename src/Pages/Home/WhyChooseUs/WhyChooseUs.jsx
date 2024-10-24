import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaCarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { IoIosPeople } from 'react-icons/io';
import { MdSecurity } from 'react-icons/md';

const WhyChooseUs = () => {
    return (
      <div className="mt-20">
        <div className="text-center space-y-3">
          <p className="text-[#FF3811] font-bold">Core Feature</p>
          <h1 className="text-2xl font-bold">Why Choose Us</h1>
          <p>
            The majority have suffered alteration in some form, by injected
            humour, or <br /> randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-center mt-10">
          <div className="shadow-lg p-10 flex flex-col justify-center items-center space-y-2">
            <IoIosPeople className="text-3xl text-[#FF3811]" />
            <p>Expert Team</p>
          </div>
          <div className="shadow-lg p-10 flex flex-col justify-center items-center space-y-2 bg-[#FF3811] text-white">
            <FaRegClock className="text-3xl " />
            <p>Timely Delivery</p>
          </div>
          <div className="shadow-lg p-10 flex flex-col justify-center items-center space-y-2">
            <BiSupport className="text-3xl text-[#FF3811]" />
            <p>24/7 Support</p>
          </div>
          <div className="shadow-lg p-10 flex flex-col justify-center items-center space-y-2">
            <FaCarAlt className="text-3xl text-[#FF3811]" />
            <p>Best Equipment</p>
          </div>
          <div className="shadow-lg p-10 flex flex-col justify-center items-center space-y-2">
            <MdSecurity className="text-3xl text-[#FF3811]" />
            <p>100% Guranty</p>
          </div>
          <div className="shadow-lg p-10 flex flex-col justify-center items-center space-y-2">
            <CiDeliveryTruck className="text-3xl text-[#FF3811]" />
            <p>Timely Delivery</p>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;