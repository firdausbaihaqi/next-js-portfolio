import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Intro2({ setShowIntro }) {
  // const handleShowIntro = (axis) => {
  //   if (axis == "y") {
  //     setTimeout(() => {
  //       setShowIntro(false);
  //     }, 500);
  //   }
  // };

  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
    setTimeout(() => {
      setShowIntro(false);
    }, 5000);
  }, []);

  const containerVariant = {
    animate: {
      transition: {
        staggerChildren: 2.5,
      },
    },
  };

  const childrenVariant = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        bounceStiffness: 1000,
        bounceDamping: 100,
        duration: 1,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        bounceStiffness: 1000,
        bounceDamping: 100,
      },
    },
  };

  return (
    <div className="inset-0 z-50 h-screen ">
      <div className=" flex flex-col items-center w-full lg:justify-between lg:items-start lg:flex-row 2xl:px-5 sm:mt-[10%]">
        {/* left text */}
        {/* With the beauty of design, and the art of programming */}
        <motion.div
          variants={containerVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* <AnimatePresence>
            {show && (
              <motion.div
                variants={childrenVariant}
                exit={{
                  y: -20,
                  opacity: 0,
                  transition: {
                    bounceStiffness: 1000,
                    bounceDamping: 100,
                  },
                }}
                className="text-base md:text-2xl"
              >
                A showcase of my working history
              </motion.div>
            )}
          </AnimatePresence> */}
          <motion.div
            variants={childrenVariant}
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-5xl font-medium md:text-8xl">Portfolio.</div>
            <p className="hidden ml-2 text-xl md:block lg:ml-2">
              Muhammad Ihya Firdaus Baihaqi
            </p>
          </motion.div>
        </motion.div>
        {/* left text */}

        {/* right text */}
        {/* <div className="flex flex-col items-center justify-center mt-10 lg:mt-5 md:items-end ">
          <div
            onClick={() => setShowIntro(false)}
            className="p-4 text-base border-4 border-gray-700 border-dashed cursor-pointer md:p-6 md:text-2xl dark:border-gray-100"
          >
            With the beauty of design, and the art of programming A
            showcase of my working history
          </div>
         
          <motion.div className="flex flex-col items-center justify-center w-full">
            <motion.span
              initial={{ height: "0vh" }}
              animate={{
                height: "27vh",
                transition: { duration: 1, ease: "easeInOut" },
              }}
              className="mt-1 text-xl border-l-4 border-gray-700 border-dashed md:block dark:border-gray-100"
            />
           
            <motion.div
              drag="y"
              dragDirectionLock
              onClick={() => handleShowIntro("y")}
              onDirectionLock={(axis) => handleShowIntro(axis)} 
              dragConstraints={{ top: 0, bottom: 50 }}
              dragSnapToOrigin="true"
              dragElastic={{ top: false, bottom: 0.1 }}
              dragTransition={{ bounceStiffness: 1000, bounceDamping: 100 }}
              className="cursor-pointer"
            >
              <svg
                className="w-11 h-11 animate-bounce "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </motion.div>
            
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}

export default Intro2;
