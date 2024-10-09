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
      whileHover={{transition:{duration:1}}}
      onHoverStart={() => setShowText(true)}
      onHoverEnd={() => setShowText(false)}
  
      exit={{ transition: { duration: 1 } }}
    >
      {
        !showText ? (
          <>
             <StackIcon name={image} style={{height:40}}/>
            <h1 className='font-poppinsMedium mt-1'>{name}</h1>
          </>
        ) : (
          <motion.div animate={{transition:{duration:1}}} initial={{scale:0.7}} whileInView={{scale:1}}>
                <p className='font-poppinsMedium'>{desc}</p>
            </motion.div>
        )
      }
    </motion.div>
  )
}
