"use client";

import { useState } from "react";
import { Edit, Pencil } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import profilePic from "../../../../../public/dashboardProfile.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProfileEditModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Miss Flora Okafor",
    title: "Product Designer",
    about:
      "Flora is a talented product designer with 3+ years of experience creating functional, visually polished (PPV) designs. She also tutors aspiring designers, simplifying UI and creative design concepts through hands-on learning. Passionate about blending creativity and usability, Flora helps her students and projects thrive in today's fast-paced digital world.",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleEditAbout = () => setIsEditingAbout(!isEditingAbout);

  const handleInputChange = (
    field: keyof typeof profileData,
    value: string
  ) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving profile data:", profileData);
    closeModal();
  };

  return (
    <div>
      {/* Edit Button */}

      <div
        onClick={openModal}
        className="hover:cursor-pointer flex py-2 px-4 border-[1px] gap-2 rounded-[48px]"
      >
        <Edit width={20} height={20} />
        <p className="">Edit</p>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="bg-[#1a1a1a] rounded-lg w-[75%] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              {/* Profile Picture */}
              <div className="flex justify-start mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-[#f8c4c4]">
                    <Image
                      src={profilePic}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs text-gray-400">Enter name</label>
                <Input
                  value={profileData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-[#2a2a2a] border-0 text-white"
                />
              </div>

              {/* Title Input */}
              <div className="space-y-2">
                <label className="text-xs text-gray-400">Enter title</label>
                <Input
                  value={profileData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="bg-[#2a2a2a] border-0 text-white"
                />
              </div>

              {/* About Section */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">About</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={toggleEditAbout}
                      className="text-gray-400 flex flex-row items-center justify-center gap-2 hover:text-white"
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <span className="text-xl">+</span>
                    </button>
                  </div>
                </div>

                {isEditingAbout ? (
                  <Textarea
                    value={profileData.about}
                    onChange={(e) => handleInputChange("about", e.target.value)}
                    className="bg-[#2a2a2a] border-0 text-white min-h-[120px]"
                  />
                ) : (
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {profileData.about}
                  </p>
                )}
              </div>

              {/* Save Button */}
              <div>
                <Button
                  onClick={handleSave}
                  className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white uppercase text-xs font-medium px-6"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
