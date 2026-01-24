"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * ContactPreview Component
 * Small contact card with quick contact info and email form
 * Displayed at the bottom of main landing page
 */
export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    need: "",
    purpose: "",
    enableWhatsApp: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact-popup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            mobile: "",
            need: "",
            purpose: "",
            enableWhatsApp: true,
          });
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="contact-preview-heading"
    >
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="contact-preview-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider text-[#0a4d5c] mb-4 uppercase"
            style={{ fontFamily: "serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your business? Contact us today for a site visit
            and discover why Vihaara Business Bay is the perfect choice.
          </p>
        </div>

        {/* Centered Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-[#d4b896]">
            <h3
              className="text-2xl font-light tracking-wide text-[#0a4d5c] mb-6 uppercase"
              style={{ fontFamily: "serif" }}
            >
              Send us a Message
            </h3>

            {submitStatus === "success" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-mobile"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="contact-mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900"
                    placeholder="9876543210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-need"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Need *
                  </label>
                  <select
                    id="contact-need"
                    name="need"
                    value={formData.need}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900"
                  >
                    <option value="">Select your need</option>
                    <option value="Single Office">Single Office</option>
                    <option value="Jodi Office">Jodi Office</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-purpose"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Purpose *
                  </label>
                  <select
                    id="contact-purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900"
                  >
                    <option value="">Select purpose</option>
                    <option value="Self Use">Self Use</option>
                    <option value="Investment">Investment</option>
                  </select>
                </div>

                {/* WhatsApp Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="contact-whatsapp"
                    name="enableWhatsApp"
                    checked={formData.enableWhatsApp}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#d4b896] border-gray-300 rounded focus:ring-[#d4b896]"
                  />
                  <label
                    htmlFor="contact-whatsapp"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    Enable updates through WhatsApp
                  </label>
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#d4b896] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0a4d5c] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
