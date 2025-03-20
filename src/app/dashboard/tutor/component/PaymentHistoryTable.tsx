import React from "react";
import { Copy } from "lucide-react";

interface PaymentHistoryTableProps {
  transactions: {
    id: number;
    transactionId: string;
    amount: string;
    date: string;
  }[];
}

export function PaymentHistoryTable({
  transactions,
}: PaymentHistoryTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg mb-6">
      {/* Desktop and Tablet View */}
      <table className="w-full text-center border-collapse min-w-[650px]">
        <thead>
          <tr className="text-gray-400 bg-[#1E1E1E]">
            <th className="py-3 sm:py-4 px-2 text-sm sm:text-base">SN</th>
            <th className="py-3 sm:py-4 px-2 text-sm sm:text-base">
              Transaction ID
            </th>
            <th className="py-3 sm:py-4 px-2 text-sm sm:text-base">Amount</th>
            <th className="py-3 sm:py-4 px-2 text-sm sm:text-base">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="border-b border-gray-700 hover:bg-[#2a2a2a]"
            >
              <td className="py-4 sm:py-6 px-2 text-sm sm:text-base">
                {tx.id}
              </td>
              <td className="py-4 sm:py-6 px-2 text-sm sm:text-base">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="truncate max-w-[150px] sm:max-w-none">
                    {tx.transactionId}
                  </span>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(tx.transactionId)
                    }
                    className="text-gray-400 hover:text-white flex-shrink-0"
                    title="Copy Transaction ID"
                  >
                    <Copy size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </td>
              <td className="py-4 sm:py-6 px-2 text-sm sm:text-base">
                {tx.amount}
              </td>
              <td className="py-4 sm:py-6 px-2 text-sm sm:text-base">
                {tx.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card View - Visible only on very small screens */}
      {/* <div className="sm:hidden mt-4 space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="bg-[#1E1E1E] rounded-lg p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">SN</span>
              <span>{tx.id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Transaction ID</span>
              <div className="flex items-center gap-2">
                <span className="truncate max-w-[120px]">
                  {tx.transactionId}
                </span>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(tx.transactionId)
                  }
                  className="text-gray-400 hover:text-white"
                  title="Copy Transaction ID"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Amount</span>
              <span>{tx.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Date</span>
              <span>{tx.date}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
