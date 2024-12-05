import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FindJobs from "./components/FindJobs";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import UserDashboard from "./components/UserDashboard";
import UserNavbar from "./components/UserNavbar";
import UserJobs from "./components/UserJobs";
import UserApplicationStatus from "./components/UserApplicationStatus";
import UserSavedJobs from "./components/UserSavedJobs";
import UserBlog from "./components/UserBlog";
import UserNotification from "./components/UserNotification";
import UserProfile from "./components/UserProfile";
import UserSettings from "./components/UserSettings";
import UserJobDetails from "./components/UserJobDetails";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn"; // Example for Sign In
import ForgotPasswordCodes from "./components/ForgotPasswordCodes";
import ForgotPasswordCodesNumber from "./components/ForgotPasswordCodesNumber";
import ChangePassword from "./components/ChangePassword";
import PersonalInfoPage from "./components/PersonalInfoPage";
import ForgottenPassword from "./components/ForgottenPassword";
import ForgottenPasswordNumber from "./components/ForgottenPasswordNumber";
import SuccessPage from "./components/SuccessPage";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import RegisteredSuccess from "./components/RegisteredSuccess";
// import Footer from './components/Footer'

const App = () => {
  const location = useLocation();

  const renderNavbar = () => {
    const noNavbarRoutes = [
      "/signup",
      "/signin",
      "/register",
      "/forgotpassword",
      "/forgotpasswordnumber",
      "/forgotpasswordcodesemail",
      "/forgotpasswordcodesnumber",
      "/changepasswords",
      "/register/personal",
      "/success",
      "/register/experience",
      "/register/education",
      "/register/resume",
      "/register/success"
    ]; // Add all routes where navbar should be hidden
    const userNavbarRoutes = [
      "/userdashboard",
      "/userjobs",
      "/userjobs/details",
      "/userapplicationstatus",
      "/usersavedjobs",
      "/userblog",
      "/usernotification",
      "/userprofile",
      "/usersettings",
    ];

    if (noNavbarRoutes.includes(location.pathname)) {
      return null; // No navbar for these routes
    } else if (userNavbarRoutes.includes(location.pathname)) {
      return <UserNavbar />; // Show UserNavbar for specific routes
    }
    return <Navbar />; // Default Navbar for other routes
  };

  return (
    <div className="overflow-hidden">
      <div className="flex">
        {renderNavbar()}
        <Routes>
          {/* User-specific routes */}
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/userjobs" element={<UserJobs />} />
          <Route path="/userjobs/details" element={<UserJobDetails />} />
          <Route  path="/userapplicationstatus" element={<UserApplicationStatus />} />
          <Route path="/usersavedjobs" element={<UserSavedJobs />} />
          <Route path="/userblog" element={<UserBlog />} />
          <Route path="/usernotification" element={<UserNotification />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/usersettings" element={<UserSettings />} />
          <Route path="/usersettings" element={<UserSettings />} />
        </Routes>
      </div>

      {/* Other routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgottenPassword />} />
        <Route path="/forgotpasswordnumber" element={<ForgottenPasswordNumber />}/>
        <Route path="/signin" element={<SignIn />} />


        {/* Example for Sign In */}
        <Route path="/forgotpasswordcodesemail" element={<ForgotPasswordCodes />} />
        <Route path="/forgotpasswordcodesnumber"  element={<ForgotPasswordCodesNumber />} />
        <Route path="/changepasswords" element={<ChangePassword />} />
        <Route path="/register/personal" element={<PersonalInfoPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/register/experience" element={<Experience />} />
        <Route path="/register/education" element={<Education />} />
        <Route path="/register/resume" element={<Resume />} />
        <Route path="/register/success" element={<RegisteredSuccess />} />
      </Routes>      
    </div>
  );
};

export default App;
