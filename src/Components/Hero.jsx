import React from 'react';

import sliderImg1 from "../assets/images/banner/1.jpg"
import sliderImg2 from "../assets/images/banner/2.jpg"
import sliderImg3 from "../assets/images/banner/3.jpg"
import sliderImg4 from "../assets/images/banner/4.jpg"

const Hero = () => {
    return (
      <div>
        <div className="carousel w-full h-[550px] rounded-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img className="w-full" src={sliderImg1} />

            <div className="absolute h-full flex justify-center items-center pl-10 text-white bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) transform">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold max-w-64">
                  Affordable Price For Car Servicing
                </h1>
                <p className="">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="btn bg-[#FF3811] mr-2 border-0 text-white font-bold">
                    Discover More
                  </button>
                  <button className="border-2 border-white bg-none p-2 text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 flex -translate-y-1/2 transform space-x-2">
              <a
                href="#slide4"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img className="w-full" src={sliderImg2} />
            <div className="absolute h-full flex justify-center items-center pl-10 text-white bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) transform">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold max-w-64">
                  Affordable Price For Car Servicing
                </h1>
                <p className="">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="btn bg-[#FF3811] mr-2 border-0 text-white font-bold">
                    Discover More
                  </button>
                  <button className="border-2 border-white bg-none p-2 text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-10 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide1"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img className="w-full" src={sliderImg3} />

            <div className="absolute h-full flex justify-center items-center pl-10 text-white bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) transform">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold max-w-64">
                  Affordable Price For Car Servicing
                </h1>
                <p className="">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="btn bg-[#FF3811] mr-2 border-0 text-white font-bold">
                    Discover More
                  </button>
                  <button className="border-2 border-white bg-none p-2 text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide2"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img className="w-full" src={sliderImg4} />

            <div className="absolute h-full flex justify-center items-center pl-10 text-white bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) transform">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold max-w-64">
                  Affordable Price For Car Servicing
                </h1>
                <p className="">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="btn bg-[#FF3811] mr-2 border-0 text-white font-bold">
                    Discover More
                  </button>
                  <button className="border-2 border-white bg-none p-2 text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>

            
            <div className="absolute bottom-0 right-10 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide3"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle border-0 hover:bg-[#FF3811] hover:text-white"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;