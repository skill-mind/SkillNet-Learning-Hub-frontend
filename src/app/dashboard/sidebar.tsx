"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isActive = (href: string) => {
    return (
      activeLink === `/dashboard/${href}` ||
      activeLink === `/dashboard/${href}/`
    );
  };

  return (
    <div className="py-9 h-screen pt-12 bg-[#161716] text-white flex flex-col md:w-72 w-full mt-32 sm:mt-0">
      {/* Large margin-top for mobile screens: mt-32 sm:mt-0 */}

      {/* User Dropdown */}
      <div className="px-4 mb-6">
        <button
          className="flex items-center justify-between w-full px-3 py-2 bg-gray-800 rounded-md"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mr-2 flex items-center justify-center">
              <span className="text-white text-xs">S</span>
            </div>
            <span className="text-lg font-semibold">SkillNet Admin</span>
          </div>
          <svg
            className={`w-5 h-5 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-4">
        <nav>
          <ul className={`space-y-2 ${isDropdownOpen ? "block" : "hidden"}`}>
            {/* User Management */}
            <li>
              <Link
                href="/dashboard/User_Management"
                className={`flex items-center px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 ${
                  isActive("User_Management") ? "bg-gray-700 text-white" : ""
                }`}
              >
                {/* <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg> */}

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.1665H10.0075"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6663 7.0835V11.2502C16.6663 14.3928 16.6663 15.9642 15.69 16.9405C14.7138 17.9168 13.1423 17.9168 9.99967 17.9168C6.85697 17.9168 5.28563 17.9168 4.30932 16.9405C3.33301 15.9642 3.33301 14.3928 3.33301 11.2502V7.0835"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M18.3337 8.75016L14.7144 5.27973C12.4922 3.1489 11.3811 2.0835 10.0003 2.0835C8.61958 2.0835 7.5085 3.1489 5.28628 5.27973L1.66699 8.75016"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <span className="pl-1">User management</span>
              </Link>
            </li>

            {/* Job Seekers - Active */}
            <li>
              <Link
                href="/dashboard/JobSeekersList"
                className={`flex items-center px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 ${
                  isActive("JobSeekersList") ? "bg-gray-700 text-white" : ""
                }`}
              >
                {/* <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg> */}

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.17241 17.5001H8.00488C5.01717 17.5001 3.52332 17.5001 2.59515 16.5544C1.66699 15.6086 1.66699 14.0863 1.66699 11.0418C1.66699 7.99735 1.66699 6.4751 2.59515 5.5293C3.52332 4.5835 5.01717 4.5835 8.00488 4.5835H11.1738C14.1615 4.5835 15.6554 4.5835 16.5836 5.5293C17.2977 6.25699 17.4623 7.32591 17.5003 9.16681"
                    stroke="white"
                    stroke-width="1.25"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.6811 16.6859L18.3337 18.3332M17.5445 14.6053C17.5445 12.9823 16.2287 11.6665 14.6057 11.6665C12.9827 11.6665 11.667 12.9823 11.667 14.6053C11.667 16.2283 12.9827 17.5441 14.6057 17.5441C16.2287 17.5441 17.5445 16.2283 17.5445 14.6053Z"
                    stroke="white"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.333 4.58317L13.2502 4.32562C12.8377 3.04225 12.6315 2.40056 12.1404 2.03353C11.6494 1.6665 10.9971 1.6665 9.69262 1.6665H9.47337C8.16887 1.6665 7.51663 1.6665 7.0256 2.03353C6.53456 2.40056 6.3283 3.04225 5.91579 4.32562L5.83301 4.58317"
                    stroke="white"
                    stroke-width="1.25"
                  />
                </svg>

                <span className="pl-1">Job seekers</span>
              </Link>
            </li>

            {/* Employer Management */}
            <li>
              <Link
                href="/dashboard/EmployersList"
                className={`flex items-center px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 ${
                  isActive("EmployersList") ? "bg-gray-700 text-white" : ""
                }`}
              >
                {/* <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg> */}

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.18457 5.65527V16.4886"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9.16699 16.2498C8.98174 16.2498 8.60324 16.0481 7.84638 15.6447C7.07708 15.2347 6.01424 14.8267 4.65241 14.5706C3.12473 14.2833 2.36089 14.1397 2.01394 13.7155C1.66699 13.2914 1.66699 12.6121 1.66699 11.2535V5.91363C1.66699 4.42778 1.66699 3.68485 2.20758 3.22735C2.74817 2.76984 3.38292 2.88921 4.65241 3.12794C7.15831 3.59917 8.65183 4.58488 9.16699 5.15079C9.68216 4.58488 11.1757 3.59917 13.6816 3.12794C14.9511 2.88921 15.5858 2.76984 16.1264 3.22735C16.667 3.68485 16.667 4.42778 16.667 5.91363V8.33317"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.3869 10.7826L17.9661 11.3596C18.4562 11.8476 18.4562 12.6392 17.9661 13.1272L14.9313 16.2069C14.6925 16.4446 14.3872 16.605 14.0553 16.6667L12.1744 17.0734C11.8774 17.1376 11.6129 16.875 11.6765 16.579L12.0769 14.7163C12.1389 14.3857 12.2999 14.0816 12.5386 13.8438L15.612 10.7826C16.1022 10.2945 16.8968 10.2945 17.3869 10.7826Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="pl-1">Employer management</span>
              </Link>
            </li>

            {/* Tutor Management */}
            <li>
              <Link
                href="/dashboard/TutorList"
                className={`flex items-center px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 ${
                  isActive("TutorList") ? "bg-gray-700 text-white" : ""
                }`}
              >
                {/* <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg> */}

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6666 12.5C16.6666 14.0532 16.6666 14.8297 16.4129 15.4423C16.0746 16.259 15.4256 16.9079 14.6089 17.2462C13.9963 17.5 13.2197 17.5 11.6666 17.5H9.16663C6.02395 17.5 4.45258 17.5 3.47628 16.5237C2.49996 15.5473 2.49998 13.976 2.5 10.8332L2.50005 5.83319C2.50007 3.99232 3.9924 2.5 5.83328 2.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.33395 7.0835L8.69537 10.3909C8.72987 10.6674 8.89978 10.9084 9.15578 11.0184C9.72745 11.2639 10.7981 11.6668 11.6673 11.6668C12.5365 11.6668 13.6072 11.2639 14.1789 11.0184C14.4349 10.9084 14.6048 10.6674 14.6393 10.3909L15.0006 7.0835M17.084 6.25016V9.39116M11.6673 3.3335L5.83398 5.8335L11.6673 8.3335L17.5006 5.8335L11.6673 3.3335Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="pl-1">Tutor management</span>
              </Link>
            </li>

            {/* Institution Management */}
            <li>
              <Link
                href="/dashboard/InstitutionsList"
                className={`flex items-center px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 ${
                  isActive("InstitutionsList") ? "bg-gray-700 text-white" : ""
                }`}
              >
                {/* <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg> */}

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.08301 5.00016L6.66634 3.3335L11.2497 5.00016L9.16634 6.25016V7.50016C9.16634 7.50016 8.61076 7.0835 6.66634 7.0835C4.7219 7.0835 4.16634 7.50016 4.16634 7.50016V6.25016L2.08301 5.00016ZM2.08301 5.00016V8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16699 7.0835V7.82424C9.16699 9.25608 8.0477 10.4168 6.66699 10.4168C5.28628 10.4168 4.16699 9.25608 4.16699 7.82424V7.0835"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.7652 9.19117C12.7652 9.19117 13.1692 8.89708 14.5833 8.89708C15.9975 8.89708 16.4015 9.19117 16.4015 9.19117M12.7652 9.19117V8.33333L11.25 7.5L14.5833 6.25L17.9167 7.5L16.4015 8.33333V9.19117M12.7652 9.19117V9.43183C12.7652 10.436 13.5792 11.25 14.5833 11.25C15.5875 11.25 16.4015 10.436 16.4015 9.43183V9.19117"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.65453 13.2717C2.86855 13.7104 0.807749 14.6064 2.06292 15.7274C2.67605 16.275 3.35893 16.6667 4.21747 16.6667H9.11649C9.97507 16.6667 10.6579 16.275 11.2711 15.7274C12.5262 14.6064 10.4654 13.7104 9.67941 13.2717C7.83633 12.2428 5.49765 12.2428 3.65453 13.2717Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.333 16.6668H16.4203C17.0643 16.6668 17.5764 16.3535 18.0363 15.9154C18.9777 15.0186 17.4321 14.3018 16.8426 13.9508C15.7798 13.318 14.4973 13.1717 13.333 13.5119"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="pl-1">Institution management</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-auto px-4 pb-6">
        <Link
          href="#"
          className="flex items-center px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800"
        >
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            ></path>
          </svg>
          <span>AI chat bot</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
