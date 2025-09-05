import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-slate-300 text-gray-600 shadow-lg flex items-center justify-between px-10 z-50">
      <h1 className="text-2xl font-bold tracking-wide">MyStore</h1>

      <div className="relative cursor-pointer">
        <FaShoppingCart className="text-2xl hover:text-blue-400 transition-colors duration-300" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </div>
    </header>
  );
}

export default Header;
