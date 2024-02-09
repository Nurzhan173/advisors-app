import React, { useState, useRef, useEffect } from "react";
import "./Select.css";

interface SelectProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("All");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="select" ref={dropdownRef}>
      <div className="selected-option" onClick={toggleDropdown}>
        <label>{label}</label>
        {selectedOption ? <>{selectedOption}</> : "All"}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option}
              className={option === selectedOption ? "selected" : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {option === selectedOption && (
                <span className="checked-icon">&#10003;</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
