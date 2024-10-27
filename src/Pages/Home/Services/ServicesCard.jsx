import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {

    const {_id,img, title, price} = service
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="w-full h-[250px]" src={img} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
              <Link to={`/checkOut/${_id}`} className="btn bg-[#FF3811] text-white">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;