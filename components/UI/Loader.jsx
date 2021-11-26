import { motion } from "framer-motion";

const transition = (delay) => {
  return {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 0.5,
    type: "spring",
    mass: 0.4,
    damping: 8,
    delay: delay,
  };
};

const loaderVariant = {
  animationOne: {
    y: [-20, -30],
    transition: transition(0),
  },
  animationTwo: {
    y: [-20, -30],
    transition: transition(0.3),
  },
  animationThree: {
    y: [-20, -30],
    transition: transition(0.5),
  },
};

function Loader() {
  return (
    <div
      style={{
        height: "20px",
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate="animationOne"
      ></motion.div>
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate="animationTwo"
      ></motion.div>
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate="animationThree"
      ></motion.div>
    </div>
  );
}

export default Loader;
