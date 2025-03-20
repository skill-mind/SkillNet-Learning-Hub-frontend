import Image from "next/image";
import walletIcon from "../../../../../../public/walletDashboard.svg";

const paymentNotifications = [
  {
    message: "$15 was paid to your account by 0x411ad3c6abf11",
    time: "15 hours ago",
  },
  {
    message: "$150 was paid to your account by 0x411ad3c6abf11",
    time: "1 week ago",
  },
];

const Payment = () => {
  return (
    <>
      {paymentNotifications.map((paymentNotification, index) => (
        <div
          key={index}
          className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center py-3 border-b-[1px] border-[#2D2E2D] "
        >
          <div className="flex items-center gap-[18px] ">
            <span className=" h-12 w-12 rounded-full bg-[#2D2E2D] flex items-center flex-shrink-0 justify-center ">
              <Image
                src={walletIcon}
                alt="students"
                height={100}
                width={100}
                className="w-6 h-6 object-contain "
              />
            </span>
            <div>
              <h1 className="text-[#CCCCCC] text-sm sm:text-base font-medium ">
                {" "}
                {paymentNotification.message}{" "}
              </h1>
            </div>
          </div>

          <p className="text-[#6E6E6E] text-sm sm:text-base font-medium ">
            {paymentNotification.time}
          </p>
        </div>
      ))}
    </>
  );
};

export default Payment;
