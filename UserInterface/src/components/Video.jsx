
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import image from "../assets/profile-picture-5.jpg";
// import { Link, useParams } from 'react-router-dom';

// function Video() {
//   const { id } = useParams();
//   const [videoData, setVideoData] = useState(id);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString(undefined, options);
//   };

//   useEffect(() => {
//     const fetchVideoData = async () => {
//       try {
//         const response = await axios.get(`/api/v1/videos/videoData/${id}`);
//         setVideoData(response.data.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideoData();
//   }, [id]);

//   useEffect(() => {
//     const incrementViewCount = async () => {
//       try {
//         await axios.put(`/api/v1/videos/incrementView/${id}`);
//         console.log('View count incremented');
//       } catch (error) {
//         console.error('Error incrementing view count:', error);
//       }
//     };
//     incrementViewCount();
//   }, [id]);

//   useEffect(() => {
//     const addToWatchHistory = async () => {
//       try {
//         await axios.put(`/api/v1/account/addToHistory/${id}`);
//         console.log('addToWatchHistory');
//       } catch (error) {
//         console.error('Error addToWatchHistory:', error);
//       }
//     };
//     addToWatchHistory();
//   }, [id]);

//   useEffect(() => {
//     if (videoData && videoData.owner) {
//       const fetchUser = async () => {
//         try {
//           const response = await axios.get(`/api/v1/account/userData/${videoData.owner}`);
//           setUserData(response.data.data);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//         }
//       };

//       fetchUser();
//     }
//   }, [videoData]);

//   // console.log(userData);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!videoData) {
//     return <div>No video data found.</div>;
//   }

//   return (
//     <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
//       <div className="mb-4 col-span-full xl:mb-2">
//         {/*-------------------content---------------------*/}
//         <section className="pb-5 mt-3">
//           <div className="container mx-auto">
//             <div className="row">
//               <div className="col-lg-9 col-xl-9">
//               <section>
//                 <div className="row">
//                   <div className="col">
//                     <div className="relative video-wrap" style={{ height: "465px" }}>
//                       <video className=" w-full h-full" controls>
//                         <source src={videoData.videoFile} type="video/mp4"/>
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//                 <div className="mt-4">
//                   <h1 className="mb-3 text-xl truncate">{videoData.title}</h1>

//                   <div>
//                     <div className="border-b border-b-gray-100">
//                       <ul className="-mb-px flex items-center gap-5 text-sm font-sm">
//                         <li>
//                           {userData ? (
//                             <Link className="inline-flex cursor-pointer items-center gap-3 px-1 py-3 text-black hover:text-gray-700 ">
//                               <img
//                                 className="w-12 h-12 rounded-full"
//                                 src={userData.avatar}
//                                 alt="User"
//                               />
//                               {userData.name}
//                             </Link>
//                           ) : (
//                             <div>Loading user data...</div>
//                           )}
//                         </li>
//                         <li>
//                           <Link className="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-600 hover:text-black" >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
//                               <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" clipRule="evenodd" />
//                             </svg>
//                             Subscribe
//                             <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600"> 303k </span>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link className="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-600 hover:text-black">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
//                             </svg>
//                             <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600"> 30k </span>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link className="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-600 hover:text-black">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                             </svg>
//                             <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600"> {videoData.views}  </span> 
//                           </Link>
//                         </li>
//                         <li>
//                           <Link className="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-600 hover:text-black">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
//                             </svg>
//                             <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">{formatDate(videoData.createdAt)}</span> 
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <p className='truncate'>{videoData.description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/*-------------------content---------------------*/}
//       </div>
//     </div>
//   );
// }

// export default Video;




// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// function Video() {
//   const { id } = useParams();
//   const [videoData, setVideoData] = useState(id);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [recommended, setRecommended] = useState([]);
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // Voice state
//   const [listening, setListening] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('');

//   const videoRef = useRef(null);
//   const recognitionRef = useRef(null);

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString(undefined, options);
//   };

//   // === API Calls ===
//   useEffect(() => {
//     const fetchVideoData = async () => {
//       try {
//         const response = await axios.get(`/api/v1/videos/videoData/${id}`);
//         setVideoData(response.data.data);
//       } catch (err) {
//         setError(err.message || 'Error fetching video');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchVideoData();
//   }, [id]);

//   useEffect(() => {
//     axios.put(`/api/v1/videos/incrementView/${id}`).catch(console.error);
//     axios.put(`/api/v1/account/addToHistory/${id}`).catch(console.error);
//   }, [id]);

//   useEffect(() => {
//     if (videoData && videoData.owner) {
//       axios.get(`/api/v1/account/userData/${videoData.owner}`)
//         .then(res => setUserData(res.data.data))
//         .catch(console.error);
//     }
//   }, [videoData]);

//   // Cleanup recognition
//   useEffect(() => {
//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//         recognitionRef.current = null;
//       }
//     };
//   }, []);

//   // === Voice Command Parser ===
//   const handleVoiceCommand = (text) => {
//     if (!videoRef.current) return;
//     const t = text.toLowerCase();

//     if (t.includes("pause")) {
//       videoRef.current.pause();
//       return;
//     }
//     if (t.includes("play") || t.includes("resume")) {
//       videoRef.current.play();
//       return;
//     }

//     if (t.includes("forward")) {
//       const seconds = extractSeconds(t) || 10;
//       videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds);
//       return;
//     }
//     if (t.includes("back") || t.includes("rewind")) {
//       const seconds = extractSeconds(t) || 10;
//       videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - seconds);
//       return;
//     }

//     const speed = parseSpeedFromText(t);
//     if (speed !== null) {
//       videoRef.current.playbackRate = speed;
//       return;
//     }
//   };

