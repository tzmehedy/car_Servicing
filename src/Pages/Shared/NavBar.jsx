import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from "../../../public/logo.svg"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaCartArrowDown } from 'react-icons/fa6';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
    const navLinks = (
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        
        <li>
          <NavLink to={"contact"}>Contact</NavLink>
        </li>
        
        
      </>
    )

    const handelLogOut = () =>{
      logOut()
      .then(()=>{
        toast("SuccessFully Logout")
      })
      .catch(error=>{
        toast(error.message)
      })

    }

    return (
      <div className="navbar bg-base-100 shadow-lg fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link to={"/myBookings"} className=" mr-3 text-2xl text-[#FF3811]">
            <FaCartArrowDown />
          </Link>

          {user ? (
            <button
              onClick={handelLogOut}
              className="btn bg-[#FF3811] text-white font-bold"
            >
              LogOut
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-[#FF3811] text-white font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default NavBar;