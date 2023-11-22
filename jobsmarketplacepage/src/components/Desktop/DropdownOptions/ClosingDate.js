import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';


const ClosingDate = ({onSetDate, date}) => {

const[isOpen, setIsOpen] = useState(false)

const handleOpen = () => {
    setIsOpen(!isOpen)
}

const handleDate = (selectedDate) => {
      onSetDate(selectedDate);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-black bg-primary-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button">
        {isOpen ? 'Close' : 'Closing Date'}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
              <div className="absolute z-50 w-56 center p-1 pb-3 bg-white rounded-lg shadow" id="dropdown">
                <ReactDatePicker
                onChange={handleDate}
                inline
                value={date}
                />
            </div>
      )}

    </div>
  )
}



export default ClosingDate
