"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-350 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Campus<span className="text-blue-500">X</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering the next generation of innovators and leaders through
              world-class education and a supportive community. Join us in
              shaping the future.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<FaFacebookF size={14} />} href="#" />
              <SocialIcon icon={<FaLinkedinIn size={14} />} href="#" />
              <SocialIcon icon={<FaTwitter size={14} />} href="#" />
              <SocialIcon icon={<FaInstagram size={14} />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/faculty">Our Faculty</FooterLink>
              <FooterLink href="/students">Student Portal</FooterLink>
              <FooterLink href="/admission">Admissions</FooterLink>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <FooterLink href="/library">Digital Library</FooterLink>
              <FooterLink href="/events">Upcoming Events</FooterLink>
              <FooterLink href="/alumni">Alumni Network</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>123 University Ave, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>contact@campusx.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p>
            © {currentYear} CampusX Academic Institution. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* 🔹 Helper Components */
const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="hover:text-blue-500 hover:translate-x-1 transition-all duration-300 inline-block"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
