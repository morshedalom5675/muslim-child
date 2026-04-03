import React from "react";
import { motion } from "framer-motion";
import studentImg from "../../assets/image/children5.png";

const ClassInfo = () => {
  return (
    <motion.section
      // পুরো সেকশনটি নিচ থেকে হালকাভাবে ভেসে উঠবে (Features সেকশনের মতো)
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-8 px-4 bg-white overflow-hidden mobile-device select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-end mb-4 mr-4 md:mr-9"
        >
          <div className="bg-[#CCF7F4] px-4 py-1 rounded-md">
            <h2 className="text-[#024a56] font-black text-[14px]">
              ক্লাস সংক্রান্ত তথ্য
            </h2>
          </div>
        </motion.div>

        <div className="flex items-start justify-between gap-2">
          {/* Left Side: Student Image  */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[45%] relative"
          >
            <img
              src={studentImg}
              alt="Student"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Right Side: Information Card  */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="w-[55%] bg-white border border-gray-100 rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          >
            <h3 className="text-[#2D6A7E] font-bold text-[13px] text-center mb-3">
              সপ্তাহে <span className="text-[#E67E22]">৪ দিন</span> ক্লাস
            </h3>

            {/* Arabic Class Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#F2F2F2] rounded-lg p-2 flex items-center gap-2 mb-2"
            >
              <div className="flex flex-col items-center justify-center border-r border-gray-300 pr-2">
                <span className="text-[#E67E22] font-bold text-[12px]">
                  ৩ দিন
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#024a56] font-bold text-[11px]">
                  আরবি ক্লাস
                </span>
                <span className="text-[#555] text-[9px] leading-tight">
                  ক্লাসের সময়: ১ঘণ্টা <br />
                  ব্যাচ শিক্ষার্থী: ২৫ জন <br />
                  মাসে ১২টি আরবি ক্লাস
                </span>
              </div>
            </motion.div>

            {/* Special Class Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#F2F2F2] rounded-lg p-2 flex items-center gap-2"
            >
              <div className="flex flex-col items-center justify-center border-r border-gray-300 pr-2">
                <span className="text-[#E67E22] font-bold text-[12px]">
                  ১ দিন
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#024a56] font-bold text-[11px]">
                  স্পেশাল ক্লাস
                </span>
                <span className="text-[#555] text-[9px]">প্রতি: শুক্রবার</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClassInfo;
