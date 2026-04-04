import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// const teachersData = [
//   {
//     id: 1,
//     name: "হাফেজা আয়েশা খাতুন",
//     designation: "সিনিয়র শিক্ষিকা",
//     image: "https://i.ibb.co.com/d4SN4B68/image.png",
//     description: "সহিহ কুরআন ও বুনিয়াদি ইসলামি শিক্ষাদানে অভিজ্ঞ।"
//   },
//   {
//     id: 2,
//     name: "মাওলানা ফাতিমা আহমেদ",
//     designation: "সহকারী শিক্ষিকা",
//     image: "https://i.ibb.co.com/Q7pMW52b/international-day-education-celebration.jpg",
//     description: "আধুনিক পদ্ধতিতে দোয়া ও আরবি ভাষা শিখিয়ে থাকেন।"
//   },
//   {
//     id: 3,
//     name: "কারী মোহাম্মদ ইব্রাহিম",
//     designation: "তাজবিদ বিশেষজ্ঞ",
//     image: "https://i.ibb.co.com/W4nGD6JP/image.png",
//     description: "তাজবিদের নিয়মগুলো আকর্ষণীয়ভাবে উপস্থাপন করেন।"
//   },
//   {
//     id: 4,
//     name: "মাওলানা হাসান মাহমুদ",
//     designation: "ইসলামি ইতিহাস শিক্ষক",
//     image: "https://i.ibb.co.com/KcH1j16J/image.png",
//     description: "নবী-রাসূলদের জীবনকাহিনি গল্পের মাধ্যমে শোনান।"
//   },
//   {
//     id: 5,
//     name: "হাফেজ আবু বকর",
//     designation: "হিফজ বিভাগীয় শিক্ষক",
//     image: "https://i.ibb.co.com/4Z5XYw3z/image.png",
//     description: "ছোট সূরা দ্রুত ও স্থায়ীভাবে মুখস্থ করানোর পদ্ধতি।"
//   },
//   {
//     id: 6,
//     name: "মাওলানা ইউসুফ আহমেদ",
//     designation: "শিষ্টাচার শিক্ষক",
//     image: "https://i.ibb.co.com/b52CRmv0/image.png",
//     description: "আদব-কায়দা ও সুন্নতি জীবনধারা গঠনে মেন্টর।"
//   }
// ];

const OurTeachers = () => {
  const [teachersData, setTeachersData] = useState([]);
  useEffect(() => {
    fetch("/teacherData/data.json")
      .then((res) => res.json())
      .then((data) => setTeachersData(data))
      .catch((err) => console.log("Error fetching data", err));
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white py-8 px-2 select-none overflow-hidden"
    >
      {/* Header Section with Features Divider Style */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[22px] font-big text-[#024a56] tracking-tight">
          আমাদের শিক্ষকগণ
        </h2>
        <div className="flex items-center gap-1 opacity-40">
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

      {/* Teachers Grid */}
      <div className="grid grid-cols-3 gap-2 px-1">
        {teachersData.map((teacher, index) => (
          <div
            key={teacher.id}
            className="flex flex-col items-center bg-white rounded-sm pt-3 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden"
          >
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
            <div className="w-full h-[2px] bg-[#d4a373]"></div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurTeachers;
