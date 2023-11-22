import React from 'react';
import { useState } from 'react';

export const ExperienceLevel = ({ experienceLevel, onExperienceLevel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (level) => {
    const updatedExperienceLevel = experienceLevel.includes(level)
      ? experienceLevel.filter((l) => l !== level)
      : [...experienceLevel, level];
    onExperienceLevel(updatedExperienceLevel);
  };

  return (
    <li>
      <button
        onClick={handleOpen}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {isOpen ? 'Experience Level' : 'Experience Level'}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-56 p-3 bg-white rounded-lg shadow" id="dropdown">
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <CheckboxItem label="Internship" checked={experienceLevel.includes('Internship')} onChange={() => handleCheckboxChange('Internship')} />
            <CheckboxItem label="Entry" checked={experienceLevel.includes('Entry')} onChange={() => handleCheckboxChange('Entry')} />
            <CheckboxItem label="Associate" checked={experienceLevel.includes('Associate')} onChange={() => handleCheckboxChange('Associate')} />
            <CheckboxItem label="Mid-Senior" checked={experienceLevel.includes('Mid-Senior')} onChange={() => handleCheckboxChange('Mid-Senior')} />
            <CheckboxItem label="Director" checked={experienceLevel.includes('Director')} onChange={() => handleCheckboxChange('Director')} />
          </ul>
        </div>
      )}
    </li>
  );
};

const CheckboxItem = ({ label, checked, onChange }) => (
  <li className="flex items-center">
    <input
      id={label}
      type="checkbox"
      value=""
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
    />
    <label htmlFor={label} className="ml-2 text-sm font-medium text-gray-900">
      {label}
    </label>
  </li>
);
