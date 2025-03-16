import React, { useState } from "react";

interface CheckboxProps {
  termsUrl?: string;
  privacyUrl?: string;
  isAgreement?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  termsUrl,
  privacyUrl,
  onChange,
  isAgreement,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <div className="agreement-checkbox w-full md:w-[26rem] flex items-start">
      <input
        type="checkbox"
        id="agreement"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isAgreement && (
        <label
          htmlFor="agreement"
          className="text-[0.875rem] text-grayText cursor-pointer"
        >
          By clicking on this, you agree to the{" "}
          <a
            href={termsUrl}
            target="_blank"
            className="text-primary font-UbuntuBold"
            rel="noopener noreferrer"
          >
            <span className="highlight">Terms & Conditions</span>
          </a>{" "}
          and{" "}
          <a
            href={privacyUrl}
            target="_blank"
            className="text-primary font-UbuntuBold"
            rel="noopener noreferrer"
          >
            <span className="highlight">Privacy Policy</span>
          </a>{" "}
          governing StarkHero.
        </label>
      )}
    </div>
  );
};

export default Checkbox;