"use client";

import React from "react";
import "./hero.css";
import Image from "next/image";
import profile from "../public/images/profile.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"


export default function Hero() {
  return (
    <div className="hero-main">
      <div className="hero-texts">
        <h1 className="font-poppinsMedium">Hello!</h1>
        <h1 className="font-poppinsMedium">
          I am <span className="text-primary">Harsh!</span>
        </h1>
        <h1 className="font-poppinsMedium ">
          I am a{" "}
          <span className="font-poppinsMedium text-primary">
            <Typewriter
              words={[
                "Software Developer",
                "Full Stack Developer",
                "Mobile Developer",
              ]}
              typeSpeed={100}
              loop={false}
            />
          </span>
        </h1>
      </div>
      <motion.div className="hero-img rounded-xl w-[300px] items-center flex justify-center h-[200px] align-bottom" whileHover={{x:-50,scale:1.2}}>
        <motion.div >
        <Image alt="" src={'/images/profile.png'} height={200} width={220} className="profile z-50 -mt-14"></Image>
        </motion.div>
      
        
      </motion.div>
    </div>
  );
}
