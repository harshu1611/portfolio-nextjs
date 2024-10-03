import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image";
import StackIcon from 'tech-stack-icons';

interface props {
  image: string,
  name: string,
  desc: string
}

export default function SkillCard({ image, name,desc }: props) {
  const [showText, setShowText] = useState(false);

  return (
    <motion.div
      className='p-4 shadow-2xl shadow-primary flex flex-col items-center justify-center w-auto hover:shadow-md hover:shadow-primary'
      whileHover={{ rotateY: 180, transition:{duration:0.5}}}
      onHoverStart={() => setShowText(true)}
      onHoverEnd={() => setShowText(false)}
      animate={{
        rotateY: 0,
        transition: {
          duration: 0.5, 
        }
      }}
      exit={{ transition: { duration: 1 } }}
    >
      {
        !showText ? (
          <>
             <StackIcon name={image} style={{height:40}}/>
            <h1 className='font-poppinsMedium mt-1'>{name}</h1>
          </>
        ) : (
          <motion.div animate={{rotateY:-180,transition:{duration:0.5}}}>
                <p className='font-poppinsMedium'>{desc}</p>
            </motion.div>
        )
      }
    </motion.div>
  )
}
