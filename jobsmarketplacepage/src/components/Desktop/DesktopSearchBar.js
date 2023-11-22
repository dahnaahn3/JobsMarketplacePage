import { UilSearch } from '@iconscout/react-unicons';
import { useState } from 'react';

const DesktopSearchBar = ({ onSearch , searchTerm }) => {

  const handleSearch = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        action="/"
        className="flex items-center"
        method="get"
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <UilSearch />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            
          />
        </div>
      </form>
    </>
  );
};

export default DesktopSearchBar;
