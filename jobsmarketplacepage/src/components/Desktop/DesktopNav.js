
import { UilBoltAlt } from '@iconscout/react-unicons'
import { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilHome } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'

function DesktopNav(){
return(
<nav className="bg-white border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
{/* EPOSTING HEADER */}
<a className="flex items-center space-x-3 ">
<UilBoltAlt />
<span className="self-center text-2xl font-semibold whitespace-nowrap ">ePosting</span>
</a>
{/* END OF EPOSTING HEADER */}

{/* SEARCH BAR */}
<form className="flex items-center">
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <UilSearch />
    </div>
    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5" placeholder="Search" required/>
    </div>

{/* DROP DOWN MENU */}
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
        xmlns="http://www.w3.org/2000/svg"
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
        href="#"
        data-te-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
        href="#"
        data-te-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
        href="#"
        data-te-dropdown-item-ref
        >Something else here</a
      >
    </li>
  </ul>
</div>

{/* END OF DROPDOWN MENU */}
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300">
        POST
    </button>
</form>
{/* END OF SEARCH BAR */}


<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
<div className='flex space-x-4 flex-row pr-7'>
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
<div className="flex space-x-4 flex-row">
        <li className="bg-slate-200 pt-2 pl-2 pr-2 rounded-full">
          <div className="relative">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/000000/chat-message--v1.png" alt="chat-message--v1"/>
            <div className="absolute bottom-5 left-6 h-4 w-4 bg-red-600 rounded-full"></div>
          </div>
          </li>
        <li className="bg-slate-200 bg-cover pt-2 pl-2 pr-2 rounded-full">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/menu-2.png" alt="menu-2"/>
        </li>
</div>
   </ul>
</div>
</div>
</nav>
    )
}

export default DesktopNav
