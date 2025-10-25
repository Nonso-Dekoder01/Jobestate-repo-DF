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
import AdminNavbar from "./components/AdminNavbar";
// import AdminDashboard from "./components/AdminDashboard";
import EmployerLogin from "./components/EmployerLogin";
import EmployerSignUp from "./components/EmployerSignUp";
import EmployerReg from "./components/EmployerReg";
import EmployerSuccess from "./components/EmployerSuccess";
// import AdminJobDetails from "./components/AdminJobDetails";
// import AdminBlog from "./components/AdminBlog";
import EmployerNavbar from "./components/EmployerNavbar";
import EmployerDashboard from "./components/EmployerDashboard";
import EmployerJobForm from "./components/EmployerJobForm";
// import EmployerJobs from "./components/EmployerJobs";
import EmployerApplicants from "./components/EmployerApplicants";
// import AdminJobSeekers from "./components/AdminJobSeekers";
// import AdminEmployers from "./components/AdminEmployers";
import ApproveJobs from "./components/ApproveJobs";

const App = () => {
  const location = useLocation();

  const renderNavbar = () => {
    const noNavbarRoutes = [
      "/signup",
      "/signin",
      "/Employersignup",
      "/Employersignin",
      "/register",
      "/forgotpassword",
      "/forgotpasswordnumber",
      "/forgotpasswordcodesemail",
      "/forgotpasswordcodesnumber",
      "/changepasswords",
      "/register/personal",
      "/success",
      "/Employersreg",
      "/register/experience",
      "/register/education",
      "/register/resume",
      "/register/success",
      "/Employersuccess"
    ]; // Add all routes where navbar should be hidden

    const userNavbarRoutes = [
      "/userdashboard",
      "/userjobs",
      "/userapplicationstatus",
      "/usersavedjobs",
      "/userblog",
      "/usernotification",
      "/userprofile",
      "/usersettings",
    ];

    const adminNavbarRoutes = [
      "/admindashboard",
      "/adminjobdetails",
      "/adminblog",
      "/adminjobseekers",
      "/adminemployers",  
      "/approvejobs",
    ];

    const employerNavbarRoutes = [
      "/employerprofile",
      "/employerjobform",
      "/employerjobs",
      "/employerapplicants",
      "/employerdashboard",
    ];

    // Check if the current route is in the noNavbarRoutes array
    if (noNavbarRoutes.includes(location.pathname)) {
      return null; // No navbar for these routes
    }

    // Check if the current route starts with any user-specific route
    if (
      userNavbarRoutes.includes(location.pathname) ||
      location.pathname.startsWith("/userjobsdetails")
    ) {
      return <UserNavbar />; // Show UserNavbar for user-specific routes
    }

    // Check if the current route is in the employerNavbarRoutes array
    if (employerNavbarRoutes.includes(location.pathname)) {
      return <EmployerNavbar />; // Show EmployerNavbar for employer-specific routes
    }

    // Check if the current route is in the adminNavbarRoutes array
    if (adminNavbarRoutes.includes(location.pathname)) {
      return <AdminNavbar />; // Show AdminNavbar for admin-specific routes
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
          <Route path="/userjobsdetails/:id" element={<UserJobDetails />} />
          <Route path="/userapplicationstatus" element={<UserApplicationStatus />} />
          <Route path="/usersavedjobs" element={<UserSavedJobs />} />
          <Route path="/userblog" element={<UserBlog />} />
          <Route path="/usernotification" element={<UserNotification />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/usersettings" element={<UserSettings />} />

          {/* Employer-specific routes */}
          <Route path="/employerprofile" element={<EmployerDashboard />} />
          <Route path="/employerjobform" element={<EmployerJobForm />} />
          {/* <Route path="/employerjobs" element={<EmployerJobs />} /> */}
          <Route path="/employerapplicants" element={<EmployerApplicants />} />
          <Route path="/employerdashboard" element={<EmployerDashboard />} />

          {/* Admin-specific routes */}
          {/* <Route path="/admindashboard" element={<AdminJobSeekers />} /> */}
          {/* <Route path="/adminemployers" element={<AdminEmployers />} /> */}
          <Route path="/approvejobs" element={<ApproveJobs />} />
          {/* <Route path="/adminjobdetails" element={<AdminJobDetails />} /> */}
          {/* <Route path="/adminblog" element={<AdminBlog />} /> */}
        </Routes>
      </div>

      {/* Other routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Employersignup" element={<EmployerSignUp />} />
        <Route path="/Employersignin" element={<EmployerLogin />} />
        <Route path="/Employersreg" element={<EmployerReg />} />
        <Route path="/Employersuccess" element={<EmployerSuccess />} />

        {/* Example for Sign In */}
        <Route path="/forgotpassword" element={<ForgottenPassword />} />
        <Route path="/forgotpasswordnumber" element={<ForgottenPasswordNumber />} />
        <Route path="/forgotpasswordcodesemail" element={<ForgotPasswordCodes />} />
        <Route path="/forgotpasswordcodesnumber" element={<ForgotPasswordCodesNumber />} />
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