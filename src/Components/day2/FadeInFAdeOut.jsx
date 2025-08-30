import React,{useState} from 'react'
import {motion, AnimatePresence} from "motion/react"

const FadeInFAdeOut = () => {
    const [show, setshow] = useState(null)
  return (
    <div className='h-screen w-screen gap-5 flex flex-col justify-center items-center'>

        <motion.button
        whileHover={{scale:1.1,boxShadow:'0px 5px 15px rgba(243,45.23,0.3)'}}
        whileTap={{scale:0.9,rotate:-5}}
        transition={{type:"spring",stiffness:300,}}
         className='px-5 py-1 bg-gradient-to-br from-purple-700 to-pink-700 rounded-3xl' onClick={()=>setshow((prev)=>!prev)}>Show</motion.button>
        <AnimatePresence>
            {
                show && 
             <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
             transition={{type:"easeInOut",duration:1}}
              className='h-32 w-32 rounded-lg bg-gradient-to-b from-blue-700 to-fuchsia-700'>

        </motion.div>}
      

        </AnimatePresence>
       
    </div>
  )
}

export default FadeInFAdeOut
