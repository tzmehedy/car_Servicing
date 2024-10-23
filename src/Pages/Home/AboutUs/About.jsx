import React from 'react';

import aboutUsImg from "../../../assets/images/about_us/person.jpg"
import aboutUsParts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
      <div className="mt-24">
        <div className="flex flex-col md:flex-row  gap-5">
          <div className="w-1/2 relative">
            <img className="w-2/3" src={aboutUsImg} alt="" />
            <img className="w-1/3 absolute right-36 top-44 border-4 border-white" src={aboutUsParts} alt="" />
          </div>
          <div className="w-1/2 space-y-3">
            <p className="text-[#FF3811] font-bold">About Us</p>
            <h1 className="font-bold text-3xl">
              We are qualified & of experience in this field.
            </h1>
            <p className="text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <button className="btn bg-[#FF3811] text-white font-bold">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;