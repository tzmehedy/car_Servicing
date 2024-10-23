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
          <p className="text-[#FF3811]">Core Feature</p>
          <h1 className="text-2xl font-bold">Why Choose Us</h1>
          <p>
            The majority have suffered alteration in some form, by injected
            humour, or <br /> randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>

        <div className="flex justify-between text-center mt-10">
          <div className=" bg-gray-200 p-10">
            <IoIosPeople />
            <p>Expert Team</p>
          </div>
          <div className=" bg-gray-200 p-10">
            <FaRegClock />
            <p>Timely Delivery</p>
          </div>
          <div className=" bg-gray-200 p-10">
            <BiSupport />
            <p>24/7 Support</p>
          </div>
          <div className=" bg-gray-200 p-10">
            <FaCarAlt />
            <p>Best Equipment</p>
          </div>
          <div className=" bg-gray-200 p-10">
            <MdSecurity />
            <p>100% Guranty</p>
          </div>
          <div className=" bg-gray-200 p-10">
            <CiDeliveryTruck />
            <p>Timely Delivery</p>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;