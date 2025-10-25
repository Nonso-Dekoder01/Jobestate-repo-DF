import React, { useEffect, useRef, useState } from 'react'
import logo from '../Assets/img/logo.png'
import {FaTimes, FaBars} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { FiBell, FiChevronLeft } from "react-icons/fi"; 
import { CiLogout } from "react-icons/ci";
// import { RiDashboardFill } from "react-icons/ri";
// import { BiSolidBriefcase } from "react-icons/bi";
// import { GrStatusGood } from "react-icons/gr";
// import { BsFillBookmarkCheckFill } from "react-icons/bs";
// import { TfiWrite } from "react-icons/tfi";
// import { FaBell } from "react-icons/fa";
// import { IoLogOut, IoPersonCircle } from "react-icons/io5";
// import { IoIosSettings } from "react-icons/io";

const notifications = [
  { id: 1, message: "📢 Hostel clearance approved", time: "2h ago" },
  { id: 2, message: "⚠️ Faculty document rejected", time: "4h ago" },
  { id: 3, message: "📩 New message from admin", time: "Yesterday" },
  { id: 4, message: "🗃️ Library clearance verified", time: "2 days ago" },
];

const latestThree = notifications.slice(0, 3);

const AdminNavbar = () => {


const [open, setOpen] = useState(false);
// const [show, setShow] = useState(false);
const [logOutOpen, setLogoutOpen] = useState(false);
const dropdownRef = useRef();
const [bellOpen, setbellOpen] = useState(false);
// const [userData, setUserData] = useState(null);
// const [profileOpen, setProfileOpen] = useState(false); // NEW STATE


const HandleShow  = () => {
setOpen(!open)
}

  const bellRef = useRef();
  
    // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setbellOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/signin'; // Or use navigate if you have react-router
  };

    
      return (
                    <nav className='flex px-[20px] fixed h-[80px] z-50  w-full md:flex md:justify-between md:px-[50px] md:py-[60px] xl:flex justify-between xl:py-7 xl:px-[135px] xl:h-[130px] items-center bg-white'>
                        <div>
                            <img src={logo} alt="logo" className='w-[120px] md:w-[150px] lg:w-[170px]'/> 
                        </div>
                        <div className='hidden md:hidden xl:flex gap-[60px] text-[15px]'>
                            {/* <NavLink
                            to='/admindashboard'
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            
                            >Home</NavLink> */}
                            {/* <NavLink
                            to='/admindashboard'
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            
                            >Job Seekers</NavLink> */}
                            {/* <NavLink
                            to='/findjobs'
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            
                            >Find Jobs</NavLink> */}
                            {/* <NavLink
                            to='/adminemployers'
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            
                            >Employers</NavLink> */}
                            <NavLink
                            to='/approvejobs'
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            
                            >Approve Jobs</NavLink>
                        </div>
                        <div className="flex items-center relative gap-6 xl:hidden">
                          <div onClick={HandleShow} className="flex items-center">
                            {open ? <FaTimes size={26} className="z-50 left-0 md:left-[70px]" /> : <FaBars size={26} />}
                          </div>
                        </div>
                          <div className="relative items-center lg:flex hidden gap-3" ref={bellRef}>
                            <div 
                              onClick={() => setbellOpen(!bellOpen)} 
                              className="w-15 h-15 flex items-center justify-center rounded-full bg-[#FAFAFA]">
                              <FiBell size={25}/>
                            </div>
                
                            
                              <div className="flex relative gap-3 items-center">
                                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-none">
                                  {/* <img  alt="" className="w-full"/> */}
                                </div>
                                <div>
                                  <h3 className="text-lg">Admin name</h3>
                                  <p className="text-xs text-[#A3A3A3]">Admin</p>
                                </div>
                                <div className="hidden cursor-pointer" onClick={() => setLogoutOpen(!logOutOpen)} ref={dropdownRef}>
                                  <FiChevronLeft />
                                </div>
                              </div>
                            
                
                          </div>
                
                        {/* Mobile Menu */}
                        <div
                          className={`
                            fixed top-0 left-0 w-full h-screen bg-white z-40 
                            flex flex-col items-center justify-center gap-[40px]
                            transition-all duration-700 ease-in-out
                            ${open ? "translate-y-0" : "-translate-y-full"}
                          `}
                        >
                          {/* <NavLink
                            to="/userdashboard"
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            onClick={() => setOpen(false)}
                          >
                            Home
                          </NavLink> */}
                          <NavLink
                            to="/admindashboard"
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            onClick={() => setOpen(false)}
                          >
                            Job Seekers
                          </NavLink>
                          <NavLink
                            to="/"
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            onClick={() => setOpen(false)}
                          >
                            Employers
                          </NavLink>
                          <NavLink
                            to="/"
                            className={({isActive}) =>
                            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
                            onClick={() => setOpen(false)}
                          >
                            Approve Jobs
                          </NavLink>
                          <NavLink
                            to="/"
                            className="text-[#000000B2] text-[12px] flex items-center gap-2"
                            onClick={handleLogout}
                          >
                            <CiLogout /> Logout
                          </NavLink>
                
                          {/* {userData && (
                            <div className="flex w-full px-[30px] flex-col items-center gap-5 mt-8">
                              <div className="flex gap-3 items-center">
                                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-none">
                                  <img src={userFace} alt="" className="w-full"/>
                                </div>
                                <div>
                                  <h3 className="text-lg">{userData.firstName || 'User'}</h3>
                                  <p className="text-xs text-[#A3A3A3]">Software Engineering</p>
                                </div>
                                <div className="hidden lg:flex">
                                  <FiChevronDown />
                                </div>
                              </div>
                            </div>
                          )} */}
                        </div>
                
                
                      {/* Dropdown */}
                      {bellOpen && (
                        <div className="absolute top-24 right-5 lg:right-28 w-80 bg-white shadow-lg rounded-lg p-6 z-[9999]">
                          <p className="font-semibold text-gray-800 mb-4">Notifications</p>
                          <ul className="text-sm text-gray-600 space-y-4">
                            {latestThree.map((note) => (
                              <li key={note.id} className="flex justify-between">
                                <span>{note.message}</span>
                                <span className="text-xs text-gray-400">{note.time}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                
                      {/* Dropdown */}
                      {logOutOpen && (
                        <div className="absolute top-24 right-5 lg:right-28 w-40 bg-white shadow-lg rounded-lg p-4 z-[9999]">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            <CiLogout /> Logout
                          </button>
                        </div>
                      )}
                    </nav>
      )
}

export default AdminNavbar