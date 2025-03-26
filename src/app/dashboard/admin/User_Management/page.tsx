import React from "react";

// Reusable Card Component for Stats
interface StatCardProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  bgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  bgColor = "bg-blue-900",
}) => (
  <div className="bg-[#161716] rounded-lg p-4 sm:p-6 flex flex-col items-center sm:flex-row sm:items-center gap-6">
    <div
      className={`${bgColor} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center`}
    >
      {icon}
    </div>
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-xl sm:text-2xl lg:text-3xl font-medium">{value}</div>
      <div className="text-[#FFFFFFCC] text-xs sm:text-sm">
        {label}
      </div>
    </div>
  </div>
);

// Reusable User Status Badge Component
interface UserStatusBadgeProps {
  status: string;
}

const UserStatusBadge: React.FC<UserStatusBadgeProps> = ({ status }) => (
  <span className="px-5 py-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-gray-800 text-white">
    {status}
  </span>
);

// Reusable User Action Buttons Component
interface UserActionButtonsProps {
  onView?: () => void;
  onBan?: () => void;
}

const UserActionButtons: React.FC<UserActionButtonsProps> = ({
  onView,
  onBan,
}) => (
  <div className="flex space-x-2">
    <button
      onClick={onView}
      className="px-2 sm:px-3 py-1 sm:py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm"
    >
      View
    </button>
    <button
      onClick={onBan}
      className="px-2 sm:px-3 py-1 sm:py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm"
    >
      Ban
    </button>
  </div>
);

interface MobileUserCardProps {
  name: string;
  walletAddress: string;
  registrationDate: string;
  coursesTaken: number;
  jobsApplied: number;
  status: string;
}

const MobileUserCard: React.FC<MobileUserCardProps> = ({
  name,
  walletAddress,
  registrationDate,
  coursesTaken,
  jobsApplied,
  status,
}) => (
  <div className="bg-[#161716] p-4 rounded-lg">
    <div className="flex justify-between mb-2">
      <h3 className="font-medium">{name}</h3>
      <span className="px-2 py-0.5 text-xs rounded-full bg-green-900 text-green-300">
        {status}
      </span>
    </div>
    <div className="space-y-1 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-400">Wallet Address:</span>
        <span>{walletAddress}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Registration Date:</span>
        <span>{registrationDate}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Courses Taken:</span>
        <span>{coursesTaken}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Jobs Applied:</span>
        <span>{jobsApplied}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Status:</span>
        <span>{status}</span>
      </div>
      <div className="flex space-x-2 mt-2">
        <UserActionButtons />
      </div>
    </div>
  </div>
);

// Main Page Component
const AdminDashboard: React.FC = () => {
  const UserIcon = (
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
  );

  const CoursesIcon = (
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
  );

  const RevenueIcon = (
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
  );

  const users = [
    {
      name: "Flora Osakuyi",
      walletAddress: "0x71C...F3E2",
      registrationDate: "Feb 15, 2025",
      coursesTaken: 5,
      jobsApplied: 12,
      status: "Active",
    },
    {
      name: "Ben Ejembi",
      walletAddress: "0x82A...DAF1",
      registrationDate: "Jan 27, 2025",
      coursesTaken: 8,
      jobsApplied: 7,
      status: "Active",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-9">
          <StatCard
            icon={UserIcon}
            value={1273}
            label="Total Users"
            bgColor="bg-[#3498DB33]"
          />
          <StatCard
            icon={CoursesIcon}
            value={50}
            label="Active Courses"
            bgColor="bg-[#BB6BD933]"
          />
          <StatCard
            icon={CoursesIcon}
            value={150}
            label="Certifications"
            bgColor="bg-[#BB6BD933]"
          />
          <StatCard
            icon={RevenueIcon}
            value={17}
            label="Platform Revenue"
            bgColor="bg-[#F2994A33]"
          />
        </div>

        {/* User Management Section */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
          User Management
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap overflow-x-auto mb-4 sm:mb-6 border-b border-gray-800 pr-4 sm:pr-6 md:pr-8">
          <button className="px-4 py-2 bg-[#161716] text-white rounded-t-lg mr-1 mb-1">
            Students (432)
          </button>
          <button className="px-4 py-2 hover:bg-[#161716] text-white rounded-t-lg mr-1 mb-1">
            Tutors (78)
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-[#161716] rounded-t-lg mb-1">
            Banned Users (7)
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
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
                  Status
                </th>
                <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    {user.walletAddress}
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    {user.registrationDate}
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    {user.coursesTaken}
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    <UserStatusBadge status={user.status} />
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    <UserActionButtons />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile User Cards */}
        <div className="md:hidden space-y-4 mt-4">
          {users.map((user, index) => (
            <MobileUserCard key={index} {...user} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-4 sm:mt-6 text-right">
          <button className="text-gray-400 hover:text-white text-xs sm:text-sm lg:text-base">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
