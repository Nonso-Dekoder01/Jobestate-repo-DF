import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FindJobs from './components/FindJobs'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import UserDashboard from './components/UserDashboard'
import UserNavbar from './components/UserNavbar'
import UserJobs from './components/UserJobs';
import UserApplicationStatus from './components/UserApplicationStatus';
import UserSavedJobs from './components/UserSavedJobs';
import UserBlog from './components/UserBlog';
import UserNotification from './components/UserNotification';
import UserProfile from './components/UserProfile';
import UserSettings from './components/UserSettings';
import UserJobDetails from './components/UserJobDetails';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'; // Example for Sign In
// import Footer from './components/Footer'

const App = () => {
  const location = useLocation();

  const renderNavbar = () => {
    const noNavbarRoutes = ['/signup', '/signin', '/register']; // Add all routes where navbar should be hidden
    const userNavbarRoutes = [
      '/userdashboard',
      '/userjobs',
      '/userjobs/details',
      '/userapplicationstatus',
      '/usersavedjobs',
      '/userblog',
      '/usernotification',
      '/userprofile',
      '/usersettings',
    ];

    if (noNavbarRoutes.includes(location.pathname)) {
      return null; // No navbar for these routes
    } else if (userNavbarRoutes.includes(location.pathname)) {
      return <UserNavbar />; // Show UserNavbar for specific routes
    }
    return <Navbar />; // Default Navbar for other routes
  };

  return (
    <div className='overflow-hidden'>
      <div className='flex'>
        {renderNavbar()}
        <Routes>
          {/* User-specific routes */}
          <Route path='/userdashboard' element={<UserDashboard />} />
          <Route path='/userjobs' element={<UserJobs />} />
          <Route path='/userjobs/details' element={<UserJobDetails />} />
          <Route path='/userapplicationstatus' element={<UserApplicationStatus />} />
          <Route path='/usersavedjobs' element={<UserSavedJobs />} />
          <Route path='/userblog' element={<UserBlog />} />
          <Route path='/usernotification' element={<UserNotification />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/usersettings' element={<UserSettings />} />
        </Routes>
      </div>

      {/* Other routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/findjobs' element={<FindJobs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} /> {/* Example for Sign In */}
      </Routes>
    </div>
  );
};

export default App;
