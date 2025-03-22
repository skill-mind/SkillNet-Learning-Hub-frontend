"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Search,
  MoreHorizontal,
  Smile,
  Send,
  EllipsisVertical,
  CheckCheck,
  ArrowLeft,
} from "lucide-react";
import ImageIcon from "@/svg/imageIcon";
import Mic from "@/svg/mic";

// Define the message type
interface Message {
  id: number;
  sender: string;
  avatar: string;
  message: string;
  timestamp: string;
  read: boolean;
  filter: string; 
}

// Defined the chat message type
interface ChatMessage {
  id: number;
  message: string;
  timestamp: string;
  sender: string;
}

// Samples message data with filter property
const allMessages: Message[] = [
  {
    id: 1,
    sender: "Josh",
    avatar: "/avatar-josh.png",
    message:
      "What videos and materials can you recommend for a beginner started web design",
    timestamp: "Just now",
    read: false,
    filter: "Unread",
  },
  {
    id: 2,
    sender: "Josh",
    avatar: "/avatar-josh.png",
    message:
      "What videos and materials can you recommend for a beginner started web design",
    timestamp: "5 mins ago",
    read: true,
    filter: "Archived",
  },
  {
    id: 3,
    sender: "Josh",
    avatar: "/avatar-josh.png",
    message:
      "What videos and materials can you recommend for a beginner started web design",
    timestamp: "Friday",
    read: true,
    filter: "Archived",
  },
];

// Samples chat for the selected message
const selectedChat: ChatMessage[] = [
  {
    id: 1,
    message:
      "What videos and materials can you recommend for a beginner started web design",
    timestamp: "12:43 AM",
    sender: "Josh",
  },
  {
    id: 2,
    message: "You could start with introduction to design by Flora Osatuyi",
    timestamp: "12:45 AM",
    sender: "me",
  },
];

