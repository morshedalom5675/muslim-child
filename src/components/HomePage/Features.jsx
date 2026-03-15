import React from "react";
import { motion } from "framer-motion";
import featureImage from "../../assets/image/features-child.png";

const Features = () => {
  const featureList = [
    "লেভেল ভিত্তিক পাঠদান পদ্ধতি।",
    "প্রতি লেভেল শেষে লেভেলআপ এক্সাম।",
    "আদর, ভালোবাসায় ফ্রেন্ডলি টিচিং সিস্টেম।",
    "নৈতিকতা নিশ্চিত করতে সাপ্তাহিক স্পেশাল ক্লাস।",
    "দৈনন্দিন কাজকে ইসলামবান্ধব করতে রিপোর্ট সিস্টেম।",
    "আদব-আখলাক বা উত্তম শিষ্টাচারের প্রতি গুরুত্বারোপ।",
    "অভিজ্ঞ হাফেজ শিক্ষক/শিক্ষিকার মাধ্যমে বিশুদ্ধভাবে পাঠদান।",
    "বিজ্ঞ আলেমদের পরামর্শের ভিত্তিতে তৈরি সিলেবাসে পাঠদান।",
    "প্রতিনিয়ত ক্লাস মনিটরিং ও অভিভাবকদের জন্য সাপোর্ট সিস্টেম।",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#F0F9FF] py-8 px-3 select-none overflow-hidden"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center mb-3">
        <h2 className="text-[16px] font-black text-[#024a56] tracking-tight">
          আমাদের কিছু বৈশিষ্ট্য
        </h2>
        <div className="flex items-center gap-1 opacity-40 mt-1">
          <span className="w-8 h-[1px] bg-[#024a56]"></span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-0.5 h-0.5 border border-[#024a56] rounded-full"
              ></span>
            ))}
          </div>
          <span className="w-8 h-[1px] bg-[#024a56]"></span>
        </div>
      </div>

      {/* Main Layout*/}
      <div className="flex items-start justify-between">
        {/* Left Side: Features List */}
        <div className="flex-1">
          <ul className="space-y-1">
            {featureList.map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="flex items-center gap-1.5 whitespace-nowrap"
              >
                <div className="flex-shrink-0">
                  <div className="w-1 h-1 bg-[#f59e0b] rotate-45" />
                </div>
                <span className="text-[8px] font-bold text-[#333]">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className="relative w-30 h-30 overflow-hidden shadow-sm border-[1.5px] border-white"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <img
                src={featureImage}
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#0e8e83]/5 blur-lg rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
