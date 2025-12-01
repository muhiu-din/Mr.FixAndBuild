import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#606062] text-[#BFC0C0] border-t border-black">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer">
              <span className="text-[#C8102E] font-bold text-3xl tracking-tighter uppercase">
                 <Image src="/logo.png" alt="Mr. Fix and Build Logo" width={78} height={58} />
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium contracting and construction services. We build with precision, durability, and strength.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="bg-black p-2 rounded-sm hover:bg-[#C8102E] text-white transition-colors duration-300"
                >
                  {/* Placeholder SVG Icon */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION */}
          <div>
            <h3 className="text-white uppercase font-bold tracking-wider mb-4 border-l-4 border-[#C8102E] pl-2">
              Company
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              {['Home', 'About Us', 'Services', 'Projects', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-white hover:underline decoration-[#C8102E] decoration-2 underline-offset-4 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h3 className="text-white uppercase font-bold tracking-wider mb-4 border-l-4 border-[#C8102E] pl-2">
              Our Expertise
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              {['Residential Construction', 'Commercial Renovation', 'Industrial Builds', 'Project Management'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div>
            <h3 className="text-white uppercase font-bold tracking-wider mb-4 border-l-4 border-[#C8102E] pl-2">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>123 Industrial Ave, Suite 500<br />Milwaukee, WI 53202</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#C8102E] mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#C8102E] mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>projects@buildco.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#000000] py-6 border-t border-[#3A3A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[#BFC0C0]">
          
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} BuildCo. Construction Inc. All Rights Reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-[#3A3A3C]">|</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="text-[#3A3A3C]">|</span>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;