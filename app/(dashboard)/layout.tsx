"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Layout/Sidebar";
import Topbar from "@/components/Layout/Topbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // মোবাইল এবং ডেস্কটপ দুইটার জন্যই আলাদা স্টেট বা কমন স্টেট ব্যবহার করা যায়
  const [isSidebarOpen, setSidebarOpen] = useState(false); // মোবাইলে ডিফল্ট বন্ধ থাকবে

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden text-slate-900">
      {/* 🔹 Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔹 Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar এ ফাংশনটি পাস করা হয়েছে */}
        <Topbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className=" mx-auto">
            <div className="animate-in fade-in duration-500">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
