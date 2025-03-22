"use client";

import { useState, useEffect, useRef } from "react";
import Person from "@/svg/person";
import { Check, CheckCircle, Send, X } from "lucide-react";

const requests = Array(5).fill({
  id: 1,
  avatar: "/avatar-placeholder.png",
  timestamp: "15 mins ago",
  category: "Design",
  message:
    "I will like to develop and implement quality assurance strategies, oversee testing...",
});

export const NewRequestsTab: React.FC = () => {
  const [notification, setNotification] = useState<{
    visible: boolean;
    type: "accept" | "reject";
    name: string;
  } | null>(null);

  const notificationRef = useRef<HTMLDivElement>(null);

  const handleAction = (type: "accept" | "reject", name = "Jackie Chan") => {
    setNotification({ visible: true, type, name });

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const dismissNotification = () => {
    setNotification(null);
  };

  // Handle clicks outside the notification
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setNotification(null);
      }
    };

    if (notification?.visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notification]);

  return (
    <div className="w-full relative">
      {requests.map((request, index) => (
        <div
          key={index}
          className="flex flex-col xl:flex-row items-start gap-3 p-2 bg-[#161716] mb-4 rounded-[12px] max-w-[1000px]"
        >
          <div className="min-w-10 min-h-10 w-10 h-10 flex items-center justify-center overflow-hidden flex-shrink-0">
            <Person />
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <span className="text-sm text-[#6E6E6E]">
                Submitted {request.timestamp}
              </span>
              <span className="text-[#3D5682] hidden md:inline">|</span>
              <span className="text-[#3D5682]">{request.category}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 md:gap-4 ">
              <p className="text-sm truncate w-full sm:flex-1 text-[#CCCCCC] mb-2 sm:mb-0">
                {request.message}
              </p>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  className="px-2 md:px-4 py-2 md:py-3 gap-2 rounded-[8px] h-[40px] md:h-[48px] flex-1 sm:flex-none sm:w-[100px] lg:w-[120px] xl:w-[140px] border border-[#2D2E2D] text-sm hover:bg-gray-800"
                  onClick={() => handleAction("reject")}
                >
                  Reject
                </button>
                <button
                  className="px-2 md:px-4 rounded-[8px] border border-[#2D2E2D] flex-1 sm:flex-none sm:w-[100px] lg:w-[120px] xl:w-[140px] h-[40px] md:h-[48px] py-2 md:py-3 gap-2 text-sm hover:bg-gray-700"
                  onClick={() => handleAction("accept")}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Notification toast */}
      {notification && notification.visible && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

          {/* Notification toast */}
          <div
            ref={notificationRef}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-[#202120] p-2 sm:p-3 rounded-[16px] z-50 shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] min-h-[70px] sm:min-h-[89px] max-w-[1200px] animate-fade-in"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 w-full">
                <div className="flex items-center">
                  {notification.type === "accept" ? (
                    <button className="bg-[#A8C789] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full p-1 flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#101110]" />
                    </button>
                  ) : (
                    <button className="bg-[#CD5454] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full p-1 flex items-center justify-center">
                      <X className="w-3 h-3 sm:w-4 sm:h-4 text-[#101110]" />
                    </button>
                  )}
                </div>

                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#161716] border border-[#2D2E2D] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Person />
                </div>

                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-[#CCCCCC]">
                    You have{" "}
                    {notification.type === "accept" ? "accepted" : "rejected"}{" "}
                    <span className="font-medium">{notification.name}'s</span>{" "}
                    request{" "}
                    {notification.type === "accept" ? "to message you" : ""}
                  </p>
                </div>
              </div>

              <button
                className="text-[#6E6E6E] hover:text-white px-2 py-1 rounded text-xs sm:text-sm ml-auto"
                onClick={dismissNotification}
              >
                Undo
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
