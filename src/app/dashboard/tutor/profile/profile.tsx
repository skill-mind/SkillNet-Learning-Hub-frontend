import profilePic from "../../../../../public/dashboardProfile.svg";
import TutorCourse from "../../../../../public/image.png";
import TutorReview from "../../../../../public/tutorreview.png";
import ProfileEditModal from "./profile-edit-modal"

import Image from "next/image";
import { Copy } from "lucide-react";
const Profile = () => {
  return (
    <div className="font-Ubuntu mb-16 md:mb-32 Sans px-8 w-full md:w-[900px]  scrollbar-hidden">
      <div className=" w-full">
        <div className="relative w-[111px] h-[111px] rounded-full overflow-hidden">
          <Image
            src={profilePic}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-3 md:flex-col">
          <div className="w-full flex justify-between">

            <div className="flex flex-col gap-1">
              <h2 className="font-[600] text-gray-100">Miss Flora Osatuyi</h2>
              <p className="text-sm font-Ubuntu Sans font-[400]  text-gray-300">
                Product Designer
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <ProfileEditModal />
              
              <div className="border-[1px] flex-row flex w-fit h-fit py-2 px-4 gap-4 rounded-[48px] text-gray-300 leading-[19.2px]">
                <p>0X12345...</p>
                <Copy width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] w-full h-auto md:w-[900px] md:h-[105px] p-[24px] rounded-[16px] mt-8">
        <p className="font-[400] text-gray-300 leading-[19.2px] text-sm ">
          Flora is a talented product designer with 3+ years of experience
          creating functional, visually polished (FPV) designs. She also tutors
          aspiring designers, simplifying UI and product design concepts through
          hands-on learning. Passionate about blending creativity and usability,
          Flora helps her students and projects thrive in today’s fast-paced
          digital world.
        </p>
      </div>

      <h3 className="font-[400] mt-16 text-gray-300 text-md">
        Courses Offered
      </h3>

      <div className="bg-[#1E1E1E] w-full h-auto md:w-[900px] md:h-[218px] p-[24px] rounded-[16px] mt-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="relative w-full md:w-[300px] h-[170px]  overflow-hidden">
            <Image
              src={TutorCourse}
              alt="Profile"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between w-full md:w-[500px]">
              <div className="flex gap-2 flex-col">
                <h2 className="font-[600] text-sm text-gray-100">
                  Design made simple
                </h2>
                <p className="text-xs font-Ubuntu Sans font-[400]  text-sky-300">
                  Video/Note guides available
                </p>
              </div>
              <h3 className="text-xs text-gray-100 bg-[#2D2E2D] px-[14px] h-[32px] py-[4px] w-[82px] text-center flex items-center rounded-[48px] ">
                Published
              </h3>
            </div>
            <div className="font-[500] flex justify-between md:w-[500px]">
              <p className="text-xs flex gap-2  text-gray-500">
                Enrollment:
                <span className="text-gray-100">20 Learners</span>{" "}
              </p>
              <p className="text-xs flex gap-2 text-gray-500">
                Rating:
                <span className="text-gray-100">4.5/5</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-[400] mt-16 text-gray-300 text-md">Reviews</h3>

        <div className="flex justify-between items-center">
          <div className=" flex gap-5 mt-8">
            <div className="relative w-[41px] h-[41px] flex-shrink-0 overflow-hidden">
              <Image
                src={TutorReview}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="text-gray-500">Benedict</h3>
              <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-center items-start w-full h-auto md:w-[830px]">
                <p className="text-xs text-gray-100">
                  The course is a must take for anyone looking to start their
                  tech journey in design. A solid 5/5 rating for me
                </p>
                <p className="text-xs items-center flex gap-2  text-gray-500">
                  Rating:
                  <span className="text-gray-100 text-lg">5/5</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
