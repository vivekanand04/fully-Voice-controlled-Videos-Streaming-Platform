// import { useState , useEffect } from 'react';
// import React from 'react';
// import logo from '../assets/YouTube_Logo_2017.svg.png';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logout } from '../store/slice/authSlice';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// function Navbar({ openChange }) {
//   const [userdata, setUserData] = useState(null);
//   // const [loader, setLoader] = useState(false);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const dispatch = useDispatch();

//   const toggleSidebar = () => {
//     console.log("Sidebar toggle triggered");
//     openChange();
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleSignOut = () => {
//     dispatch(logout());
//     console.log("Sign out clicked");
//   };

//   const authStatus = useSelector((state) => state.auth.status);
//   const  data = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     // if (data._id) {
//      if (!data || !data._id) return;
//       const fetchUser = async () => {
//         try {
//           // setLoader(true);
//           const response = await axios.get(`/api/v1/account/userData/${data._id}`);
//           const userData = response.data.data;
//           setUserData(userData);
//           // setLoader(false);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//         }
//       };

//       fetchUser();
//     // }
//   }, [data]);

//   return (
//     // loader ?  
//     // <div className="text-center my-72">
//     //   <div className="p-4 text-center">
//     //     <div role="status">
//     //       <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//     //         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
//     //         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
//     //       </svg>
//     //       <span className="sr-only">Loading...</span>
//     //     </div>
//     //   </div>
//     // </div>
//     // :
//     <>
//       <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
//         <div className="px-3 py-3 lg:px-5 lg:pl-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center justify-start">
//               <button
//                 onClick={toggleSidebar}
//                 className="fixed top-1 lg:top-2 left-3 z-40 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 group"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                   />
//                 </svg>
//               </button>

//               <a className="flex ml-14 md:mr-24" href="/">
//                 <img src={logo} className="mr-2.5 h-6" alt="YouTube Logo" />
//               </a>

//               <form
//                 action="#"
//                 method="get"
//                 className="hidden lg:block lg:pl-3.5"
//                 style={{ marginLeft: 300 }}
//               >
//                 <label htmlFor="topbar-search" className="sr-only">
//                   Search
//                 </label>
//                 <div className="relative mt-1 lg:w-96">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <svg
//                       className="w-5 h-5 text-gray-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     type="text"
//                     style={{ height: 34 }}
//                     name="search"
//                     id="topbar-search"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
//                     placeholder="Search"
//                   />
//                 </div>
//               </form>
//             </div>

//             {/* Profile dropdown */}
//             {authStatus && (
//               <div className="relative ml-auto lg:ml-4">
//                 <button
//                   type="button"
//                   className="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300"
//                   id="user-menu-button-2"
//                   aria-expanded={dropdownVisible}
//                   onClick={toggleDropdown}
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   {userdata ? (
//                   <>
//                   <img
//                     className="w-8 h-8 rounded-full"
//                     src={userdata.avatar}
//                     alt="User"
//                   />
//                     </>
//                     ) : (
//                       <li class="flex items-center">
//                           <div role="status">
//                               <svg aria-hidden="true" class="w-6 h-6 me-2 text-gray-200 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
//                               <span class="sr-only">Loading...</span>
//                           </div>
//                           {/* Preparing your profile */}  
//                       </li>
//                     )}
//                 </button>
//                 {dropdownVisible && (
//                   <div className="absolute right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg" id="dropdown-2">
//                     {userdata && userdata._id ? (
//                   <>
//                   <div className="px-4 py-3">
//                       <p className="text-sm text-gray-900">
//                         {userdata.name}
//                       </p>
//                       <p className="text-sm font-medium text-gray-900 truncate"> {userdata.email}</p>
//                     </div>
//                     </>
//                     ) : (
//                       <div>Loading user data...</div>
//                     )}
//                     <ul className="py-1">
//                       <li>
//                         <Link to="/your_channel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                           Dashboard
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                           Settings
//                         </Link>
//                       </li>
//                       <li>
//                         <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                           Sign out
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;



// import { useState, useEffect } from "react";
// import React from "react";
// import logo from "../assets/YouTube_Logo_2017.svg.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../store/slice/authSlice";
// import axios from "axios";
// import { useState , useEffect } from 'react';
// import React from 'react';
// import logo from '../assets/YouTube_Logo_2017.svg.png';
// import { Link ,useNavigate} from 'react-router-dom';
// import { useDispatch ,useSelector} from 'react-redux';
// import { logout } from '../store/slice/authSlice';

// import axios from 'axios';
// import SearchResults from "./SearchResults";

// function Navbar({ openChange }) {
//   const [userdata, setUserData] = useState(null);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [searchText, setSearchText] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const authStatus = useSelector((state) => state.auth.status);
//   const data = useSelector((state) => state.auth.user);

//   const toggleSidebar = () => {
//     openChange();
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleSignOut = () => {
//     dispatch(logout());
//   };

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   if (searchText.trim()) {
//   //    navigate(`/search/${searchText}`);
//   //   }
//   // };

//     const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchText.trim()) {
//       navigate(`/search/${searchText}`);
//     }
//   };

//   useEffect(() => {
//     if (!data || !data._id) return;
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/v1/account/userData/${data._id}`);
//         setUserData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchUser();
//   }, [data]);

//   return (
//     <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
//       <div className="px-3 py-3 lg:px-5 lg:pl-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center justify-start">
//             <button
//               onClick={toggleSidebar}
//               className="fixed top-1 lg:top-2 left-3 z-40 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 group"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//             </button>

//             <a className="flex ml-14 md:mr-24" href="/">
//               <img src={logo} className="mr-2.5 h-6" alt="YouTube Logo" />
//             </a>

//             {/* Search Bar */}
//             {/* <form
//               onSubmit={handleSearch}
//               className="hidden lg:block lg:pl-3.5"
//               style={{ marginLeft: 300 }}
//             >
//               <div className="relative mt-1 lg:w-96">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <svg
//                     className="w-5 h-5 text-gray-500"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                   style={{ height: 34 }}
//                   placeholder="Search"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
//                   focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
//                 />
//               </div>
//             </form> */}
//             {/* Search Bar */}
// <form
//   onSubmit={handleSearch}
//   className="hidden lg:block lg:pl-3.5"
//   style={{ marginLeft: 300 }}
// >
//   <div className="relative mt-1 lg:w-96">
//     <input
//       type="text"
//       value={searchText}
//       onChange={(e) => setSearchText(e.target.value)}
//       style={{ height: 34 }}
//       placeholder="Search"
//       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
//       focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 pr-10 p-2.5"
//     />

//     {/* Search Button */}
//     <button
//       type="submit"
//       className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-gray-700"
//     >
//       <svg
//         className="w-5 h-5 text-gray-500"
//         fill="currentColor"
//         viewBox="0 0 20 20"
//       >
//         <path
//           fillRule="evenodd"
//           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>
//   </div>
// </form>

//           </div>

//           {/* Profile dropdown */}
//           {authStatus && (
//             <div className="relative ml-auto lg:ml-4">
//               <button
//                 type="button"
//                 className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
//                 onClick={toggleDropdown}
//               >
//                 {userdata ? (
//                   <img
//                     className="w-8 h-8 rounded-full"
//                     src={userdata.avatar}
//                     alt="User"
//                   />
//                 ) : (
//                   <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
//                 )}
//               </button>
//               {dropdownVisible && (
//                 <div className="absolute right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg">
//                   <div className="px-4 py-3">
//                     <p className="text-sm">{userdata?.name}</p>
//                     <p className="text-sm font-medium text-gray-900 truncate">
//                       {userdata?.email}
//                     </p>
//                   </div>
//                   <ul className="py-1">
//                     <li>
//                       <Link
//                         to="/your_channel"
//                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                         Dashboard
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/settings"
//                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                         Settings
//                       </Link>
//                     </li>
//                     <li>
//                       <button
//                         onClick={handleSignOut}
//                         className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                         Sign out
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { useState, useEffect } from 'react';
import React from 'react';
import logo from '../assets/YouTube_Logo_2017.svg.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import axios from 'axios';
import { FiUpload } from "react-icons/fi";

function Navbar({ openChange }) {
  const [userdata, setUserData] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
var authStatus2;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const data = useSelector((state) => state.auth.user);

  const toggleSidebar = () => {
    openChange();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignOut = () => {
    dispatch(logout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search/${searchText}`);
    }
  };

 const handleVoiceSearch = () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support voice search.');
    return;
  }

  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    setIsListening(true);
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setSearchText(transcript);
    navigate(`/search/${transcript}`); // <-- auto-search after recording
  };

  recognition.onerror = (event) => {
    console.error('Voice recognition error:', event.error);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  recognition.start();
};


  useEffect(() => {
    if (!data || !data._id) return;
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/account/userData/${data._id}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, [data]);

  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Sidebar toggle */}
            <button
              onClick={toggleSidebar}
              className="mr-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* Logo */}
            <a className="flex items-center" href="/">
              <img src={logo} className="h-6" alt="YouTube Logo" />
            </a>
          </div>

          {/* Center Search Area like YouTube */}
          <div className="flex items-center flex-grow justify-center px-4">
            <form onSubmit={handleSearch} className="flex w-full max-w-xl">
              {/* Search Input */}
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
                className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              {/* Search Button */}
              <button
                type="submit"
                className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-4 flex items-center justify-center hover:bg-gray-200"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>

            {/* Mic Button */}
            <button
              type="button"
              onClick={handleVoiceSearch}
              className="ml-2 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
              title="Voice Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isListening ? 'red' : 'currentColor'}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm0 0v4m0 0h3m-3 0H9"
                />
              </svg>
            </button>
          </div>

        


