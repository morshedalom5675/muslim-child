import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* লোগো সেকশন - মার্জিন কমিয়ে ২ করা হয়েছে */}
        <div className="mb-2 scale-90">
          <Logo />
        </div>

        {/* কুইক লিঙ্কস - টেক্সট সাইজ এবং গ্যাপ অপ্টিমাইজ করা হয়েছে */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 mb-4">
          <a className="text-[12px] font-medium text-[#2D3E75] hover:text-[#14B1A3]">
            About
          </a>
          <a className="text-[12px] font-medium text-[#2D3E75] hover:text-[#14B1A3]">
            Teachers
          </a>
          <a className="text-[12px] font-medium text-[#2D3E75] hover:text-[#14B1A3]">
            Courses
          </a>
          <a className="text-[12px] font-medium text-[#2D3E75] hover:text-[#14B1A3]">
            Contact
          </a>
        </nav>

        {/* সোশ্যাল আইকন - সাইজ ছোট করা হয়েছে */}
        <div className="flex gap-4 mb-5">
          <a className="w-7 h-7 rounded-full bg-[#024a56]/5 flex items-center justify-center text-[#024a56] hover:bg-[#14B1A3] hover:text-white transition-all">
            <Facebook size={14} />
          </a>
          <a className="w-7 h-7 rounded-full bg-[#024a56]/5 flex items-center justify-center text-[#024a56] hover:bg-[#14B1A3] hover:text-white transition-all">
            <Youtube size={14} />
          </a>
          <a className="w-7 h-7 rounded-full bg-[#024a56]/5 flex items-center justify-center text-[#024a56] hover:bg-[#14B1A3] hover:text-white transition-all">
            <Instagram size={14} />
          </a>
        </div>

        {/* কপিরাইট অংশ - প্যাডিং কমিয়ে আনা হয়েছে */}
        <div className="w-full border-t border-gray-50 pt-4">
          <p className="text-[10px] text-gray-400 font-medium tracking-tight">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#024a56]">Muslim Child Academy</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
