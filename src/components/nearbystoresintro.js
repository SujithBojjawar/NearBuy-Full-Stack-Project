import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./intro.css";
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.4 }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" }
  }
};

export default function NearbyStoresIntro({ location, onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds intro animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="nearby-intro-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key="intro-backdrop"
      >
        <motion.h1 
          className="nearby-intro-location"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Your Current Location: {location}
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}
