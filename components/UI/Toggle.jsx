import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { initTheme, toggleTheme, isDarkTheme } from "../../helper/theme";
import { motion } from "framer-motion";

function Toggle({ delayNavbar }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    initTheme();
    isDarkTheme() && setEnabled(true);
  });

  const handleToggle = () => {
    setEnabled((enabled) => !enabled);
    toggleTheme();
  };

  const svgVariant = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delayNavbar ? 0.2 : 2,
      },
    },
    hover: {
      opacity: 1,
      x: 5,
      transition: { duration: 0.3 },
    },
  };

  const svgVariant2 = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delayNavbar ? 0.2 : 2,
      },
    },
    hover: {
      opacity: 1,
      x: -5,
      transition: { duration: 0.3 },
    },
  };

  // show icon on hover variants

  // const svgVariant = {
  //   initial: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   animate: {
  //     opacity: 0,
  //     x: 50,
  //     transition: {
  //       delay: 2,
  //     },
  //   },
  //   hover: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.3 },
  //   },
  // };

  // const svgVariant2 = {
  //   initial: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   animate: {
  //     opacity: 0,
  //     x: -50,
  //     transition: {
  //       delay: 2,
  //     },
  //   },
  //   hover: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.3 },
  //   },
  // };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative z-50 flex gap-3"
    >
      <motion.svg
        variants={svgVariant}
        xmlns="http://www.w3.org/2000/svg"
        className="z-10 w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </motion.svg>
      <Switch
        checked={enabled}
        onChange={handleToggle}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-400"
        } inline-flex items-center h-6 rounded-full w-11 focus:outline-none duration-300 z-20`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } duration-300 inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
      <motion.svg
        variants={svgVariant2}
        xmlns="http://www.w3.org/2000/svg"
        className="z-10 w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </motion.svg>
    </motion.div>
  );
}

export default Toggle;
