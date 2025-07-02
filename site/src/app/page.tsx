"use client";

import { useEffect, useState } from "react";
import { BookOpen, FileText, LinkIcon, MapPin, Phone, Mail } from "lucide-react";
import { FaFilePdf, FaImage, FaGithub, FaLinkedin, FaResearchgate, FaStackOverflow, FaFilePowerpoint, FaYoutube } from "react-icons/fa";
import { SiArxiv, SiDblp, SiGooglescholar } from "react-icons/si";
import { AiFillFilePpt } from "react-icons/ai";
import { MdSlideshow } from "react-icons/md";
import { PiPresentationDuotone } from "react-icons/pi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Head from 'next/head';

import BioSection from "@/components/BioSection";
import ResearchSection from "@/components/ResearchSection";
import TeachingSection from "@/components/TeachingSection";
import ServiceSection from "@/components/ServiceSection";
import AwardsSection from "@/components/AwardsSection";


export default function AcademicLandingPage() {
  const [activeTab, setActiveTab] = useState("bio");

  const tabs = [
    { value: "bio", label: "Bio" },
    { value: "research", label: "Research" },
    { value: "teaching", label: "Teaching" },
    { value: "service", label: "Service & Outreach" },
    { value: "awards", label: "Awards & Funding" }
  ];

  useEffect(() => {
    const hash = window.location.hash?.substring(1).toLowerCase();
    if (tabs.some(tab => tab.value === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    window.history.replaceState(null, "", `#${tabValue}`);
  };


  return (

    <div className="p-6 max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-1">Dr. Heather Guarnera</h1>
          <p className="text-lg">Assistant Professor of Computer Science</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 text-blue-600 text-xl items-center">
            <a
              href="/files/CV_Heather_Guarnera.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700 transition"
              aria-label="Download CV"
            >
              CV
            </a>

            <a href="https://scholar.google.com/citations?user=r1wJOS8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><SiGooglescholar /></a>
            <a href="https://arxiv.org/search/cs?searchtype=author&query=Guarnera%2C+H+M" target="_blank" rel="noopener noreferrer" aria-label="arXiv"><SiArxiv /></a>
            <a href="https://dblp.uni-trier.de/pid/206/6610.html" target="_blank" rel="noopener noreferrer" aria-label="DBLP"><SiDblp /></a>
            <a href="https://www.researchgate.net/profile/Heather-Guarnera" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate"><FaResearchgate /></a>
            <a href="https://github.com/hmm34" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/heather-guarnera/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://stackexchange.com/users/2709399/heather-guarnera" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow"><FaStackOverflow /></a>
            <a href="https://www.youtube.com/channel/UCw0vfIOiXzae_V8rUvUSwsg" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>

        </div>
      </div>

      {/* Sticky Tabs Navigation with CV Button */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 mb-6 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2 px-2 py-2">
          {/* Tab buttons */}
          <div className="overflow-x-auto">
            <div className="inline-flex border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
              {tabs.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => handleTabClick(tab.value)}
                  className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap border-r last:border-r-0 ${
                    activeTab === tab.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>


      {/* Tabs Content */}

      <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
      
      {activeTab === "bio" && <BioSection />}
      {activeTab === "research" && <ResearchSection />}
      {activeTab === "teaching" && <TeachingSection />}
      {activeTab === "service" && <ServiceSection />}
      {activeTab === "awards" && <AwardsSection />}
      
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
