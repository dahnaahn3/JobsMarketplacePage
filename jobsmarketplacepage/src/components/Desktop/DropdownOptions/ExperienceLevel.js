import React from 'react';
import { useState } from 'react';

export const ExperienceLevel = ({ experienceLevel, onExperienceLevel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleLeave =() => {
    setIsOpen(false)
  }

  const handleCheckboxChange = (level) => {
    const updatedExperienceLevel = experienceLevel.includes(level)
      ? experienceLevel.filter((l) => l !== level)
      : [...experienceLevel, level];
    onExperienceLevel(updatedExperienceLevel);
    setIsOpen(false)
  };

  return (
    <li onMouseEnter={handleOpen} onMouseLeave={handleLeave}>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-black h-max w-max bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute h-max w-max z-50 w-56 p-3 bg-white rounded-lg shadow" id="dropdown">
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          <li className="flex items-center">
              <input
                id="Internship"
                type="checkbox"
                value=""
                checked={experienceLevel.includes('Internship')}
                onChange={() => handleCheckboxChange('Internship')}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="Internship" className="ml-2 text-sm font-medium text-gray-900">
                Internship
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Entry"
                type="checkbox"
                value=""
                checked={experienceLevel.includes('Entry')}
                onChange={() => handleCheckboxChange('Entry')}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="Internship" className="ml-2 text-sm font-medium text-gray-900">
                Entry
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Associate"
                type="checkbox"
                value=""
                checked={experienceLevel.includes('Associate')}
                onChange={() => handleCheckboxChange('Associate')}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="Associate" className="ml-2 text-sm font-medium text-gray-900">
                Associate
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Mid-Senior"
                type="checkbox"
                value=""
                checked={experienceLevel.includes('Mid-Senior')}
                onChange={() => handleCheckboxChange('Mid-Senior')}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="Mid-Senior" className="ml-2 text-sm font-medium text-gray-900">
                Mid-Senior
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Director"
                type="checkbox"
                value=""
                checked={experienceLevel.includes('Director')}
                onChange={() => handleCheckboxChange('Director')}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="Director" className="ml-2 text-sm font-medium text-gray-900">
                Director
              </label>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};
