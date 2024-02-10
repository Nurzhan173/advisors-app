import React, { useState, useRef, useEffect } from "react";
import "./Select.css";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  onSelect: (selectedOption: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].label
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSelect(option.value);
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
        {selectedOption ? <>{selectedOption}</> : options[0].label}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option.value}
              className={option.label === selectedOption ? "selected" : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              {option.label === selectedOption && (
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
