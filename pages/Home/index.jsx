import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Bio from "./Bio";
import Intro2 from "./Intro2";

const containerVariant = {
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 2.5, // still not working, try to remove exit
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      when: "beforeChildren",
      type: "spring",
      bounce: 0,
    },
  },
};

const introVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const bioVariant = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
  },
};

function Home() {
  // const [showIntro, setShowIntro] = useState(true);

  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-8 mx-auto lg:max-w-6xl xl:px-20"
    >
      <div className="overflow-hidden tracking-widest duration-300 ">
        {/* <AnimatePresence>
          {showIntro && (
            <motion.div variants={introVariant} exit="exit">
              <Intro2 setShowIntro={setShowIntro} />
            </motion.div>
          )}
        </AnimatePresence> */}

        <AnimatePresence>
          <motion.div variants={bioVariant}>
            <Bio />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Home;
