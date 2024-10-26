import React from 'react';
import registerImg from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div>
        <div className="mt-10">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col md:flex-row space-x-16">
              <div className="text-center">
                <img className="max-w-full" src={registerImg} alt="" />
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
                <h1 className="text-5xl font-bold">Please Register</h1>
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
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] text-white font-bold">
                      Register
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  
                    <p className="mb-3">
                      Already have an account? Please{" "}
                      <Link to={"/Login"} className="text-[#FF3811] underline">
                        {" "}
                        Login
                      </Link>
                    </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;