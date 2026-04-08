"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineAcademicCap,
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineLogout,
  HiX, // মোবাইল ক্লোজ বাটন
} from "react-icons/hi";

const navLinks = [
  { name: "Dashboard", href: "/dashboard", icon: HiOutlineHome },
  { name: "Academics", href: "/academics", icon: HiOutlineAcademicCap },
  { name: "Admissions", href: "/admissions", icon: HiOutlineClipboardList },
  { name: "Alumni", href: "/alumni", icon: HiOutlineUsers },
  { name: "Library", href: "/library", icon: HiOutlineBookOpen },
];

export default function Sidebar({
  closeSidebar,
}: {
  closeSidebar?: () => void;
}) {
  const pathname = usePathname();

  return (
    // "hidden" সরিয়ে হ্যাকটি এখন DashboardLayout এর ক্লাস দিয়ে হ্যান্ডেল হবে
    <aside className="flex h-full w-full flex-col border-r border-slate-200 bg-white shadow-xl lg:shadow-none">
      <div className="flex h-full flex-col justify-between px-6 py-8">
        <div>
          <div className="mb-10 flex items-center justify-between px-2">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-100">
                <HiOutlineAcademicCap size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                  edu sync
                </p>
                <p className="text-xl font-extrabold text-slate-900 leading-none mt-1">
                  Campus Portal
                </p>
              </div>
            </div>

            {/* মোবাইল ক্লোজ বাটন */}
            <button onClick={closeSidebar} className="text-slate-500 lg:hidden">
              <HiX size={24} />
            </button>
          </div>

          <nav className="space-y-1.5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar} // লিঙ্কে ক্লিক করলে মোবাইল মেনু বন্ধ হবে
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-100"
                      : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-emerald-600"}`}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Support & Logout Section */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100 shadow-sm">
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Need help?
            </p>
            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
              Check portal docs or contact support.
            </p>
          </div>
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-rose-500 hover:bg-rose-50 transition-all">
            <HiOutlineLogout size={22} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
