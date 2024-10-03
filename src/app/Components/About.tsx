import React from 'react'
import './About.css'
import NIT from '../public/images/nitrr.jpg'
import Image from "next/image";
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div className='about-main mt-8' id='about' initial={{x:'-100%'}} whileInView={{x:0}}>
        <h1 className='text-center font-poppinsMedium text-primary text-4xl'>About <span className=''>Me</span></h1>
        <div className='about-cont flex flex-row p-5 justify-evenly align-baseline items-start mt-2'>
            <p className='font-poppinsMedium'>I'm <span className='text-primary'>Harsh Agrawal</span>, a Software Engineer specializing in Full Stack Development. Currently pursuing my Engineering at NIT Raipur, I have hands-on experience with React.js, Node.js, MongoDB, and Supabase, as well as Android development using React Native and Ionic.
            I’ve interned at Sortin and Helpy Moto, contributing to NPM package development, Android app maintenance, and full-stack web projects. My work has streamlined processes and enhanced app performance. I’ve also earned top positions in national hackathons, including 30Hacks and CEREBRUM APAC.
        <br></br>
            Let’s connect to collaborate on exciting projects!</p>
            {/* <Image alt="" src={NIT} height={500} width={300} className="profile z-50"></Image> */}
        </div>
    </motion.div>
  )
}
