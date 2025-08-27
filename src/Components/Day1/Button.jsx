import React from 'react'
import {motion, scale} from 'framer-motion'

const Button = () => {
  return (
    <div className=' h-screen gap-4 bg-white flex justify-center items-center flex-col'>
        <motion.button
        whileHover={{scale:1.1,backgroundColor:"#2563eb", boxShadow: "0px 0px 15px #2563eb",}}
        whileTap={{scale:0.9,rotate:-5}}
        transition={{type:"spring",stiffness:300}}
        className='bg-blue-900 px-6 py-3 text-white font-semibold rounded-3xl'

        >

            glow-button

        </motion.button>

        <motion.button
        whileHover={{y:-5,boxShadow:"0px 5px 15px rgba(0,0,0,0.3)"}}
        whileTap={{y:2,boxShadow:"0px 3px 9px rgba(0,0,0,0.2)"}}
        transition={{type:"spring",stiffness:300,repeat:2}}
        className='bg-pink-900 px-6 py-3 rounded font-semibold text-white'
        >
            3d-button
        </motion.button>

        <motion.button
        whileHover={{
            scale:1.1,
             backgroundColor: ["#ef4444", "#f97316", "#22c55e", "#3b82f6"],
             transition:{duration:2,repeat:Infinity}
            
        }}
        whileTap={{scale:0.9}}
           className="bg-red-500 px-6 py-3 rounded-lg text-white font-semibold"
        >
            color-change
        </motion.button>
        

      
    </div>
  )
}

export default Button
