"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TeacherLightBox, { Teacher } from "../TeacherLightBox/TeacherLightBox";

const Faculty: React.FC = () => {
  /* 🔹 Typed state */
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  /* 🔹 Typed teachers array */
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Dr. Robert Wilson",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      role: "teacher",
      department: "Computer Science",
      designation: "Head of Department",
      experience: "18+ Years",
      description:
        "A visionary leader in AI and Machine Learning. Dr. Wilson has mentored numerous startups.",
      socials: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        email: "robert.cs@campusx.edu",
      },
    },
    {
      id: 2,
      name: "Prof. Sarah Adams",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      role: "teacher",
      department: "Electrical Engineering",
      designation: "Senior Professor",
      experience: "15+ Years",
      description:
        "Expert in renewable energy and smart grid technology. Prof. Sarah is dedicated to sustainable engineering.",
      socials: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        email: "sarah.ee@campusx.edu",
      },
    },
    {
      id: 3,
      name: "Dr. James Anderson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      role: "teacher",
      department: "Mechanical Eng.",
      designation: "Associate Professor",
      experience: "12+ Years",
      description:
        "Specializes in industrial automation and robotics. Dr. James leads the campus robotics lab.",
      socials: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        email: "james.me@campusx.edu",
      },
    },
    {
      id: 4,
      name: "Mrs. Emily Watson",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
      role: "teacher",
      department: "Business Admin",
      designation: "Assistant Professor",
      experience: "08+ Years",
      description:
        "A dynamic educator focused on entrepreneurship and corporate ethics.",
      socials: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        email: "emily.ba@campusx.edu",
      },
    },
    {
      id: 5,
      name: "Dr. Michael Chen",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      role: "teacher",
      department: "Civil Engineering",
      designation: "Professor",
      experience: "20+ Years",
      description:
        "Expert in structural engineering. Dr. Chen has consulted on several national projects.",
      socials: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        email: "michael.ce@campusx.edu",
      },
    },
    {
      id: 6,
      name: "Dr. David Miller",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
      role: "teacher",
      department: "Mathematics",
      designation: "Senior Lecturer",
      experience: "10+ Years",
      description:
        "A math enthusiast who simplifies complex theories. Research focus is on cryptography.",
      socials: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        email: "david.math@campusx.edu",
      },
    },
    {
      id: 7,
      name: "Dr. Linda Garcia",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      role: "teacher",
      department: "Physics",
      designation: "Researcher",
      experience: "14+ Years",
      description:
        "Leading the department in Quantum Mechanics research and particle physics.",
      socials: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        email: "linda.ph@campusx.edu",
      },
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden faculty-slider">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900"
          >
            Our Expert <span className="text-primary">Teachers </span>
          </motion.h2>
          <p className="mt-4 text-gray-500 font-medium">
            Learn from the best minds in the industry
          </p>
          <div className="mt-4 w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.id}>
              <motion.div
                layoutId={`card-${teacher.id}`}
                onClick={() => setSelectedTeacher(teacher)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 group h-full mb-10"
              >
                <motion.div
                  layoutId={`img-${teacher.id}`}
                  className="relative w-24 h-24 rounded-2xl overflow-hidden mb-5 ring-4 ring-gray-50 group-hover:ring-primary/10 transition-all shadow-md"
                >
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.h3
                  layoutId={`name-${teacher.id}`}
                  className="font-bold text-gray-900 text-base leading-tight h-10 flex items-center"
                >
                  {teacher.name}
                </motion.h3>

                <p className="text-[10px] text-primary font-bold uppercase mt-2 tracking-widest bg-primary/5 px-3 py-1 rounded-full">
                  {teacher.designation}
                </p>

                <div className="mt-5 pt-4 border-t border-gray-50 w-full">
                  <p className="text-xs font-semibold text-gray-400">
                    {teacher.department}
                  </p>
                  <p className="text-[10px] text-gray-300 mt-1 uppercase font-black tracking-tighter">
                    {teacher.experience} Exp.
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence>
          {selectedTeacher && (
            <TeacherLightBox
              selectedStudent={selectedTeacher}
              close={() => setSelectedTeacher(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Faculty;
