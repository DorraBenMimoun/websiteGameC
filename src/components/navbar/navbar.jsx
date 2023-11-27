import React from 'react';
import "./navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">GAME C</div>
        <div className="flex space-x-4">
          <Link to={"/"} className="text-white hover:text-gray-300">Accueil</Link>
          <Link to={"/parties"} className="text-white hover:text-gray-300">Parties</Link>
          <Link to={"/scores"} className="text-white hover:text-gray-300">Meilleurs scores</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
