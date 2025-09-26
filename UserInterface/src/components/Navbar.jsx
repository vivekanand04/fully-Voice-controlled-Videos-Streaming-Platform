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


//code fo search
// import { useState, useEffect } from 'react';
// import React from 'react';
// import logo from '../assets/file.svg';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../store/slice/authSlice';
// import axios from 'axios';
// import { FiUpload } from "react-icons/fi";
// // import { Link } from 'react-router-dom';


// function Navbar({ openChange }) {
//   const [userdata, setUserData] = useState(null);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   var authStatus2;
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

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchText.trim()) {
//       navigate(`/search/${searchText}`);
//     }
//   };

//   const handleVoiceSearch = () => {
//     if (!('webkitSpeechRecognition' in window)) {
//       alert('Your browser does not support voice search.');
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setSearchText(transcript);
//       navigate(`/search/${transcript}`); // <-- auto-search after recording
//     };

//     recognition.onerror = (event) => {
//       console.error('Voice recognition error:', event.error);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.start();
//   };


//   useEffect(() => {
//     if (!data || !data._id) return;
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/v1/account/userData/${data._id}`
//         );
//         setUserData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };
//     fetchUser();
//   }, [data]);

//   return (
//     <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
//       <div className="px-3 py-3 lg:px-5 lg:pl-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             {/* Sidebar toggle */}
//             <button
//               onClick={toggleSidebar}
//               className="mr-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100"
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

//             {/* Logo */}
//             <div className="flex " >
//               <Link to="/home" className='flex'>

//                 <img src={logo} className="h-6 rounded-full h-[30px] " alt="YouTube Logo" />

//               <h1 className="mx-[10px] text-2xl font-bold tracking-tight">
//                 <span className="text-red-600">India</span>
//                 <span className="text-black">Tube</span>
//               </h1>
//             </Link>
//           </div>
//         </div>

//         {/* Center Search Area like YouTube */}
//         <div className="flex items-center flex-grow justify-center px-4">
//           <form onSubmit={handleSearch} className="flex w-full max-w-xl">
//             {/* Search Input */}
//             <input
//               type="text"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               placeholder="Search"
//               className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
//             />
//             {/* Search Button */}
//             <button
//               type="submit"
//               className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-4 flex items-center justify-center hover:bg-gray-200"
//             >
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </form>

//           {/* Mic Button */}
//           <button
//             type="button"
//             onClick={handleVoiceSearch}
//             className="ml-2 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
//             title="Voice Search"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill={isListening ? 'red' : 'currentColor'}
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm0 0v4m0 0h3m-3 0H9"
//               />
//             </svg>
//           </button>
//         </div>




//         {/* 
//   {!authStatus && (
//             <div className="relative">
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
//                 <div className="absolute right-0 mt-2 w-48 text-base bg-white divide-y divide-gray-100 rounded shadow-lg">
//                   <div className="px-4 py-3">
//                     <p className="text-sm">{userdata?.name}</p>
//                     <p className="text-sm font-medium text-gray-900 truncate">
//                       {userdata?.email}
//                     </p>
//                   </div>
//                   <ul className="py-1">
//                     <li>
//                       <Link
//                         to="/login"
//                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                      Login
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/signup"
//                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                      Sign Up
//                       </Link>
//                     </li>

//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}



// {authStatus&&<li>
//   <Link
//     to="/upload_video"
//     className="flex items-center justify-center px-4 py-2 hover:bg-gray-100"
//   >
//     <FiUpload className="text-xl" />
//   </Link>
// </li>
// } */}







//         {authStatus && (
//           <div className="relative">
//             <button
//               type="button"
//               className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
//               onClick={toggleDropdown}
//             >
//               {userdata ? (
//                 <img
//                   className="w-8 h-8 rounded-full"
//                   src={userdata.avatar}
//                   alt="User"
//                 />
//               ) : (
//                 <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
//               )}
//             </button>
//             {dropdownVisible && (
//               <div className="absolute right-0 mt-2 w-48 text-base bg-white divide-y divide-gray-100 rounded shadow-lg">
//                 <div className="px-4 py-3">
//                   <p className="text-sm">{userdata?.name}</p>
//                   <p className="text-sm font-medium text-gray-900 truncate">
//                     {userdata?.email}
//                   </p>
//                 </div>
//                 <ul className="py-1">
//                   <li>
//                     <Link
//                       to="/your_channel"
//                       className="block px-4 py-2 text-sm hover:bg-gray-100"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/settings"
//                       className="block px-4 py-2 text-sm hover:bg-gray-100"
//                     >
//                       Settings
//                     </Link>
//                   </li>
//                   <li>
//                     <button
//                       onClick={handleSignOut}
//                       className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                     >
//                       Sign out
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//     </nav >
//   );
// }

// export default Navbar;




//code to edit the all component
// import { useState, useEffect, useRef } from 'react';
// import React from 'react';
// import logo from '../assets/file.svg';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../store/slice/authSlice';
// import axios from 'axios';
// import { FiUpload } from "react-icons/fi";

// function Navbar({ openChange }) {
//   const [userdata, setUserData] = useState(null);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [voiceMode, setVoiceMode] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const authStatus = useSelector((state) => state.auth.status);
//   const data = useSelector((state) => state.auth.user);
//   const recognitionRef = useRef(null);
//   const queryRecRef = useRef(null);
//     const [statusMessage, setStatusMessage] = useState('');

//     useEffect(() => {
//   if (!statusMessage) return;
//   const t = setTimeout(() => setStatusMessage(''), 3000); // clear after 3s
//   return () => clearTimeout(t);
// }, [statusMessage]);

//   const toggleSidebar = () => {
//     openChange();
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleSignOut = () => {
//     dispatch(logout());
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchText.trim()) {
//       navigate(`/search/${encodeURIComponent(searchText.trim())}`);
//     }
//   };




//   // --------- ADD THESE HELPERS NEAR THE TOP OF Navbar (inside the component) ----------
// const NUMBER_WORDS = {
//   zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9,
//   ten:10, eleven:11, twelve:12, thirteen:13, fourteen:14, fifteen:15, sixteen:16, seventeen:17, eighteen:18, nineteen:19,
//   twenty:20, thirty:30, forty:40, fifty:50, sixty:60, seventy:70, eighty:80, ninety:90,
//   hundred:100, thousand:1000
// };

// function textNumberToInt(text) {
//   if (!text || typeof text !== 'string') return null;
//   // normalize
//   text = text.toLowerCase().replace(/[,()]/g, ' ').replace(/-/g, ' ').trim();
//   // remove filler words often spoken after the number
//   text = text.replace(/\b(video|videos|number|no|#|the|please|play|open|watch|index|of|for|rd|th|st|nd)\b/g, ' ').trim();
//   if (!text) return null;

//   // handle ordinals like "third" -> "three"
//   text = text.replace(/\b(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)\b/,
//                       (m) => {
//                         const ordMap = { first:'one', second:'two', third:'three', fourth:'four', fifth:'five', sixth:'six', seventh:'seven', eighth:'eight', ninth:'nine', tenth:'ten', eleventh:'eleven', twelfth:'twelve' };
//                         return ordMap[m] || m;
//                       });

//   const words = text.split(/\s+/);
//   let total = 0;
//   let current = 0;
//   for (let w of words) {
//     if (!w) continue;
//     if (NUMBER_WORDS[w] != null) {
//       const val = NUMBER_WORDS[w];
//       if (val === 100 || val === 1000) {
//         if (current === 0) current = 1;
//         current = current * val;
//       } else {
//         current += val;
//       }
//     } else {
//       // try to strip ordinal suffix (e.g., "3rd", "21st")
//       const m = w.match(/^(\d+)(st|nd|rd|th)?$/);
//       if (m) {
//         current += parseInt(m[1], 10);
//       } else {
//         // unknown word — stop parsing further
//       }
//     }
//   }
//   total = total + current;
//   return total > 0 ? total : null;
// }

//   const startCommandRecognition = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert('Your browser does not support voice commands.');
//       return;
//     }
//     if (recognitionRef.current) {
//       try { recognitionRef.current.abort(); } catch (e) {}
//       recognitionRef.current = null;
//     }
//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;
//     recognition.onstart = () => {
//       setIsListening(true);
//       setVoiceMode('command');
//     };
// //     recognition.onresult = (event) => {
// //       const transcript = event.results[0][0].transcript.trim().toLowerCase();
// //       console.log(transcript);


// // const playMatch = transcript.match(/(?:play|open|watch|index)?\s*(\d{1,3})\b/);
// // if (playMatch) {
// //   const idx = parseInt(playMatch[1], 10);
// //   // send a global event with requested index
// //   window.dispatchEvent(new CustomEvent('play-index', { detail: { index: idx } }));
// //   setStatusMessage(`Playing video #${idx}`);
// //   return; // stop further command processing
// // }



// //       if (transcript.includes('search')) {
// //         setStatusMessage("Record your search query");
// //         startQueryRecognition();
// //         return;
// //       }
// //     else  if (transcript.includes('login')) {
// //         navigate('/login');
// //       } else if (transcript.includes('sign up') || transcript.includes('signup') || transcript.includes('register')) {
// //         navigate('/signup');
// //       } else if (transcript.includes('upload') || transcript.includes('upload video') || transcript.includes('upload contract')) {
// //         navigate('/your_channel/upload_video');
// //       } else if (transcript.includes('home')) {
// //         navigate('/home');
// //       }
// //        else if (transcript.includes('shorts')) {
// //         navigate('/shorts');
// //       }
// //        else if (transcript.includes('subscription')) {
// //         navigate('/subscriptions');
// //       }
// //        else if (transcript.includes('history')) {
// //         navigate('/history');
// //       }
// //       else if (transcript.includes('playlist')) {
// //         navigate('/playlist');
// //       }
// //       else if (transcript.includes('like')) {
// //         navigate('/like');
// //       }



// //       else if (transcript.includes('settings')) {
// //         navigate('/settings');
// //       } else if (transcript.includes('dashboard') || transcript.includes('profile') || transcript.includes('my channel')) {
// //         navigate('/your_channel');
// //       } else if (transcript.includes('logout') || transcript.includes('sign out')) {
// //         handleSignOut();
// //       } else {
// //           setStatusMessage("⚠️Please speak clearly. Your voice command did not match");
// //       setTimeout(() => setStatusMessage(""), 4000);
// //       }
// //     };


// recognition.onresult = (event) => {
//   const transcriptRaw = event.results[0][0].transcript.trim();
//   const transcript = transcriptRaw.toLowerCase();
//   console.log( transcript);

//   // 1) try numeric digits first (e.g., "play 3")
//   const playMatch = transcript.match(/(?:play|open|watch|index|play number|play the)?\s*(\d{1,4})\b/);
//   if (playMatch) {
//     const idx = parseInt(playMatch[1], 10);
//     if (!isNaN(idx) && idx > 0) {
//       window.dispatchEvent(new CustomEvent('play-index', { detail: { index: idx } }));
//       setStatusMessage(`Playing video #${idx}`);
//       return;
//     }
//   }

//   // 2) try to extract a spoken number word (e.g., "play three", "play the third", "play twenty one")
//   // capture part after 'play' or entire transcript if 'play' not present
//   let afterPlay = null;
//   const afterPlayMatch = transcript.match(/(?:play|open|watch|index)(?:\s+the|\s+number)?\s+(.*)/);
//   if (afterPlayMatch && afterPlayMatch[1]) afterPlay = afterPlayMatch[1];
//   else afterPlay = transcript; // fallback — maybe user just said "three"

//   const wordNumber = textNumberToInt(afterPlay);
//   if (wordNumber && wordNumber > 0) {
//     window.dispatchEvent(new CustomEvent('play-index', { detail: { index: wordNumber } }));
//     setStatusMessage(`Playing video #${wordNumber}`);
//     return;
//   }

//   // 3) fallback existing flow: search trigger
//   if (transcript.includes('search')) {
//     setStatusMessage("Record your search query");
//     startQueryRecognition();
//     return;
//   } else if (transcript.includes('login')) {
//     navigate('/login');
//   } else if (transcript.includes('sign up') || transcript.includes('signup') || transcript.includes('register')) {
//     navigate('/signup');
//   } else if (transcript.includes('upload') || transcript.includes('upload video') || transcript.includes('upload contract')) {
//     navigate('/your_channel/upload_video');
//   } else if (transcript.includes('home')) {
//     navigate('/home');
//   } else if (transcript.includes('shorts')) {
//     navigate('/shorts');
//   } else if (transcript.includes('subscription')) {
//     navigate('/subscriptions');
//   } else if (transcript.includes('history')) {
//     navigate('/history');
//   } else if (transcript.includes('playlist')) {
//     navigate('/playlist');
//   } else if (transcript.includes('like')) {
//     navigate('/like');
//   } else if (transcript.includes('setting')) {
//     navigate('/settings');
//   } else if (transcript.includes('dashboard') || transcript.includes('profile') || transcript.includes('my channel')) {
//     navigate('/your_channel');
//   } else if (transcript.includes('logout') || transcript.includes('sign out')) {
//     handleSignOut();
//   } else {
//     setStatusMessage("⚠️Please speak clearly. Your voice command did not match");
//     setTimeout(() => setStatusMessage(""), 4000);
//   }
// };



//     recognition.onerror = () => {};
//     recognition.onend = () => {
//       setIsListening(false);
//       setVoiceMode(null);
//       recognitionRef.current = null;
//     };
//     recognitionRef.current = recognition;
//     recognition.start();
//   };

//   const startQueryRecognition = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert('Your browser does not support voice search.');
//       return;
//     }
//     if (queryRecRef.current) {
//       try { queryRecRef.current.abort(); } catch (e) {}
//       queryRecRef.current = null;
//     }
//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;
//     recognition.onstart = () => {
//       setIsListening(true);
//       setVoiceMode('query');
//     };
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript.trim();
//       console.log(transcript)
//       setSearchText(transcript);
//       navigate(`/search/${encodeURIComponent(transcript)}`);
//     };
//     recognition.onerror = () => {};
//     recognition.onend = () => {
//       setIsListening(false);
//       setVoiceMode(null);
//       queryRecRef.current = null;
//     };
//     queryRecRef.current = recognition;
//     recognition.start();
//   };

//   const handleMicClick = () => {
//     if (isListening) {
//       if (voiceMode === 'query' && queryRecRef.current) {
//         try { queryRecRef.current.stop(); } catch (e) {}
//       }
//       if (voiceMode === 'command' && recognitionRef.current) {
//         try { recognitionRef.current.stop(); } catch (e) {}
//       }
//       setIsListening(false);
//       setVoiceMode(null);
//       return;
//     }
//     startCommandRecognition();
//   };

//   useEffect(() => {
//     if (!data || !data._id) return;
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/v1/account/userData/${data._id}`
//         );
//         setUserData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };
//     fetchUser();
//   }, [data]);

//   return (
//     <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
//       <div className="px-3 py-3 lg:px-5 lg:pl-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <button
//               onClick={toggleSidebar}
//               className="mr-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100"
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

//             <div className="flex ">
//               <Link to="/home" className="flex items-center">
//                 <img src={logo} className="h-6 rounded-full h-[30px]" alt="Logo" />
//                 <h1 className="mx-[10px] text-2xl font-bold tracking-tight">
//                   <span className="text-red-600">India</span>
//                   <span className="text-black">Tube</span>
//                 </h1>
//               </Link>
//             </div>
//           </div>

//           <div className="relative flex items-center flex-grow justify-center px-4">
//             <form onSubmit={handleSearch} className="flex w-full max-w-xl">
//               <input
//                 type="text"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 placeholder="Search"
//                 className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-4 flex items-center justify-center hover:bg-gray-200"
//               >
//                 <svg
//                   className="w-5 h-5 text-gray-600"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </form>
//   {/* statusMessage box - simplified, centered above the mic */}
//   {statusMessage && (
//     <div
//       role="status"
//       aria-live="polite"
//       className="
//         absolute
//         top-130
//         left-3/4 -translate-x-1/2
//         z-50
//         px-4 py-2
//         bg-red-600 text-white text-sm rounded-lg
//         shadow-lg text-center
//       "
//     >
//       {statusMessage}
//       <div className="absolute left-/4 -translate-x-1/2 -bottom-2 w-0 h-0
//                       border-l-6 border-r-6 border-t-6
//                       border-l-transparent border-r-transparent border-t-red-600"></div>
//     </div>
//   )}
//             <button
//               type="button"
//               onClick={handleMicClick}
//               className="ml-2 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
//               title={isListening ? (voiceMode === 'query' ? 'Listening for search...' : 'Listening for command...') : 'Voice Command'}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill={isListening ? 'red' : 'currentColor'}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm0 0v4m0 0h3m-3 0H9"
//                 />
//               </svg>
//             </button>
//           </div>

//           {authStatus && (
//             <div className="relative">
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
//                 <div className="absolute right-0 mt-2 w-48 text-base bg-white divide-y divide-gray-100 rounded shadow-lg">
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


//make responsive


import { useState, useEffect, useRef } from 'react';
import React from 'react';
import logo from '../assets/file.svg';
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
  const [voiceMode, setVoiceMode] = useState(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const data = useSelector((state) => state.auth.user);
  const recognitionRef = useRef(null);
  const queryRecRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (!statusMessage) return;
    const t = setTimeout(() => setStatusMessage(''), 3000); // clear after 3s
    return () => clearTimeout(t);
  }, [statusMessage]);

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
      navigate(`/search/${encodeURIComponent(searchText.trim())}`);
    }
  };

  useEffect(() => {
    if (mobileSearchOpen) {
      // wait a tick so the input exists in DOM then focus
      const t = setTimeout(() => {
        try { searchInputRef.current?.focus(); } catch (e) { }
      }, 50);
      return () => clearTimeout(t);
    }
  }, [mobileSearchOpen]);


  // --------- ADD THESE HELPERS NEAR THE TOP OF Navbar (inside the component) ----------
  const NUMBER_WORDS = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
    twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90,
    hundred: 100, thousand: 1000
  };

  function textNumberToInt(text) {
    if (!text || typeof text !== 'string') return null;
    // normalize
    text = text.toLowerCase().replace(/[,()]/g, ' ').replace(/-/g, ' ').trim();
    // remove filler words often spoken after the number
    text = text.replace(/\b(video|videos|number|no|#|the|please|play|open|watch|index|of|for|rd|th|st|nd)\b/g, ' ').trim();
    if (!text) return null;

    // handle ordinals like "third" -> "three"
    text = text.replace(/\b(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)\b/,
      (m) => {
        const ordMap = { first: 'one', second: 'two', third: 'three', fourth: 'four', fifth: 'five', sixth: 'six', seventh: 'seven', eighth: 'eight', ninth: 'nine', tenth: 'ten', eleventh: 'eleven', twelfth: 'twelve' };
        return ordMap[m] || m;
      });

    const words = text.split(/\s+/);
    let total = 0;
    let current = 0;
    for (let w of words) {
      if (!w) continue;
      if (NUMBER_WORDS[w] != null) {
        const val = NUMBER_WORDS[w];
        if (val === 100 || val === 1000) {
          if (current === 0) current = 1;
          current = current * val;
        } else {
          current += val;
        }
      } else {
        // try to strip ordinal suffix (e.g., "3rd", "21st")
        const m = w.match(/^(\d+)(st|nd|rd|th)?$/);
        if (m) {
          current += parseInt(m[1], 10);
        } else {
          // unknown word — stop parsing further
        }
      }
    }
    total = total + current;
    return total > 0 ? total : null;
  }

  const startCommandRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support voice commands.');
      return;
    }
    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch (e) { }
      recognitionRef.current = null;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      setIsListening(true);
      setVoiceMode('command');
    };
    //     recognition.onresult = (event) => {
    //       const transcript = event.results[0][0].transcript.trim().toLowerCase();
    //       console.log(transcript);


    // const playMatch = transcript.match(/(?:play|open|watch|index)?\s*(\d{1,3})\b/);
    // if (playMatch) {
    //   const idx = parseInt(playMatch[1], 10);
    //   // send a global event with requested index
    //   window.dispatchEvent(new CustomEvent('play-index', { detail: { index: idx } }));
    //   setStatusMessage(`Playing video #${idx}`);
    //   return; // stop further command processing
    // }



    //       if (transcript.includes('search')) {
    //         setStatusMessage("Record your search query");
    //         startQueryRecognition();
    //         return;
    //       }
    //     else  if (transcript.includes('login')) {
    //         navigate('/login');
    //       } else if (transcript.includes('sign up') || transcript.includes('signup') || transcript.includes('register')) {
    //         navigate('/signup');
    //       } else if (transcript.includes('upload') || transcript.includes('upload video') || transcript.includes('upload contract')) {
    //         navigate('/your_channel/upload_video');
    //       } else if (transcript.includes('home')) {
    //         navigate('/home');
    //       }
    //        else if (transcript.includes('shorts')) {
    //         navigate('/shorts');
    //       }
    //        else if (transcript.includes('subscription')) {
    //         navigate('/subscriptions');
    //       }
    //        else if (transcript.includes('history')) {
    //         navigate('/history');
    //       }
    //       else if (transcript.includes('playlist')) {
    //         navigate('/playlist');
    //       }
    //       else if (transcript.includes('like')) {
    //         navigate('/like');
    //       }



    //       else if (transcript.includes('settings')) {
    //         navigate('/settings');
    //       } else if (transcript.includes('dashboard') || transcript.includes('profile') || transcript.includes('my channel')) {
    //         navigate('/your_channel');
    //       } else if (transcript.includes('logout') || transcript.includes('sign out')) {
    //         handleSignOut();
    //       } else {
    //           setStatusMessage("⚠️Please speak clearly. Your voice command did not match");
    //       setTimeout(() => setStatusMessage(""), 4000);
    //       }
    //     };


    recognition.onresult = (event) => {
      const transcriptRaw = event.results[0][0].transcript.trim();
      const transcript = transcriptRaw.toLowerCase();
      console.log(transcript);

      // 1) try numeric digits first (e.g., "play 3")
      const playMatch = transcript.match(/(?:play|open|watch|index|play number|play the)?\s*(\d{1,4})\b/);
      if (playMatch) {
        const idx = parseInt(playMatch[1], 10);
        if (!isNaN(idx) && idx > 0) {
          window.dispatchEvent(new CustomEvent('play-index', { detail: { index: idx } }));
          setStatusMessage(`Playing video #${idx}`);
          return;
        }
      }

      // 2) try to extract a spoken number word (e.g., "play three", "play the third", "play twenty one")
      // capture part after 'play' or entire transcript if 'play' not present
      let afterPlay = null;
      const afterPlayMatch = transcript.match(/(?:play|open|watch|index)(?:\s+the|\s+number)?\s+(.*)/);
      if (afterPlayMatch && afterPlayMatch[1]) afterPlay = afterPlayMatch[1];
      else afterPlay = transcript; // fallback — maybe user just said "three"

      const wordNumber = textNumberToInt(afterPlay);
      if (wordNumber && wordNumber > 0) {
        window.dispatchEvent(new CustomEvent('play-index', { detail: { index: wordNumber } }));
        setStatusMessage(`Playing video #${wordNumber}`);
        return;
      }

      // 3) fallback existing flow: search trigger
      if (transcript.includes('search')) {
        setStatusMessage("Record your search query");
        setMobileSearchOpen(true); // make sure UI is open on mobi  
        startQueryRecognition();
        return;
      } else if (transcript.includes('login')) {
        navigate('/login');
      } else if (transcript.includes('sign up') || transcript.includes('signup') || transcript.includes('register')) {
        navigate('/signup');
      } else if (transcript.includes('upload') || transcript.includes('upload video') || transcript.includes('upload contract')) {
        navigate('/your_channel/upload_video');
      } else if (transcript.includes('home')) {
        navigate('/home');
      } else if (transcript.includes('shorts')) {
        navigate('/shorts');
      } else if (transcript.includes('subscription')) {
        navigate('/subscriptions');
      } else if (transcript.includes('history')) {
        navigate('/history');
      } else if (transcript.includes('playlist')) {
        navigate('/playlist');
      } else if (transcript.includes('like')) {
        navigate('/like');
      } else if (transcript.includes('setting')) {
        navigate('/settings');
      } else if (transcript.includes('dashboard') || transcript.includes('profile') || transcript.includes('my channel')) {
        navigate('/your_channel');
      } else if (transcript.includes('logout') || transcript.includes('sign out')) {
        handleSignOut();
      } else {
        setStatusMessage("⚠️Please speak clearly. Your voice command did not match");
        setTimeout(() => setStatusMessage(""), 4000);
      }
    };



    recognition.onerror = () => { };
    recognition.onend = () => {
      setIsListening(false);
      setVoiceMode(null);
      recognitionRef.current = null;
    };
    recognitionRef.current = recognition;
    recognition.start();
  };

  const startQueryRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support voice search.');
      return;
    }
    // ensure search UI is visible on mobile
    setMobileSearchOpen(true);
    if (queryRecRef.current) {
      try { queryRecRef.current.abort(); } catch (e) { }
      queryRecRef.current = null;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      setIsListening(true);
      setVoiceMode('query');
      // focus the input when recognition starts
      try { searchInputRef.current?.focus(); } catch (e) { }
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      console.log(transcript)
      setSearchText(transcript);
      navigate(`/search/${encodeURIComponent(transcript)}`);
      // close mobile search if you want after navigation:
      setMobileSearchOpen(false);
    };
    recognition.onerror = () => { };
    recognition.onend = () => {
      setIsListening(false);
      setVoiceMode(null);
      queryRecRef.current = null;
    };
    queryRecRef.current = recognition;
    recognition.start();
  };

  const handleMicClick = () => {
    if (isListening) {
      if (voiceMode === 'query' && queryRecRef.current) {
        try { queryRecRef.current.stop(); } catch (e) { }
      }
      if (voiceMode === 'command' && recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) { }
      }
      setIsListening(false);
      setVoiceMode(null);
      return;
    }
    startCommandRecognition();
  };

  useEffect(() => {
    if (!data || !data._id) return;
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/account/userData/${data._id}`
        );
        console.log(response)
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, [data]);

  // return (
  //   <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
  //     <div className="px-3 py-3 lg:px-5 lg:pl-3">
  //       <div className="flex items-center justify-between">
  //         <div className="flex items-center">
  //           <button
  //             onClick={toggleSidebar}
  //             className="mr-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth={1.5}
  //               stroke="currentColor"
  //               className="w-6 h-6"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  //               />
  //             </svg>
  //           </button>

  //           <div className="flex ">
  //             <Link to="/home" className="flex items-center">
  //               <img src={logo} className="h-6 rounded-full h-[30px]" alt="Logo" />
  //               <h1 className="mx-[10px] text-2xl font-bold tracking-tight">
  //                 <span className="text-red-600">India</span>
  //                 <span className="text-black">Tube</span>
  //               </h1>
  //             </Link>
  //           </div>
  //         </div>

  //         <div className="relative flex items-center flex-grow justify-center px-4">
  //           <form onSubmit={handleSearch} className="hidden sm:flex w-full max-w-xl">
  //   <input
  //     type="text"
  //     value={searchText}
  //     onChange={(e) => setSearchText(e.target.value)}
  //     placeholder="Search"
  //     className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
  //   />
  //   <button
  //     type="submit"
  //     className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-4 flex items-center justify-center hover:bg-gray-200"
  //     aria-label="Search"
  //   >
  //     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
  //       <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  //     </svg>
  //   </button>
  // </form>
  // {/* statusMessage box - simplified, centered above the mic */}
  // {statusMessage && (
  //   <div
  //     role="status"
  //     aria-live="polite"
  //     className="
  //       absolute
  //       top-130
  //       left-3/4 -translate-x-1/2
  //       z-50
  //       px-4 py-2
  //       bg-red-600 text-white text-sm rounded-lg
  //       shadow-lg text-center
  //     "
  //   >
  //     {statusMessage}
  //     <div className="absolute left-/4 -translate-x-1/2 -bottom-2 w-0 h-0
  //                     border-l-6 border-r-6 border-t-6
  //                     border-l-transparent border-r-transparent border-t-red-600"></div>
  //   </div>
  // )}
  //           <button
  //             type="button"
  //             onClick={handleMicClick}
  //             className="ml-2 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
  //             title={isListening ? (voiceMode === 'query' ? 'Listening for search...' : 'Listening for command...') : 'Voice Command'}
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill={isListening ? 'red' : 'currentColor'}
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //               className="w-5 h-5"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm0 0v4m0 0h3m-3 0H9"
  //               />
  //             </svg>
  //           </button>
  //         </div>

  //         {authStatus && (
  //           <div className="relative">
  //             <button
  //               type="button"
  //               className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
  //               onClick={toggleDropdown}
  //             >
  //               {userdata ? (
  //                 <img
  //                   className="w-8 h-8 rounded-full"
  //                   src={userdata.avatar}
  //                   alt="User"
  //                 />
  //               ) : (
  //                 <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
  //               )}
  //             </button>
  //             {dropdownVisible && (
  //               <div className="absolute right-0 mt-2 w-48 text-base bg-white divide-y divide-gray-100 rounded shadow-lg">
  //                 <div className="px-4 py-3">
  //                   <p className="text-sm">{userdata?.name}</p>
  //                   <p className="text-sm font-medium text-gray-900 truncate">
  //                     {userdata?.email}
  //                   </p>
  //                 </div>
  //                 <ul className="py-1">
  //                   <li>
  //                     <Link
  //                       to="/your_channel"
  //                       className="block px-4 py-2 text-sm hover:bg-gray-100"
  //                     >
  //                       Dashboard
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to="/settings"
  //                       className="block px-4 py-2 text-sm hover:bg-gray-100"
  //                     >
  //                       Settings
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <button
  //                       onClick={handleSignOut}
  //                       className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
  //                     >
  //                       Sign out
  //                     </button>
  //                   </li>
  //                 </ul>
  //               </div>
  //             )}
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </nav>
  // );
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* LEFT: hamburger + app heading (logo hidden on mobile) */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-3 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100"
              aria-label="Toggle sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <Link to="/home" className="flex items-center">
              {/* logo image hidden on mobile */}
              <img src={logo} alt="Logo" className="h-6 rounded-full h-[30px] hidden sm:block" />
              <h1 className="ml-2 text-2xl font-bold tracking-tight">
                <span className="text-red-600">India</span>
                <span className="text-black">Tube</span>
              </h1>
            </Link>
          </div>

          {/* CENTER: full search bar (visible on sm and up) */}
          <div className="hidden sm:flex flex-1 justify-center px-4">
            <form onSubmit={handleSearch} className="flex w-full max-w-xl">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
                className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
                aria-label="Search"
              />
              <button
                type="submit"
                className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-4 flex items-center justify-center hover:bg-gray-200"
                aria-label="Search"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>

          </div>



          {/* RIGHT: mobile search icon + mic at far right; on larger screens includes mic + profile */}
          <div className="flex items-center gap-2">
            {/* Mobile search icon (visible on mobile only) */}
            <button
              type="button"
              className="sm:hidden w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
              onClick={() => setMobileSearchOpen(true)}
              aria-label="Open search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Microphone (always visible on rightmost side) */}
            <button
              type="button"
              onClick={handleMicClick}
              className="w-10 h-10 p-0 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
              title={isListening ? (voiceMode === 'query' ? 'Listening for search...' : 'Listening for command...') : 'Voice Command'}
              aria-label="Voice command"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill={isListening ? 'red' : 'currentColor'} viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm0 0v4m0 0h3m-3 0H9" />
              </svg>
            </button>


            {/* Upload icon (optional) */}
            <Link to="/your_channel/upload_video" className="hidden md:flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-gray-100 border mx-4">
              <FiUpload />
            </Link>

            {/* User avatar + dropdown (hidden on mobile) */}
            {authStatus && (
              <div className="relative hidden sm:block">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={dropdownVisible}
                >
                  {userdata ? (
                    <img className="w-8 h-8 rounded-full" src={userdata.avatar} alt="User" />
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
                  )}
                </button>

                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 w-48 text-base bg-white divide-y divide-gray-100 rounded shadow-lg">
                    <div className="px-4 py-3">
                      <p className="text-sm">{userdata?.name}</p>
                      <p className="text-sm font-medium text-gray-900 truncate">{userdata?.email}</p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <Link to="/your_channel" className="block px-4 py-2 text-sm hover:bg-gray-100">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</Link>
                      </li>
                      <li>
                        <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Sign out</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile overlay search (appears when mobileSearchOpen is true) */}
      {mobileSearchOpen && (
        <div className="fixed inset-x-0 top-0 z-40 p-3 bg-white shadow-md sm:hidden">
          <div className="flex items-center gap-2">
            <form
              onSubmit={(e) => { handleSearch(e); setMobileSearchOpen(false); }}
              className="flex-grow flex items-center"
            >
              <input
                ref={searchInputRef}
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
                aria-label="Mobile search input"
              />
            </form>

            <button
              type="button"
              onClick={() => {
                if (isListening && voiceMode === 'query' && queryRecRef.current) {
                  try { queryRecRef.current.stop(); } catch (e) { }
                } else {
                  startQueryRecognition();
                }
              }}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
              aria-label="Voice search"
              title={isListening ? (voiceMode === 'query' ? 'Listening for search...' : 'Listening...') : 'Voice Search'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill={isListening ? 'red' : 'currentColor'} viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm0 0v4m0 0h3m-3 0H9" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setMobileSearchOpen(false)}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
              aria-label="Close search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* statusMessage - small positioned toast */}
      {statusMessage && (
        <div role="status" aria-live="polite" className="fixed right-4 top-20 z-50 px-4 py-2 bg-red-600 text-white text-sm rounded-lg shadow-lg">
          {statusMessage}
        </div>
      )}
    </nav>
  );


}

export default Navbar;

