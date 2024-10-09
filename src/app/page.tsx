"use client"

import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import { useEffect, useState } from "react";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Welcome from "./Components/Welcome";
import { motion } from "framer-motion"
import Contact from "./Components/Contact";
import Head from "next/head";


export default function Home() {

  const [mount,setMount]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setMount(true)
    },2500)
  },[])
  
  return (
    <motion.div className="h-full dark:bg-black bg-[#f8f0fc] " >
      <Head>
        <title>Welcome to my portfolio</title>
      </Head>
      {
        !mount ?

        <Welcome/>
        :
        <motion.div initial={{x:'-100%'}} whileInView={{x:0}} transition={{duration:0.5}} className="scroll-smooth">
        <Navbar/>
      <Hero/>
      {/* <About/> */}
      <div>
        <About/>
      </div>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
        </motion.div>
      }
      {/* <Welcome/> */}
    </motion.div>
  );
}

// animate={{opacity:[0,0.25,0.5,1]}} transition={{duration:1,times:[0,0.5,0.75,1]}}