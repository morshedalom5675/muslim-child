import React from "react";
import { motion } from "framer-motion";
import bookImage from '../../assets/image/syllabus.png';

const SyllabusHome = () => {
  const syllabusList = [
    "আরবি নূরানী কায়দা।",
    "বিশুদ্ধ কুরআন তিলাওয়াত।",
    "তাজভীদসহ কুরআন শিক্ষা।",
    "নামাজের জন্য ১৫+ সূরা মুখস্ত।",
    "অর্থসহ কালিমা সমূহ মুখস্ত।",
    "নামাজের জরুরি মাসআলা-মাসায়েল।",
    "শুদ্ধ উচ্চারণে নামাজের দোয়া সমূহ।",
    "প্র্যাকটিক্যাল নামাজ শিক্ষা।",
    "দৈনন্দিন প্রয়োজনীয় দোয়া ও আমল।",
    "ইসলামিক শিষ্টাচার বা আদব-আখলাক।",
    "রোজা, হজ্ব, যাকাতসহ প্রয়োজনীয় ধর্মীয় বিষয়াবলী।"
  ];

  return (
    
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="w-full bg-[#fdf8f3] py-8 px-3 select-none overflow-hidden"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-[22px] font-big text-[#024a56] tracking-tight">
          সংক্ষিপ্ত সিলেবাস
        </h2>
        <div className="flex items-center gap-1 opacity-40">
          <span className="w-8 h-[1px] bg-[#024a56]"></span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-0.5 h-0.5 border border-[#024a56] rounded-full"></span>
            ))}
          </div>
          <span className="w-8 h-[1px] bg-[#024a56]"></span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex items-start justify-between gap-3">
        
        {/* Left Side: Syllabus List */}
        <div className="flex-1 min-w-0">
          <ul className="space-y-1">
            {syllabusList.map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="flex items-center gap-1.5 whitespace-nowrap"
              >
                <div className="flex-shrink-0">
                  <div className="w-1 h-1 bg-[#0e8e83] rotate-45" />
                </div>
                <span className="text-[9px] font-bold font-small text-[#444] leading-tight">
                  {text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-[150px] flex-shrink-0"> 
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-start justify-center"
          >
           
            <img 
              src={bookImage} 
              alt="Syllabus Books" 
              className="max-w-full h-auto drop-shadow-2xl" // 
            />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default SyllabusHome;