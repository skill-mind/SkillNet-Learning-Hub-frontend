import { ReactNode } from "react";

interface MessageinProps {
  children: ReactNode;
}
interface MessageoutProps {
  children: ReactNode;
}

export const MessageIn: React.FC<MessageinProps> = ({ children }) => {
  return (
    <div className="w-full max-w-full bg-[#161716] min-h-[44px] rounded-t-[8px] rounded-br-[8px] flex justify-between px-[16px] py-[8px] items-center flex-wrap">
      {children}
    </div>
  );
};

export const Messageout: React.FC<MessageoutProps> = ({ children }) => {
  return (
    <div className="w-full max-w-full bg-[#202120] min-h-[44px] rounded-t-[8px] rounded-bl-[8px] flex justify-between px-[16px] py-[8px] items-center flex-wrap">
      {children}
    </div>
  );
};