{/* 
  {!authStatus && (
            <div className="relative">
              <button
                type="button"
                className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
                onClick={toggleDropdown}
              >
                {userdata ? (
                  <img
                    className="w-8 h-8 rounded-full"
                    src={userdata.avatar}
                    alt="User"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
                )}
              </button>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 text-base bg-white divide-y divide-gray-100 rounded shadow-lg">
                  <div className="px-4 py-3">
                    <p className="text-sm">{userdata?.name}</p>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {userdata?.email}
                    </p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                     Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                     Sign Up
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              )}
            </div>
          )}



{authStatus&&<li>
  <Link
    to="/upload_video"
    className="flex items-center justify-center px-4 py-2 hover:bg-gray-100"
  >
    <FiUpload className="text-xl" />
  </Link>
</li>
} */}





        
          
          {authStatus && (
            <div className="relative">
              <button
                type="button"
                className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
                onClick={toggleDropdown}
              >
                {userdata ? (
                  <img
                    className="w-8 h-8 rounded-full"
                    src={userdata.avatar}
                    alt="User"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
                )}
              </button>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 text-base bg-white divide-y divide-gray-100 rounded shadow-lg">
                  <div className="px-4 py-3">
                    <p className="text-sm">{userdata?.name}</p>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {userdata?.email}
                    </p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/your_channel"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
