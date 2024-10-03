import './navbar.css'
import { motion } from "framer-motion"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {Switch} from "@nextui-org/switch";
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';



export default function Navbar(){
    const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

    useEffect(() => {
		setMounted(true);
        setTheme('light')
	}, []);

    if (!mounted) {
		return null;
	}

return(
    <div id='nav' className='nav'>
        <motion.div className="font-poppinsMedium font-bold text-4xl" id="logo"   animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:5, duration:1}}
        >
           <h1 className="font-poppinsMedium text-primary ">Harsh</h1>
           <h1 className="font-poppinsMedium ">Agrawal</h1>
        </motion.div>
        <div className="nav-sections flex flex-row justify-evenly w-auto gap-x-6 font-poppins">
            <h1 className="cursor-pointer hover:text-primary transition-all">
              <a href="#about">About</a>
            </h1>
            <h1 className="cursor-pointer hover:text-primary transition-all">
            <a href="#skills">Skills</a>
            </h1>
            <h1 className="cursor-pointer hover:text-primary transition-all">
              <a href='#experience'>Experience</a>
            </h1>
            <h1 className="cursor-pointer hover:text-primary transition-all">
            <a href="#projects">Projects</a>
            </h1>
        </div>

        <div className='switch-cont flex flex-row gap-3'>
        <button className="font-poppinsMedium text-xl bg-primary text-white rounded-md items-center flex p-2 align-top h-10">
        <a href="#contact">Contact</a>
        </button>
       
        <Switch
        size={screen.width <640 ? 'sm' : 'lg'}
        className=''
        classNames={{
            wrapper:'data-[selected=true]:bg-primary'
        }}
      onChange={(e:any)=>{
        e.target.checked ?
        setTheme('dark')
        :
        setTheme('light')
      }}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
    
    </Switch>
        </div>
        
    </div>
)



} 