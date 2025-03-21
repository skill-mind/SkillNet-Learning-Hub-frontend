import { SmilePlus, Send } from "lucide-react";
import Image from "next/image";

interface Message {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
  replies: number;
}

interface ResourcesProps {
  messages?: Message[];
}

const MOCK_MESSAGES: Message[] = [
  {
    id: 1,
    user: {
      name: "Johnny Drill",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop",
    },
    message:
      "I didn't quite understand the part where he mentioned that nodes are not noodles. Can someone explain to me please?",
    timestamp: "12:43 AM",
    replies: 12,
  },
  {
    id: 2,
    user: {
      name: "Johnny Drill",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=80&auto=format&fit=crop",
    },
    message:
      "I didn't quite understand the part where he mentioned that nodes are not noodles. Can someone explain to me please?",
    timestamp: "12:43 AM",
    replies: 43,
  },
  {
    id: 3,
    user: {
      name: "Johnny Drill",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop",
    },
    message:
      "I didn't quite understand the part where he mentioned that nodes are not noodles. Can someone explain to me please?",
    timestamp: "12:43 AM",
    replies: 1,
  },
];

export const Resources = ({ messages = MOCK_MESSAGES }: ResourcesProps) => {
  return (
    <div className="bg-[#161716] border border-[#1D1D1C] rounded-lg">
      <div className="flex items-center justify-between p-6 border-b border-[#292929]">
        <h2 className="text-xl font-semibold text-white">Chat Room</h2>
        <button className="text-[#767776] hover:text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 21V14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 10V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 21V16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 12V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 14H7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 8H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 16H23"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="p-6 space-y-6">
        {messages.map((message, index) => (
          <>
            <div key={message.id} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-[#1C1C1C]">
                <Image
                  src={message.user.avatar}
                  alt={message.user.name}
                  width={40}
                  height={40}
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 flex justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-[14px]">
                      {message.user.name}
                    </h3>
                  </div>
                  <p className="text-[#D9D9D9] text-[12px]">
                    {message.message}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-end gap-2">
                  <span className="text-[#ABABAB] text-[14px]">
                    {message.timestamp}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z"
                        stroke="#D9D9D9"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[#D9D9D9] text-sm">
                      {message.replies}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {index < messages.length - 1 && (
              <hr className="w-full border-[#252625]" />
            )}
          </>
        ))}
      </div>

      <div className="p-4 border-t border-[#292929]">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1C1C1C] rounded-lg">
          <button className="text-[#767776] hover:text-white">
            <SmilePlus size={20} />
          </button>
          <input
            type="text"
            placeholder="Drop a comment here"
            className="flex-1 bg-transparent text-[#D9D9D9] placeholder-[#767776] outline-none"
          />
          <button className="text-black bg-[#A8C789] transition-colors p-2 rounded-full">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
