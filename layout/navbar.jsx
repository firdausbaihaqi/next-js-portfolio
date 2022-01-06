import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Toggle from "../components/UI/Toggle";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // show on mounted if currently not in landing page
  const [showName, setShowName] = useState(router.asPath == "/" ? true : false);

  // hide name on scroll down, show on scroll up
  // useEffect(() => {
  //   window.onscroll = () =>
  //     document.documentElement.scrollTop <= 100
  //       ? setShowName(true)
  //       : setShowName(false);
  //   return () => (window.onscroll = null);
  // });

  const controlDirection = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [setVisible, setPrevScrollPos, prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    // visible && console.log(visible);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, [controlDirection]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: router.asPath == "/" ? 1 : 0.2 }}
      className={
        "sticky w-full ease-in-out z-[9999] transition-all duration-500 " +
        (visible ? " top-0" : " -top-28")
      }
    >
      <div className="flex-wrap w-full py-8 text-gray-800 bg-gray-100 md:flex md:justify-between md:items-center dark:bg-zinc-900 dark:text-white dark:bg-opacity-90 bg-opacity-90">
        {/* content */}
        <div className="flex items-center justify-between w-full mx-auto text-xs lg:max-w-5xl md:text-base">
          <div
            className={
              "text-lg md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 duration-300 transition-all" +
              (router.asPath == "/" && " -translate-y-32")
            }
          >
            <Link href="/" scroll={false}>
              <a>
                <span className="mr-2 border-blue-600 dark:border-blue-500">
                  Firdaus
                </span>
                Baihaqi
              </a>
            </Link>
          </div>

          <div className="flex gap-5">
            {/* <button className="mr-4">
              <motion.svg
                width="50"
                height="50"
                className="absolute z-10 -translate-x-[15px] -translate-y-[9px]"
              >
                <motion.circle
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="white"
                  strokeWidth="3"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  whileHover={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.svg>
              <i className="text-2xl fa fa-bars"></i>
            </button> */}

            {/* items */}
            <div className="">
              <Toggle delayNavbar />
            </div>
          </div>
        </div>
        {/* end of content */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
