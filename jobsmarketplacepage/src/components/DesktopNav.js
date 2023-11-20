
import { UilBoltAlt } from '@iconscout/react-unicons'
import { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilHome } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'

function DesktopNav(){
const [isOpen, setIsOpen] = useState(false)
const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

return(
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
{/* EPOSTING HEADER */}
<a className="flex items-center space-x-3 rtl:space-x-reverse">
<UilBoltAlt />
<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ePosting</span>
</a>
{/* END OF EPOSTING HEADER */}

{/* SEARCH BAR */}
<form class="flex items-center">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <UilSearch />
     </div>
    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
{/* DROP DOWN MENU */}

<div class="relative" data-te-dropdown-ref>
  <button
    class="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    type="button"
    id="dropdownMenuButton2"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="white">
    Jobs
    <span class="ml-2 w-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton2"
    data-te-dropdown-menu-ref>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
        >Something else here</a
      >
    </li>
  </ul>
</div>

{/* END OF DROPDOWN MENU */}
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        POST
    </button>
</form>
{/* END OF SEARCH BAR */}


<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
        <li className="bg-slate-200 pt-2 pl-2 pr-2 rounded-full">
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
