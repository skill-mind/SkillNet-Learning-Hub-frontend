"use client";

import { Wallet } from "lucide-react";

// Sample payment data
const payments = [
  {
    id: 1,
    amount: "$15",
    receiver: "0x411ad3c6abf11",
    sender: "0x411ad3...",
    timestamp: "15 mins ago",
  },
  {
    id: 2,
    amount: "$15",
    receiver: "0x411ad3c6abf11",
    sender: "0x411ad3...",
    timestamp: "1 week ago",
  },
];

export const PaymentsTab: React.FC = () => {
  return (
    <div className="w-full">
      {payments.map((payment) => (
        <div
          key={payment.id}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border-b border-[#2D2E2D]"
        >
          <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-[#2D2E2D] flex items-center justify-center flex-shrink-0">
            <Wallet className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex-1 w-full">
            <p className="text-sm sm:text-[16px] break-words">
              <span className="text-[#6E6E6E]">
                {payment.amount} was paid to
              </span>
              <span className="mx-1 text-[#CCCCCC] block sm:inline">
                {payment.receiver}
              </span>
              <span className="text-[#6E6E6E]">by</span>
              <span className="mx-1 text-[#CCCCCC]">{payment.sender}</span>
            </p>
          </div>

          <div className="text-sm sm:text-[16px] text-[#6E6E6E] mt-1 sm:mt-0">
            {payment.timestamp}
          </div>
        </div>
      ))}
    </div>
  );
};
