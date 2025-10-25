import React, { useState } from "react";
import bg from "../Assets/img/bg.png";
import logo from "../Assets/img/Logo - Horizontal.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true; // include cookies in all requests

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bgimage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://jobestate-23.onrender.com/api/auth/login",
        formData
      );

      const user = res.data.user;
      console.log("✅ Login success:", user);

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admindashboard");
      } else {
        navigate("/userdashboard");
      }
    } catch (err) {
      console.error("❌ Login failed:", err);
      setError(
        err.response?.data?.message || "Login failed. Please check credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto h-full md:h-screen flex items-center justify-center">
      <div className="xl:flex h-full items-center w-full">
        <div className="w-full py-2 h-full px-5 md:px-10" style={bgimage}>
          <div className="flex gap-4 h-full flex-col">
            <Link to="/" className="w-[150px] md:w-[200px]">
              <img src={logo} alt="logo" />
            </Link>

            <form
              onSubmit={handleSubmit}
              className="mx-auto py-1 mt-5 md:mt-0 flex flex-col w-full overflow-auto scrollbar-hide md:w-[400px] h-full md:h-screen"
            >
              <div className="text-left md:text-center">
                <h1 className="font-sans text-[40px] font-[600]">Log In</h1>
                <p className="text-[#6B6B6B] font-[600]">
                  Enter your credentials to access your account
                </p>
              </div>

              {error && (
                <p className="text-red-500 text-center mt-3">{error}</p>
              )}

              <div className="w-full flex flex-col gap-5 py-5">
                {/* Email */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">EMAIL ADDRESS</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">PASSWORD</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="flex items-center w-full justify-between">
                  <div className="flex gap-1 items-center">
                    <input type="checkbox" id="checkbox" />{" "}
                    <label
                      className="text-[14px] text-[#101928]"
                      htmlFor="checkbox"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link
                    className="text-[14px] text-[#0149AD] font-[500]"
                    to="/forgotpassword"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0149AD] text-white rounded-[6px] h-[50px]"
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center w-full">
                  <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
                  <h1 className="px-2">OR</h1>
                  <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
                </div>

                {/* Google Login placeholder */}
                <button className="w-full bg-white flex items-center justify-center gap-4 border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                  <img className="w-[20px]" alt="" /> Continue with Google
                </button>

                <p className="text-[#667185] text-center text-[14px] font-[400]">
                  Are you new here?{" "}
                  <span className="font-[500] text-[#0149AD]">
                    <Link to="/signup">Create Account</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right side image (hidden on small screens) */}
        <div className="w-full">
          <img
            className="w-full hidden xl:flex bg-center object-cover h-screen"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
