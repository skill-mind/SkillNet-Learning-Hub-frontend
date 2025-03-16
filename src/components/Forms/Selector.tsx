import React, { useState } from "react";

interface SelectorProps {
  dataArray: string[];
  label?: string;
  onSelectionChange?: (selectedSkills: string[]) => void;
}

const Selector: React.FC<SelectorProps> = ({
  dataArray,
  onSelectionChange,
  label,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillClick = (skill: string) => {
    let updatedSelection;
    if (selectedSkills.includes(skill)) {
      updatedSelection = selectedSkills.filter((s) => s !== skill);
    } else {
      updatedSelection = [...selectedSkills, skill];
    }

    setSelectedSkills(updatedSelection);
    if (onSelectionChange) {
      onSelectionChange(updatedSelection);
    }
  };

  return (
    <div className="skills-selector text-[0.875rem] w-full md:w-[26rem]">
      <label className="text-[#9596A0] text-[0.875rem]">{label}</label>
      <div className="skills-container grid grid-cols-3 mt-1 gap-3">
        {dataArray.map((item) => (
          <button
            key={item}
            className={`skill-button border-[1px] border-[#252625] p-2 text-[0.875rem] rounded-[0.5rem] ${
              selectedSkills.includes(item) ? "bg-[#333]" : ""
            }`}
            onClick={() => handleSkillClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;