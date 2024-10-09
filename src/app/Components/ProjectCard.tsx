import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image";
import { desc } from 'framer-motion/client';
import StackIcon from 'tech-stack-icons';
import { skills } from '../data';

interface props {
  image: string,
  name: string,
  desc: string,
  stack: string[],
  github:string,
  live: string
}

export default function ProjectCard({ image, name, desc, stack,github,live }: props) {
  const [showText, setShowText] = useState(false);

  return (
    <motion.div
      className='p-4 h-fit flex flex-col items-center justify-center w-auto hover:shadow-md border-primary border-2 rounded-lg sm:h-full md:h-full w-auto'
      whileHover={{}}
      exit={{ transition: { duration: 1 } }}
    >


      <div className='flex flex-col gap-3 justify-start items-center h-full w-full'>
        {
          image !== '' &&
          <Image src={image} width={140} height={140} alt='' />

        }
        <h1 className='font-poppinsMedium font-bold mt-1'>{name}</h1>
        <h1 className='font-poppins mt-1'>{desc}</h1>
        <h1 className='font-poppins mt-1 underline'>Tech Stack</h1>
        <div className='grid grid-cols-3 gap-2 '>
          {
            stack.map((item) => (
              skills.map((item2: any) => (
                item === item2.name && (
                  <motion.div animate={{ scale: [1.01, 0.95, 1.01] }} transition={{ duration: 2, times: [0.25, 0.5, 0.75, 1], repeat: Infinity, ease: 'easeInOut' }} className='flex flex-col items-center justify-center'>
                    {/* <Image src={'/images/profile.png'} alt='' height={30} width={30}></Image>
                       */}
                    <StackIcon name={item2.image} style={{ height: 30 }} />
                    <p>{item}</p>
                  </motion.div>
                )
              ))
            ))
          }




        </div>

        <div className='flex flex-row gap-2 mt-4'>
          <a href={live} target='_blank'>
            <button className='self-center border-2 font-poppinsMedium border-primary p-2 rounded-lg hover:bg-primary transition-colors-opacity duration-100 hover:text-white'>
              Live
            </button>
          </a>
          <a href={github} target='_blank'>
            <button className='self-center border-2 font-poppinsMedium border-primary p-2 rounded-lg hover:bg-primary transition-colors-opacity duration-100 hover:text-white'>
              Github
            </button>
          </a>

        </div>

      </div>


    </motion.div>
  )
}
