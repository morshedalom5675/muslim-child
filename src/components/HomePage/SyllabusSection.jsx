import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import bookImage from "../../assets/image/book2.png";
import bookImage2 from "../../assets/image/book1.jpeg";

const SyllabusSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const syllabusSlides = [
    {
      id: 1,
      topics: [
        "আরবি নূরানী কায়দা।",
        "বিশুদ্ধ কুরআন তিলাওয়াত।",
        "তাজভীদসহ কুরআন শিক্ষা।",
        "নামাজের জন্য ১৫+ সূরা মুখস্থ।",
        "অর্থসহ কালিমা সমূহ মুখস্থ।",
      ],
      image: bookImage,
    },
    {
      id: 2,
      topics: [
        "নামাজের জরুরি মাসআলা-মাসায়েল।",
        "শুদ্ধ উচ্চারণে নামাজের দোয়া সমূহ।",
        "প্র্যাকটিক্যাল নামাজ শিক্ষা।",
        "দৈনন্দিন প্রয়োজনীয় দোয়া ও আমল।",
        "ইসলামিক শিষ্টাচার বা আদব-আখলাক।",
      ],
      image: bookImage2,
    },
    {
      id: 3,
      topics: [
        "রোজা, হজ, যাকাতসহ প্রয়োজনীয় বিষয়।",
        "নবী ও সাহাবীদের জীবনী আলোচনা।",
        "ছোট ছোট হাদিস ও সুন্নাহ শিক্ষা।",
        "সৃজনশীল ইসলামিক অঙ্কন ও ক্যালিগ্রাফি।",
        "নৈতিকতা ও মূল্যবোধ শিক্ষা।",
      ],
      image: bookImage,
    },
    {
      id: 4,
      topics: [
        "আরবি হরফ ও শব্দ গঠন।",
        "শুদ্ধ উচ্চারণে সূরা তিলাওয়াত।",
        "জীবন ও জগতের ইসলামিক জ্ঞান।",
        "সামাজিক ও পারিবারিক আদব।",
        "সহজ মাসআলা ও সমাধান।",
      ],
      image: bookImage2,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % syllabusSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [syllabusSlides.length]);

  return (
    <div className="w-full bg-[#fdf8f3] py-6 px-4 select-none">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-5 text-center">
        <h2 className="text-xl font-black text-[#024a56] tracking-tight">
          আমাদের সিলেবাস
        </h2>
        <p className="text-[10px] text-gray-500 font-medium mt-0.5">
          আধুনিক ও দ্বীনি শিক্ষার এক চমৎকার সমন্বয়
        </p>
        <div className="flex items-center gap-2 opacity-30 mt-1">
          <span className="w-8 h-[1px] bg-[#024a56]"></span>
          <span className="text-[8px]">✦</span>
          <span className="w-8 h-[1px] bg-[#024a56]"></span>
        </div>
      </div>

      {/* Main Container - Text & Image */}
      <div className="flex items-center justify-between gap-4 min-h-[190px]">
        {/* Left Side: Bullet Points */}
        <div className="w-[60%] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.ul
              key={currentIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-2.5"
            >
              {syllabusSlides[currentIndex].topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#0e8e83] rotate-45 mt-1.5 flex-shrink-0 shadow-sm" />
                  <span className="text-[12px] font-bold text-[#444] leading-tight">
                    {topic}
                  </span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Right Side: Image Only */}
        <div className="w-[40%] flex items-center justify-center">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={syllabusSlides[currentIndex].image}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="max-w-full h-auto max-h-[140px] object-contain drop-shadow-xl"
                alt="Syllabus"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Centered Dots - Now outside the flex container */}
      <div className="flex justify-center gap-1.5 mt-4">
        {syllabusSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative h-1.5 focus:outline-none transition-all duration-500"
            style={{ width: currentIndex === index ? "18px" : "6px" }}
          >
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                currentIndex === index ? "bg-[#024a56]" : "bg-gray-300"
              }`}
            />
          </button>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <motion.button
          whileTap={{ scale: 0.96 }}
          className="w-full py-3 bg-[#024a56] text-white rounded-2xl text-[11px] font-bold flex items-center justify-center gap-2 shadow-lg active:bg-[#0e8e83] transition-all duration-300"
        >
          <Download size={16} />
          সিলেবাস ডাউনলোড করুন
        </motion.button>
      </div>
    </div>
  );
};

export default SyllabusSection;
