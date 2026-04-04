import React from "react";
import { motion } from "framer-motion";
import paymentImg from "../../assets/image/payment.png";

const FeeInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-0 pb-0 bg-white overflow-hidden mobile-device select-none relative"
    >
      
      <div className="w-full h-[28px] bg-[#024a56] mb-6"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 mb-6">
        {/* Left Side: Payment Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[42%] relative"
        >
          <img
            src={paymentImg}
            alt="Payment Info"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Right Side: Fee Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-[58%] bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          {/* Header */}
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-[#024a56] font-big text-[22px] leading-tight">
              ফি সংক্রান্ত তথ্য
            </h2>
            <p className="text-[11px] text-gray-400 font-bold font-secondBig">
              Fee Related Information
            </p>
            
            <div className="w-full h-[1px] bg-gray-100 mt-3 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                <div className="flex items-center gap-1 opacity-40">
                  <span className="w-8 h-[1px] bg-[#024a56]"></span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-0.5 h-0.5 bg-[#024a56] rounded-full"></span>
                    ))}
                  </div>
                  <span className="w-8 h-[1px] bg-[#024a56]"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Boxes */}
          <div className="flex gap-2">
            <div className="flex-1 border border-gray-100 rounded-xl p-2 text-center bg-[#F9FAFB]">
              <p className="text-[#555] text-[10px] font-bold font-secondBig mb-1">এডমিশন ফি</p>
              <h3 className="text-[#024a56] font-black font-secondBig  text-[18px]">৩০০৳</h3>
              <p className="text-[#E67E22] text-[8px] font-bold font-small mt-1">অগ্নিম</p>
            </div>

            <div className="flex-1 border border-gray-100 rounded-xl p-2 text-center bg-[#F9FAFB]">
              <p className="text-[#555] text-[10px] font-bold font-secondBig mb-1">মাসিক ফি</p>
              <h3 className="text-[#024a56] font-black font-secondBig text-[18px]">১০২০৳</h3>
              <p className="text-[#555] text-[7px] leading-tight font-small mt-1">
                মাস শেষে পরিশোধ করতে হয়
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      
      <div className="w-full h-[28px] bg-[#024a56]"></div>
    </motion.section>
  );
};

export default FeeInfo;