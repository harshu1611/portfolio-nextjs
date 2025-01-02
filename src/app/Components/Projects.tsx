"use client"

import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion"
import Image from "next/image";
import ExperienceCard, { ExperienceCard2 } from "./ExperienceCard";
import ExperienceCard1 from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../Controllers/ProjectController";




export default function Projects() {
  const [projects,setProjects]= useState<any>([])
  useEffect(()=>{

    const get=async()=>{
      const projectsFetched= await getProjects()

    setProjects(projectsFetched)


    }
    get()

    
  },[])

  return (
    <motion.div className="mt-10 p-5" initial={{x:'-100%'}} whileInView={{x:0}}transition={{duration:1}} id="projects">
        <div className="title mb-8 w-full text-center">
        <h1 className="font-poppinsMedium text-primary text-4xl decoration">
          Projects
        </h1>
      </div>
      <motion.div  className="skills-cont p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full h-fit rounded-lg" initial={{x:'-100%'}} whileInView={{x:0}} transition={{duration:1}}>
        {projects && projects.map((data:any)=>(
            <ProjectCard stackImages={data.stackImages} image={data.image} name={data.name} description={data.description} stack={data.stack} live={data.live} github={data.github}/>
        ))}
      </motion.div>
    </motion.div>
  );
}   
