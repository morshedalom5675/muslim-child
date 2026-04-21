import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TeacherCard from "../../reuseable/TeacherCard";


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
          <span className="w-8 h-px bg-[#024a56]"></span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-0.5 h-0.5 border border-[#024a56] rounded-full"
              ></span>
            ))}
          </div>
          <span className="w-8 h-px bg-[#024a56]"></span>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-3 gap-2 px-1">
        {teachersData.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher}/>
        ))}
      </div>
    </motion.section>
  );
};

export default OurTeachers;
