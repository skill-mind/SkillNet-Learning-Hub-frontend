import Image from "next/image";
import speakerIcon from "../../../../../../public/megaphone-02.svg";

const announcementNotifications = [
  {
    heading: "Upcoming Student Assessments",
    message:
      "Don’t forget to prepare your students for the Quarterly Assessment starting Feb 10th, 2025.",
  },
  {
    heading: "Policy Update",
    message:
      "Starting March 1st, 2025, all session reports must be submitted within 24 hours of the session.",
  },
];

const Announcements = () => {
  return (
    <>
      {announcementNotifications.map((announcementNotification, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center p-6 bg-[#161716] rounded-lg "
        >
          <div className="flex items-center gap-[18px] ">
            <span className=" h-12 w-12 rounded-full bg-[#2D2E2D] flex-shrink-0 flex items-center justify-center ">
              <Image
                src={speakerIcon}
                alt="students"
                height={100}
                width={100}
                className="w-6 h-6 object-contain "
              />
            </span>
            <div>
              <h1 className="text-[#CCCCCC] text-sm md:text-base font-medium mb-1 ">
                {" "}
                {announcementNotification.heading}{" "}
              </h1>
              <p className="text-[#6E6E6E] text-sm md:text-base font-medium ">
                {" "}
                {announcementNotification.message}{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Announcements;
