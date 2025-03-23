"use client";

import React, { useState } from 'react';

// Define types for better type checking
interface Course {
  name: string;
  status: 'In progress' | 'Completed';
}

interface Employer {
  id: number;
  companyName: string;
  walletAddress: string;
  joinDate: string;
  jobsPosted: number;
  status: 'Active' | 'Pending';
  courses: Course[];
}

const EmployersList = () => {
  const [selectedEmployer, setSelectedEmployer] = useState<Employer | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const employers: Employer[] = [
    {
      id: 1,
      companyName: 'SkillNet',
      walletAddress: '0x71C...F3E2',
      joinDate: 'Feb 15, 2025',
      jobsPosted: 14,
      status: 'Active',
      courses: [
        { name: 'Blockchain Development Bootcamp: Zero to Hero', status: 'In progress' },
        { name: 'Solidity Basic Course', status: 'In progress' },
        { name: 'Technical Writing: The Ultimate Approach', status: 'Completed' },
        { name: 'Data Science Guru', status: 'Completed' },
        { name: 'Design Basics', status: 'Completed' }
      ]
    },
    {
      id: 2,
      companyName: '3reeHaus',
      walletAddress: '0xF7A...B2C3',
      joinDate: 'Feb 12, 2025',
      jobsPosted: 15,
      status: 'Pending',
      courses: [
        { name: 'Web3 Fundamentals', status: 'In progress' },
        { name: 'DeFi Principles', status: 'Completed' }
      ]
    }
  ];

  const handleViewEmployer = (employer: Employer) => {
    setSelectedEmployer(employer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6 relative">
      {/* Header */}
      <h1 className="text-xl font-medium mb-8">Employers List</h1>

      {/* Table header */}
      <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 border-b border-gray-800">
        <div className="text-sm text-gray-300">Company Name</div>
        <div className="text-sm text-gray-300">Wallet Address</div>
        <div className="text-sm text-gray-300">Registered</div>
        <div className="text-sm text-gray-300">Jobs Posted</div>
        <div className="text-sm text-gray-300">Status</div>
        <div className="text-sm text-gray-300">Actions</div>
      </div>

      {/* Table rows */}
      {employers.map((employer) => (
        <div key={employer.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 border-b border-gray-800">
          <div className="overflow-hidden overflow-ellipsis">{employer.companyName}</div>
          <div className="overflow-hidden overflow-ellipsis">{employer.walletAddress}</div>
          <div>{employer.joinDate}</div>
          <div>{employer.jobsPosted}</div>
          <div>{employer.status}</div>
          <div>
            <button
              className="px-4 py-1 rounded-full bg-gray-800 text-sm"
              onClick={() => handleViewEmployer(employer)}
            >
              View
            </button>
          </div>
        </div>
      ))}
      </div>

      {/* View All button */}
      <div className="flex justify-end mt-4">
        <button className="text-sm">View All</button>
      </div>

      {/* Employer Modal */}
      {showModal && selectedEmployer && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg w-full max-w-2xl mx-4 border border-gray-800 relative">
            {/* Modal header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-800 sticky top-0">
              <h2 className="text-lg">Employer</h2>
              <button
                onClick={closeModal}
                className="text-gray-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Modal content */}
            <div className="p-5 space-y-6 overflow-y-auto max-h-[calc(100vh-100px)]">
              {/* Employer details */}
              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Company Name</span> <span className="text-red-500">&#x2013;</span> {selectedEmployer.companyName}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Wallet Address</span> <span className="text-red-500">&#x2013;</span> {selectedEmployer.walletAddress}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Join Date</span> <span className="text-red-500">&#x2013;</span> {selectedEmployer.joinDate}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Job Posted</span> <span className="text-red-500">&#x2013;</span> {selectedEmployer.jobsPosted}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  {selectedEmployer.courses.map((course, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded">
                      <p className="text-sm font-medium">{course.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{course.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Status</span> <span className="text-red-500">&#x2013;</span> {selectedEmployer.status}
                </p>
              </div>

              {/* Ban user button */}
              <div className="pt-4">
                <button className="w-full py-3 border border-gray-700 rounded text-white hover:bg-gray-800 transition">
                  BAN USER
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployersList;
