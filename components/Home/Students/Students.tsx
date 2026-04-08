"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import StudentLightBox from "../StudentLightBox/StudentLightBox";
import { Student } from "@/types/Student";

const Students: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const students: Student[] = [
    {
      id: 1,
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
      role: "student",
      batch: "2024",
      major: "Software Engineering",
      idNumber: "CS-2401",
      achievements: "Dean's List",
      description:
        "Passionately exploring the world of full-stack development and open source.",
      socials: {
        facebook: "#",
        linkedin: "#",
        github: "#",
        email: "alex@campus.edu",
      },
    },
    {
      id: 2,
      name: "Sophia Martinez",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      role: "student",
      batch: "2023",
      major: "Cyber Security",
      idNumber: "CS-2305",
      achievements: "Hackathon Winner",
      description:
        "Focused on ethical hacking and protecting digital infrastructures.",
      socials: {
        facebook: "#",
        linkedin: "#",
        github: "#",
        email: "sophia@campus.edu",
      },
    },
    {
      id: 3,
      name: "Jordan Lee",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      role: "student",
      batch: "2025",
      major: "Data Science",
      idNumber: "DS-2509",
      achievements: "Top 1% in Kaggle",
      description: "Exploring the power of Big Data and predictive modeling.",
      socials: {
        facebook: "#",
        linkedin: "#",
        github: "#",
        email: "jordan@campus.edu",
      },
    },
    {
      id: 4,
      name: "Lila Chen",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
      role: "student",
      batch: "2024",
      major: "UI/UX Design",
      idNumber: "UX-2412",
      achievements: "Behance Featured",
      description: "Creating user-centric designs with focus on accessibility.",
      socials: {
        facebook: "#",
        linkedin: "#",
        github: "#",
        email: "lila@campus.edu",
      },
    },
    {
      id: 5,
      name: "Rahat Kabir",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      role: "student",
      batch: "2024",
      major: "MERN Stack",
      idNumber: "WEB-99",
      achievements: "Pro Developer",
      description:
        "Specializing in robust backend systems and modern frontend.",
      socials: {
        facebook: "#",
        linkedin: "#",
        github: "#",
        email: "rahat@dev.com",
      },
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden student-slider relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900"
          >
            Our <span className="text-blue-600">Brilliant Students</span>
          </motion.h2>
          <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Swiper Slider */}
        <div className="relative group">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
        
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-20 px-4"
          >
            {students.map((student) => (
              <SwiperSlide key={student.id} className="py-4">
                <motion.div
                  layoutId={`student-card-${student.id}`}
                  onClick={() => setSelectedStudent(student)}
                  className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer border border-gray-100 p-8 flex flex-col items-center text-center transition-all duration-500 group h-full"
                >
                  {/* Image with Motion */}
                  <motion.div
                    layoutId={`student-img-${student.id}`}
                    className="relative w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-gray-50 group-hover:ring-blue-100 transition-all duration-500 shadow-md"
                  >
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.h3
                    layoutId={`student-name-${student.id}`}
                    className="font-bold text-gray-900 text-xl leading-tight mb-2"
                  >
                    {student.name}
                  </motion.h3>

                  <p className="text-[11px] text-blue-600 font-bold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full mb-6">
                    Batch {student.batch}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 w-full space-y-1">
                    <p className="text-sm font-semibold text-gray-500">
                      {student.major}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                      ID: {student.idNumber}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Lightbox Component */}
        <AnimatePresence>
          {selectedStudent && (
            <StudentLightBox
              student={selectedStudent}
              close={() => setSelectedStudent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Students;
