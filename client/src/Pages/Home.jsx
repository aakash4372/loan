import React, { useState } from "react";
import { motion } from "framer-motion";
import Banners from "../assets/img/banner1.jpg";
import Enquiryform from "../Pages/Enquiryform";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 10 } },
  };

  const buttonVariants = {
    initial: { scale: 1, backgroundColor: "rgba(72, 176, 108, 1)" },
    hover: { scale: 1.05, backgroundColor: "rgba(61, 145, 89, 1)", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-0"
      style={{
        backgroundImage: `url(${Banners})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-6xl mx-auto space-y-6"
      >
        <motion.h1
          variants={titleVariants}
          className="text-2xl sm:text-2xl md:text-5xl font-bold leading-snug"
        >
          Loan Guru - Your Trusted Loan Consulting & Documentation Partner
        </motion.h1>

        <motion.p
          variants={containerVariants}
          className="text-sm sm:text-lg md:text-xl mb-4 leading-relaxed max-w-4xl mx-auto"
        >
          Helping you secure the right loan with expert guidance, bank-ready documentation, and complete end-to-end support.
        </motion.p>

        <motion.p
          variants={containerVariants}
          className="text-sm sm:text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
        >
          At Loan Guru, we simplify the process of getting your loan approved.
          Our expert team guides you in choosing the right loan scheme, prepares
          complete project reports, and coordinates with banks to ensure your
          application is strong and ready. We don’t just assist – we stand with
          you until the final disbursement.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full sm:w-auto">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8haoOxC0iM-4by9KDP65jwzFfRj-1DKh70Rt2xbbQjmq1CA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg text-white shadow-lg"
          >
            Apply Now
          </motion.a>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg text-white shadow-lg bg-green-500 hover:bg-green-600 transition-colors"
          >
            Book a Free Consultation
          </motion.button>
        </div>
      </motion.div>

      {/* WhatsApp Form Modal */}
      {isModalOpen && <Enquiryform onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;
