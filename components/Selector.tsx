import React, { memo, ReactNode, useState } from "react";
import { languageOptions } from "../languages";

const Selector = ({
  options,
  onSelectOption,
  selectedOption,
  selectorText,
}: {
  options: string[];
  onSelectOption: (option: string) => void;
  selectedOption: string | null;
  selectorText: string | ReactNode;
}) => {
  console.log("SELECTOR");
  const [isExpanded, setIsExpanded] = useState(false);
  const selectOptionHandler = (option: string) => {
    onSelectOption(option);
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <div className="relative bg-white text-black rounded w-fit">
      <button
        className="text-center font-bold p-2 m-l-auto ronded w-full"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        {selectorText} {">"} {selectedOption}
      </button>
      {isExpanded && (
        <ul className="text-center w-full text-black mt-2 bg-white absolute rounded">
          {options.map((option) => {
            const lang = languageOptions[option];
            return (
              <li
                onClick={() => selectOptionHandler(lang)}
                className="border-gray w-full py-2 cursor-pointer rounded hover:bg-[#858585] "
                key={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default memo(Selector);
