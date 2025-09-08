import { useState, useEffect, Fragment } from "react";
import { ChevronRight, Menu, User2, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Fragment>
      {/* Navbar (only visible when sidebar is closed) */}
      {!isOpen && (
        <div className="top-0  left-0 w-full flex items-center justify-between px-8 py-4 bg-black/20 fixed z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-sm flex items-center gap-2 hover:bg-black/10 p-2 cursor-pointer rounded-lg"
          >
            <Menu className="w-4 h-4" /> Menu
          </button>

          <div className="text-white text-xl font-semibold tracking-widest">
            <img
              className="w-50"
              src="../../public/image-removebg-preview (15).png"
              alt="Logo"
            />
          </div>

          <button className="text-white text-xs cursor-pointer">
            <User2 className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[800px] bg-white shadow-lg z-50 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close Button (only visible when sidebar is open) */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 -right-20 text-white cursor-pointer p-2 rounded-lg z-50"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Sidebar Content */}
        <div className="flex h-full">
          {/* Left Section */}
          <div className="w-1/2 bg-white   px-6 py-10 flex flex-col gap-4">
            <button className="flex justify-between items-center cursor-pointer py-4 px-3 hover:bg-gray-100 rounded-md">
              Models <span><ChevronRight /></span>
            </button>
            <button className="flex justify-between items-center cursor-pointer py-4 px-3 hover:bg-gray-100 rounded-md">
              Vehicle Purchase <span><ChevronRight /></span>
            </button>
            <button className="flex justify-between items-center cursor-pointer py-4 px-3 hover:bg-gray-100 rounded-md">
              Services <span><ChevronRight /></span>
            </button>
            <button className="flex justify-between items-center cursor-pointer py-4 px-3 hover:bg-gray-100 rounded-md">
              Experience <span><ChevronRight /></span>
            </button>
            <button className="flex justify-between items-center cursor-pointer py-4 px-3 hover:bg-gray-100 rounded-md">
              Find a Dealer <span><ChevronRight /></span>
            </button>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-[#EEEFF2] px-10 py-12 text-sm flex flex-col gap-7">
            <span>Motorsport</span>
            <span>Porsche Experience – Driving & Track Experiences</span>
            <span>Porsche Communities</span>
            <span>Golf Sports</span>
            <span>Christophorus — The Porsche Magazine</span>
            <span>Visit the Porsche Museum</span>
          </div>
        </div>
      </div>

      {/* Background Overlay with Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-2xl z-40 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </Fragment>
  );
};

export default Navbar;