export const MessagesTab: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filterType, setFilterType] = useState<string>("All");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMessageList, setShowMessageList] = useState<boolean>(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkWidth();

    // Add event listener
    window.addEventListener("resize", checkWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleMessageSelect = (msg: Message) => {
    setSelectedMessage(msg);
    if (isMobile) {
      setShowMessageList(false);
    }
  };

  const handleBackToList = () => {
    setShowMessageList(true);
  };

  const filteredMessages =
    filterType === "All"
      ? allMessages
      : allMessages.filter((msg) => msg.filter === filterType);

  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-150px)] text-white overflow-hidden">
      {(!isMobile || (isMobile && showMessageList)) && (
        <div className="w-full md:w-[352px] border border-[#222220] overflow-y-auto h-full">
          <div className="flex px-4 md:px-8 pt-4 pb-2 overflow-x-auto">
            <button
              onClick={() => setFilterType("All")}
              className={cn(
                "px-4 py-1 text-[12px] rounded-[4px] border border-[#1D1D1C] mr-2 whitespace-nowrap",
                filterType === "All"
                  ? "text-[#A8C789]"
                  : "text-[#ABABAB] hover:bg-gray-800/30"
              )}
            >
              All
            </button>
            <button
              onClick={() => setFilterType("Unread")}
              className={cn(
                "px-4 py-1 text-[12px] rounded-[4px] border border-[#1D1D1C] mr-2 whitespace-nowrap",
                filterType === "Unread"
                  ? "text-[#A8C789]"
                  : "text-[#ABABAB] hover:bg-gray-800/30"
              )}
            >
              Unread
            </button>
            <button
              onClick={() => setFilterType("Archived")}
              className={cn(
                "px-4 py-1 text-[12px] rounded-[4px] border border-[#1D1D1C] whitespace-nowrap",
                filterType === "Archived"
                  ? "text-[#A8C789]"
                  : "text-[#ABABAB] hover:bg-gray-800/30"
              )}
            >
              Archived
            </button>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[319px] w-full p-2 border-b border-[#222220] mx-4"></div>
          </div>

          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => handleMessageSelect(msg)}
              className={cn(
                "flex items-start gap-3 p-4 border-b border-[#222220] hover:bg-[#1D1D1C] cursor-pointer",
                selectedMessage?.id === msg.id && "bg-[#1D1D1C]"
              )}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                  <ImageIcon />
                </div>
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-white text-[14px] truncate">
                    {msg.sender}
                  </h3>
                  <span className="text-[10px] text-[#ABABAB] ml-2 flex-shrink-0">
                    {msg.timestamp}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center flex-1 min-w-0">
                    <CheckCheck className="w-3 h-3 mr-1 text-[#ABABAB] flex-shrink-0" />
                    <p className="text-xs text-[#ABABAB] truncate">
                      {msg.message}
                    </p>
                  </div>
                  {!msg.read && (
                    <div className="ml-2 w-5 h-5 bg-[#A8C789] rounded-full flex items-center justify-center text-xs text-[#101110] flex-shrink-0">
                      1
                    </div>
                  )}
                </div>
              </div>
              {(msg.id !== 1 || filterType !== "All") && (
                <button className="text-[#ABABAB] self-center w-5 h-5 ml-2 flex-shrink-0">
                  <EllipsisVertical className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Chat Area - Take full width on mobile when chat is open */}
      {(!isMobile || (isMobile && !showMessageList)) && (
        <div className="w-full md:flex-1 flex flex-col h-full border-l border-[#222220]">
          {selectedMessage ? (
            <>
              <div className="flex items-center gap-3 p-4 border-b border-[#222220] justify-between">
                <div className="flex items-center gap-3">
                  {isMobile && (
                    <button
                      onClick={handleBackToList}
                      className="text-[#ABABAB] mr-2"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center flex-shrink-0" />
                  <h3 className="font-medium text-[#FCFCFC] text-[14px] truncate">
                    {selectedMessage.sender}
                  </h3>
                </div>

                <div className="flex">
                  <button className="text-[#ABABAB] mr-4">
                    <Search className="w-[12px] h-[12px]" />
                  </button>
                  <button className="text-[#ABABAB]">
                    <EllipsisVertical className="w-[20px] h-[12px]" />
                  </button>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-end p-4 overflow-y-auto">
                {selectedChat.map((chat) => (
                  <div
                    key={chat.id}
                    className={cn(
                      "mb-2 max-w-[95%]",
                      chat.sender === "me" ? "ml-auto" : "mr-auto"
                    )}
                  >
                    <div
                      className={cn(
                        "p-3 rounded-[8px] text-xs break-words",
                        chat.sender === "me" ? "bg-[#161716]" : "bg-[#202120]"
                      )}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="mr-2 text-[#ABABAB]">
                          {chat.message}
                        </span>
                        <div className="flex items-center text-[#ABABAB] whitespace-nowrap flex-shrink-0 mt-2 sm:mt-0 ml-auto">
                          <span className="mr-1 text-[10px]">
                            {chat.timestamp}
                          </span>
                          {chat.sender === "me" && (
                            <CheckCheck className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-2">
                <div className="flex items-center border border-[#40403E] rounded-[8px] px-2 sm:px-4 py-2">
                  <button className="text-[#ABABAB] mr-2 rounded-[32px] hidden sm:flex">
                    <Mic />
                  </button>
                  <button className="text-[#ABABAB] mr-2">
                    <Smile className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="flex-1 bg-transparent outline-none text-[#9C9C9C] text-[12px] italic px-2 sm:px-3 py-2 gap-2 border-r-[0.6px] border-l-[0.6px] border-[#313130] h-[34px]"
                  />
                  <button className="bg-[#A8C789] w-[24px] h-[24px] rounded-full p-1 sm:p-2 ml-2 flex items-center justify-center">
                    <Send className="w-4 h-4 sm:w-4 sm:h-4 text-[#101110]" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a message to view conversation
            </div>
          )}
        </div>
      )}
    </div>
  );
};
