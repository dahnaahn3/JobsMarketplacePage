import { UilSearch, UilFilter, UilEllipsisV } from '@iconscout/react-unicons'
import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
import { useEffect } from "react";


function MobileNav() {

    useEffect(( )=> {
        initTE({ Dropdown, Ripple });
    }, []);

  return (
<div className="pb-3 bg-slate-200">

    <div className='flex space-x-1 justify-center items-center bg-white p-4'>
        <div className="h-[40px] w-[40px] rounded-full border-[1px] bg-white border-black">
            <img className="h-full w-full rounded-full" src='https://play.nintendo.com/images/PLAY-6148-PikminFriendPageAdditions-Masthead-Blue_v01.b19a16e5.ed4a1562.png' alt="" />
        </div>


        <div className="relative flex ">
        <label htmlFor="simple-search"></label>
            <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-3">
                <UilSearch  style={{ height: '15px', width: '15px' }}  />
            </div>
        <input type="text"
        id="simple-search"
        className="bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg
        focus:ring-purple-500 focus:border-purple-500
        block w-40 pl-9" placeholder="Search" required/>
        </div>


        <div className="relative" data-te-dropdown-ref>
            <button
            className="rounded-full flex items-center whitespace-nowrap rounded bg-primary px-2 pb-1 pt-1 text-xs font-small uppercase leading-normal text-black"
            type="button"
            id="dropdownMenuButton1"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            >
            Jobs
            <span className="ml-1 w-2">
            <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-5">
                <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd" />
            </svg>
            </span>
        </button>
        <ul
            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref>
            <li>
            <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
                >Action</a
            >
            </li>
            <li>
            <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
                >Another action</a
            >
            </li>
            <li>
            <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
                >Something else here</a
            >
            </li>
        </ul>
        </div>


        <div className='flex justify-self-end space-x-2'>
            <UilFilter className="border border-gray-200 h-[30px] w-[30px] p-1 rounded-full bg-gray-200"/>
            <UilEllipsisV className="border border-gray-200 h-[30px] w-[30px] p-1 rounded-full bg-gray-200"/>
        </div>
    </div>

    <div className="bg-slate-200 mt-3 ">
      <ul className="p-1 bg-white items-center justify-center border-solid border-2 flex flex-row space-x-10">
          <li className="hover:text-purple-300">Latest Posts</li>
          <li className="hover:text-purple-300">Recent Activities</li>
      </ul>
    </div>

</div>
  )
}

export default MobileNav
