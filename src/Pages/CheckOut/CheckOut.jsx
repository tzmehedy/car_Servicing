import React from 'react';
import bannerImg from "../../assets/images/banner/4.jpg"

const CheckOut = () => {
    return (
      <div className="mt-20">
        <div
          className="w-full h-[350px] relative "
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex  items-center px-10  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) h-full">
            <h1 className="text-white font-bold text-2xl">Check Out</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="absolute bg-[#FF3811] bottom-0 px-3 py-2 rounded text-white font-bold">
              Home/Check Out
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="bg-[#F3F3F3] p-20 flex justify-center">
            <form className=" space-y-5">
              <div className="space-x-20 flex flex-col md:flex-row">
                <div className="">
                  <input
                    type="text"
                    className="w-full px-10 py-2 border-2 border-stone-400"
                    name="name"
                    id=""
                    placeholder="Name"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-full px-10 py-2 border-2 border-stone-400 "
                    name="serviceName"
                    id=""
                    placeholder="Service Name"
                  />
                </div>
              </div>
              <div className="space-x-20 flex flex-col md:flex-row">
                <div className="">
                  <input
                    type="number"
                    className="w-full px-10 py-2 border-2 border-stone-400"
                    name="contact"
                    id=""
                    placeholder="Phone No."
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    className="w-full px-10 py-2 border-2 border-stone-400"
                    name="email"
                    id=""
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  className="w-full h-40 px-2 py-2 border-2 border-stone-400"
                  id=""
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="w-full bg-[#FF3811] py-2 text-white font-bold rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default CheckOut;