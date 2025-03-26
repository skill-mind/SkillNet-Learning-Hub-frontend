import { LuCopy } from "react-icons/lu";

type Transaction = {
  id: string;
  amount: number;
  date: string;
};

export default function EarningsDashboard() {
  const transactions: Transaction[] = [
    {
      id: "0xe4c6db1839a8f97df2e8ba...",
      amount: 15,
      date: "12th Jan, 2025",
    },
    {
      id: "0xe4c6db1839a8f97df2e8ba...",
      amount: 15,
      date: "12th Jan, 2025",
    },
    {
      id: "0xe4c6db1839a8f97df2e8ba...",
      amount: 15,
      date: "12th Jan, 2025",
    },
  ];

  return (
    <div className="bg-transparent text-white">
      <div className="bg-[#161716] w-[332px] h-[124px] rounded-md mb-8 flex items-center justify-center">
        <div className="mr-4 bg-[#3498DB33] rounded-full p-4">
          <div className=" w-6 h-6 flex items-center justify-center">%</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">${(30500).toLocaleString()}</h2>
          <p className="text-sm">Total Earnings</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg mb-4">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 bg-[#161716]">
                <th className="p-2 font-normal">SN</th>
                <th className="py-2 font-normal">Transaction ID</th>
                <th className="py-2 font-normal">Amount</th>
                <th className="py-2 font-normal">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-4 px-2">{index + 1}</td>
                  <td className="py-4 flex items-center">
                    {transaction.id}
                    <button className="ml-2">
                      <LuCopy />
                    </button>
                  </td>
                  <td className="py-4">${transaction.amount}</td>
                  <td className="py-4">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
