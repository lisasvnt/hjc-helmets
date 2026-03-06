import Logo from '../assets/hjc-mc-logo.svg'
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-4 absolute top-0 left-0 w-full flex flex-col bg-transparent text-white z-50">
      
      {/* Barre principale */}
      <div className="flex items-center justify-between w-full">

        {/* Hamburger à gauche sur mobile, caché sur desktop */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl text-(--brand-color-font)">✕</span>
          ) : (
            <>
              <span className="block w-6 h-0.5 bg-(--brand-color-back)" />
              <span className="block w-6 h-0.5 bg-(--brand-color-back)" />
              <span className="block w-6 h-0.5 bg-(--brand-color-back)" />
            </>
          )}
        </button>

        {/* Logo — centré sur mobile, à gauche sur desktop */}
        <img src={Logo} alt="Logo" className="max-w-24 md:max-w-30 mx-auto md:mx-0"></img>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          <a href="" className="text-(--brand-color-back) hover:text-(--brand-color-font) transition">PRODUCTS</a>
          <a href="" className="text-(--brand-color-back) hover:text-(--brand-color-font) transition">MEDIA</a>
          <a href="" className="text-(--brand-color-back) hover:text-(--brand-color-font) transition">RIDERS</a>
          <a href="" className="text-(--brand-color-back) hover:text-(--brand-color-font) transition">SUPPORT</a>
          <a href="" className="text-(--brand-color-back) hover:text-(--brand-color-font) transition">ABOUT US</a>
          <a href="" className="text-(--brand-color-back) hover:text-(--brand-color-font) transition">FIND A STORE</a>
        </div>

        {/* EN à droite */}
        <a href="" className="text-(--brand-color-back) hover:text-(--brand-color-font) transition text-sm">EN</a>

      </div>

      {/* Menu mobile plein écran */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col gap-8 px-10 pt-24 z-40">
          <a href="" className="text-(--brand-color-font) text-2xl font-bold hover:text-gray-400 transition">PRODUCTS</a>
          <a href="" className="text-(--brand-color-font) text-2xl font-bold hover:text-gray-400 transition">RIDERS</a>
          <a href="" className="text-(--brand-color-font) text-2xl font-bold hover:text-gray-400 transition">MEDIA</a>
          <a href="" className="text-(--brand-color-font) text-2xl font-bold hover:text-gray-400 transition">SUPPORT</a>
          <a href="" className="text-(--brand-color-font) text-2xl font-bold hover:text-gray-400 transition">ABOUT US</a>
          <a href="" className="text-(--brand-color-font) text-2xl font-bold hover:text-gray-400 transition">FIND A STORE</a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;