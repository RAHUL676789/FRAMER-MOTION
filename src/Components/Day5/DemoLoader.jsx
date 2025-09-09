import React from 'react'
import {  motion } from 'motion/react'

const DemoLoader = () => {
    const bounceChild = {
              hidden:{y:0},
              visible:{
                y:-20,
                transition:{
                    duration:0.5,
                    repeat:Infinity,
                    repeatType:"reverse",
                    ease:"easeInOut"
                }
              }
    }

    const bounceParent = {
        hidden:{},
        visible:{
            transition:{
                staggerChildren:0.3,
                
            }
        }
    }

    const barChild = {
        hidden:{scaleY:0.5},
        visible:{
            scaleY:1.2,
           transition:{
             repeat:Infinity,
            repeatType:"reverse",
            ease:"easeInOut",
            duration:0.5
           }
        }
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col gap-4'>
        
        <di className = "w-full flex gap-12 justify-center">

       
        <motion.div initial="hidden" animate="visible" className='flex  border-b-4 justify-center items-center pb-0 px-4' variants={bounceParent}> 
            <motion.div 
            key="1h"
            className='h-2 w-2 bg-red-500 rounded-full'
            variants={bounceChild}>

            </motion.div>
             <motion.div 
             key="2j"
            className='h-2 w-2 bg-red-500 rounded-full'
             variants={bounceChild}>

            </motion.div>
             <motion.div 
             key="7u"
            className='h-2 w-2 bg-red-500 rounded-full'
            variants={bounceChild}>

            </motion.div>
             <motion.div 
             key={"hdgkj"}
            className='h-2 w-2 bg-red-500 rounded-full'
            variants={bounceChild}>

            </motion.div>
        </motion.div>


        <div className='flex gap-2 '>
            {
                [1,2,3,4].map((i)=>(
                    <motion.div
                    key={i}
                    className='h-10 w-2 bg-yellow-600 rounded-2xl'
                    variants={barChild}
                    initial="hidden"
                    animate="visible"
                    transition={{delay:i*0.2}}
                    >
                       
                    </motion.div>
                ))
            }

        </div>

        {/* spiner */}
        <div>
            <motion.div 
            initial={{rotate:0}}
            animate={{rotate:360}}
            transition={{duration:0.64,repeat:Infinity}}
            
            className='border-2 border-r-0  border-t-0 h-12 w-12 rounded-full'>

            </motion.div>
        </div>

         </di>
      
    </div>
  )
}

export default DemoLoader
