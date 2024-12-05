import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import RegistrationProgress from "./RegistrationProgress";
import bg from "../Assets/bg.png";
import logo from "../Assets/Logo - Horizontal.png";
import { FaPlus } from "react-icons/fa6";
const Resume = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
          navigate("/register/success");
        }
    const navigate = useNavigate();
    const bgimage = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
      const [fileName, setFileName] = useState("No file chosen");

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setFileName(file.name);
        } else {
          setFileName("No file chosen");
        }
      };
  return (
    <div
      className="lg:mx-auto w-full h-full md:h-screen p-6 bg-white shadow-lg rounded-lg"
      style={bgimage}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1">
          <img src={logo} className="w-[150px] md:w-[200px]" alt="Logo" />
        </div>

        <div className="xl:flex-1 hidden xl:flex justify-center">
          <RegistrationProgress currentStep={4} />
        </div>

        <div className="flex-1 flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/register/success")}
            className="text-blue-600 hover:underline"
          >
            Skip
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-[674px] md:h-[600px] overflow-auto  flex flex-col gap-10 mt-6 md:mt-[70px] lg:mx-auto"
      >
        <div className="md:flex-row flex-col flex md:items-center gap-6">
          <div className="md:w-[100px] w-full h-[300px] flex items-center justify-center border-[1px] border-[#1155B2] md:h-[100px]">
            <FaPlus className="text-[#1155B2]" size={25} />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[14px] font-[300]">
                Please upload square image, size less than 100KB
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="w-[133px] h-[42px] border-[#0149AD] text-[#0149AD] rounded-[5px] flex items-center justify-center border-[1px] cursor-pointer hover:bg-blue-50 transition-colors"
              >
                Choose File
              </label>
              <p className="text-[#A4A4A4] text-[14px] font-[300]">
                {fileName}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex overflow-auto scrollbar-hide  flex-col gap-5 ">
 
     

          {/* Date */}
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">RELEVANT ROLES</h1>
            <input
              placeholder="e.g FULL STACK DEVELOPER"
              type="text"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
             
              `}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">SKILLS</h1>
            <input
              placeholder="e.g HTML, REACT, PYTHON"
              type="text"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
             
              `}
            />
          </div>
          <div className="flex items-center justify-center w-full gap-[30px]">
            <Link to='/register/education' className=" w-[162px] rounded-[20px] text-[#013A8A] border-[#013A8A] border-[2px]  h-[64px]  flex items-center justify-center ">
              Back
            </Link>
            <button
              type="submit"
              className="w-[162px] flex items-center justify-center h-[64px] rounded-[20px] text-[#013A8A] border-[#013A8A] border-[2px]"
            >
              Complete
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Resume
