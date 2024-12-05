import React from 'react'
import image from "../Assets/Rectangle 3576 (1).png";
import bg from "../Assets/bg.png";
import logo from "../Assets/Logo - Horizontal.png";
import { Link } from 'react-router-dom';
import { GrGoogle } from "react-icons/gr";
import google from "../Assets/Rectangle 6.png";
import { FaTwitter } from "react-icons/fa";
import { BiCheck, BiPhone } from "react-icons/bi";
import phone from "../Assets/smartphone-device.png";
const SignUp = () => {
    const bgimage = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
  return (
    <div className="w-full mx-auto h-full md:h-screen  flex items-center justify-center">
    <div className="xl:flex h-full items-center  w-full">
      <div
        className="w-full py-2  h-full overflow-auto  px-5 md:px-10"
        style={bgimage}
      >
        <div className=" flex gap-4 it h-full flex-col">
        <Link to='/' className=" w-[150px] md:w-[200px]">
              <img src={logo} alt="" />
            </Link>
          <div className="mx-auto  mt-5 md:mt-0 flex flex-col  overflow-auto scrollbar-hide w-full     md:w-[400px] h-full md:h-screen">
            <div className=" text-left w-full md:text-center">
              <h1 className="font-sans text-[40px] font-[600]">Create Account</h1>
              <p className="text-[#6B6B6B] text-[14px] font-[600]">
              Sign up to get exclusive job updates!
              </p>
            </div>
            <div className="w-full flex flex-col gap-5 py-5">
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-[14px] text-[#012C68]">EMAIL ADDRESS</h1>
                <input
                  className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                  type="email"
                  placeholder="Enter Email Address"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-[14px] text-[#012C68]">PASSWORD</h1>
                <input
                  className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                  type="password"
                  placeholder="Enter Password"
                  name=""
                  id=""
                />
              </div>
              <div className=" ">
              <div>
            <div><p className='text-[14px]'>Create a Password that:</p></div>
            <div className='mt-3'>
            <div ><p className='flex gap-2 text-[9px] items-center'><BiCheck className='text-green-300' size={20}/> Contains at least 8 characters</p></div>
            <div ><p className='flex gap-2 text-[9px] items-center'><BiCheck className='text-green-300' size={20}/> Contains both letters (a-z) and upper case letters (A-Z)</p></div>
            <div ><p className='flex gap-2 text-[9px] items-center'><BiCheck className='text-green-300' size={20}/> contains at least one number (0-9) or a symbol</p></div>
            <div ><p className='flex gap-2 text-[9px] items-center'><BiCheck className='text-green-300' size={20}/> does not contain your email address</p></div>
            <div ><p className='flex gap-2 text-[9px] items-center'><BiCheck className='text-green-300' size={20}/> is not commonly used</p></div>
           
            </div>
            <div className='flex flex-col mt-4 gap-3' >
           
                <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="ttt" /> <label className='text-[11px] font-[300]' htmlFor="ttt">Agree to our Terms of use and Privacy Policy </label>
                </div>
                <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="tttt" /> <label className='text-[11px] font-[300]' htmlFor="tttt">Subscribe to our monthly newsletter </label>
                </div>
                </div>
              </div>
              </div>
              <button className="w-full bg-[#0149AD] text-white rounded-[6px] h-[50px]">
                Sign Up
              </button>
              <div className=" flex items-center justify-center w-full">
                {" "}
                <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
                <h1 className="px-2">OR</h1>
                <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
              </div>
              <button className="w-full bg-white flex items-center justify-center gap-4 border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                <img className="w-[20px]" src={google} alt="" /> Continue with
                Google
              </button>

              <button className="w-full bg-white flex items-center justify-center gap-4 border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                <FaTwitter className="text-[20px] text-blue-400" /> Continue
                with Twitter
              </button>

              <button className="w-full bg-white flex items-center gap-4 justify-center border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                <img className="" src={phone} alt="" /> Continue with Phone
                Number
              </button>
              <Link className="text-[#667185] text-center text-[14px] font-[400]">
                Already have an account?{" "}
                <span className="font-[500] text-[#0149AD]">
                    <Link to='/signin'>
                 Sign in
                 </Link>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          className="w-full hidden xl:flex bg-center object-cover h-screen"
          src={image}
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default SignUp
