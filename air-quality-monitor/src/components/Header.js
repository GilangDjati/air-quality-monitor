import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Air Quality Monitoring</h1>
        <nav className="w-full md:w-auto space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tentang" className="hover:underline">Tentang</Link>
          <Link to="/tips" className="hover:underline">Tips</Link>
          <Link to="/kontak" className="hover:underline">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
