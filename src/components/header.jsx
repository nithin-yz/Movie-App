import React from 'react';
import logo from './../assets/images/logo.svg';
import SearchBar from './searchbar'; // Import the SearchBar component

const Header = () => {
  const handleSearch = (query) => {
    // Handle search functionality here (e.g., make an API call)
    console.log('Searching for:', query);
  };

  return (
    <header className="bg-[black] py-4 h-[150px] mb-[60px]" >
      <div className="container mx-auto pt-[26px] flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <img className="w-[150px] h-[150px] mt-[-40px]" src={logo} alt="" />
        </h1>
        <nav className='mr-[150px]'>
          <ul className="flex space-x-4">
            <li>
              <a href="/userhome" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Movies</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Series</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Favorites</a>
            </li>
          </ul>
        </nav>
        {/* Include the SearchBar component */}
        <SearchBar onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