//   const parseSpeedFromText = (t) => {
//     if (!t) return null;

//     if (t.includes('normal')) return 1;
//     if (t.includes('half')) return 0.5;
//     if (t.includes('quarter')) return 0.25;
//     if (t.includes('1.5') || t.includes('one point five')) return 1.5;
//     if (t.includes('double') || t.includes('two')) return 2;
//     if (t.includes('triple') || t.includes('three')) return 3;

//     if (t.includes('faster') || t.includes('increase')) {
//       const cur = videoRef.current?.playbackRate ?? 1;
//       return Math.min(cur + 0.25, 16);
//     }
//     if (t.includes('slower') || t.includes('decrease')) {
//       const cur = videoRef.current?.playbackRate ?? 1;
//       return Math.max(cur - 0.25, 0.25);
//     }

//     const numeric = t.match(/(\d+(\.\d+)?)/);
//     if (numeric) {
//       const n = parseFloat(numeric[0]);
//       if (!Number.isNaN(n) && n > 0 && n <= 16) return n;
//     }

//     return null;
//   };

//   const extractSeconds = (text) => {
//     const match = text.match(/(\d+)\s*second/);
//     if (match) return parseInt(match[1]);
//     return null;
//   };

//   // === Start Listening ===
//   const startListening = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       setStatusMessage('Speech Recognition not supported in this browser.');
//       return;
//     }

//     if (recognitionRef.current) recognitionRef.current.stop();

//     const recognition = new SpeechRecognition();
//     recognitionRef.current = recognition;
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.continuous = false;

//     recognition.onstart = () => {
//       setListening(true);
//     };

//     recognition.onresult = (event) => {
//       let final = '';
//       for (let i = event.resultIndex; i < event.results.length; ++i) {
//         if (event.results[i].isFinal) final += event.results[i][0].transcript;
//       }
//       if (final) handleVoiceCommand(final);
//     };

//     recognition.onerror = () => {
//       setListening(false);
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };

//     recognition.start();
//   };

//   const stopListening = () => {
//     recognitionRef.current?.stop();
//     recognitionRef.current = null;
//     setListening(false);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!videoData) return <div>No video data found.</div>;

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 px-10 pt-6">
//       {/* Left Side */}
//       <div className="lg:w-2/3">
//         <div className="relative w-full aspect-video bg-black">
//           <video ref={videoRef} className="w-full h-full" controls>
//             <source src={videoData.videoFile} type="video/mp4" />
//           </video>
//         </div>

//         {/* Video Info */}
//         <div className="mt-4">
//           <h1 className="mb-3 text-xl font-semibold">{videoData.title}</h1>
//           <div className="flex items-center justify-between border-b border-gray-200 pb-3">
//             {userData ? (
//               <div className="flex items-center gap-3">
//                 <img src={userData.avatar} className="w-12 h-12 rounded-full" alt="User" />
//                 <div>
//                   <p className="font-medium">{userData.name}</p>
//                   <p className="text-sm text-gray-500">Subscribed • 303k</p>
//                 </div>

//                 {/* Mic Button in Middle */}
//                 <button
//                   onClick={() => (listening ? stopListening() : startListening())}
//                   className={`ml-4 px-3 py-2 rounded-md text-white ${listening ? 'bg-green-600' : 'bg-blue-600'}`}
//                 >
//                   {listening ? '🎤 Listening…' : '🎤 Voice'}
//                 </button>
//               </div>
//             ) : (
//               <div>Loading user...</div>
//             )}

//             {/* Subscribe Button on Right End */}
//             <button className="bg-red-600 text-white px-4 py-1 rounded-md">Subscribe</button>
//           </div>

//           <div className="bg-gray-100 p-4 rounded-lg mt-3">
//             <div className="flex gap-6 text-sm text-gray-700">
//               <span>👁 {videoData.views} views</span>
//               <span>📅 {formatDate(videoData.createdAt)}</span>
//             </div>
//             <p className="text-sm mt-2">
//               {showFullDesc
//                 ? videoData.description
//                 : videoData.description?.slice(0, 150) + (videoData.description?.length > 150 ? '...' : '')}
//             </p>
//             {videoData.description?.length > 150 && (
//               <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-blue-600 text-sm mt-1">
//                 {showFullDesc ? 'See less' : 'See more'}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="lg:w-1/3 space-y-4">
//         <h2 className="font-semibold text-lg mb-2">Recommended</h2>
//         {recommended.length > 0 ? (
//           recommended.map((vid) => (
//             <Link key={vid._id} to={`/watch/${vid._id}`} className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg">
//               <img src={vid.thumbnail} className="w-40 h-24 object-cover rounded-lg" alt={vid.title} />
//               <div>
//                 <h3 className="text-sm font-medium">{vid.title}</h3>
//                 <p className="text-xs text-gray-600">{vid.owner?.name || 'Unknown'}</p>
//                 <p className="text-xs text-gray-500">{vid.views} views</p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p>No recommended videos.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Video;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// function Video() {
//   const { id } = useParams();
//   const [videoData, setVideoData] = useState(id);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [recommended, setRecommended] = useState([]);
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // Voice state
//   const [listening, setListening] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('');

//   const videoRef = useRef(null);
//   const recognitionRef = useRef(null);

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString(undefined, options);
//   };

//   // === API Calls ===
//   useEffect(() => {
//     const fetchVideoData = async () => {
//       try {
//         const response = await axios.get(`/api/v1/videos/videoData/${id}`);
//         setVideoData(response.data.data);
//       } catch (err) {
//         setError(err.message || 'Error fetching video');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchVideoData();
//   }, [id]);

