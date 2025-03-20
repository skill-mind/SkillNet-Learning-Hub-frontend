import Image from "next/image";
import studentIcon from "../../../../../../public/studentsDashboard.svg";

const studentNotifications = [
  {
    heading: "Josh joined your design class",
    content: "Welcome them by sending them a warm message",
    time: "3hrs ago",
  },
  {
    heading: "Faith joined your design class",
    content: "Welcome them by sending them a warm message",
    time: "1 day ago",
  },
];

const NewStudent = () => {
  return (
    <>
      {studentNotifications.map((studentNotification, index) => (
        <div
          key={index}
          className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b-[1px] border-[#2D2E2D] gap-2"
        >
          <div className="flex items-start sm:items-center gap-3 sm:gap-[18px]">
            <span className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#2D2E2D] flex items-center justify-center flex-shrink-0">
              <Image
                src={studentIcon}
                alt="students"
                height={100}
                width={100}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </span>
            <div>
              <h1 className="text-[#CCCCCC] text-sm sm:text-base font-medium">
                {studentNotification.heading}
              </h1>
              <p className="text-[#6E6E6E] text-xs sm:text-base font-medium">
                {studentNotification.content}
              </p>
            </div>
          </div>

          <p className="text-[#6E6E6E] text-xs sm:text-base font-medium ml-13 sm:ml-0">
            {studentNotification.time}
          </p>
        </div>
      ))}
    </>
  );
};

export default NewStudent;
