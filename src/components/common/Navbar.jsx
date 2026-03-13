import React, { useState, useRef, useEffect } from "react";
import Icons from "./Icons";
import Button from "./Button";
import { navLinks } from "../../utils/Helper";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="max-w-360 w-full m-auto relative">
      <div className="max-w-300 m-auto flex items-center justify-between py-5 px-4 lg:px-2">
         <a href=""><Icons icon={"logo"} /></a>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="font-normal hover:[-webkit-text-stroke:1px_#2B2B2B] text-base text-[#4E4E4E] ">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            text={"Contact Us"}
            className="hover:bg-[#7AC943] hover:text-white hover:border-transparent border-2 border-[#2B2B2B] font-semibold text-base text-[#2B2B2B] py-4 px-8 rounded-[200px]"
          />
        </div>

        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40"></div>
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)] h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-5">
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="flex flex-col items-center gap-6 mt-10">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-base text-[#4E4E4E]"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <Button
            text={"Contact Us"}
            className="hover:bg-[#7AC943] hover:text-white hover:border-transparent border-2 border-[#2B2B2B] font-semibold text-base text-[#2B2B2B] py-3 px-6 rounded-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
