"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useTheme } from "./context/ThemeContext"; 
import { projects } from "@/app/data/projects";
import { motion, Variants } from "framer-motion"; // Added 'Variants' import
import { 
  Hammer, 
  Wrench, 
  PaintBucket, 
  Ruler, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
} from "lucide-react";

// Animation Variants - Explicitly typed to fix TS errors
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage = () => {
  const { darkMode } = useTheme(); 
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true); // ensures client-side render only
  }, []);

  if (!mounted) return null; // avoid hydration mismatch


  const whatsappNumber = "+447343025270"; 
  const whatsappLink = `https://wa.me/${447343025270}?text=Hello%20Mr.%20Fix%20and%20Build,%20I%20need%20a%20quote.`;

  const services = [
    {
      title: "General Repairs",
      desc: "From leaky faucets to squeaky doors, we fix the small things before they become big problems.",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "Custom Carpentry",
      desc: "Bespoke shelving, cabinetry, and stud walls built with precision and strength and Flat-pack joinery.",
      icon: <Hammer className="w-8 h-8" />,
    },
    {
      title: "Painting & Decorating",
      desc: "Interior and exterior painting that revitalizes your space with clean and premium finishes.",
      icon: <PaintBucket className="w-8 h-8" />,
    },
    {
      title: "Renovations",
      desc: "Full-scale remodeling for kitchens, bathrooms, bedrooms and living rooms. We manage the project A-Z.",
      icon: <Ruler className="w-8 h-8" />,
    },
  ];

  

  return (
    <div className={`min-h-screen font-sans selection:bg-[#C8102E] selection:text-white transition-colors duration-300 ${
      darkMode ? "bg-[#121212] text-gray-100" : "bg-white text-gray-900"
    }`}>
      
      {/* ----------------HERO SECTION---------------- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" 
            alt="Construction Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className={`absolute inset-0 bg-linear-to-b ${
            darkMode ? "from-black/90 via-black/70 to-[#121212]" : "from-black/80 via-black/50 to-white"
          }`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-[#C8102E] font-bold tracking-widest uppercase mb-4 text-sm md:text-lg">
              Reliable • Professional • Skilled
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              MR. FIX AND <span className="text-[#C8102E]">BUILD</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed shadow-black drop-shadow-md">
              Your trusted partner for home improvements and repairs. 
              We bring industrial-grade quality to your residential projects.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#C8102E] hover:bg-[#a00d25] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Get a Free Quote
              </a>
              <a 
                href="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wide transition-all"
              >
                View Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ----------------SERVICES SECTION---------------- */}
      <section id="services" className={`py-24 transition-colors duration-300 ${
        darkMode ? "bg-[#000000]" : "bg-gray-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[#C8102E] font-bold tracking-widest uppercase mb-2">What We Do</h3>
            <h2 className={`text-4xl font-extrabold ${darkMode ? "text-white" : "text-black"}`}>
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#C8102E] mx-auto mt-4"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`group p-8 shadow-lg hover:shadow-2xl border-b-4 border-transparent hover:border-[#C8102E] transition-all duration-300 cursor-pointer rounded-sm ${
                  darkMode ? "bg-[#1a1a1a]" : "bg-white"
                }`}
              >
                <div className="text-[#C8102E] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 uppercase ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${darkMode ? "text-[#BFC0C0]" : "text-gray-600"}`}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ----------------PROJECTS SECTION---------------- */}
      <section id="projects" className={`py-24 transition-colors duration-300 ${
        darkMode ? "bg-[#121212]" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h3 className="text-[#C8102E] font-bold tracking-widest uppercase mb-2">Portfolio</h3>
              <h2 className={`text-4xl font-extrabold ${darkMode ? "text-white" : "text-black"}`}>
                Recent Projects
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-[#C8102E] font-bold uppercase tracking-wide hover:underline mt-4 md:mt-0">
              View All Work <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {projects.map((project, index) => {
              const slug = project.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={index}
                  href={`/projects/${slug}`}
                  className="group relative overflow-hidden rounded-sm shadow-xl block"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="relative overflow-hidden rounded-sm"
                  >
                {/* Image */}
                <div className="aspect-4/5 md:aspect-3/4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-[#C8102E] font-bold text-xs uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {project.desc}
                  </p>
                </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          <div className="mt-12 text-center md:hidden">
             <a href="#" className="inline-flex items-center gap-2 text-[#C8102E] font-bold uppercase tracking-wide hover:underline">
              View All Work <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ----------------ABOUT SECTION---------------- */}
      <section id="about" className={`py-24 overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-[#000000]" : "bg-gray-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`relative z-10 border-8 shadow-2xl ${
                darkMode ? "border-[#1a1a1a]" : "border-white"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop" 
                  alt="Worker measuring" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative square behind */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C8102E] z-0 hidden md:block"></div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[#C8102E] font-bold tracking-widest uppercase mb-2">About Us</h3>
              <h2 className={`text-4xl font-extrabold mb-6 ${darkMode ? "text-white" : "text-black"}`}>
                Building Trust, <br /> One Project at a Time.
              </h2>
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? "text-[#BFC0C0]" : "text-gray-600"}`}>
                At <strong>Mr. Fix and Build</strong>, we understand that your home is your most valuable asset. That's why we approach every job—whether it's fixing a loose hinge or renovating a kitchen—with the same level of industrial precision and care.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Licensed and Insured Professionals",
                  "Transparent Pricing - No Hidden Fees",
                  "On-Time Completion Guarantee",
                  "High-Quality Materials Only"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-[#C8102E] w-6 h-6 shrink-0" />
                    <span className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="team" className="text-[#C8102E] font-bold uppercase tracking-wide hover:text-[#a00d25] inline-flex items-center gap-2 group">
                Meet The Team <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------CONTACT / CALL TO ACTION---------------- */}
      <section id="contact" className="py-24 bg-[#C8102E] relative">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-8"
          >
            Ready to Fix or Build?
          </motion.h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation. Send us a photo of your issue on WhatsApp for an instant estimate.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#C8102E] px-8 py-4 rounded-sm font-bold uppercase tracking-wide shadow-xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+447343025270"
              className="bg-[#121212] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide shadow-xl flex items-center justify-center gap-3 border border-[#3A3A3C]"
            >
              <Phone className="w-6 h-6" />
              +44-73-4302 5270
            </motion.a>
          </div>
        </div>
      </section>

      {/* ----------------FLOATING WHATSAPP BUTTON---------------- */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b85c] transition-colors flex items-center justify-center group"
      >
        {/* Ping Animation Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.a>

    </div>
  );
};

export default HomePage;