"use client";

import Image from "next/image";
import { useState } from "react";

import connect_icon from "../images/connector.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import message_icon from "../images/message-02.png";
import emoji_icon from "../images/emoji.png";
import send_icon from "../images/send.png";

import { StaticImageData } from "next/image";

interface ChatProps {
  img: string | StaticImageData;
  username: string;
  message: string;
  time: string;
  noOfMessage: number;
  response: boolean;
}

const Chat = ({
  img,
  username,
  message,
  time,
  noOfMessage,
  response,
}: ChatProps) => {
  return (
    <section className="py-8 px-2 md:px-4 border-b border-[#252625]">
      <div className="flex items-start justify-between cursor-pointer space-x-6">
        <div className="flex items-center space-x-3">
          <Image src={img} alt={username} className="w-[48x] md:w-[58px]" />
          <div>
            <h3 className="font-bold text-[#FCFCFC] text-[14px] leading-[24px]">
              {username}
            </h3>
            <p className="text-[#FCFCFC] text-[12px] font-normal leading-tight w-[100%]">
              {message.length > 20 ? (
                <span className="block md:hidden">
                  {message.slice(0, 22) + "..."}
                </span>
              ) : (
                message
              )}
              <span className="hidden md:block">{message}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2 ">
          <span className="text-[#ABABAB] text-[10px] w-[2.7rem] font-normal">
            {time}
          </span>
          {!response && <span className="flex items-center space-x-2 float-end justify-end">
            {<Image src={message_icon} alt="message icon" />}
            <span className="text-[#D9D9D9] text-[12px] font-normal">
              {noOfMessage}
            </span>
          </span>}
        </div>
      </div>

      {response && (
        <div className="w-full flex flex-col items-end justify-end md:pr-[4rem] relative">
          <Image
            src={connect_icon}
            alt="connect"
            className="absolute left-[4.2rem] top-[1rem] hidden md:block"
          />

          <div className="w-[92%] space-x-4 flex-end flex items-start justify-between py-4 px-4 cursor-pointer border-b border-[#252625]">
            <div className="flex items-center space-x-2">
              <Image src={avatar1} alt="johnny drill" className="w-[32px]" />
              <div>
                <h3 className="font-bold text-[#FCFCFC] text-[13px] leading-[24px]">
                  {"Johnny Drill"}
                </h3>

                {/* Truncated message for mobile */}
                <p className="text-[#FCFCFC] text-[11px] font-normal leading-tight md:hidden">
                  {"I didn't quite..."}
                </p>

                {/* Full message for larger screens */}
                <p className="text-[#FCFCFC] text-[11px] font-normal leading-tight hidden md:block">
                  {
                    "I didn't quite understand the part where he mentioned that nodes are noodles. Can someone explain to me please ?"
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-[#ABABAB] text-[10px] w-[2.8rem] font-normal">
                {"12:43 AM"}
              </span>
            </div>
          </div>

          <div className="w-[92%] flex-end space-x-4 flex items-start justify-between py-4 px-4 cursor-pointer border-b border-[#252625]">
            <div className="flex items-center space-x-2">
              <Image src={avatar1} alt="johnny drill" className="w-[32px]" />
              <div>
                <h3 className="font-bold text-[#FCFCFC] text-[13px] leading-[24px]">
                  {"Johnny Drill"}
                </h3>

                {/* Truncated message for mobile */}
                <p className="text-[#FCFCFC] text-[11px] font-normal leading-tight md:hidden">
                  {"I didn't quite..."}
                </p>

                {/* Full message for larger screens */}
                <p className="text-[#FCFCFC] text-[11px] font-normal leading-tight hidden md:block">
                  {
                    "I didn't quite understand the part where he mentioned that nodes are noodles. Can someone explain to me please ?"
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-[#ABABAB] text-[10px] font-normal w-[2.8rem]">
                {"12:43 AM"}
              </span>
            </div>
          </div>

          <div className="w-[92%] space-x-4 flex-end flex items-start justify-between py-4 px-4 cursor-pointer ">
            <div className="flex items-center space-x-2">
              <Image src={avatar1} alt="johnny drill" className="w-[32px]" />
              <div>
                <h3 className="font-bold text-[#FCFCFC] text-[13px] leading-[24px]">
                  {"Johnny Drill"}
                </h3>

                {/* Truncated message for mobile */}
                <p className="text-[#FCFCFC] text-[11px] font-normal leading-tight md:hidden">
                  {"I didn't quite..."}
                </p>

                {/* Full message for larger screens */}
                <p className="text-[#FCFCFC] text-[11px] font-normal leading-tight hidden md:block">
                  {
                    "I didn't quite understand the part where he mentioned that nodes are noodles. Can someone explain to me please ?"
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-[#ABABAB] text-[10px] font-normal w-[2.8rem]">
                {"12:43 AM"}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ResourcesTab = () => {
  const [comment, setComment] = useState("");

  return (
    <div className="bg-[#161716] p-6 rounded-[12px]">
      <h2 className=" border-b border-[#292929] py-2 font-medium text-[18px]">
        Chat room
      </h2>
      <div className="w-full">
        <div>
          <Chat
            img={avatar1}
            username="Johnny Drill"
            message="I didn't quite understand the part where he mentioned that nodes are noodles. Cna someone explain to me please ?"
            time="12:43 AM"
            noOfMessage={12}
            response={false}
          />

          <Chat
            img={avatar2}
            username="Johnny Drill"
            message="I didn't quite understand the part where he mentioned that nodes are noodles. Cna someone explain to me please ?"
            time="12:43 AM"
            noOfMessage={32}
            response={true}
          />

          <Chat
            img={avatar3}
            username="Johnny Drill"
            message="I didn't quite understand the part where he mentioned that nodes are noodles. Cna someone explain to me please ?"
            time="12:43 AM"
            noOfMessage={1}
            response={false}
          />

          <Chat
            img={avatar4}
            username="Johnny Drill"
            message="I didn't quite understand the part where he mentioned that nodes are noodles. Cna someone explain to me please ?"
            time="12:43 AM"
            noOfMessage={14}
            response={false}
          />
        </div>

        <div className="flex items-center bg-[#202120] rounded-[12px] px-4 py-2 w-full mt-[3rem]">
          {/* Emoji Icon */}
          <Image src={emoji_icon} alt="emoji_icon" className="w-[24px]" />

          {/* Divider */}
          <span className="w-px h-5 bg-gray-600 ml-[1rem]"></span>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Drop a comment here"
            className="flex-1 bg-transparent outline-none px-3 placeholder:text-gray-500 text-[#9C9C9C] font-normal text-[12px]"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          {/* Divider */}
          <span className="w-px h-5 bg-gray-600 mr-[1rem]"></span>

          {/* Send Button */}
          <Image src={send_icon} alt="send_icon" className="w-[32px]" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesTab;
