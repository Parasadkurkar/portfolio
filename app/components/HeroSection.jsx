"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:pb-16 pt-4 pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="textColor1 h-32 mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold sm:inline block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "PARAS",
                1000,
                "Web Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "C/ C++ Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="textColor2 text-base sm:text-lg mb-6 lg:text-xl">
            I am a Full Stack Developer based in India. I love to build performant, responsive, and interactive web applications and websites.
          </p>
          <div>
            <Link
              href="/#contact"
              className="relative px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 textColor1"
            >
              Hire Me
            </Link>
            <Link
              href="/documents/Resume.pdf" target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 textColor1 mt-3"
            >
              <span className="relative block backthemeColor hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full backThemeColor0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.gif"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={390}
              height={390}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
