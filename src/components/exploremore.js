import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./exploremore.css";

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit:   { opacity: 0 }
};

const modalVariant = {
  hidden: { y: "-30vh", opacity: 0, scale: 0.8 },
  visible: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 440, damping: 32 }
  },
  exit: { y: "30vh", opacity: 0, scale: 0.7 }
};

export default function ExploreMoreModal({ open, onClose, onExplore }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="explore-modal-backdrop"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="explore-modal-content"
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
              ×
            </button>
            <h2>What Would You Like To Explore?</h2>
            <div className="explore-modal-options">
              <motion.div
                className="explore-option-card stores"
                whileHover={{ scale: 1.1, boxShadow: "0 6px 40px #1ea6ff88", rotate: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onExplore("stores")}
                tabIndex={0}
                role="button"
                aria-label="Explore Stores"
              >
                🏬 <span>Explore Nearby Stores</span>
              </motion.div>
              <motion.div
                className="explore-option-card products"
                whileHover={{ scale: 1.1, boxShadow: "0 6px 40px #f358ff88", rotate: 2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onExplore("products")}
                tabIndex={0}
                role="button"
                aria-label="Explore Products"
              >
                📦 <span>Explore Products</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
