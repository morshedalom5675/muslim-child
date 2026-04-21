import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-sm pt-3 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden">
      {/* Blob Image Container */}
      <div className="relative w-10 h-10 mb-2">
        <div
          className="absolute inset-0 bg-sky-50 scale-110"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        ></div>
        <div
          className="relative w-full h-full overflow-hidden border border-white shadow-sm"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        >
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="text-center w-full px-1 mb-3">
        <h3 className="text-[8px] font-black font-secondBig text-[#1a1a1a] leading-tight uppercase tracking-tighter mb-0.5 truncate">
          {teacher.name}
        </h3>
        <p className="text-[6px] font-bold font-small text-sky-500 my-1.5 leading-none uppercase">
          {teacher.designation}
        </p>
        <p className="text-[7px] text-gray-500 leading-[1.2] font-medium font-small tracking-tight h-[28px] ">
          {teacher.description}
        </p>
      </div>

      {/* Bottom Line - Perfectly aligned with card bottom like image */}
      <div className="w-full h-0.5 bg-[#d4a373]"></div>
    </div>
  );
};

export default TeacherCard;
