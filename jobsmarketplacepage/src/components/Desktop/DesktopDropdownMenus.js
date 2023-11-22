function DesktopDropdownMenus(){
  return (
    <>
        <div style={{width: "70%"}}>
      <ul  className="flex p-5 text-center">
        <li>
            <div className="relative" data-te-dropdown-ref>
            <button
      className="flex rounded-full items-center whitespace-nowrap rounded
        bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase
        leading-normal text-black shadow-md
        transition duration-150 ease-in-out hover:bg-primary-600
        hover:shadow-lg
        focus:bg-primary-600 focus:shadow-lg
        focus:outline-none focus:ring-0 active:bg-primary-700
        active:shadow-lg
        motion-reduce:transition-none"
      type="button"
      id="dropdownMenuButton1"
      data-te-dropdown-toggle-ref
      aria-expanded="false"
      data-te-ripple-init
      data-te-ripple-color="violet"
    >
      Experience Level
      <span className="ml-2 w-2">
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
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
        </li>



        <li>
        <div className="relative" data-te-dropdown-ref>
        <button
      className="flex rounded-full items-center whitespace-nowrap rounded
        bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase
        leading-normal text-black shadow-md
        transition duration-150 ease-in-out hover:bg-primary-600
        hover:shadow-lg
        focus:bg-primary-600 focus:shadow-lg
        focus:outline-none focus:ring-0 active:bg-primary-700
        active:shadow-lg
        motion-reduce:transition-none"
      type="button"
      id="dropdownMenuButton2"
      data-te-dropdown-toggle-ref
      aria-expanded="false"
      data-te-ripple-init
      data-te-ripple-color="violet"
    >
      Closing Date
      <span className="ml-2 w-2">
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>

          <ul
            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
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
        </li>



        <li>
        <div className="relative" data-te-dropdown-ref>
        <button
      className="flex rounded-full items-center whitespace-nowrap rounded
        bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase
        leading-normal text-black shadow-md
        transition duration-150 ease-in-out hover:bg-primary-600
        hover:shadow-lg
        focus:bg-primary-600 focus:shadow-lg
        focus:outline-none focus:ring-0 active:bg-primary-700
        active:shadow-lg
        motion-reduce:transition-none"
      type="button"
      id="dropdownMenuButton3"
      data-te-dropdown-toggle-ref
      aria-expanded="false"
      data-te-ripple-init
      data-te-ripple-color="violet"
    >
      On-site/Remote
      <span className="ml-2 w-2">
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>

          <ul
            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton3"
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
        </li>



        <li>
        <div className="relative" data-te-dropdown-ref>
        <button
      className="flex rounded-full items-center whitespace-nowrap rounded
        bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase
        leading-normal text-black shadow-md
        transition duration-150 ease-in-out hover:bg-primary-600
        hover:shadow-lg
        focus:bg-primary-600 focus:shadow-lg
        focus:outline-none focus:ring-0 active:bg-primary-700
        active:shadow-lg
        motion-reduce:transition-none"
      type="button"
      id="dropdownMenuButton4"
      data-te-dropdown-toggle-ref
      aria-expanded="false"
      data-te-ripple-init
      data-te-ripple-color="violet"
    >
      My Network
      <span className="ml-2 w-2">
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
          <ul
            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton4"
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
        </li>

        <li className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black"> Reset Filters </li>
        </ul>
      </div>
    </>
  )
}

export default DesktopDropdownMenus
