import DesktopSearchBar from './DesktopSearchBar';
import { UilBriefcaseAlt, UilUsersAlt, UilHome, UilBoltAlt } from '@iconscout/react-unicons'
import { useState } from 'react';


function DesktopNav( { onSearch , searchTerm } ){

const [isOpen, setIsOpen] = useState(false)
const handleOpen =() => {
  setIsOpen(!isOpen)
}

return(
<nav className="bg-white border-gray-200 pt-4 flex justify-between">

<div className="justify-start mt-4 pl-5">
  <div className='inline-flex'>
    <UilBoltAlt />
    <p className="text-2xl font-semibold ">ePosting</p>

  </div>
</div>

<div className="flex justify-center items-center">
<DesktopSearchBar
onSearch={onSearch}
searchTerm={searchTerm}
/>
<div className="relative" data-te-dropdown-ref>
      <button
        className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black hover:bg-primary-600 hover:shadow-purple-300 focus:bg-primary-600 "
        type="button"
        id="dropdownMenuButton2"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-ripple-init
        data-te-ripple-color="white">
        Jobs
        <span className="ml-2 w-2">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd" />
          </svg>
        </span>
      </button>
      <ul
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
            data-te-dropdown-item-ref
            >Job 1 </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
            data-te-dropdown-item-ref
            >Job 2</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
            data-te-dropdown-item-ref
            >Job 3</a>
        </li>
      </ul>
    </div>

<button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300">
    POST
</button>
</div>

<div className='flex justify-end pr-5'>
  <div className="flex space-x-3 pr-5">
    <ul className="flex flex-col mt-4 font-medium rounded-lg">
    <div className='flex space-x-4 flex-row'>
        <li className="flex flex-col items-center">
            <UilHome />
            <p>Home</p>
        </li>
        <li className="flex flex-col items-center">
            <UilBriefcaseAlt/>
            <p>Jobs</p>
        </li>
        <li className="flex flex-col items-center">
            <UilUsersAlt />
            <p>Resources</p>
        </li>
        </div>
      </ul>
  </div>

  <div className='flex pt-3 mb-3 space-x-3'>
        <p className="bg-slate-200 p-2 rounded-full">
          <div className="relative">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/000000/chat-message--v1.png" alt="chat-message--v1"/>
            <div className="absolute bottom-5 left-6 h-4 w-4 bg-red-600 rounded-full"></div>
          </div>
        </p>

        <p onClick={handleOpen} className="bg-slate-200 bg-cover p-2 rounded-full">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/menu-2.png" alt="menu-2"/>
        </p>
        {isOpen &&
          <div className='absolute border border-slate-400 border-3'>
            <ul>
              <li>Settings</li>
              <li>second option</li>
              <li> third option</li>
            </ul>
          </div>
          }
  </div>

</div>



</nav>
    )
}

export default DesktopNav
