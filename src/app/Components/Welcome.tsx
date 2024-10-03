import React from 'react'
import { motion } from "framer-motion"

export default function Welcome() {
  return (
    <motion.div className='h-screen w-full flex flex-col items-center justify-center' animate={{opacity:0}} transition={{duration:1, delay:1.5}}>
       <motion.div className="font-poppinsMedium font-bold text-4xl" id="logo" animate={{rotate:360, zIndex:[3,6,10]}} transition={{ duration:1.5,times:[0.33,0.66,1]}}
        >
           <h1 className="font-poppinsMedium text-primary ">Harsh</h1>
           <h1 className="font-poppinsMedium ">Agrawal</h1>
        </motion.div>
    </motion.div>
  )
}
