import React from "react";

function Page() {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        {/* Stats Cards */}







        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
  {/* Total Users Card */}
  <div className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center sm:flex-row sm:items-center justify-between">
    <div className="bg-blue-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-0 sm:mr-4 mb-2 sm:mb-0">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.75 0.25L25.75 3.25L3.25 25.75L0.25 22.75L22.75 0.25ZM5.5 1C7.99 1 10 3.01 10 5.5C10 7.99 7.99 10 5.5 10C3.01 10 1 7.99 1 5.5C1 3.01 3.01 1 5.5 1ZM20.5 16C22.99 16 25 18.01 25 20.5C25 22.99 22.99 25 20.5 25C18.01 25 16 22.99 16 20.5C16 18.01 18.01 16 20.5 16ZM5.5 4C4.675 4 4 4.675 4 5.5C4 6.325 4.675 7 5.5 7C6.325 7 7 6.325 7 5.5C7 4.675 6.325 4 5.5 4ZM20.5 19C19.675 19 19 19.675 19 20.5C19 21.325 19.675 22 20.5 22C21.325 22 22 21.325 22 20.5C22 19.675 21.325 19 20.5 19Z"
          fill="#3498DB"
        />
      </svg>
    </div>
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold">1273</div>
      <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Total Users</div>
    </div>
  </div>

  {/* Active Courses Card */}
  <div className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center sm:flex-row sm:items-center justify-between">
    <div className="bg-purple-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-0 sm:mr-4 mb-2 sm:mb-0">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 9C30.87 9 31.575 9.3 32.13 9.885C32.7 10.5 33 11.175 33 12V28.5C33 29.325 32.7 30 32.13 30.615C31.575 31.2 30.87 31.5 30 31.5H6C5.13 31.5 4.425 31.2 3.87 30.615C3.3 30 3 29.325 3 28.5V12C3 11.175 3.3 10.5 3.87 9.885C4.425 9.3 5.13 9 6 9H12V6C12 5.13 12.3 4.425 12.87 3.87C13.425 3.3 14.13 3 15 3H21C21.87 3 22.575 3.3 23.13 3.87C23.7 4.425 24 5.13 24 6V9H30ZM6 12V28.5H30V12H6ZM21 9V6H15V9H21Z"
          fill="#BB6BD9"
        />
      </svg>
    </div>
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold">50</div>
      <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Active Courses</div>
    </div>
  </div>

  {/* Certifications Card */}
  <div className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center sm:flex-row sm:items-center justify-between">
    <div className="bg-purple-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-0 sm:mr-4 mb-2 sm:mb-0">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 9C30.87 9 31.575 9.3 32.13 9.885C32.7 10.5 33 11.175 33 12V28.5C33 29.325 32.7 30 32.13 30.615C31.575 31.2 30.87 31.5 30 31.5H6C5.13 31.5 4.425 31.2 3.87 30.615C3.3 30 3 29.325 3 28.5V12C3 11.175 3.3 10.5 3.87 9.885C4.425 9.3 5.13 9 6 9H12V6C12 5.13 12.3 4.425 12.87 3.87C13.425 3.3 14.13 3 15 3H21C21.87 3 22.575 3.3 23.13 3.87C23.7 4.425 24 5.13 24 6V9H30ZM6 12V28.5H30V12H6ZM21 9V6H15V9H21Z"
          fill="#BB6BD9"
        />
      </svg>
    </div>
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold">150</div>
      <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Certifications</div>
    </div>
  </div>

  {/* Platform Revenue Card */}
  <div className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center sm:flex-row sm:items-center justify-between">
    <div className="bg-amber-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-0 sm:mr-4 mb-2 sm:mb-0">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 3H6C4.35 3 3 4.35 3 6V33L9 27H30C31.65 27 33 25.65 33 24V6C33 4.35 31.65 3 30 3ZM30 24H7.8L6 25.8V6H30V24Z"
          fill="#F39C12"
        />
      </svg>
    </div>
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold">17</div>
      <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Platform Revenue</div>
    </div>
  </div>
</div>




        

        {/* User Management Section */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">User Management</h2>

        {/* Tabs */}
        <div className="flex flex-wrap overflow-x-auto mb-4 sm:mb-6 border-b border-gray-800 px-4 sm:px-6 md:px-8">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-t-lg mr-1 mb-1">
            Job Seekers (432)
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-t-lg mr-1 mb-1">
            Employers (55)
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-t-lg mr-1 mb-1">
            Tutors (78)
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-t-lg mr-1 mb-1">
            Institutions (21)
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-t-lg mb-1">
            Banned Users (7)
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Wallet Address
                </th>
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Registration Date
                </th>
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Courses Taken
                </th>
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Jobs Applied
                </th>
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-gray-800">
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Flora Osakuyi</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">0x71C...F3E2</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Feb 15, 2025</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">5</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">12</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                <span className="px-5 py-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-gray-800 text-white">
                Active
                  </span>
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap flex space-x-2">
                  <button className="px-2 sm:px-3 py-1 sm:py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm">
                    View
                  </button>
                  <button className="px-2 sm:px-3 py-1 sm:py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm">
                    Ban
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-gray-800">
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Ben Ejembi</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">0x82A...DAF1</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Jan 27, 2025</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">8</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">7</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <span className="px-5 py-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-gray-800 text-white">
                    Active
                  </span>
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap flex space-x-2">
                  <button className="px-2 sm:px-3 py-1 sm:py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm">
                    View
                  </button>
                  <button className="px-2 sm:px-3 py-1 sm:py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm">
                    Ban
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Mobile view for table rows */}
          <div className="md:hidden space-y-4 mt-4">
            {/* User Card 1 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Flora Osakuyi</h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-900 text-green-300">
                  Active
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Wallet Address:</span>
                  <span>0x71C...F3E2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Registration Date:</span>
                  <span>Feb 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Courses Taken:</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Jobs Applied:</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span>Active</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                    View
                  </button>
                  <button className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                    Ban
                  </button>
                </div>
              </div>
            </div>

            {/* User Card 2 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Ben Ejembi</h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-900 text-green-300">
                  Active
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Wallet Address:</span>
                  <span>0x82A...DAF1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Registration Date:</span>
                  <span>Jan 27, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Courses Taken:</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Jobs Applied:</span>
                  <span>7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span>Active</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                    View
                  </button>
                  <button className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                    Ban
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-4 sm:mt-6 text-right">
          <button className="text-gray-400 hover:text-white text-xs sm:text-sm lg:text-base">
            View All
          </button>
        </div>

        {/* User Details Section */}
        <div className="mt-12">
          <h1 className="text-xl font-semibold mb-6">User Detail</h1>

          {/* User Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-white p-1 mr-4 mb-4 md:mb-0">
              <div className="w-full h-full rounded-full flex items-center justify-center bg-white">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4L2 24L24 44L46 24L24 4Z"
                    fill="#4FD1C5"
                  />
                  <path
                    d="M24 44L46 24L24 4V44Z"
                    fill="#F56565"
                  />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Company Name</h2>
              <p className="text-gray-400">Account Type</p>

              {/* Company Details */}
              <div className="flex flex-col md:flex-row mt-2 space-y-2 md:space-y-0 md:space-x-8">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Company Size:</span>
                  <span>101-500 Employees</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Location:</span>
                  <span>Kaduna, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Joined:</span>
                  <span>Jan 12, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
            {/* Wallet Address */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-bold">0xD8E...C9F5</h3>
              <p className="text-gray-400 text-sm">Wallet Address</p>
            </div>

            {/* Jobs Posted */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-bold">24</h3>
              <p className="text-gray-400 text-sm">Job Posted</p>
            </div>

            {/* Applicants Reviewed */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-bold">187</h3>
              <p className="text-gray-400 text-sm">Applicants Reviewed</p>
            </div>

            {/* People Hired */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-bold">12</h3>
              <p className="text-gray-400 text-sm">People Hired</p>
            </div>

            {/* Exams Created */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-bold">8</h3>
              <p className="text-gray-400 text-sm">Exams Created</p>
            </div>
          </div>

          {/* Active Job Listings */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Job Listings</h2>

            {/* Table (responsive) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full bg-black">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Posted Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Applications
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Interviews
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {/* Job 1 */}
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">Senior Blockchain Dev</td>
                    <td className="px-4 py-4 whitespace-nowrap">Feb 15, 2025</td>
                    <td className="px-4 py-4 whitespace-nowrap">24</td>
                    <td className="px-4 py-4 whitespace-nowrap">5</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-5 py-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-gray-800 text-white">
                    Active
                      </span>
                    </td>
                  </tr>

                  {/* Job 2 */}
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">Product Designer</td>
                    <td className="px-4 py-4 whitespace-nowrap">Feb 10, 2025</td>
                    <td className="px-4 py-4 whitespace-nowrap">18</td>
                    <td className="px-4 py-4 whitespace-nowrap">3</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-5 py-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-gray-800 text-white">
                    Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile view for job listings */}
            <div className="md:hidden space-y-4 mt-4">
              {/* Job Card 1 */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Senior Blockchain Dev</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-900 text-green-300">
                    Active
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Posted:</span>
                    <span>Feb 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Applications:</span>
                    <span>24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Interviews:</span>
                    <span>5</span>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Product Designer</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-900 text-green-300">
                    Active
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Posted:</span>
                    <span>Feb 10, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Applications:</span>
                    <span>18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Interviews:</span>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Hires */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Recent Hires</h2>

            {/* Table (responsive) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full bg-black">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Employee Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Hire Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Certificate Verification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {/* Hire 1 */}
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">Ben Ejembi</td>
                    <td className="px-4 py-4 whitespace-nowrap">UI Designer</td>
                    <td className="px-4 py-4 whitespace-nowrap">Feb 15, 2025</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-5 py-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-gray-800 text-white">
                    Blockchain Verified
                      </span>
                    </td>
                  </tr>

                  {/* Hire 2 */}
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">Flora Osatuyi</td>
                    <td className="px-4 py-4 whitespace-nowrap">UX Researcher</td>
                    <td className="px-4 py-4 whitespace-nowrap">Feb 05, 2025</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-5 py-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-gray-800 text-white">
                    Blockchain Verified
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile view for recent hires */}
            <div className="md:hidden space-y-4 mt-4">
              {/* Hire Card 1 */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Ben Ejembi</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-900 text-green-300">
                    Blockchain Verified
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Position:</span>
                    <span>UI Designer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hire Date:</span>
                    <span>Feb 15, 2025</span>
                  </div>
                </div>
              </div>

              {/* Hire Card 2 */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Flora Osatuyi</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-900 text-green-300">
                    Blockchain Verified
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Position:</span>
                    <span>UX Researcher</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hire Date:</span>
                    <span>Feb 05, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;