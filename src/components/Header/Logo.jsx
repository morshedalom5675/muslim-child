import React from "react";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center gap-2 group">
      {/* লোগো ইমেজ কন্টেইনার */}
      <div className="w-10 h-10 overflow-hidden rounded-lg shadow-sm">
        <img 
          src="/logo.jpeg" 
          alt="logo" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* টেক্সট কন্টেইনার */}
      <div className="flex flex-col items-start leading-none">
        <span className="text-[#024a56] font-black text-[18px] tracking-tighter">
          Muslim Child
        </span>
        <span className="text-[8px] text-[#024a56] font-bold tracking-tight">
          Islamic Online Academy
        </span>
      </div>
    </NavLink>
  );
};

export default Logo;