//   useEffect(() => {
//     axios.put(`/api/v1/videos/incrementView/${id}`).catch(console.error);
//     axios.put(`/api/v1/account/addToHistory/${id}`).catch(console.error);
//   }, [id]);

//   useEffect(() => {
//     if (videoData && videoData.owner) {
//       axios.get(`/api/v1/account/userData/${videoData.owner}`)
//         .then(res => setUserData(res.data.data))
//         .catch(console.error);
//     }
//   }, [videoData]);

//   // Cleanup recognition
//   useEffect(() => {
//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//         recognitionRef.current = null;
//       }
//     };
//   }, []);

//   // === Voice Command Parser ===
//   const handleVoiceCommand = async (text) => {
//     if (!videoRef.current) return;
//     const t = text.toLowerCase();

//     // 🔹 Playback controls
//     if (t.includes("pause")) return videoRef.current.pause();
//     if (t.includes("play") || t.includes("resume")) return videoRef.current.play();

//     if (t.includes("forward")) {
//       const seconds = extractSeconds(t) || 10;
//       videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds);
//       return;
//     }
//     if (t.includes("back") || t.includes("rewind")) {
//       const seconds = extractSeconds(t) || 10;
//       videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - seconds);
//       return;
//     }

//     // 🔹 Speed
//     const speed = parseSpeedFromText(t);
//     if (speed !== null) {
//       videoRef.current.playbackRate = speed;
//       return;
//     }

//     // 🔹 Volume
//     if (t.includes("volume up") || t.includes("increase volume")) {
//       videoRef.current.volume = Math.min(1, videoRef.current.volume + 0.1);
//       return;
//     }
//     if (t.includes("volume down") || t.includes("decrease volume")) {
//       videoRef.current.volume = Math.max(0, videoRef.current.volume - 0.1);
//       return;
//     }
//     if (t.includes("mute")) {
//       videoRef.current.muted = true;
//       return;
//     }
//     if (t.includes("unmute")) {
//       videoRef.current.muted = false;
//       return;
//     }

//     // 🔹 Fullscreen / Exit fullscreen
//     if (t.includes("fullscreen")) {
//       if (videoRef.current.requestFullscreen) videoRef.current.requestFullscreen();
//       return;
//     }
//     if (t.includes("exit fullscreen") || t.includes("normal screen")) {
//       if (document.exitFullscreen) document.exitFullscreen();
//       return;
//     }

//     // 🔹 Picture-in-Picture
//     if (t.includes("picture in picture") || t.includes("pip")) {
//       try {
//         if (document.pictureInPictureElement) {
//           await document.exitPictureInPicture();
//         } else {
//           await videoRef.current.requestPictureInPicture();
//         }
//       } catch (err) {
//         console.error("PIP error:", err);
//       }
//       return;
//     }

//     // 🔹 Download video
//     if (t.includes("download")) {
//       const a = document.createElement("a");
//       a.href = videoData.videoFile;
//       a.download = `${videoData.title || "video"}.mp4`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       return;
//     }
//   };

//   const parseSpeedFromText = (t) => {
//     if (!t) return null;

//     if (t.includes('normal')) return 1;
//     if (t.includes('half')) return 0.5;
//     if (t.includes('quarter')) return 0.25;
//     if (t.includes('1.5') || t.includes('one point five')) return 1.5;
//     if (t.includes('double') || t.includes('two')) return 2;
//     if (t.includes('triple') || t.includes('three')) return 3;

//     if (t.includes('faster') || t.includes('increase')) {
//       const cur = videoRef.current?.playbackRate ?? 1;
//       return Math.min(cur + 0.25, 16);
//     }
//     if (t.includes('slower') || t.includes('decrease')) {
//       const cur = videoRef.current?.playbackRate ?? 1;
//       return Math.max(cur - 0.25, 0.25);
//     }

//     const numeric = t.match(/(\d+(\.\d+)?)/);
//     if (numeric) {
//       const n = parseFloat(numeric[0]);
//       if (!Number.isNaN(n) && n > 0 && n <= 16) return n;
//     }

//     return null;
//   };

//   const extractSeconds = (text) => {
//     const match = text.match(/(\d+)\s*second/);
//     if (match) return parseInt(match[1]);
//     return null;
//   };

//   // === Start Listening ===
//   const startListening = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       setStatusMessage('Speech Recognition not supported in this browser.');
//       return;
//     }

//     if (recognitionRef.current) recognitionRef.current.stop();

//     const recognition = new SpeechRecognition();
//     recognitionRef.current = recognition;
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.continuous = false;

//     recognition.onstart = () => setListening(true);
//     recognition.onresult = (event) => {
//       let final = '';
//       for (let i = event.resultIndex; i < event.results.length; ++i) {
//         if (event.results[i].isFinal) final += event.results[i][0].transcript;
//       }
//       if (final) handleVoiceCommand(final);
//     };
//     recognition.onerror = () => setListening(false);
//     recognition.onend = () => setListening(false);

//     recognition.start();
//   };

//   const stopListening = () => {
//     recognitionRef.current?.stop();
//     recognitionRef.current = null;
//     setListening(false);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!videoData) return <div>No video data found.</div>;

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 px-10 pt-6">
//       {/* Left Side */}
//       <div className="lg:w-2/3">
//         <div className="relative w-full aspect-video bg-black">
//           <video ref={videoRef} className="w-full h-full" controls>
//             <source src={videoData.videoFile} type="video/mp4" />
//           </video>
//         </div>

//         {/* Video Info */}
//         <div className="mt-4">
//           <h1 className="mb-3 text-xl font-semibold">{videoData.title}</h1>
//           <div className="flex items-center justify-between border-b border-gray-200 pb-3">
//             {userData ? (
//               <div className="flex items-center gap-3">
//                 <img src={userData.avatar} className="w-12 h-12 rounded-full" alt="User" />
//                 <div>
//                   <p className="font-medium">{userData.name}</p>
//                   <p className="text-sm text-gray-500">Subscribed • 303k</p>
//                 </div>

//                 {/* Mic Button */}
//                 <button
//                   onClick={() => (listening ? stopListening() : startListening())}
//                   className={`ml-4 px-3 py-2 rounded-md text-white ${listening ? 'bg-green-600' : 'bg-blue-600'}`}
//                 >
//                   {listening ? '🎤 Listening…' : '🎤 Voice'}
//                 </button>
//               </div>
//             ) : (
//               <div>Loading user...</div>
//             )}

//             <button className="bg-red-600 text-white px-4 py-1 rounded-md">Subscribe</button>
//           </div>

//           <div className="bg-gray-100 p-4 rounded-lg mt-3">
//             <div className="flex gap-6 text-sm text-gray-700">
//               <span>👁 {videoData.views} views</span>
//               <span>📅 {formatDate(videoData.createdAt)}</span>
//             </div>
//             <p className="text-sm mt-2">
//               {showFullDesc
//                 ? videoData.description
//                 : videoData.description?.slice(0, 150) + (videoData.description?.length > 150 ? '...' : '')}
//             </p>
//             {videoData.description?.length > 150 && (
//               <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-blue-600 text-sm mt-1">
//                 {showFullDesc ? 'See less' : 'See more'}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="lg:w-1/3 space-y-4">
//         <h2 className="font-semibold text-lg mb-2">Recommended</h2>
//         {recommended.length > 0 ? (
//           recommended.map((vid) => (
//             <Link key={vid._id} to={`/watch/${vid._id}`} className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg">
//               <img src={vid.thumbnail} className="w-40 h-24 object-cover rounded-lg" alt={vid.title} />
//               <div>
//                 <h3 className="text-sm font-medium">{vid.title}</h3>
//                 <p className="text-xs text-gray-600">{vid.owner?.name || 'Unknown'}</p>
//                 <p className="text-xs text-gray-500">{vid.views} views</p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p>No recommended videos.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Video;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Link, useParams, useNavigate } from 'react-router-dom';

// function Video() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [videoData, setVideoData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [recommended, setRecommended] = useState([]);
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // Likes
//   const [videoLikes, setVideoLikes] = useState(0);
//   const [videoLiked, setVideoLiked] = useState(false);

//   // Comments
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   // Voice state
//   const [listening, setListening] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('');

//   const videoRef = useRef(null);
//   const recognitionRef = useRef(null);

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString(undefined, options);
//   };

//   // === API Calls ===
//   useEffect(() => {
//     const fetchVideoData = async () => {
//       try {
//         const response = await axios.get(`/api/v1/videos/videoData/${id}`, {
//           withCredentials: true
//         });
//         setVideoData(response.data.data);
//         setVideoLikes(response.data.data.likes?.length || 0);
//       } catch (err) {
//         setError(err.message || 'Error fetching video');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchVideoData();
//   }, [id]);

//   useEffect(() => {
//     axios.put(`/api/v1/videos/incrementView/${id}`).catch(console.error);
//     axios.put(`/api/v1/account/addToHistory/${id}`).catch(console.error);
//   }, [id]);

//   useEffect(() => {
//     if (videoData && videoData.owner) {
//       axios.get(`/api/v1/account/userData/${videoData.owner}`)
//         .then(res => setUserData(res.data.data))
//         .catch(console.error);
//     }
//   }, [videoData]);

//   // useEffect(() => {
//   //   axios
//   //     .get(`/api/v1/messages/video/${id}`, { withCredentials: true })
//   //     .then((res) => setMessages(res.data))
//   //     .catch(console.error);
//   // }, [id]);

//   useEffect(() => {
//   axios
//     .get(`/api/v1/messages/video/${id}`, { withCredentials: true })
//     .then((res) => setMessages(res.data.data || [])) // ensure array
//     .catch(console.error);
// }, [id]);

//   // === Like video ===
//   const handleLikeVideo = async () => {
//     try {
//       await axios.put(`/api/v1/videos/${id}/like`, {}, { withCredentials: true });
//       setVideoLiked(!videoLiked);
//       setVideoLikes((prev) => (videoLiked ? prev - 1 : prev + 1));
//     } catch (err) {
//       if (err.response?.status === 401) navigate('/login');
//     }
//   };

//   // === Post message ===
//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return;
//     try {
//       const res = await axios.post(
//         `/api/v1/messages`,
//         { videoId: id, content: newMessage },
//         { withCredentials: true }
//       );
//       // setMessages((prev) => [res.data, ...prev]);
//       setMessages((prev = []) => [res.data, ...prev]); // fallback to []

//       setNewMessage('');
//     } catch (err) {
//       if (err.response?.status === 401) navigate('/login');
//     }
//   };

//   // === Toggle like message ===
//   const toggleMessageLike = async (msgId) => {
//     try {
//       const res = await axios.post(
//         `/api/v1/messages/${msgId}/like`,
//         {},
//         { withCredentials: true }
//       );
//       setMessages((prev) =>
//         prev.map((m) =>
//           m._id === msgId ? { ...m, likes: res.data.likes } : m
//         )
//       );
//     } catch (err) {
//       if (err.response?.status === 401) navigate('/login');
//     }
//   };

//   // === Delete message ===
//   const deleteMessage = async (msgId) => {
//     try {
//       await axios.delete(`/api/v1/messages/${msgId}`, { withCredentials: true });
//       setMessages((prev) => prev.filter((m) => m._id !== msgId));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // === Voice Command Parser (keep your existing code) ===
//   const handleVoiceCommand = async (text) => { /* ... your existing logic ... */ };

//   const parseSpeedFromText = (t) => { /* ... your existing logic ... */ };
//   const extractSeconds = (text) => { /* ... your existing logic ... */ };

//   const startListening = () => { /* ... your existing logic ... */ };
//   const stopListening = () => { /* ... your existing logic ... */ };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!videoData) return <div>No video data found.</div>;

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 px-10 pt-6">
//       {/* Left Side */}
//       <div className="lg:w-2/3">
//         <div className="relative w-full aspect-video bg-black">
//           <video ref={videoRef} className="w-full h-full" controls>
//             <source src={videoData.videoFile} type="video/mp4" />
//           </video>
//         </div>

//         {/* Video Info */}
//         <div className="mt-4">
//           <h1 className="mb-3 text-xl font-semibold">{videoData.title}</h1>
//           <div className="flex items-center justify-between border-b border-gray-200 pb-3">
//             {userData ? (
//               <div className="flex items-center gap-3">
//                 <img src={userData.avatar} className="w-12 h-12 rounded-full" alt="User" />
//                 <div>
//                   <p className="font-medium">{userData.name}</p>
//                   <p className="text-sm text-gray-500">Subscribed • 303k</p>
//                 </div>
//                 <button
//                   onClick={() => (listening ? stopListening() : startListening())}
//                   className={`ml-4 px-3 py-2 rounded-md text-white ${listening ? 'bg-green-600' : 'bg-blue-600'}`}
//                 >
//                   {listening ? '🎤 Listening…' : '🎤 Voice'}
//                 </button>
//               </div>
//             ) : (
//               <div>Loading user...</div>
//             )}
//             <button className="bg-red-600 text-white px-4 py-1 rounded-md">Subscribe</button>
//           </div>

//           <div className="bg-gray-100 p-4 rounded-lg mt-3">
//             <div className="flex gap-6 text-sm text-gray-700">
//               <span>👁 {videoData.views} views</span>
//               <span>📅 {formatDate(videoData.createdAt)}</span>
//               <button
//                 onClick={handleLikeVideo}
//                 className={`ml-auto px-3 py-1 rounded-md text-white ${videoLiked ? 'bg-green-600' : 'bg-gray-600'}`}
//               >
//                 👍 {videoLikes}
//               </button>
//             </div>
//             <p className="text-sm mt-2">
//               {showFullDesc
//                 ? videoData.description
//                 : videoData.description?.slice(0, 150) + (videoData.description?.length > 150 ? '...' : '')}
//             </p>
//             {videoData.description?.length > 150 && (
//               <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-blue-600 text-sm mt-1">
//                 {showFullDesc ? 'See less' : 'See more'}
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Comments Section */}
//         <div className="mt-6">
//           <h2 className="font-semibold text-lg mb-3">Comments</h2>
//           <div className="flex gap-2 mb-4">
//             <input
//               type="text"
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               className="flex-1 border rounded-md px-3 py-2"
//               placeholder="Add a comment..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-600 text-white px-4 py-2 rounded-md"
//             >
//               Send
//             </button>
//           </div>

//           <div className="space-y-3">
//             {messages.length > 0 ? (
//               messages.map((msg) => (
//                 <div key={msg._id} className="bg-gray-100 p-3 rounded-lg flex justify-between">
//                   <div>
//                     <p className="font-medium">{msg.user?.name || 'Anon'}</p>
//                     <p>{msg.content}</p>
//                     <div className="flex items-center gap-3 text-sm mt-1">
//                       <button
//                         onClick={() => toggleMessageLike(msg._id)}
//                         className="text-blue-600"
//                       >
//                         👍 {msg.likes?.length || 0}
//                       </button>
//                       <button
//                         onClick={() => deleteMessage(msg._id)}
//                         className="text-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No comments yet.</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="lg:w-1/3 space-y-4">
//         <h2 className="font-semibold text-lg mb-2">Recommended</h2>
//         {recommended.length > 0 ? (
//           recommended.map((vid) => (
//             <Link key={vid._id} to={`/watch/${vid._id}`} className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg">
//               <img src={vid.thumbnail} className="w-40 h-24 object-cover rounded-lg" alt={vid.title} />
//               <div>
//                 <h3 className="text-sm font-medium">{vid.title}</h3>
//                 <p className="text-xs text-gray-600">{vid.owner?.name || 'Unknown'}</p>
//                 <p className="text-xs text-gray-500">{vid.views} views</p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p>No recommended videos.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Video;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Link, useParams, useNavigate } from 'react-router-dom';

// function Video() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [videoData, setVideoData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [recommended, setRecommended] = useState([]);
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // Likes
//   const [videoLikes, setVideoLikes] = useState(0);
//   const [videoLiked, setVideoLiked] = useState(false);

//   // Comments
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [showCommentsModal, setShowCommentsModal] = useState(false);

//   // Voice state
//   const [listening, setListening] = useState(false);
//   const videoRef = useRef(null);

//   // === Fetch video ===
//   useEffect(() => {
//     const fetchVideoData = async () => {
//       try {
//         const res = await axios.get(`/api/v1/videos/videoData/${id}`, { withCredentials: true });
//         setVideoData(res.data.data);
//         setVideoLikes(res.data.data.likes?.length || 0);
//       } catch (err) {
//         setError(err.message || 'Error fetching video');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchVideoData();
//   }, [id]);

//   // === Increment view + add to history ===
//   useEffect(() => {
//     axios.put(`/api/v1/videos/incrementView/${id}`).catch(console.error);
//     axios.put(`/api/v1/account/addToHistory/${id}`).catch(console.error);
//   }, [id]);

//   // === Fetch uploader data ===
//   useEffect(() => {
//     if (videoData?.owner) {
//       axios.get(`/api/v1/account/userData/${videoData.owner}`)
//         .then(res => setUserData(res.data.data))
//         .catch(console.error);
//     }
//   }, [videoData]);

//   // === Fetch comments ===
//   useEffect(() => {
//     axios
//       .get(`/api/v1/messages/video/${id}`, { withCredentials: true })
//       .then(res => setMessages(res.data.messages || []))
//       .catch(console.error);
//   }, [id]);

//   // === Like video ===
//   const handleLikeVideo = async () => {
//     try {
//       await axios.put(`/api/v1/videos/${id}/like`, {}, { withCredentials: true });
//       setVideoLiked(!videoLiked);
//       setVideoLikes(prev => (videoLiked ? prev - 1 : prev + 1));
//     } catch (err) {
//       if (err.response?.status === 401) navigate('/login');
//     }
//   };

//   // === Post comment ===
//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return;
//     try {
//       const res = await axios.post(`/api/v1/messages`, { videoId: id, content: newMessage }, { withCredentials: true });
//       setMessages(prev => [res.data, ...prev]);
//       setNewMessage('');
//     } catch (err) {
//       if (err.response?.status === 401) navigate('/login');
//     }
//   };

//   // === Like comment ===
//   const toggleMessageLike = async (msgId) => {
//     try {
//       const res = await axios.post(`/api/v1/messages/${msgId}/like`, {}, { withCredentials: true });
//       setMessages(prev =>
//         prev.map(m => m._id === msgId ? { ...m, likes: res.data.likes } : m)
//       );
//     } catch (err) {
//       if (err.response?.status === 401) navigate('/login');
//     }
//   };

//   // === Delete comment ===
//   const deleteMessage = async (msgId) => {
//     try {
//       await axios.delete(`/api/v1/messages/${msgId}`, { withCredentials: true });
//       setMessages(prev => prev.filter(m => m._id !== msgId));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!videoData) return <div>No video data</div>;

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-10 pt-6">
//       {/* ===== Left Section ===== */}
//       <div className="lg:w-2/3">
//         <div className="relative w-full aspect-video bg-black">
//           <video ref={videoRef} className="w-full h-full" controls>
//             <source src={videoData.videoFile} type="video/mp4" />
//           </video>
//         </div>

//         {/* Video Info */}
//         <h1 className="mt-4 mb-2 text-xl font-semibold">{videoData.title}</h1>
//         <div className="flex items-center justify-between border-b border-gray-200 pb-3">
//           {/* Uploader */}
//           {userData ? (
//             <div className="flex items-center gap-3">
//               <img src={userData.avatar} className="w-12 h-12 rounded-full" alt="User" />
//               <div>
//                 <p className="font-medium">{userData.name}</p>
//                 <p className="text-sm text-gray-500">Subscribed • 303k</p>
//               </div>
//               {/* 🎤 Mic */}
//               <button
//                 onClick={() => setListening(!listening)}
//                 className={`ml-4 px-3 py-2 rounded-md text-white ${listening ? 'bg-green-600' : 'bg-blue-600'}`}
//               >
//                 🎤
//               </button>
//               {/* 👍 Like button (between mic & subscribe) */}
//               <button
//                 onClick={handleLikeVideo}
//                 className={`px-3 py-2 rounded-md text-white ${videoLiked ? 'bg-green-600' : 'bg-gray-600'}`}
//               >
//                 👍 {videoLikes}
//               </button>
//             </div>
//           ) : <p>Loading user...</p>}

//           {/* 🔴 Subscribe */}
//           <button className="bg-red-600 text-white px-4 py-1 rounded-md">Subscribe</button>
//         </div>

//         {/* Views, Date & Desc */}
//         <div className="bg-gray-100 p-4 rounded-lg mt-3 text-sm">
//           <div className="flex gap-6 text-gray-700">
//             <span>👁 {videoData.views} views</span>
//             <span>📅 {formatDate(videoData.createdAt)}</span>
//           </div>
//           <p className="mt-2">
//             {showFullDesc
//               ? videoData.description
//               : videoData.description?.slice(0, 150) + (videoData.description?.length > 150 ? '...' : '')}
//           </p>
//           {videoData.description?.length > 150 && (
//             <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-blue-600 text-sm">
//               {showFullDesc ? 'See less' : 'See more'}
//             </button>
//           )}
//         </div>

//         {/* ===== Comments Section ===== */}
//         <div className="mt-6">
//           <h2 className="font-semibold text-lg mb-3">Comments</h2>

//           {/* Mobile view → show "View comments" box */}
//           <div className="lg:hidden">
//             <div
//               onClick={() => setShowCommentsModal(true)}
//               className="bg-gray-100 p-3 rounded-lg cursor-pointer"
//             >
//               💬 View all {messages.length} comments
//             </div>
//           </div>

//           {/* Desktop comments */}
//           <div className="hidden lg:block">
//             <div className="flex gap-2 mb-4">
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 className="flex-1 border rounded-md px-3 py-2"
//                 placeholder="Add a comment..."
//               />
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md"
//               >
//                 Send
//               </button>
//             </div>

