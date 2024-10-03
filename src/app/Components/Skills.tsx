import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion"
import { skills } from "../data";



export default function Skills() {
  return (
    <motion.div className="skills-main mt-10 p-5" id="skills" initial={{x:'-100%'}} whileInView={{x:0}}transition={{duration:1}}>
      <div className="title mb-8 w-full text-center">
        <h1 className="font-poppinsMedium text-primary text-4xl decoration">
          Skills
        </h1>
      </div>
      <motion.div  className="skills-cont p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full  rounded-lg" initial={{x:'-100%'}} whileInView={{x:0}} transition={{duration:1}}>
        {skills.map((data, index) => (
          <SkillCard key={index} image={data.image} name={data.name} desc={data.desc}/>
        ))}
      </motion.div>
    </motion.div>
  );
}   
