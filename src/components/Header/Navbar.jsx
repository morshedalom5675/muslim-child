import React, { useState, useEffect } from "react"; 
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  Users,
  LayoutGrid,
  BookOpen,
  PhoneCall,
  LogIn,
} from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
    { name: "Teachers", path: "/teachers", icon: <Users size={20} /> },
    { name: "Gallery", path: "/gallery", icon: <LayoutGrid size={20} /> },
    { name: "Syllabus", path: "/syllabus", icon: <BookOpen size={20} /> },
    { name: "Contact", path: "/contact", icon: <PhoneCall size={20} /> },
  ];

  return (
    <nav className="relative bg-white sticky top-0 z-[100] px-4 py-3 border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center">
        <Logo />
        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 bg-[#024a56] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-all"
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-[2px] z-[101]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-screen w-2/3 bg-[#F5F7FF] z-[105] flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center justify-between p-6 mt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 bg-[#024a56] rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-all"
                >
                  <X size={18} className="rotate-90" />
                </button>
                <h2 className="text-[#024a56] font-bold text-sm tracking-wide">
                  Menu
                </h2>
                <div className="w-9 h-9 bg-[#5C6BC0]/10 rounded-full flex items-center justify-center text-[#024a56]">
                  <Menu size={18} />
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
                <ul className="flex flex-col gap-4 mt-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-4 text-[17px] font-medium transition-all px-4 py-3 rounded-2xl border ${
                            isActive
                              ? "bg-[#0e8e83]/10 text-[#0e8e83] border-[#0e8e83]/20 shadow-sm"
                              : "bg-transparent text-[#024a56] border-transparent"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={
                                isActive ? "text-[#0e8e83]" : "text-[#024a56]"
                              }
                            >
                              {item.icon}
                            </span>
                            {item.name}
                          </>
                        )}
                      </NavLink>
                    </motion.li>
                  ))}
                  
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="mt-2 pb-10" 
                  >
                    <button className="w-full bg-[#024a56] text-white font-bold py-3 rounded-xl shadow-md text-[14px] flex items-center justify-center gap-2 transition-all hover:bg-[#0f8e83] active:scale-95 border-none">
                      <LogIn size={18} />
                      Login
                    </button>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;