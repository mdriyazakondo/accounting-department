"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { Student } from "@/types/Student";

interface Props {
  student: Student;
  close: () => void;
}

const StudentLightBox: React.FC<Props> = ({ student, close }) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        layoutId={`student-card-${student.id}`}
        className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
        >
          <FaTimes className="text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Side: Image */}
          <motion.div
            layoutId={`student-img-${student.id}`}
            className="relative w-full md:w-2/5 h-72 md:h-auto"
          >
            <Image
              src={student.image}
              alt={student.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side: Details */}
          <div className="p-8 md:p-10 flex-1">
            <motion.div layoutId={`student-name-${student.id}`}>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                {student.name}
              </h2>
            </motion.div>

            <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-2">
              Batch {student.batch} — {student.major}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Achievement
                </h4>
                <p className="text-gray-700 font-medium">
                  {student.achievements}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  About
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {student.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Student ID
                </h4>
                <p className="text-gray-900 font-mono font-bold">
                  {student.idNumber}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href={student.socials.facebook}
                className="p-3 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={student.socials.linkedin}
                className="p-3 bg-blue-50 text-blue-700 rounded-2xl hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={student.socials.github}
                className="p-3 bg-gray-100 text-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={`mailto:${student.socials.email}`}
                className="p-3 bg-red-50 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentLightBox;
