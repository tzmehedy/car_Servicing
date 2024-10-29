import React from 'react';

const BookingsTable = ({ bookingInfo }) => {


    const handelDelete =()=>{
        fetch(`http://localhost:5000/bookings/${bookingInfo._id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
  return (
    <tr>
      <th>
        <button onClick={handelDelete} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <h1>{bookingInfo.name}</h1>
        </div>
      </td>
      <td>
        <h1>{bookingInfo.serviceName}</h1>
      </td>
      <td>{bookingInfo.contactNo}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingsTable;