import React ,{useRef} from 'react'
import {motion} from "motion/react"
const Drager = () => {
    const containerRef = useRef(null)
  return (
    <div className='h-screen w-screen bg-zinc-100 flex justify-center items-center flex-col'>
      <div ref={containerRef} className='h-[300px] relative w-[300px] overflow-hidden rounded bg-zinc-500'>
        <p>drag me inside</p>


        <motion.div
        drag
        dragMomentum={true}
        dragConstraints={containerRef}
        dragElastic={0.4}
        whileDrag={{scale:1.2,rotate:5}}
        className='h-32 w-32 bg-gradient-to-b cursor-grab from-pink-600 to-purple-600 rounded'
        style={{touchAction:"none",position:"absolute",left:40,top:30}}
        >

        </motion.div>


      </div>
    </div>
  )
}

export default Drager
