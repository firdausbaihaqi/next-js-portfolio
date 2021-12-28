import { motion, AnimatePresence } from "framer-motion";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loaderVariant = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
  },
};

const loaderTransition = {
  repeat: Infinity,
  repeatType: "mirror",
  duration: 0.5,
};

function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariant}
        initial="initial"
        animate="animate"
        style={{
          height: "20px",
          display: "flex",
        }}
      >
        <motion.div
          className="loader"
          variants={loaderVariant}
          transition={loaderTransition}
        ></motion.div>
        <motion.div
          className="loader"
          variants={loaderVariant}
          transition={loaderTransition}
        ></motion.div>
        <motion.div
          className="loader"
          variants={loaderVariant}
          transition={loaderTransition}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
