"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * AboutSection Component
 * Displays project vision, highlights, and room reference image
 */
export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 bg-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content - About the Project */}
        <div className="mb-16">
          {/* Project Description - Centered */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading & Description */}
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider text-[#0a4d5c] mb-4 sm:mb-6 uppercase"
                style={{ fontFamily: "serif" }}
              >
                About the Project
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
                Vihaara Business Bay redefines workspace standards in Dombivli.
                This{" "}
                <strong className="text-[#0a4d5c]">
                  6-storey iconic structure
                </strong>{" "}
                has been designed keeping today's dynamic corporate needs in
                mind—blending elegance, efficiency and functionality.
              </p>
              <p className="text-base sm:text-lg text-[#d4b896] opacity-90 mb-8">
                Ideal for IT firms, consultancies, start-ups and large
                enterprises.
              </p>

              {/* Know More Button */}
              <button
                onClick={() => {
                  console.log("About Know More button clicked!");
                  const event = new CustomEvent("showEnquiryPopup");
                  window.dispatchEvent(event);
                }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#d4b896] text-white rounded-lg hover:bg-[#c4a886] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
              >
                <span>Know More</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Room Reference Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/gallery/roomReference.png"
                alt="Vihaara Business Bay - Room Reference"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
