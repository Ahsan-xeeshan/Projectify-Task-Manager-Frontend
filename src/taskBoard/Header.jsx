import { useState } from "react";
import BarIcon from "../svgIcons/BarIcon";
import NotificationIcon from "../svgIcons/NotificationIcon";
import TaskIcon from "../svgIcons/TaskIcon";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(" ");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden" aria-label="Open menu">
        <BarIcon />
      </button>
      <div className="mx-4 flex-1">
        <input
          type="search"
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4" aria-label="Notifications">
          <NotificationIcon />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4" aria-label="Tasks">
          <TaskIcon />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
