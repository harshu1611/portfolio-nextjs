"use client";

import React from "react";
import "./hero.css";
import Image from "next/image";
import profile from "../public/images/profile.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"
import StackIcon from "tech-stack-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";



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

          <div className="flex flex-row gap-3 mt-2 items-center">
            <a className="" href="https://github.com/harshu1611" target="_blank">
              <FaGithub/>
            </a>
            <a href="https://linkedin.com/in/harshagr0711" target="_blank">
              <FaLinkedin color="#0077B5" />
            </a>
            <Link href='/files/Harsh_SDE_July 24.pdf' locale={false} target="_blank" download={true}>
              <div className="bg-primary rounded-lg text-center text-white text-lg p-2 max-sm:p-1 max-sm:text-sm" onClick={() => {

              }}>
                Resume
              </div>

            </Link>



          </div>


        </h1>
      </div>

      <motion.div className="hero-img rounded-xl w-[300px] items-center flex justify-center h-[200px] align-bottom" whileHover={{ x: -50, scale: 1.2 }}>
        <motion.div >
          <Image alt="" src={'/images/profile (1).png'} height={200} width={220} className="profile z-50 -mt-14"></Image>
        </motion.div>


      </motion.div>
    </div>
  );
}
