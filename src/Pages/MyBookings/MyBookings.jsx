import React, { useContext, useState } from 'react';

import bannerImg from "../../assets/images/banner/2.jpg"
import  { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingsTable from './BookingsTable';

const MyBookings = () => {
  const {user} = useContext(AuthContext)
  const [bookingsInfo, setBookingsInfo] = useState()

  fetch(`http://localhost:5000/bookings?email=${user.email}`)
    .then((res) => res.json())
    .then((data) => setBookingsInfo(data));

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

        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th>Name</th>
                <th>Service Name</th>
                <th>Contact No</th>
                
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookingsInfo && bookingsInfo.map((bookingInfo) => (
                <BookingsTable
                  key={bookingInfo._id}
                  bookingInfo={bookingInfo}
                ></BookingsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyBookings;