import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SlideLEft = () => {
  const [slide, setslide] = useState(false);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
      {/* Buttons */}
      <div className="flex flex-wrap gap-5 mb-5">
        <motion.button
          onClick={() => setslide((prev) => (prev === "Top" ? false : "Top"))}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95, rotate: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-7 py-3 rounded-3xl font-semibold bg-blue-600 shadow-lg hover:shadow-blue-400/50 transition"
        >
          Slide Top
        </motion.button>

        <motion.button
          onClick={() =>
            setslide((prev) => (prev === "Bottom" ? false : "Bottom"))
          }
          whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.95, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-7 py-3 rounded-3xl font-semibold bg-green-600 shadow-lg hover:shadow-green-400/50 transition"
        >
          Slide Bottom
        </motion.button>

        <motion.button
          onClick={() => setslide((prev) => (prev === "Left" ? false : "Left"))}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-7 py-3 rounded-3xl font-semibold bg-pink-600 shadow-lg hover:shadow-pink-400/50 transition"
        >
          Slide Left
        </motion.button>

        <motion.button
          onClick={() =>
            setslide((prev) => (prev === "Right" ? false : "Right"))
          }
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-7 py-3 rounded-3xl font-semibold bg-purple-600 shadow-lg hover:shadow-purple-400/50 transition"
        >
          Slide Right
        </motion.button>
      </div>

      {/* Card Container */}
      <div className="w-[320px] relative h-[260px] shadow-xl shadow-sky-400/30 rounded-2xl overflow-hidden mt-10">
        <AnimatePresence>
          {slide === "Top" && (
            <motion.div
              key="Top"
              className="bg-blue-500 h-full w-full absolute rounded-2xl flex items-center justify-center text-xl font-bold"
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Moved from Top ⬆️
            </motion.div>
          )}

          {slide === "Bottom" && (
            <motion.div
              key="Bottom"
              className="bg-green-500 h-full w-full absolute rounded-2xl flex items-center justify-center text-xl font-bold"
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Moved from Bottom ⬇️
            </motion.div>
          )}

          {slide === "Left" && (
            <motion.div
              key="Left"
              className="bg-pink-500 h-full w-full absolute rounded-2xl flex items-center justify-center text-xl font-bold"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Moved from Left ⬅️
            </motion.div>
          )}

          {slide === "Right" && (
            <motion.div
              key="Right"
              className="bg-purple-500 h-full w-full absolute rounded-2xl flex items-center justify-center text-xl font-bold"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Moved from Right ➡️
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideLEft;
