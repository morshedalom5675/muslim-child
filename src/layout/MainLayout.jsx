import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    /* পুরো স্ক্রিনের ব্যাকগ্রাউন্ড ডার্ক বা গ্রে রাখতে পারেন যাতে মাঝখানের মোবাইল ভিউটা ফুটে ওঠে */
    <div className="bg-slate-900 min-h-screen flex justify-center overflow-x-hidden">
      {/* মোবাইল কন্টেইনার: ডেস্কটপে এটি চিকন থাকবে, মোবাইলে অটোমেটিক ফুল উইডথ হবে */}
      <div className="w-full max-w-[430px] bg-white dark:bg-slate-800 shadow-2xl flex flex-col min-h-screen relative">
        {/* navbar */}
        <Navbar />

        {/* main page */}
        <main className="flex-1">
          <Outlet />
        </main>

        
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
