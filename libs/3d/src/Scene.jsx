import { motion } from "framer-motion";
import EarthCanvas from "./Earth";

const Scene = () => {
  return (
    <div 
      className="w-full h-full overflow-hidden flex justify-center items-center"
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full h-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};


export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export default Scene