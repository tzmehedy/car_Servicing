import React, { useContext } from 'react';

import loginImg from "../../assets/images/login/login.svg"
import { FcGoogle } from 'react-icons/fc';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Login = () => {
  const { user, loginWithEmailPassword, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation()

  const navigate = useNavigate()



  const handelLogin = (e) =>{
    e.preventDefault()
    const form = e.target
    const email = form.name.value
    const password = form.password.value
    
    loginWithEmailPassword(email,password)
    .then(user=>{
      toast("Login SuccessFully")
      const loggedUser = {email}
      // location.state ? 

      axios.post("http://localhost:5000/jwt", loggedUser,{withCredentials:true})
      .then(res=>{
        console.log(res.data);
        if (res.data.success) {
          navigate(location?.state ? location.state : "/")
        }
      }
        
      )
      
      
    })
    .catch(error=>{
      toast(error.message)
    })
  }

  const handelLoginWithGoogle = () =>{
    signInWithGoogle()
    .then(user=>{
      toast("login SuccessFully")
      {
        location.state ? navigate(location.state) : navigate("/");
      }
    })
    .then(error=>{
      toast(error.message)
    })
  }

  console.log(user)


    return (
      <div className="mt-10">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex flex-col md:flex-row space-x-16">
            <div className="text-center">
              <img className="max-w-full" src={loginImg} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form onSubmit={handelLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
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
                    <button onClick={handelLoginWithGoogle} className="">
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

                <div className="">
                  <p className="my-5">
                    You don't have register. Please{" "}
                    <Link to={"/register"} className="text-[#FF3811] underline">
                      {" "}
                      Register
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

export default Login;