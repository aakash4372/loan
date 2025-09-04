import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Herovidew from "@/assets/loan_guru.mp4"
const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        {/* Header */}
        <header className="text-center mb-14" data-aos="fade-down">
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            About <span className="text-[#07bf69]">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl md:text-lg text-slate-300">
            At Loan Guru, our mission is simple
          </p>
        </header>

        {/* Content */}
        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc={Herovidew}
            thumbnailSrc="https://t4.ftcdn.net/jpg/02/85/24/41/360_F_285244154_w7VBev0f73f0JP2LIha5NPI6sv0rsXaf.jpg"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc={Herovidew}
            thumbnailSrc="https://t4.ftcdn.net/jpg/02/85/24/41/360_F_285244154_w7VBev0f73f0JP2LIha5NPI6sv0rsXaf.jpg"
            thumbnailAlt="Hero Video"
          />

          {/* Text */}
          <div
            className="text-base md:text-lg leading-relaxed text-slate-300"
            data-aos="fade-left"
          >
            <p>
              To make your loan application process smooth, fast, and
              stress-free.
            </p>
            <p className="mt-6">
              We are professional loan consultants specializing in preparing
              bank-ready documentation for PMEGP, MUDRA Tarun, MSME Loans,
              Business Loans, and more.
            </p>
            <p className="mt-6">
              With years of experience in the financial industry, we understand
              exactly what banks look for - and we help you present your
              application in a way that increases your chances of approval.
            </p>
            <p className="mt-6">
              We believe in transparency, integrity, and results, offering a
              service you can trust.
            </p>

            {/* CTAs */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc8haoOxC0iM-4by9KDP65jwzFfRj-1DKh70Rt2xbbQjmq1CA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 relative overflow-hidden w-40 h-12 px-4 bg-[#25975e6e] text-white border-2 border-white rounded-md text-lg font-bold cursor-pointer group flex items-center justify-center"
            >
              {/* Main text with icon */}
              <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
                Contact
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>

              {/* Expanding animated background layers */}
              <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-200 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-500 duration-1000"></span>
              <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-700 duration-700"></span>
              <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-1000 duration-500"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
