import React from 'react';

import bannerImg from "../../assets/images/banner/5.jpg"
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { TbClockHour9 } from 'react-icons/tb';

const ContactDetails = () => {
    return (
      <div className="mt-10">
        <div
          className=" w-full h-[400px] relative"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center items-center px-10  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) h-full">
            <h1 className="text-white font-bold text-2xl">Contact Us</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="absolute bg-[#FF3811] bottom-0 px-3 py-2 rounded text-white font-bold">
              Home-Contact Us
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row gap-10">
          <div className="w-1/2 space-y-3">
            <h1 className="text-[#FF3811] text-5xl font-bold">
              Our Central Office
            </h1>
            <hr />

            <div className='space-y-5 p-10'>
              <div className="flex space-x-5 items-center">
                <div>
                  <FaLocationDot className=" text-2xl" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Address</h1>
                  <p>4912 Hickory Street, Utah, 84003, American Fork</p>
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <div>
                  <FaPhoneVolume className=" text-2xl" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Phone</h1>
                  <p>+1 2345 67 890</p>
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <div>
                  <MdEmail className=" text-2xl" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Email</h1>
                  <p>support@cardoctor.com</p>
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <div>
                  <TbClockHour9 className=" text-2xl" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Opening Hours</h1>
                  <p>Mon - Sat: 8.00am To 5.00pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="hero bg-base-200 min-h-screen">
              <h1>Lets Us take care of your car</h1>
              <p>Send your details here</p>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] text-white font-bold">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactDetails;