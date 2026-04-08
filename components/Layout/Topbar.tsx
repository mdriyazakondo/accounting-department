"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  HiOutlineBell,
  HiOutlineMenuAlt3,
  HiOutlineSearch,
} from "react-icons/hi";

/* 🔹 Page Title Mapping */
const titles: Record<string, string> = {
  "/": "Overview",
  "/dashboard": "Dashboard Overview",
  "/academics": "Academic Records",
  "/admissions": "Student Admissions",
  "/alumni": "Alumni Network",
  "/library": "Digital Library",
};

export default function Topbar({
  toggleSidebar,
}: {
  toggleSidebar?: () => void;
}) {
  const pathname = usePathname();

  // ডাইনামিক পেজ টাইটেল বের করার লজিক
  const pageTitle = useMemo(() => titles[pathname] ?? "Portal", [pathname]);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between gap-4 px-6 md:px-10">
        {/* 🔹 Left: Title & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors lg:hidden"
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              {pageTitle}
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 leading-none mt-1">
              Welcome back, Admin
            </p>
          </div>
        </div>

        {/* 🔹 Right: Search, Notifications & Profile */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Search Bar */}
          <div className="hidden max-w-md items-center rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 transition-all focus-within:border-emerald-200 focus-within:bg-white focus-within:shadow-sm md:flex">
            <HiOutlineSearch className="mr-2 text-slate-400" size={18} />
            <input
              type="search"
              placeholder="Search anything..."
              className="w-48 lg:w-64 bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 border-l border-slate-100 pl-4 lg:pl-6">
            {/* Notification */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
              <HiOutlineBell size={22} />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </button>

            {/* Profile Section */}
            <button className="flex items-center gap-3 rounded-xl p-1 pr-3 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              <div className="h-9 w-9 overflow-hidden rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                RA
              </div>
              <div className="hidden text-left lg:block">
                <p className="text-xs font-bold text-slate-900 leading-none">
                  Riyaz Akondo
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-400">
                  Super Admin
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
