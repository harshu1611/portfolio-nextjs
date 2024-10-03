import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { p } from 'framer-motion/client';


export default function Contact() {
    const [state, handleSubmit] = useForm("mwpegzko");
  
    return (
        <motion.div className="mt-10 p-5 w-screen flex flex-col items-center" id='contact' initial={{x:'-100%'}} whileInView={{x:0}}transition={{duration:1}}>
        <div className="title mb-8 w-full text-center">
        <h1 className="font-poppinsMedium text-primary text-4xl decoration">
          Contact Me
        </h1>
      </div>
     {
        state.succeeded ?
        <p className='font-poppinsMedium'>Thanks for Contacting !</p>
        :
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 items-start font-poppinsMedium'>
        <label htmlFor="email">
          Name
        </label>
        <input
          id="name"
          type="name" 
          name="name"
          className='rounded-lg border-2 border-primary p-2'
        />
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='rounded-lg border-2 border-primary p-2'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
         <label htmlFor="email">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className='w-full rounded-lg border-2 border-primary p-2'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className='self-center border-2 border-primary p-2 rounded-lg'>
          Submit
        </button>
        </div>
       
      </form>
     }
     
      </motion.div>
      
    );
}
