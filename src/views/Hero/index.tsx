"use client"

import Link from "next/link";
import { FaDiscord, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative lg:pt-32 lg:pb-12 w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-bg-primary dark:via-bg-secondary dark:to-bg-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative w-full flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto px-6 lg:px-8 gap-8 lg:gap-12 py-20 lg:py-0">
        {/* Content */}
        <motion.div 
          className="w-full lg:w-6/12 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-6 lg:space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-lg lg:text-xl font-medium text-accent mb-2">
                👋 Hello, I&apos;m
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Yogesh Shrivas
              </h2>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-4xl lg:text-7xl font-bold text-gradient leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Web Developer
              <br />
              <span className="text-gray-900 dark:text-white">& UX Designer</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I break down complex user experience problems to create integrity-focused 
              solutions that connect billions of people through intuitive and beautiful interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Download Resume */}
              <Link
                href="/assets/yogesh_resume.pdf"
                download
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-accent to-accent-light rounded-full text-white font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Download Resume
                  <FaDownload className="transition-transform group-hover:translate-y-1" />
                </span>
              </Link>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/yogesh-shrivas-1998aa231/", label: "LinkedIn" },
                  { icon: FaGithub, href: "https://github.com/Yogesh5601", label: "GitHub" },
                  { icon: FaDiscord, href: "https://discord.com/channels/@me", label: "Discord" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border-2 border-accent rounded-full text-accent hover:text-white hover:bg-accent transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="w-full lg:w-6/12 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-accent-light rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-accent/20 group-hover:border-accent/50 transition-all duration-500">
              <img
                src="/images/Hero_2.png"
                alt="Yogesh Shrivas - Web Developer"
                className="w-full max-w-md lg:max-w-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute -bottom-0 hidden md:block left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce-gentle"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
