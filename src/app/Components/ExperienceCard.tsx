import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image";
import './Experience.css'
import { div, tr } from 'framer-motion/client';

export default function ExperienceCard1({company,title,desc,image,link,duration,location}:any) {
  return (
    <motion.div  className="experience-card p-5 w-full  border-l-4 border-b-4 border-solid border-primary" initial={{x:'-100%'}} whileInView={{x:0}} transition={{duration:0.5}} animate={{}} viewport={{once:true}}>
            <div className="exp-cont flex flex-row justify-between items-center w-full gap-6">
                <Image src={image} alt="" width={150} height={150} className='rounded-xl'/>
                <div className='flex flex-col w-full items-start gap-2'>
                    <div className='exp-comp-name font-extrabold font-poppinsMedium text-2xl '>
                        <h1 className='cursor-pointer  hover:text-primary transition-all'>
                            <a href={link} target='_blank'>{company}</a>
                        </h1>
                    </div>
                    <div className='font-bold font-poppinsMedium'>{title}</div>
                    <div className='font-bold font-poppins'>{duration} - {location}</div>
                    <div className='font-poppinsMedium text-justify'>{desc}</div>
                </div>
            </div>
      
      </motion.div>
  )
}

export function ExperienceCard2({company,title,desc,image,link,duration,location}:any) {
    return (
        <div className='w-full'>
<motion.div  className=" p-5 w-full border-r-4 border-b-4 border-solid border-primary" initial={{x:'100%'}} whileInView={{x:"0%"}} transition={{duration:0.5}} viewport={{once:true}}>
              <div className="exp-cont flex flex-row justify-between items-center w-full gap-6">
                  <div className='flex flex-col w-full items-start gap-2'>
                      <div className='exp-comp-name font-extrabold font-poppinsMedium text-2xl self-end'>
                          <h1 className='cursor-pointer  hover:text-primary transition-all'>
                          <a href={link} target='_blank'>{company}</a>
                          </h1>
                      </div>
                      <div className='font-bold font-poppinsMedium self-end'>{title}</div>
                      <div className='font-bold font-poppins self-end'>{duration} - {location}</div>
                      <div className='font-poppinsMedium text-justify'>{desc}</div>
                  </div>
                  <Image src={image} alt="" width={150} height={150} className='rounded-xl'/>
              </div>
        
        </motion.div>
        </div>
      
    )
  }
  