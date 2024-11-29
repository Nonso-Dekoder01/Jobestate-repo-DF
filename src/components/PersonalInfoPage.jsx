import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import RegistrationProgress from "./RegistrationProgress";
import bg from "../Assets/bg.png";
import logo from "../Assets/Logo - Horizontal.png";
import { FaPlus } from "react-icons/fa6";

// Validate email function
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

function PersonalInfoPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear previous error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: "", email: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Location is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (validateForm()) {
      // Store personal info in local storage
      localStorage.setItem("personalInfo", JSON.stringify(formData));

      // Navigate to next page
      navigate("/register/account");
    }
  };

  const bgimage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
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
          <RegistrationProgress currentStep={1} />
        </div>

        <div className="flex-1 flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/register/account")}
            className="text-blue-600 hover:underline"
          >
            Skip
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-[674px] flex flex-col gap-5 mt-6 md:mt-[70px] lg:mx-auto"
      >
        <div className="md:flex-row flex-col flex  md:items-center gap-6">
          <div className="md:w-[100px] w-full h-[300px] flex items-center justify-center border-[1px] border-[#1155B2] md:h-[100px]">
            {" "}
            <FaPlus className="text-[#1155B2]" size={25} />
          </div>
          <div className="flex flex-col gap-4 ">
            <div>
              <h1 className="text-[14px] font-[300]">
                Please upload square image, size less than 100KB
              </h1>
            </div>{" "}
            <div className="flex items-center gap-6">
              {" "}
              <button className="w-[133px] h-[42px] border-[#0149AD] text-[#0149AD] rounded-[5px] flex items-center justify-center  border-[1px]">
                Choose File
              </button>{" "}
              <p className="text-[#A4A4A4] text-[14px] font-[300]">No file chosen</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 py-5">
        <div className="w-full flex flex-col gap-1">
                <h1 className="text-[14px] text-[#012C68]">FIRST NAME</h1>
               
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className={`
              w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
              ${errors.fullName ? "border-red-500" : "border-gray-300"}
            `}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
                <h1 className="text-[14px] text-[#012C68]">LAST NAME</h1>
               
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className={`
              w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
              ${errors.fullName ? "border-red-500" : "border-gray-300"}
            `}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
        <h1 className="text-[14px] text-[#012C68]">LOCATION</h1>
          <input
            type="text"
            placeholder="Current Location"
            className={`
                 w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
              ${errors.email ? "border-red-500" : "border-gray-300"}
            `}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        </div>

      

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
        >
          Next
          <BiChevronRight size={20} className="ml-2" />
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoPage;