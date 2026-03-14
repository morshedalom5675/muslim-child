import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import target from '../../assets/image/target.png'; 

const OurTarget = () => {
  return (
    <section className="py-8 pr-4 pl-0 bg-[#F0F9FF] overflow-hidden mobile-device"> 
      <div className="max-w-7xl mx-auto">
        
        {/* Headline Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" flex flex-col items-center gap-0.5 pl-4" 
        >
          <h2 className="text-[#024a56] font-black text-xl tracking-tight">আমাদের লক্ষ্য</h2>
          <div className="flex items-center gap-2 opacity-30">
            <span className="w-8 h-[1px] bg-[#024a56]"></span>
            <span className="text-[8px]">✦</span>
            <span className="w-8 h-[1px] bg-[#024a56]"></span>
          </div>
        </motion.div>

        <div className="flex items-center justify-between">
         
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-[35%] flex-shrink-0"
          >
            <img 
              src={target} 
              alt="Archery Target" 
             
              className="mb-10 w-full h-auto object-contain object-left drop-shadow-lg"
            />
          </motion.div>

          {/* Right Side: Paragraph Content (উইডথ ৬৫% করা হয়েছে) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-[65%] flex flex-col justify-center pl-3 pr-2 space-y-2" 
          >
            <p className="text-[#024a56] text-[10.5px] leading-[1.5] text-justify font-medium">
              বর্তমান প্রজন্মের শিশুদের মধ্যে যেসব সমস্যাগুলো প্রায়শই দেখা যায় যেমন: সহিহভাবে কুরআন তিলাওয়াত, নৈতিকতার অভাব, সময়ের অপচয় ও প্রযুক্তি আসক্তি ইত্যাদি সব সমস্যার সমাধানে পথ খুঁজতেই <span className="text-[#14B1A3] font-bold">“Muslim Child Academy”</span>-র সূচনা। আমাদের লক্ষ্য হলো এমন একটি প্রজন্ম গড়ে তোলা, যারা কুরআন-সুন্নাহভিত্তিক মূল্যবোধে গঠিত এবং দুনিয়া ও আখিরাতে সফল হবে।
            </p>

            {/* Link to Detail Page */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <a 
                href="/" 
                className="inline-flex items-center gap-1 text-[#14B1A3] font-bold text-[10px] border-b border-[#14B1A3] pb-0.5"
              >
                বিস্তারিত পড়ুন <ArrowRight size={12} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTarget;