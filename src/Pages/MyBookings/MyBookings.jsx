import React from 'react';

import bannerImg from "../../assets/images/banner/2.jpg"

const MyBookings = () => {
    return (
      <div className="mt-10">
        <div
          className="w-full h-[350px]"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-white bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) h-full flex items-center pl-10">
            <div>
              <h1 className="text-2xl font-bold">My Bookings Details</h1>
              <p className="text-[#FF3811]">Home-My Bookings</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyBookings;