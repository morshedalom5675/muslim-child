import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/image/banner.jpeg";

const Hero = () => {
  const statsIcons = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
      label: "কুরআন",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/512/3382/3382025.png",
      label: "সুন্নাহ",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/512/4637/4637201.png",
      label: "আখলাক",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/512/2641/2641626.png",
      label: "দোয়া",
    },
    {
      id: 5,
      img: "https://cdn-icons-png.flaticon.com/512/3588/3588612.png",
      label: "সালাত",
    },
    {
      id: 6,
      img: "https://cdn-icons-png.flaticon.com/512/3976/3976631.png",
      label: "হাদিস",
    },
    {
      id: 7,
      img: "https://cdn-icons-png.flaticon.com/512/2940/2940651.png",
      label: "নবী",
    },
    {
      id: 8,
      img: "https://cdn-icons-png.flaticon.com/512/1164/1164620.png",
      label: "আরবি",
    },
    {
      id: 9,
      img: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png",
      label: "ইতিহাস",
    },
    {
      id: 10,
      img: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
      label: "সৃজনশীল",
    },
  ];

  
  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full bg-white select-none">
      {/* Hero Section */}
      <section className="relative h-[200px] w-full pt-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top z-0"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="px-5 py-0.5 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
            className="space-y-1"
          >
            <motion.div variants={slideInLeft} transition={{ duration: 0.4 }}>
              <h2 className="text-[#004274] font-bold font-secondBig text-[12px] leading-none">
                Muslim Child Academy
              </h2>
              <p className="text-[#004274] text-[8px] font-small opacity-80 leading-none mt-1">
                একটি শিশু-বান্ধব ইসলামিক শিক্ষা প্রতিষ্ঠান।
              </p>
            </motion.div>

            <motion.p
              variants={slideInLeft}
              transition={{ duration: 0.4 }}
              className="text-[#004274] text-[7px] font-small p-1 border border-[#004274]/40 rounded-sm leading-[1.3] font-medium max-w-[200px] bg-white/20 backdrop-blur-[1px]"
            >
              ৬–১৪ বছর বয়সী শিশুদের জন্য কুরআন, হাদিস, নৈতিকতা ও প্রয়োজনীয়
              দ্বীনি শিক্ষার সমন্বয়ে আমাদের শিক্ষা কারিকুলাম।
            </motion.p>

            <motion.h1
              variants={slideInLeft}
              transition={{ duration: 0.5 }}
              className="text-[18px] font-big text-[#004274] pt-1 leading-[1.2] drop-shadow-sm"
            >
              ঈমানের আলোয় গড়ি <br /> শিশুর জীবন
            </motion.h1>

            <motion.div
              variants={slideInLeft}
              transition={{ duration: 0.5 }}
              className="pt-1"
            >
              <motion.button
                whileTap={{ scale: 0.92 }}
                className="bg-[#024a56] text-white font-bold font-small px-4 py-1.5 rounded-xl shadow-md text-[8px] transition-all hover:bg-[#0f8e83] active:scale-95 border-none"
              >
                Book Trial Class
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Icon Bar */}
      <div className="bg-[#fdf8f3] py-3 border-b border-gray-100">
        <div className="px-2">
          <div className="grid grid-cols-5 gap-y-3 gap-x-1">
            {statsIcons.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-0.5">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 bg-white rounded shadow-sm flex items-center justify-center p-1.5 border border-transparent active:border-secondary transition-all"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <span className="text-[7.5px] font-bold text-gray-500 tracking-tighter">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
