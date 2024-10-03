import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion"
import Image from "next/image";
import ExperienceCard, { ExperienceCard2 } from "./ExperienceCard";
import ExperienceCard1 from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";




export default function Projects() {
  return (
    <motion.div className="mt-10 p-5" initial={{x:'-100%'}} whileInView={{x:0}}transition={{duration:1}}>
        <div className="title mb-8 w-full text-center">
        <h1 className="font-poppinsMedium text-primary text-4xl decoration">
          Projects
        </h1>
      </div>
      <motion.div  className="skills-cont p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full h-fit rounded-lg" initial={{x:'-100%'}} whileInView={{x:0}} transition={{duration:1}}>
        {projects.map((data:any)=>(
            <ProjectCard image={data.image} name={data.name} desc={data.desc} stack={data.stack}/>
        ))}
      </motion.div>
    </motion.div>
  );
}   