import React, { useState } from 'react'
import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
// import { FaAmazon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../components/img/logo.png'
import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidBriefcase } from 'react-icons/bi';
import { GrStatusGood } from 'react-icons/gr';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { IoPersonCircle } from 'react-icons/io5';
import { IoIosSearch, IoIosSettings } from 'react-icons/io';
import { CiBookmark } from 'react-icons/ci';
import { IoFilterCircleOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";

const jobCards = [
    {
      id: 1,
      date: '20th May, 2024',
      company: 'Amazon',
      title: 'Senior UI/UX Designer',
      jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
      salary: '$5,000',
      currencyType: 'Annually',
      logoUrl: 'path/to/logo', // Replace with your logo path or URL
      isActive: false,
    },
    {
      id: 2,
      date: '20th May, 2024',
      company: 'Google',
      title: 'Senior Product Manager',
      jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
      salary: '$5,000',
      currencyType: 'Annually',
      logoUrl: 'path/to/logo',
      isActive: false, // Mark this card as active for the highlighted background
    },
];

const jobCardsDetails = [
  {
    id: 1,
    date: '20th May, 2024',
    company: 'Amazon',
    title: 'Senior UI/UX Designer',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    location: 'Washington, DC',
    logoUrl: 'path/to/logo', // Replace with your logo path or URL
    isActive: false,
  },
];

const UserJobDetails = () => {

    const [show, setShow] = useState(false)

    const HandleShow  = () => {
    setShow(!show)
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };


  return (
    <div className='bg-[#EEF0F2] w-full h-full lg:ml-72'>


      <div className='bg-white w-auto h-auto px-10 py-6 flex items-center justify-between shadow-sm'>
        {show ? <div className='lg:hidden overflow-auto flex flex-col absolute top-20 md:top-16 left-0 gap-[40px] py-7 md:py-10 px-7 md:px-14 bg-white w-full h-auto md:h-screen transition-all duration-500 font-medium text-[15px] md:text-[20px] text-[#2b2b2b] '>
          <div className='flex flex-col gap-10'>
            <div className='pl-2'>
              <img src={logo} alt="logo" className='w-[120px] md:w-[150px] lg:w-[150px]'/> 
            </div>
            <div className='w-full h-auto flex flex-col gap-4'>
              <NavLink
              to='/userdashboard'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><RiDashboardFill size={23}/> Dashboard</NavLink>
              <NavLink
              to='/userjobs'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><BiSolidBriefcase size={23}/> Jobs</NavLink>
              <NavLink
              to='/userapplicationstatus'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><GrStatusGood size={23}/> Application Status</NavLink>
              <NavLink
              to='/usersavedjobs'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><BsFillBookmarkCheckFill size={23}/> Saved Jobs</NavLink>
              <NavLink
              to='/userblog'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><TfiWrite size={23}/> Blog</NavLink>
              <NavLink
              to='/usernotification'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><FaBell size={23}/> Notification</NavLink>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col gap-4 border-t-[1px] border-black pt-4'>
              <NavLink
              to='/userprofile'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><IoPersonCircle size={30}/> Profile</NavLink>
              <NavLink
              to='/usersettings'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><IoIosSettings size={30}/> Settings</NavLink>
          </div>
        </div> : ""}
        <div className="flex items-center relative gap-6 xl:hidden">
          <div onClick={HandleShow} className="flex items-center">
            {show ? <FaTimes size={26} className="z-50 left-0 md:left-[70px]" /> : <FaBars size={26} />}
          </div>
        </div>
        <h4 className='font-semibold hidden lg:flex'>Find a Job Here!</h4>
        <div className='flex items-center gap-5'>
          {/* <h4 className='text-[#323232] font-normal hidden md:flex'>Let's Find You A New Job!</h4> */}
          <div className="flex items-center justify-between space-x-4 flex-1 border-2 border-gray-800 py-2 px-2 md:px-5 rounded-xl">
            <div className='flex items-center gap-2'>
              <IoIosSearch size={30} className='hidden md:flex'/>
              <input
              type="text"
              placeholder="Job title, keywords"
              className="outline-none w-full text-gray-700 placeholder-gray-500 text-sm"
              />
            </div>
            <button onClick={toggleDropdown} className='relative flex items-center justify-center'>
              <IoFilterCircleOutline size={23}/>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-16 md:top-20 md:right-44 mt-2 w-auto bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="flex flex-col items-start w-full py-2">
                  <button className="px-4 py-2 w-full text-left flex gap-2 items-center hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    Filter by Date
                  </button>
                  <button className="px-4 py-2 w-full text-left flex gap-2 items-center hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    Filter by Category
                  </button>
                  <button className="px-4 py-2 w-full text-left flex gap-2 items-center hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    Filter by Status
                  </button>
                </div>
              </div>
            )}
          </div>
          <button className='hidden md:flex border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD] '>
            Search
          </button>
        </div>
      </div>


      <div className='p-10 h-[1000px] flex justify-center lg:h-[900px] overflow-y-auto'>
        <div className='lg:w-9/12 h-auto lg:mr-11 flex flex-col gap-14 mb-10'>
          <div className='flex flex-col gap-8'>
            <div className='w-16 '>
                <NavLink
                to='/userjobs'
                className='text-black text-md flex items-center gap-2 w-auto'>
                    <FaArrowLeftLong />
                    Back
                </NavLink>
            </div>
            <div className='flex w-full h-auto'>

                  {jobCardsDetails.map((job) => (
                    <div
                    key={job.id}
                    className='flex md:flex-row flex-col gap-11 justify-between md:gap-2 w-full'>
                      <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                          <span className='text-xs font-normal'>{job.date}</span>
                          <h2 className='text-3xl font-semibold'>{job.title}</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <div className='flex items-center gap-2'>
                            <span className='text-lg font-medium'>{job.company}</span>
                            <div className='text-5xl flex items-center w-1 h-1 bg-black rounded-full'></div>
                            <span className='text-md font-normal'>{job.location}</span>
                          </div>
                          <div className="flex gap-2">
                            {job.jobTypes.map((type, index) => (
                            <span
                            key={index}
                            className="px-3 py-2 flex items-center text-xs border-2 border-gray-400 rounded-lg text-gray-900"
                            >
                            {type}
                            </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0 md:gap-4 items-start md:items-end'>
                        <div className='flex flex-col gap-1 items-start md:items-end'>
                          <span className='text-xs font-normal'>{job.currencyType}</span>
                          <h2 className='text-3xl font-semibold'>{job.salary}</h2>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                          <button className='flex border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD] '>
                            Apply
                          </button>
                          <button className='flex items-center px-3 py-3 border-[1px] border-gray-400 rounded-lg'>
                            <CiBookmark size={22}/>
                          </button>
                          <button className='flex items-center px-3 py-3 border-[1px] border-gray-400 rounded-lg'>
                            <GoShareAndroid size={22}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>About This Role</h3>
            <p className='text-sm text-gray-500 leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex exercitationem nisi accusantium alias ducimus molestias, dolorum praesentium temporibus veniam tempora voluptates nostrum qui, vel a nesciunt sint officiis est.
              Earum odio quae sed explicabo praesentium, iste suscipit repudiandae recusandae tempore modi cum ea. Consequuntur esse dolore cumque. Doloremque excepturi soluta corporis ea error, non rerum corrupti maxime velit explicabo.
              Delectus quisquam rerum culpa explicabo voluptate optio eius ipsum ipsam obcaecati nihil, dignissimos facere sequi. Similique repellat sint omnis animi laborum sapiente in labore! Odio accusantium laborum ab quaerat suscipit!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>Qualifications</h3>
            <p className='text-sm text-gray-500 leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex exercitationem nisi accusantium alias ducimus molestias, dolorum praesentium temporibus veniam tempora voluptates nostrum qui, vel a nesciunt sint officiis est.
              Earum odio quae sed explicabo praesentium, iste suscipit repudiandae recusandae tempore modi cum ea. Consequuntur esse dolore cumque. Doloremque excepturi soluta corporis ea error, non rerum corrupti maxime velit explicabo.
              Delectus quisquam rerum culpa explicabo voluptate optio eius ipsum ipsam obcaecati nihil, dignissimos facere sequi. Similique repellat sint omnis animi laborum sapiente in labore! Odio accusantium laborum ab quaerat suscipit!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>Responsibility</h3>
            <p className='text-sm text-gray-500 leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex exercitationem nisi accusantium alias ducimus molestias, dolorum praesentium temporibus veniam tempora voluptates nostrum qui, vel a nesciunt sint officiis est.
              Earum odio quae sed explicabo praesentium, iste suscipit repudiandae recusandae tempore modi cum ea. Consequuntur esse dolore cumque. Doloremque excepturi soluta corporis ea error, non rerum corrupti maxime velit explicabo.
              Delectus quisquam rerum culpa explicabo voluptate optio eius ipsum ipsam obcaecati nihil, dignissimos facere sequi. Similique repellat sint omnis animi laborum sapiente in labore! Odio accusantium laborum ab quaerat suscipit!
            </p>
          </div>
        </div>

        <div className='w-3/12 h-auto overflow-hidden hidden lg:block'>

            <h1 className='font-semibold text-[10px] mb-5 md:text-[20px]'>Recommended Jobs</h1>
            
            <div className="hidden lg:grid w-full h-auto items-center gap-y-6 lg:items-start lg:grid-cols-1  lg:gap-x-8 lg:gap-y-6">
            {jobCards.map((job) => (
                <div
                key={job.id}
                className={`pt-8 pb-11 px-5 flex flex-col gap-6 border border-gray-800 rounded-[20px] w-auto shadow-sm ${
                    job.isActive ? 'bg-green-100' : 'bg-white'
                }`}
                >
                <div className='flex flex-col gap-2 border-b py-4 px-1'>
                    <div className="flex justify-between items-center mb-2">
                    <div className='w-full flex justify-between'>
                        <span className="text-gray-500 text-sm">{job.date}</span>
                        <button>
                        <CiBookmark size={23}/>
                        </button>
                    </div>
                    {/* <svg
                        className="w-5 h-5 text-gray-400 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        ></path>
                    </svg> */}
                    </div>
                    <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <h2 className="text-sm font-medium mb-1">{job.company}</h2>
                        <h3 className="text-xl font-semibold mb-2 text-[31px] leading-9 w-56">{job.title}</h3>
                    </div>
                    {/* <FaAmazon size={34}/> */}
                    </div>
                    <div className="flex gap-2 mb-2">
                    {job.jobTypes.map((type, index) => (
                        <span
                        key={index}
                        className="px-2 py-1 flex items-center text-xs border rounded-full text-gray-900"
                        >
                        {type}
                        </span>
                    ))}
                    </div>
                </div>
                <div className="flex justify-between items-center px-4">
                    <div>
                    <p className="text-xl font-bold">{job.salary}</p>
                    <p className="text-sm text-gray-500">{job.currencyType}</p>
                    </div>
                    <NavLink to='/userjobs/details' className="px-2 py-2 md:border-2 border-[#013A8A] md:text-[12px] md:px-6 md:py-3 md:rounded-full text-[#013A8A] font-semibold xl:hover:text-white xl:hover:border-2 xl:hover:border-[#0149AD] xl:hover:bg-[#0149AD] xl:transition-all xl:duration-200">
                    Details
                    </NavLink>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>


    </div>
  )
}

export default UserJobDetails