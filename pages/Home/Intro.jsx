import { useEffect } from "react";
import Loader from "../UI/Loader";
import { motion } from "framer-motion";

function Intro({ showIntro, setShowIntro }) {
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    setTimeout(() => {
      //   setShowIntro(false);
    }, 3000);

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  const handleShowIntro = (axis) => {
    if (axis == "y") {
      setTimeout(() => {
        setShowIntro(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen dark:bg-gray-800">
      <div className=" flex flex-col items-center w-full lg:justify-between lg:items-start lg:flex-row md:px-20 sm:mt-[10%]">
        {/* left text */}
        <div className="flex flex-col items-center md:items-start ">
          <div className="block text-5xl md:text-8xl">Portfolio.</div>
          <p className="hidden ml-2 text-xl md:block lg:ml-2">
            Muhammad Ihya Firdaus Baihaqi
          </p>
        </div>
        {/* left text */}

        {/* right text */}
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-5 md:items-end ">
          <div className="p-4 text-base border-4 border-gray-700 border-dashed cursor-pointer md:p-6 md:text-2xl dark:border-gray-100">
            With the beauty of design, and the art of programming
            {/* A showcase of my working history */}
            {/* Loading <Loader></Loader> */}
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            {/* vertical dashed line */}
            <span className="mt-1 text-xl border-l-4 border-gray-700 border-dashed md:block dark:border-gray-100 h-[35vh]" />
            {/* end of vertical dashed line */}

            {/* arrow */}
            <motion.div
              drag="y"
              dragDirectionLock
              onDirectionLock={(axis) => handleShowIntro(axis)} //will tell the direction user drag
              dragConstraints={{ top: 0, bottom: 50 }}
              dragSnapToOrigin="true"
              dragElastic={{ top: false, bottom: 0.1 }}
              dragTransition={{ bounceStiffness: 1000, bounceDamping: 100 }}
              className="mt-2 cursor-pointer"
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
            {/* end of arrow */}
          </div>
          {/* end of right text */}
        </div>
      </div>
    </div>
  );
}

export default Intro;
