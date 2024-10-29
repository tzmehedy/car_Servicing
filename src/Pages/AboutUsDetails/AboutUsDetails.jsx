import React from 'react';

import bannerImg from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

import img1 from "../../assets/images/services/1.jpg"
import img2 from "../../assets/images/services/2.jpg"
import img3 from "../../assets/images/services/3.jpg"
import img4 from "../../assets/images/services/4.jpg"

const AboutUsDetails = () => {
    return (
      <div className="mt-10">
        <div
          className=" w-full h-[350px] relative "
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center items-center px-10  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) h-full">
            <h1 className="text-white font-bold text-2xl">About Us</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="absolute bg-[#FF3811] bottom-0 px-3 py-2 rounded text-white font-bold">
              Home-About Us
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-20 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-1/2">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>

          <div className="w-1/2 space-y-4">
            <h1 className="text-2xl font-bold text-[#FF3811]">Our Story</h1>
            <hr className="text-[#FF3811]" />
            <p className="text-justify">
              Car doctor was founded in 2001 with a clear mission: to deliver
              top-quality, honest, and reliable car servicing to every driver.
              What began as a small workshop has grown into a trusted name in
              car care, known for precision, transparency, and a customer-first
              approach. Led by our founder, Md Touhidur Zaman, and a team of
              certified technicians, we combine hands-on expertise with the
              latest tools and technology to keep vehicles running safely and
              efficiently, mile after mile. We believe car care should be about
              building trust and making every visit a positive experience. Each
              service we offer, from routine maintenance to advanced
              diagnostics, is designed to keep your vehicle in peak condition
              while keeping you informed every step of the way. At [Your Company
              Name], it’s not just about fixing cars; it’s about providing peace
              of mind, one customer at a time.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col md:flex-row  gap-5">
            <div className="w-1/2 relative">
              <img className="w-2/3" src={bannerImg} alt="" />
              <img
                className="w-1/3 absolute right-36 top-44 border-4 border-white"
                src={parts}
                alt=""
              />
            </div>
            <div className="w-1/2 space-y-3">
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
      </div>
    );
};

export default AboutUsDetails;