//             <div className="space-y-3">
//               {messages.map((msg) => (
//                 <div key={msg._id} className="bg-gray-100 p-3 rounded-lg">
//                   <p className="font-medium">{msg.user?.name || 'Anon'}</p>
//                   <p>{msg.content}</p>
//                   <div className="flex gap-4 text-sm mt-1">
//                     <button onClick={() => toggleMessageLike(msg._id)} className="text-blue-600">
//                       👍 {msg.likes?.length || 0}
//                     </button>
//                     <button onClick={() => deleteMessage(msg._id)} className="text-red-600">
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===== Right Section ===== */}
//       <div className="lg:w-1/3 space-y-4">
//         <h2 className="font-semibold text-lg">Recommended</h2>
//         {recommended.length > 0 ? (
//           recommended.map(vid => (
//             <Link key={vid._id} to={`/watch/${vid._id}`} className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg">
//               <img src={vid.thumbnail} className="w-40 h-24 object-cover rounded-lg" alt={vid.title} />
//               <div>
//                 <h3 className="text-sm font-medium">{vid.title}</h3>
//                 <p className="text-xs text-gray-600">{vid.owner?.name || 'Unknown'}</p>
//                 <p className="text-xs text-gray-500">{vid.views} views</p>
//               </div>
//             </Link>
//           ))
//         ) : <p>No recommended videos</p>}
//       </div>

//       {/* ===== Mobile Comments Modal ===== */}
//       {showCommentsModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-end">
//           <div className="bg-white w-full h-2/3 rounded-t-2xl p-4 overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold">Comments</h3>
//               <button onClick={() => setShowCommentsModal(false)}>✖</button>
//             </div>

//             <div className="flex gap-2 mb-4">
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 className="flex-1 border rounded-md px-3 py-2"
//                 placeholder="Add a comment..."
//               />
//               <button onClick={handleSendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-md">
//                 Send
//               </button>
//             </div>

