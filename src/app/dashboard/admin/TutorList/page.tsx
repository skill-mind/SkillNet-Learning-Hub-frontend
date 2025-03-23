"use client";

import React, { useState } from 'react';

interface Course {
  name: string;
  status: string;
}

interface Tutor {
  id: number;
  name: string;
  expertise: string;
  walletAddress: string;
  rating: number;
  courses: number;
  status: string;
  coursesList: Course[];
}

const TutorList = () => {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const tutors: Tutor[] = [
    {
      id: 1,
      name: 'Flora Osaluyi',
      expertise: 'Web Development',
      walletAddress: '0x71C...F3E2',
      rating: 4.8,
      courses: 14,
      status: 'Active',
      coursesList: [
        { name: 'Blockchain Development Bootcamp: Zero to Hero', status: 'In progress' },
        { name: 'Solidity Basic Course', status: 'In progress' },
        { name: 'Technical Writing: The Ultimate Approach', status: 'Completed' },
        { name: 'Data Science Guru', status: 'Completed' },
        { name: 'Design Basics', status: 'Completed' },
      ],
    },
    {
      id: 2,
      name: 'Ben Ejembi',
      expertise: 'Data Science',
      walletAddress: '0xA3B...D4E5',
      rating: 4.4,
      courses: 8,
      status: 'Pending',
      coursesList: [
        { name: 'Python for Data Science', status: 'In progress' },
        { name: 'Machine Learning Fundamentals', status: 'Completed' },
      ],
    },
  ];

  const handleViewTutor = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6 relative">
      {/* Header */}
      <h1 className="text-xl font-medium mb-8">Tutor List</h1>

      {/* Table header */}
      <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 border-b border-gray-800">
        <div className="text-sm text-gray-300">Name</div>
        <div className="text-sm text-gray-300">Expertise</div>
        <div className="text-sm text-gray-300">Rating</div>
        <div className="text-sm text-gray-300">Courses</div>
        <div className="text-sm text-gray-300">Status</div>
        <div className="text-sm text-gray-300">Actions</div>
      </div>

      {/* Table rows */}
      {tutors.map((tutor) => (
        <div
          key={tutor.id}
          className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 border-b border-gray-800"
        >
          <div className="overflow-hidden overflow-ellipsis">{tutor.name}</div>
          <div className="overflow-hidden overflow-ellipsis">{tutor.expertise}</div>
          <div>{tutor.rating}</div>
          <div>{tutor.courses}</div>
          <div>{tutor.status}</div>
          <div>
            <button
              className="px-4 py-1 rounded-full bg-gray-800 text-sm"
              onClick={() => handleViewTutor(tutor)}
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

      {/* Tutor Detail Modal */}
      {showModal && selectedTutor && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg w-full max-w-2xl mx-4 border border-gray-800 relative">
            {/* Modal header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-800 sticky top-0">
              <h2 className="text-lg">Tutor</h2>
              <button onClick={closeModal} className="text-gray-300 hover:text-white">
                ✕
              </button>
            </div>

            {/* Modal content */}
            <div className="p-5 space-y-6 overflow-y-auto max-h-[calc(100vh-100px)]">
              {/* Tutor details */}
              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Name</span>{' '}
                  <span className="text-red-500">–</span> {selectedTutor.name}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Wallet Address</span>{' '}
                  <span className="text-red-500">–</span> {selectedTutor.walletAddress}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Expertise</span>{' '}
                  <span className="text-red-500">–</span> {selectedTutor.expertise}
                </p>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Courses Created</span>{' '}
                  <span className="text-red-500">–</span> {selectedTutor.courses}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  {selectedTutor.coursesList.map((course, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded">
                      <p className="text-sm font-medium">{course.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{course.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-800 pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Rating</span>{' '}
                  <span className="text-red-500">–</span> {selectedTutor.rating}
                </p>
              </div>

              <div className="pb-4">
                <p className="py-2">
                  <span className="text-gray-400">Status</span>{' '}
                  <span className="text-red-500">–</span> {selectedTutor.status}
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

export default TutorList;
