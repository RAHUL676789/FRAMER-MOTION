import React from 'react'
import {motion} from "motion/react"

const Rotate = () => {
  const parent = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.3,
        
        delayChildren:0.5
      }
    }
  }

  const child = {hidden:{opacity:0,y:10},visible:{opacity:1,y:0},transition:{duration:0.5}}
  const list = ["About","PortFolio","Contact","Message","Project"]
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-zinc-900'>
      <motion.ul
      className='py-6 px-12 bg-white flex flex-col gap-3'
       variants={parent} initial="hidden" animate="visible">
        {list.map((item)=>(
          <motion.li variants={child} className='px-4 py-2 text-white rounded-lg font-semibold bg-blue-950'>
            {item}
          </motion.li>
        ))}

      </motion.ul>
    </div>
  )
}

export default Rotate
