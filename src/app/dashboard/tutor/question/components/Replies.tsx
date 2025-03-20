import React from "react";
import Header from "./Header";
import Image from "next/image";
import vn from "../../../../../../public/vn.svg";
import send from "../../../../../../public/send.svg";
import smile from "../../../../../../public/smile.svg";
import tick from "../../../../../../public/tick.svg";
import { MessageIn, Messageout } from "./MessageContainer";

interface RepliesProps {
  onBackClick?: () => void;
}

const Replies: React.FC<RepliesProps> = ({ onBackClick }) => {
  return (
    <div className="flex-grow h-[calc(100vh-80px)] md:h-[619px] px-3 md:px-[24px] relative flex flex-col justify-between">
      <Header onBackClick={onBackClick} />

      <div className="flex-grow flex flex-col justify-end overflow-y-auto">
        <section className="flex flex-col gap-4 md:gap-6 w-full max-w-xl mx-auto mb-4">
          <Messageout>
            hello how are you doing{" "}
            <span className="flex flex-row justify-end gap-2 items-center">
              <Image src={tick} alt="tick" width={12} height={12} />
              <p className="text-xs">12:43 AM</p>
            </span>
          </Messageout>
          <MessageIn>
            hello
            <span className="flex flex-row justify-end gap-2 items-center">
              <Image src={tick} alt="tick" width={12} height={12} />
              <p className="text-xs">12:43 AM</p>
            </span>
          </MessageIn>
        </section>
      </div>

      <div className="pb-4 pt-2 w-full max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            className="border-[#40403E] border-[1px] border-solid w-full h-[50px] md:h-[60px] bg-transparent py-[12px] px-[16px] rounded-[8px] pl-24 md:pl-32 italic text-[12px] font-[400]"
            placeholder="type a message"
          />
          <div className="absolute left-3 top-0 bottom-0 flex items-center gap-3 md:gap-6 my-3 pr-3 border-r-[#222220] border-r-[1px] border-r-solid">
            <button className="flex-shrink-0">
              <Image src={vn} alt="voice-note-icon" width={18} height={18} />
            </button>
            <button className="flex-shrink-0">
              <Image src={smile} alt="smile-icon" width={18} height={18} />
            </button>
          </div>
          <div className="absolute right-3 md:right-6 top-0 bottom-0 flex items-center my-3 pl-3 border-l-[#222220] border-l-[1px] border-l-solid">
            <button className="flex-shrink-0">
              <Image src={send} alt="send-icon" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Replies;
