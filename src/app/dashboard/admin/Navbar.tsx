// "use client";

// import React, { useState } from "react";

// interface NavbarProps {
//   toggleSidebar: () => void;
// }

// function Navbar({ toggleSidebar }: NavbarProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-black text-white px-4 py-4 md:py-6 md:px-6 lg:px-8 fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center md:mr-4">
//           <svg
//             className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="text-base sm:text-lg font-semibold">SkillNet</span>
//         </div>
//         {/* Hamburger Menu (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => {
//               toggleMobileMenu();
//               toggleSidebar(); // Call toggleSidebar here!
//             }}
//             className="focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isMobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         {/* Navigation Links (Desktop) */}
//         <div className="hidden md:flex ml-12 items-center space-x-2 lg:space-x-2.5">
//           <div className="font-medium">User management</div>
//           <div className="font-medium text-gray-400 font-extrabold">|</div>
//           <div className="text-gray-400">Glance</div>
//         </div>
//         {/* Right Side Items (Desktop) */}
//         <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
//           {/* Notification Bell */}
//           <button className="p-1 rounded-full hover:bg-gray-800 mr-3">
//             <svg
//               className="w-5 h-5 sm:w-6 sm:h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//               <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//             </svg>
//           </button>

//           {/* Search Bar */}
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <svg
//                 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 ></path>
//               </svg>
//             </div>
//             <input
//               type="text"
//               className="w-48 sm:w-64 py-1 sm:py-2 pl-10 pr-4 text-sm text-white border border-white border-5 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//               placeholder="Search..."
//             />
//           </div>

//           {/* Ban Users Button */}
//           <button className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium border border-white border-5 rounded-md hover:bg-gray-700 flex items-center">
//             <svg
//               className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               />
//               <path
//                 d="M5 5L19 19"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//             Ban users
//           </button>

//           {/* User Profile */}
//           {/* <div className="flex items-center border border-black border-5 rounded-md p-1.5 bg-gray-700"> */}
//           <div className="flex items-center border border-black border-5 rounded-md p-1.5 bg-[#161716]">

//             <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium overflow-hidden mr-2">
//               {/* In a real app, you would use an actual image source */}
//               <img
//                 src="https://via.placeholder.com/32"
//                 alt="User avatar"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <span className="hidden sm:inline-block text-xs sm:text-sm font-medium">
//               osatuyipikin.braavos.eth
//             </span>
//             <button className="ml-1 sm:ml-2">
//               <svg
//                 className="w-4 h-4 sm:w-5 sm:h-5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="12" cy="12" r="1"></circle>
//                 <circle cx="12" cy="5" r="1"></circle>
//                 <circle cx="12" cy="19" r="1"></circle>
//               </svg>
//             </button>
//           </div>
//         </div>
//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-black p-4 space-y-2">
//             <div className="font-medium">User management</div>
//             <div className="text-gray-400">Glance</div>
//             {/* Add mobile versions of other right-side items here if needed */}
//             <div className="relative block">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 className="w-full py-1 sm:py-2 pl-10 pr-4 text-sm text-white border border-white border-5 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//                 placeholder="Search..."
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;







"use client";

import React, { useState } from "react";

interface NavbarProps {
  toggleSidebar: () => void;
}

function Navbar({ toggleSidebar }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-4 py-3 sm:py-4 md:py-5 lg:py-6 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-base sm:text-lg md:text-xl font-semibold">SkillNet</span>
        </div>

        {/* Hamburger Menu (Mobile and Small Tablet) */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              toggleMobileMenu();
              toggleSidebar();
            }}
            className="focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Medium Tablet and Desktop) */}
        <div className="hidden lg:flex ml-6 md:ml-8 lg:ml-12 items-center space-x-2 lg:space-x-3">
          <div className="font-medium text-sm sm:text-base">User management</div>
          <div className="font-medium text-gray-400 font-extrabold">|</div>
          <div className="text-gray-400 text-sm sm:text-base">Glance</div>
        </div>

        {/* Right Side Items (Medium Tablet and Desktop) */}
        <div className="hidden lg:flex items-center space-x-2 sm:space-x-3">
          {/* Notification Bell */}
          <button className="p-1 rounded-full hover:bg-gray-800 transition-colors duration-200 mr-2 md:mr-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-40 sm:w-48 md:w-56 lg:w-64 py-1 sm:py-2 pl-10 pr-4 text-sm text-white border border-white border-opacity-50 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
              placeholder="Search..."
            />
          </div>

          {/* Ban Users Button */}
          <button className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium border border-white border-opacity-50 rounded-md hover:bg-gray-700 transition-colors duration-200 flex items-center whitespace-nowrap">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M5 5L19 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Ban users
          </button>

          {/* User Profile */}
          <div className="flex items-center border border-black border-opacity-50 rounded-md p-1.5 bg-[#161716] transition-colors duration-200 hover:bg-gray-800">
            <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium overflow-hidden mr-2 flex-shrink-0">
              <img
                src="https://via.placeholder.com/32"
                alt="User avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden sm:inline-block text-xs sm:text-sm font-medium truncate max-w-[100px] md:max-w-[150px]">
              osatuyipikin.braavos.eth
            </span>
            <button className="ml-1 sm:ml-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile and Small Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black p-4 space-y-3 border-t border-gray-800 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="font-medium text-sm sm:text-base">User management</div>
              <div className="text-gray-400 text-sm sm:text-base">Glance</div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3 mt-3">
              {/* Notification Bell (Mobile) */}
              <button className="p-1 rounded-full hover:bg-gray-800 transition-colors duration-200">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              
              {/* Ban Users Button (Mobile) */}
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium border border-white border-opacity-50 rounded-md hover:bg-gray-700 transition-colors duration-200 flex items-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 5L19 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Ban users
              </button>
              
              {/* User Profile (Mobile) */}
              <div className="flex items-center ml-auto border border-black border-opacity-50 rounded-md p-1.5 bg-[#161716]">
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium overflow-hidden mr-2">
                  <img
                    src="https://via.placeholder.com/32"
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium truncate max-w-[80px] sm:max-w-[120px]">
                  osatuyipikin...
                </span>
              </div>
            </div>
            
            {/* Search Bar (Mobile) */}
            <div className="relative block mt-3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full py-1.5 sm:py-2 pl-10 pr-4 text-sm text-white border border-white border-opacity-50 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;