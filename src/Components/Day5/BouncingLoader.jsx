import React from "react";
import { motion } from "motion/react";

const LoadersDemo = () => {
  // ===== Loader 1: Simple Bouncing Dots =====
  const bounceChild = {
    hidden: { y: 0 },
    visible: {
      y: -20,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const bounceParent = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // ===== Loader 2: Scaling Pulse Loader =====
  const pulseChild = {
    hidden: { scale: 1, opacity: 0.6 },
    visible: {
      scale: 1.5,
      opacity: 1,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // ===== Loader 3: Rotating Circle Loader =====
  const rotateLoader = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // ===== Loader 4: Bar Stretch Loader =====
  const barChild = {
    hidden: { scaleY: 0.5 },
    visible: {
      scaleY: 1.2,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // ===== Loader 5: Dot Wave Loader =====
  const waveChild = {
    hidden: { y: 0 },
    visible: (i) => ({
      y: -15,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="h-full w-full flex  gap-16 items-center justify-center py-20 bg-zinc-900 text-white">
      {/* Loader 1 */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg">Loader 1: Bouncing Dots</p>
        <motion.div
          className="flex gap-3"
          variants={bounceParent}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={bounceChild}
              className="h-4 w-4 bg-pink-500 rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Loader 2 */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg">Loader 2: Scaling Pulse</p>
        <motion.div
          className="h-8 w-8 bg-green-500 rounded-full"
          variants={pulseChild}
          initial="hidden"
          animate="visible"
        />
      </div>

      {/* Loader 3 */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg">Loader 3: Rotating Circle</p>
        <motion.div
          className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"
          variants={rotateLoader}
          initial="hidden"
          animate="visible"
        />
      </div>

      {/* Loader 4 */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg">Loader 4: Bar Stretch</p>
        <div className="flex gap-2 items-end">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              variants={barChild}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.2 }}
              className="h-10 w-2 bg-yellow-500 rounded"
            />
          ))}
        </div>
      </div>

      {/* Loader 5 */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg">Loader 5: Dot Wave</p>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={waveChild}
              custom={i}
              initial="hidden"
              animate="visible"
              className="h-4 w-4 bg-purple-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadersDemo;
