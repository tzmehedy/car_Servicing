import React from "react";

import teamImg1 from "../../../assets/images/team/1.jpg"
import teamImg2 from "../../../assets/images/team/2.jpg"
import teamImg3 from "../../../assets/images/team/3.jpg"
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Team = () => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-2">
        <p className="text-[#FF3811] font-bold">Team</p>
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or <br />
          randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="card bg-base-100 w-96 shadow-2xl">
          <figure className="px-10 pt-10">
            <img className="rounded-lg" src={teamImg1} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex space-x-2 text-2xl">
              <BsFacebook className="text-blue-700" />
              <FaTwitter className="text-sky-500" />
              <FaLinkedin className="text-blue-900" />
              <FaInstagramSquare className="text-pink-600" />
            </div>
          </div>
        </div>


        <div className="card bg-base-100 w-96 shadow-2xl">
          <figure className="px-10 pt-10">
            <img className="rounded-lg" src={teamImg2} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex space-x-2 text-2xl">
              <BsFacebook className="text-blue-700" />
              <FaTwitter className="text-sky-500" />
              <FaLinkedin className="text-blue-900" />
              <FaInstagramSquare className="text-pink-600" />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img className="rounded-lg" src={teamImg3} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex space-x-2 text-2xl">
              <BsFacebook className="text-blue-700" />
              <FaTwitter className="text-sky-500" />
              <FaLinkedin className="text-blue-900" />
              <FaInstagramSquare className="text-pink-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
