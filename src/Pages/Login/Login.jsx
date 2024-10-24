import React from 'react';

import loginImg from "../../assets/images/login/login.svg"
import { FcGoogle } from 'react-icons/fc';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="mt-10">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex flex-col md:flex-row space-x-16">
            <div className="text-center">
              <img className='max-w-full' src={loginImg} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form className="card-body">
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#FF3811] text-white font-bold">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center space-y-2">
                <p>Or Login with</p>
                <div className=" text-2xl">
                  <div className="space-x-2">
                    <button className="">
                      <FcGoogle />
                    </button>
                    <button className="">
                      <IoLogoLinkedin className="text-blue-700" />
                    </button>
                    <button>
                      <FaFacebookSquare className="text-blue-800" />
                    </button>
                  </div>
                </div>

                <div className=''>
                  <p className='my-5'>
                    You don't have register. Please{" "}
                    <Link className="text-[#FF3811] underline"> Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;