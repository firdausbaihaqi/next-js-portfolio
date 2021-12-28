import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Bio from "./Bio";
import Intro2 from "./Intro2";
import Navbar from "../../layout/navbar";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 2.5, // still not working, try to remove exit
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      when: "afterChildren",
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
    transition: { duration: 0.3, delay: 1.5 },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
  },
};

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-screen px-5 mx-auto overflow-hidden lg:max-w-6xl xl:px-20"
      >
        <div className="overflow-hidden tracking-widest duration-300 ">
          <Navbar />
          <AnimatePresence>
            {showIntro && (
              <motion.div variants={introVariant} exit="exit">
                <Intro2 setShowIntro={setShowIntro} />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!showIntro && (
              <motion.div variants={bioVariant}>
                <Bio />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
