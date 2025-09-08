import React ,{useState} from 'react'
import {motion,AnimatePresence, easeInOut} from "motion/react"

const AnimatePresence2 = () => {
    const [isVisible, setisVisible] = useState(true)
    const [isOpen, setisOpen] = useState(false)
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      


      <button  onClick={()=>setisVisible((prev)=>!prev)}className='bg-zinc-800 text-white px-6 py-2 rounded-lg'>
        Toggle
      </button>
       <button  onClick={()=>setisOpen((prev)=>!prev)}className='bg-zinc-800 text-white px-6 py-2 rounded-lg'>
        open
      </button>

      

      
       <AnimatePresence mode='wait'>
        {
            isVisible &&  <motion.div
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1,transition:{duration:1}}}
            exit={{opacity:0,scale:0.5,transition:{duration:1}}}
             className='h-40 w-40 rounded-lg flex border bg-zinc-700 text-white justify-center items-center flex-col '> 
            Bye

            </motion.div>
        }
    
    

       </AnimatePresence>

       <AnimatePresence>
         {
        isOpen && <motion.div
        initial={{height:0,opacity:0}} 
        animate={{height:"auto",opacity:1}}
        exit={{height:0,opacity:0}}
        transition={{duration:0.63,ease:easeInOut}}
        >
            <p>This is drop down of content</p>
            <p>You can add anything in this area</p>

        </motion.div>
     }
       </AnimatePresence>
      
    </div>
  )
}

export default AnimatePresence2
