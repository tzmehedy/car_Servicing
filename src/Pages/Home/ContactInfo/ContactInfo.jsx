import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { RiCalendarScheduleLine } from 'react-icons/ri';

const ContactInfo = () => {
    return (
      <div className="bg-[#151515] flex flex-col md:flex-row space-y-5 justify-between mt-20 text-white font-bold p-20">
        <div className="flex justify-between items-center space-x-3">
          <div className="text-[#FF3811] text-3xl">
            <RiCalendarScheduleLine />
          </div>
          <div>
            <p>We are open monday-friday</p>
            <p>7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-3">
          <div className="text-[#FF3811] text-3xl">
            <IoCall />
          </div>
          <div>
            <p>Have a question?</p>
            <p>+2546 251 2658</p>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-3">
          <div className="text-[#FF3811] text-3xl">
            <FaLocationDot />
          </div>
          <div>
            <p>Need a repair? our address</p>
            <p>Liza Street, New York</p>
          </div>
        </div>
      </div>
    );
};

export default ContactInfo;