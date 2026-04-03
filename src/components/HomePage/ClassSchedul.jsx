import React from "react";
import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import scheduleBoyImg from "../../assets/image/children1.png";

const ClassSchedule = () => {
  const groupA = ["শনি", "সোম", "বুধ", "শুক্র"];
  const groupB = ["রবি", "মঙ্গল", "বৃহঃ", "শুক্র"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-8 px-3 bg-[#FAFAFA] overflow-hidden mobile-device select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left Side: Schedule Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[55%] md:w-[60%] bg-white rounded-2xl p-3 shadow-sm border border-gray-100"
        >
          {/* Header */}
          <div className="flex items-center gap-2 border-b pb-2 mb-3">
            <div className="p-1 bg-[#024a56] rounded-full text-white">
              <Clock size={13} />
            </div>
            <div>
              <h2 className="text-[#024a56] font-black text-[12px] leading-tight">
                ক্লাস শিডিউল
              </h2>
              <p className="text-[10px] text-gray-400 font-bold">
                Class Schedule
              </p>
            </div>
          </div>

          {/* Groups Section */}
          <div className="space-y-2.5">
            {/* Group A - Single Line */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="bg-[#8B5E3C] text-white text-[6.5px] md:text-[9px] font-semibold md:font-bold px-1.5 py-0.5 rounded-md flex-shrink-0">
                গ্রুপ A
              </span>
              <div className="flex gap-0.5">
                {groupA.map((day, idx) => (
                  <span
                    key={idx}
                    className="bg-green-50 text-green-700 text-[5px] md:text-[8px] font-bold px-1 py-0.5 rounded border border-green-100 flex items-center gap-0.5 whitespace-nowrap"
                  >
                    <Check size={7} /> {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Group B - Single Line */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="bg-[#D35400] text-white text-[6.5px] md:text-[9px] font-semibold md:font-bold px-1.5 py-0.5 rounded-md flex-shrink-0">
                গ্রুপ B
              </span>
              <div className="flex gap-0.5">
                {groupB.map((day, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-700 text-[5px] md:text-[8px] font-bold px-1 py-0.5 rounded border border-blue-100 flex items-center gap-0.5 whitespace-nowrap"
                  >
                    <Check size={7} /> {day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-dashed border-gray-200">
            <div>
              <p className="text-[9px] font-black text-[#024a56] mb-0.5">
                বিকাল:
              </p>
              <p className="text-[7.5px] text-gray-600 font-bold leading-tight">
                ০৩:০০—০৪:০০ PM
              </p>
              <p className="text-[7.5px] text-gray-600 font-bold leading-tight">
                ০৪:০০—০৫:০০ PM
              </p>
            </div>
            <div>
              <p className="text-[9px] font-black text-[#024a56] mb-0.5">
                রাত:
              </p>
              <p className="text-[7.5px] text-gray-600 font-bold leading-tight">
                ০৭:০০—০৮:০০ PM
              </p>
              <p className="text-[7.5px] text-gray-600 font-bold leading-tight">
                ০৯:০০—১০:০০ PM
              </p>
            </div>
          </div>

          <p className="text-[7px] text-[#0e8e83] mt-3 font-semibold leading-tight italic">
            * আলোচনা সাপেক্ষে সুবিধামতো সময়েও ক্লাসের সুযোগ আছে।
          </p>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[45%] md:w-[40%]"
        >
          <img
            src={scheduleBoyImg}
            alt="Schedule Boy"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClassSchedule;
