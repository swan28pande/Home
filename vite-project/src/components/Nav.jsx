// Nav.js
import './Nav.css'; // Assuming this file contains necessary styles
import { MdWbSunny, MdNightsStay } from 'react-icons/md';
import { Outlet, Link } from "react-router-dom";
export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex justify-center -mt-5 dark:bg-black"> 
      <Link to="/Home" className="nav-item m-10 text-1xl dark:text-white hover:bg-gray-300 px-4 py-2 transition-all cursor-pointer">Home</Link>
      <Link to="/Blog" className="nav-item m-10 text-1xl dark:text-white hover:bg-gray-300 px-4 py-2 transition-all cursor-pointer">Blog</Link>
      <Link to="/Projects" className="nav-item m-10 text-1xl dark:text-white hover:bg-gray-300 px-4 py-2 transition-all cursor-pointer">Projects</Link>
      <Link to="/About" className="nav-item m-10 text-1xl dark:text-white hover:bg-gray-300 px-4 py-2 transition-all cursor-pointer">About</Link>
      <Link to="/Guestbook"className="nav-item m-10 text-1xl dark:text-white hover:bg-gray-300 px-4 py-2 transition-all cursor-pointer">Guestbook</Link>
      <div onClick={toggleDarkMode} className="cursor-pointer mt-12 ml-10">
        {darkMode ? 
          <MdWbSunny size="24px" style={{ color: 'white' }} /> : 
          <MdNightsStay size="24px" style={{ color: 'black' }} />}
      </div>
      <Outlet />
    </div>
   
  );
}
