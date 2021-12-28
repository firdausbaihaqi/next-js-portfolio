import { motion } from "framer-motion";
import Loader from "../../components/UI/Loader";
import Link from "next/link";

const waveVariant = {
  initial: { y: "20vh" },
  animate: {
    y: 5,
    rotateZ: [-30, 0, -30, 0, -30],
    transition: { bounce: 0, delay: 2 },
  },
  whileHover: {
    rotateZ: [-30, 0, -30],
  },
};

function Bio() {
  return (
    <div className="relative z-10 flex min-h-[80vh] mt-20  -translate-y-20">
      <div className="w-full mt-auto mb-auto -translate-y-10 md:w-2/3">
        {/* greeting */}
        <div className="text-5xl font-bold tracking-tight md:flex md:text-7xl">
          Hi, <span className="hidden ml-3 md:inline">I'm</span>
          <motion.div
            className="flex md:ml-3"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
          >
            <span className="inline mr-3 md:hidden">I'm</span>
            <span className="border-b-4 border-gray-300 cursor-pointer dark:border-transparent hover:border-blue-600 dark:hover:border-blue-600">
              Baihaqi!
            </span>
            <div className="overflow-hidden pointer-events-none">
              <motion.span
                className="block text-4xl md:text-6xl dark:font-normal"
                variants={waveVariant}
              >
                👋
              </motion.span>
            </div>
          </motion.div>
        </div>
        {/* greeting */}
        <p className="w-5/6 mt-5 text-base text-gray-500 md:text-xl dark:text-gray-400">
          A frontend developer from Indonesia.{" "}
          <br className="hidden md:inline" /> I design and build an interactive
          websites to help my client boosts their customer experience.
        </p>

        {/* buttons */}
        <div className="flex mt-2 -ml-1">
          <button className="social-button">
            <i className="w-10 fab fa-github-square"></i>
          </button>
          <button className="social-button">
            <i className="w-10 fab fa-linkedin"></i>
          </button>
          <button className="social-button">
            <i className="w-10 fab fa-twitter"></i>
          </button>
        </div>

        <div>
          <Link href="/Projects">
            <button className="mt-5 text-xl text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-gray-300 underline-offset-8 group duration-300">
              My Projects{" "}
              <i className="fas fa-arrow-right text-lg group-hover:ml-2 duration-300"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden w-1/3 md:inline">
        {/* translate-x-20 -translate-y-48 - img positioning */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          {/* <div className="grid w-full h-full text-5xl duration-300 dark:hover:bg-gray-700 place-content-center">
            <Loader></Loader>
          </div> */}
          {/* <img
            src="/profile.jpg"
            alt="profile"
            className="w-full object-cover max-h-[80vh] grayscale dark:grayscale-[25%] duration-300 transition-all"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Bio;
