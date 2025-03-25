"use client";

import React, { useState } from 'react';

// Define types for better type checking
interface Course {
  name: string;
  status: string;
}

interface Institution {
  id: number;
  name: string;
  location: string;
  walletAddress: string;
  examsCreated: number;
  status: string;
  courses: Course[];
}

const InstitutionsList = () => {
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const institutions: Institution[] = [
    {
      id: 1,
      name: 'SkillNet',
      location: 'Kaduna, Nigeria',
      walletAddress: '0x71C...F3E2',
      examsCreated: 5,
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
      name: 'Buidl',
      location: 'Kaduna, Nigeria',
      walletAddress: '0xF4B...A1D3',
      examsCreated: 18,
      status: 'Active',
      courses: [
        { name: 'Web3 Fundamentals', status: 'In progress' },
        { name: 'DeFi Principles', status: 'Completed' }
      ]
    }
  ];

  const handleViewInstitution = (institution: Institution) => {
    setSelectedInstitution(institution);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6 relative">
      {/* Header */}
      <h1 className="text-xl font-medium mb-8">Institutions List</h1>

      {/* Table header */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 border-b border-gray-800">
          <div className="text-sm text-gray-300">Institution Name</div>
          <div className="text-sm text-gray-300">Location</div>
          <div className="text-sm text-gray-300">Exams Created</div>
          <div className="text-sm text-gray-300">Status</div>
          <div className="text-sm text-gray-300">Actions</div>
        </div>

        {/* Table rows */}
        {institutions.map((institution) => (
          <div key={institution.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 border-b border-gray-800">
            <div className="overflow-hidden overflow-ellipsis">{institution.name}</div>
            <div className="overflow-hidden overflow-ellipsis">{institution.location}</div>
            <div>{institution.examsCreated}</div>
            <div>{institution.status}</div>
            <div>
              <button
                className="px-4 py-1 rounded-full bg-gray-800 text-sm"
                onClick={() => handleViewInstitution(institution)}
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

      {/* Institution Modal */}
      {showModal && selectedInstitution && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg w-full max-w-2xl mx-4 border border-gray-800 relative">
            {/* Modal header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-800 sticky top-0">
              <h2 className="text-lg">Institution</h2>
              <button
                onClick={closeModal}
                className="text-gray-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Modal content */}
            <div className="p-5 space-y-6 overflow-y-auto max-h-[calc(100vh-100px)]">
              {/* Institution details */}
              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Name</span> <span className="text-red-500">&#x2013;</span> {selectedInstitution.name}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Wallet Address</span> <span className="text-red-500">&#x2013;</span> {selectedInstitution.walletAddress}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Location</span> <span className="text-red-500">&#x2013;</span> {selectedInstitution.location}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Exams Created</span> <span className="text-red-500">&#x2013;</span> {selectedInstitution.examsCreated}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  {selectedInstitution.courses.map((course, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded">
                      <p className="text-sm font-medium">{course.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{course.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Status</span> <span className="text-red-500">&#x2013;</span> {selectedInstitution.status}
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

export default InstitutionsList;
