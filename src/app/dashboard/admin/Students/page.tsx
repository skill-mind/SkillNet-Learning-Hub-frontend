"use client";

import React, { useState } from 'react';

// Define types for better type checking
interface Certificate {
  name: string;
  status: 'In progress' | 'Completed';
}

interface JobSeeker {
  id: number;
  name: string;
  email: string;
  walletAddress: string;
  registered: string;
  status: 'Active' | 'Pending';
  certificates: Certificate[];
}

const JobSeekerList = () => {
  const [selectedJobSeeker, setSelectedJobSeeker] = useState<JobSeeker | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const jobSeekers: JobSeeker[] = [
    {
      id: 1,
      name: 'Flora Osaluyi',
      email: 'Flora@gmail.com',
      walletAddress: '0x22A...B1F4',
      registered: 'Feb 12, 2025',
      status: 'Active',
      certificates: [
        { name: 'Blockchain Development Bootcamp: Zero to Hero', status: 'In progress' },
        { name: 'Solidity Basic Course', status: 'Completed' },
        { name: 'Technical Writing: The Ultimate Approach', status: 'Completed' }
      ]
    },
    {
      id: 2,
      name: 'Ben Ejembi',
      email: 'Ben@gmail.com',
      walletAddress: '0x45D...C7E3',
      registered: 'Feb 15, 2025',
      status: 'Pending',
      certificates: [
        { name: 'Data Science Guru', status: 'In progress' },
        { name: 'Design Basics', status: 'Completed' }
      ]
    }
  ];

  const handleViewJobSeeker = (jobSeeker: JobSeeker) => {
    setSelectedJobSeeker(jobSeeker);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6 relative">
      {/* Header */}
      <h1 className="text-xl font-medium mb-8">Students List</h1>

      {/* Table header */}
      <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 border-b border-gray-800">
        <div className="text-sm text-gray-300">Name</div>
        <div className="text-sm text-gray-300">Email</div>
        <div className="text-sm text-gray-300">Registered</div>
        <div className="text-sm text-gray-300">Status</div>
        <div className="text-sm text-gray-300">Actions</div>
      </div>

      {/* Table rows */}
      {jobSeekers.map((seeker) => (
        <div key={seeker.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 border-b border-gray-800">
          <div className="overflow-hidden overflow-ellipsis">{seeker.name}</div>
          <div className="overflow-hidden overflow-ellipsis">{seeker.email}</div>
          <div>{seeker.registered}</div>
          <div>{seeker.status}</div>
          <div>
            <button
              className="px-4 py-1 rounded-full bg-gray-800 text-sm"
              onClick={() => handleViewJobSeeker(seeker)}
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

      {/* Job Seeker Modal */}
      {showModal && selectedJobSeeker && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg w-full max-w-2xl mx-4 border border-gray-800 relative">
            {/* Modal header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-800 sticky top-0">
              <h2 className="text-lg">Job Seeker</h2>
              <button
                onClick={closeModal}
                className="text-gray-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Modal content */}
            <div className="p-5 space-y-6 overflow-y-auto max-h-[calc(100vh-100px)]">
              {/* Job Seeker details */}
              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Name</span> <span className="text-red-500">&#x2013;</span> {selectedJobSeeker.name}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Email</span> <span className="text-red-500">&#x2013;</span> {selectedJobSeeker.email}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Wallet Address</span> <span className="text-red-500">&#x2013;</span> {selectedJobSeeker.walletAddress}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Registered</span> <span className="text-red-500">&#x2013;</span> {selectedJobSeeker.registered}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  {selectedJobSeeker.certificates.map((certificate, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded">
                      <p className="text-sm font-medium">{certificate.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{certificate.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Status</span> <span className="text-red-500">&#x2013;</span> {selectedJobSeeker.status}
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

export default JobSeekerList;