//             <div className="space-y-3">
//               {messages.map(msg => (
//                 <div key={msg._id} className="bg-gray-100 p-3 rounded-lg">
//                   <p className="font-medium">{msg.user?.name || 'Anon'}</p>
//                   <p>{msg.content}</p>
//                   <div className="flex gap-4 text-sm mt-1">
//                     <button onClick={() => toggleMessageLike(msg._id)} className="text-blue-600">
//                       👍 {msg.likes?.length || 0}
//                     </button>
//                     <button onClick={() => deleteMessage(msg._id)} className="text-red-600">
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Video;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Video() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [showFullDesc, setShowFullDesc] = useState(false);

  // Likes
  const [videoLikes, setVideoLikes] = useState(0);
  const [videoLiked, setVideoLiked] = useState(false);

  // Comments
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  // Voice state
  const [listening, setListening] = useState(false);
  const videoRef = useRef(null);

  // === Fetch video ===
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await axios.get(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/videos/videoData/${id}`, { withCredentials: true });
        setVideoData(res.data.data);
        setVideoLikes(res.data.data.likes?.length || 0);
      } catch (err) {
        setError(err.message || 'Error fetching video');
      } finally {
        setLoading(false);
      }
    };
    fetchVideoData();
  }, [id]);

  // === Increment view + add to history ===
  useEffect(() => {
    axios.put(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/videos/incrementView/${id}`).catch(console.error);
    axios.put(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/account/addToHistory/${id}`).catch(console.error);
  }, [id]);

  // === Fetch uploader data ===
  useEffect(() => {
    if (videoData?.owner) {
      axios.get(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/account/userData/${videoData.owner}`)
        .then(res => setUserData(res.data.data))
        .catch(console.error);
    }
  }, [videoData]);

  // === Fetch comments ===
  useEffect(() => {
    axios
      .get(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/messages/video/${id}`, { withCredentials: true })
      .then(res => setMessages(res.data.messages || []))
      .catch(console.error);
  }, [id]);

  // === Fetch all videos for Recommended ===
  useEffect(() => {
    axios
      .get("https://voice-controll-youtube-backend-part.onrender.com/api/v1/videos/allVideo")
      .then(res => setRecommended(res.data.data || []))
      .catch(console.error);
  }, []);

  // === Like video ===
  const handleLikeVideo = async () => {
    try {
      await axios.put(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/videos/${id}/like`, {}, { withCredentials: true });
      setVideoLiked(!videoLiked);
      setVideoLikes(prev => (videoLiked ? prev - 1 : prev + 1));
    } catch (err) {
      if (err.response?.status === 401) navigate('/login');
    }
  };

  // === Post comment ===
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      const res = await axios.post(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/messages`, { videoId: id, content: newMessage }, { withCredentials: true });
      setMessages(prev => [res.data, ...prev]);
      setNewMessage('');
    } catch (err) {
      if (err.response?.status === 401) navigate('/login');
    }
  };

  // === Like comment ===
  const toggleMessageLike = async (msgId) => {
    try {
      const res = await axios.post(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/messages/${msgId}/like`, {}, { withCredentials: true });
      setMessages(prev =>
        prev.map(m => m._id === msgId ? { ...m, likes: res.data.likes } : m)
      );
    } catch (err) {
      if (err.response?.status === 401) navigate('/login');
    }
  };

  // === Delete comment ===
  const deleteMessage = async (msgId) => {
    try {
      await axios.delete(`https://voice-controll-youtube-backend-part.onrender.com/api/v1/messages/${msgId}`, { withCredentials: true });
      setMessages(prev => prev.filter(m => m._id !== msgId));
    } catch (err) {
      console.error(err);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!videoData) return <div>No video data</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-10 pt-6">
      {/* ===== Left Section ===== */}
      <div className="lg:w-2/3">
        <div className="relative w-full aspect-video bg-black">
          <video ref={videoRef} className="w-full h-full" controls>
            <source src={videoData.videoFile} type="video/mp4" />
          </video>
        </div>

        {/* Video Info */}
        <h1 className="mt-4 mb-2 text-xl font-semibold">{videoData.title}</h1>

        {/* Uploader + Actions */}
        <div className="border-b border-gray-200 pb-3">
          {userData ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Row 1: uploader + mic */}
              <div className="flex items-center gap-3 flex-1">
                <img src={userData.avatar} className="w-12 h-12 rounded-full" alt="User" />
                <div>
                  <p className="font-medium">{userData.name}</p>
                  <p className="text-sm text-gray-500">Subscribed • 303k</p>
                </div>

                {/* 🎤 Mic always last in row */}
                <button
                  onClick={() => setListening(!listening)}
                  className={`ml-auto px-3 py-2 rounded-md text-white ${listening ? 'bg-green-600' : 'bg-blue-600'}`}
                >
                  🎤
                </button>
              </div>

              {/* Row 2 (on mobile) or right side (desktop): Like + Subscribe */}
              <div className="flex gap-3">
                <button
                  onClick={handleLikeVideo}
                  className={`px-3 py-2 rounded-md text-white ${videoLiked ? 'bg-green-600' : 'bg-gray-600'}`}
                >
                  👍 {videoLikes}
                </button>
                <button className="bg-red-600 text-white px-4 py-1 rounded-md">Subscribe</button>
              </div>
            </div>
          ) : <p>Loading user...</p>}
        </div>

        {/* Views, Date & Desc */}
        <div className="bg-gray-100 p-4 rounded-lg mt-3 text-sm">
          <div className="flex gap-6 text-gray-700">
            <span>👁 {videoData.views} views</span>
            <span>📅 {formatDate(videoData.createdAt)}</span>
          </div>
          <p className="mt-2">
            {showFullDesc
              ? videoData.description
              : videoData.description?.slice(0, 150) + (videoData.description?.length > 150 ? '...' : '')}
          </p>
          {videoData.description?.length > 150 && (
            <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-blue-600 text-sm">
              {showFullDesc ? 'See less' : 'See more'}
            </button>
          )}
        </div>

        {/* ===== Comments Section ===== */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-3">Comments</h2>

          {/* Mobile view → show "View comments" box */}
          <div className="lg:hidden">
            <div
              onClick={() => setShowCommentsModal(true)}
              className="bg-gray-100 p-3 rounded-lg cursor-pointer"
            >
              💬 View all {messages.length} comments
            </div>
          </div>

          {/* Desktop comments */}
          <div className="hidden lg:block">
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border rounded-md px-3 py-2"
                placeholder="Add a comment..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            </div>

            {/* <div className="space-y-3">
              {messages.map((msg) => (
                <div key={msg._id} className="bg-gray-100 p-3 rounded-lg">
                 {/* <p className="font-medium">{msg.author?.name || 'Anon'}</p> */}
 
                  {/* <p>{msg.content}</p>
                  <div className="flex gap-4 text-sm mt-1">
                    <button onClick={() => toggleMessageLike(msg._id)} className="text-blue-600">
                      👍 {msg.likes?.length || 0}
                    </button>
                    <button onClick={() => deleteMessage(msg._id)} className="text-red-600">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div> */} 



            <div className="space-y-3">
  {messages.map((msg) => (
    <div key={msg._id} className="bg-gray-100 p-3 rounded-lg">
      <div className="flex justify-between items-center">
        {/* Left: author */}
        <div className="flex items-center gap-2">
          <img src={msg.author?.avatar} alt="" className="w-8 h-8 rounded-full" />
          <span className="font-medium">{msg.author?.name || "Anon"}</span>
        </div>

        {/* Right: actions */}
        <div className="flex gap-4 text-sm">
          <button onClick={() => toggleMessageLike(msg._id)} className="text-blue-600">
            👍 {msg.likes?.length || 0}
          </button>
          <button onClick={() => deleteMessage(msg._id)} className="text-red-600">
            Delete
          </button>
        </div>
      </div>

      {/* Message text */}
      <p className="mt-2">{msg.content}</p>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>

      {/* ===== Right Section ===== */}
      <div className="lg:w-1/3 space-y-4">
        <h2 className="font-semibold text-lg">Recommended</h2>
        {recommended.length > 0 ? (
          recommended.map(vid => (
            <Link key={vid._id} to={`/watch/${vid._id}`} className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg">
              <img src={vid.thumbnail} className="w-40 h-24 object-cover rounded-lg" alt={vid.title} />
              <div>
                <h3 className="text-sm font-medium">{vid.title}</h3>
                <p className="text-xs text-gray-600">{vid.owner?.name || 'Unknown'}</p>
                <p className="text-xs text-gray-500">{vid.views} views</p>
              </div>
            </Link>
          ))
        ) : <p>No recommended videos</p>}
      </div>

      {/* ===== Mobile Comments Modal ===== */}
      {showCommentsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-end">
          <div className="bg-white w-full h-2/3 rounded-t-2xl p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Comments</h3>
              <button onClick={() => setShowCommentsModal(false)}>✖</button>
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border rounded-md px-3 py-2"
                placeholder="Add a comment..."
              />
              <button onClick={handleSendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Send
              </button>
            </div>

            <div className="space-y-3">
              {messages.map(msg => (
                <div key={msg._id} className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium">{msg.user?.name || 'Anon'}</p>
                  <p>{msg.content}</p>
                  <div className="flex gap-4 text-sm mt-1">
                    <button onClick={() => toggleMessageLike(msg._id)} className="text-blue-600">
                      👍 {msg.likes?.length || 0}
                    </button>
                    <button onClick={() => deleteMessage(msg._id)} className="text-red-600">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;
