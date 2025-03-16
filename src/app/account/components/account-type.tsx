"use client";

import React, { useEffect } from "react";
import { Card } from "../../../components/ui/card";

type AccountType = {
  id: string;
  title: string;
  description: string;
};

const accountTypes: AccountType[] = [
  {
    id: "student",
    title: "Student",
    description: "Apply for best courses",
  },
  {
    id: "tutor",
    title: "Tutor",
    description: "Create and monetize courses and track engagement",
  },
];

const AccountTypeSelector: React.FC<{ typeHandle:(e:string)=>void }> = ({ typeHandle }) => {
  const [selectedType, setSelectedType] = React.useState<string>("");
  console.log(selectedType);

  useEffect(() => {
    typeHandle(selectedType);
  }, [selectedType, typeHandle]);
  return (
    <Card className="max-w-md p-6 bg-gray-900 text-white mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-1">Select Account Type</h2>
          <p className="text-gray-400 text-sm">Select Account Type</p>
        </div>

        <div className="space-y-3">
          {accountTypes.map((type) => (
            <label
              key={type.id}
              className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors
                ${
                  selectedType === type.id
                    ? "border-green-500 bg-gray-800"
                    : "border-gray-700 hover:border-gray-600"
                }`}
            >
              <input
                type="radio"
                name="accountType"
                value={type.id}
                checked={selectedType === type.id}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-8 h-8 text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500 focus:ring-2"
              />
              <div className="ml-4">
                <div className="text-sm font-medium">{type.title}</div>
                <div className="text-xs text-gray-400">{type.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AccountTypeSelector;