import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion"
import Image from "next/image";
import ExperienceCard, { ExperienceCard2 } from "./ExperienceCard";
import ExperienceCard1 from "./ExperienceCard";
import { experience } from "../data";


const skills = [
  {
    image: "/images/profile.png",
    name: "Javascript",
  },
  {
    image: "/images/profile.png",
    name: "React",
  },
  {
    image: "/images/profile.png",
    name: "HTML",
  },
  {
    image: "/images/profile.png",
    name: "CSS",
  },
  {
    image: "/images/profile.png",
    name: "Node.js",
  },
  {
    image: "/images/profile.png",
    name: "Node.js",
  },
  {
    image: "/images/profile.png",
    name: "Node.js",
  },
  {
    image: "/images/profile.png",
    name: "Node.js",
  },
];

export default function Experience() {
  return (
    <motion.div className="exp-main mt-10 p-5" id="experience" initial={{x:'-100%'}} whileInView={{x:0}}transition={{duration:1}} viewport={{once:true}}>
      <div className="title mb-8 w-full text-center">
        <h1 className="font-poppinsMedium text-primary text-4xl decoration">
            Experience
        </h1>
        <div className="w-full">
          {
            
            experience.map((item:any,index)=>(
              <>
              {
                index % 2 == 0 ?
                <ExperienceCard1 company={item.company} title={item.title} image={item.image} desc={item.desc} link={item.link} duration={item.duration} location={item.location}/>
                :
                <ExperienceCard2 company={item.company} title={item.title} image={item.image} desc={item.desc} link={item.link} duration={item.duration} location={item.location}/>
              }
          
              </>
              
            ))
          }
        </div>
        
      </div>
      
    </motion.div>
  );
}   
