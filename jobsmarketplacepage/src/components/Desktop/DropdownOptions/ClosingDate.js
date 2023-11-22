import React, { useState } from 'react'
import Calendar from 'react-calendar'

const ClosingDate = () => {

const[isOpen, setIsOpen] = useState(false)
const [value, setValue] = useState(new Date());

const handleOpen = () =>{
    setIsOpen(!isOpen)
}

function onChange(nextValue){
    setValue(nextValue)
}


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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen &&
              <div className="absolute z-50 w-56 p-1 pb-3 bg-white rounded-lg shadow" id="dropdown">
              <Calendar
                onChange={onChange}
                value={value}
              />
            </div>
      }

    </div>
  )
}



export default ClosingDate
