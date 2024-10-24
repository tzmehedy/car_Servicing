import React from 'react';

import userImg1 from "../../../assets/images/Ellipse 2.jpeg"
import userImg2 from "../../../assets/images/Ellipse 2 (1).jpeg"
import { FaStar } from 'react-icons/fa6';

const Testimonials = () => {
    return (
      <div className="mt-20">
        <div className="text-center space-y-5">
          <p className="text-[#FF3811] font-bold">Testimonial</p>
          <h1 className="text-3xl font-bold">What Customer Says</h1>
          <p>
            The majority have suffered alteration in some form, by injected
            humour, or <br /> randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>

        <div className="mt-5 flex flex-col md:flex-row justify-center space-x-10">
          <div className="p-10 space-y-3 shadow-lg">
            <div className="flex space-x-3">
              <div>
                <img src={userImg1} alt="" />
              </div>
              <div>
                <h1 className="font-bold">Awlad Hossain</h1>
                <p>Businessman</p>
              </div>
            </div>

            <div className='space-y-3'>
              <p className='text-justify'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
              <div className="flex space-x-2 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>

          <div className="p-10 space-y-3 shadow-lg">
            <div className="flex space-x-3">
              <div>
                <img src={userImg2} alt="" />
              </div>
              <div>
                <h1 className="font-bold">Awlad Hossain</h1>
                <p>Businessman</p>
              </div>
            </div>

            <div className='space-y-3'>
              <p className='text-justify'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
              <div className="flex space-x-2 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonials;