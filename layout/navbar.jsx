import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Toggle from "../components/UI/Toggle";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.onscroll = () =>
      document.documentElement.scrollTop <= 100
        ? setIsTop(true)
        : setIsTop(false);
    return () => (window.onscroll = null);
  });

  const controlDirection = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [setVisible, setPrevScrollPos, prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    visible && console.log(visible);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, [controlDirection]);

  return (
    <nav
      className={
        "sticky mx-auto text-gray-800 dark:text-white 2xl:max-w-6xl duration-300 transition-all  z-50  dark:bg-opacity-50 bg-opacity-90" +
        (visible ? " top-0" : " -top-28")
      }
    >
      <div className="container flex-wrap py-8 mx-auto md:flex md:justify-between md:items-center">
        {/* content */}
        <div className="flex items-center justify-between w-full text-xs md:text-base">
          <div
            className={
              "text-lg md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 duration-300 transition-all" +
              (!isTop && " -translate-y-32")
            }
          >
            <Link href="/">
              <a>
                <span className="mr-2 border-t-4 border-blue-600 dark:border-blue-500">
                  Firdaus
                </span>
                Baihaqi
              </a>
            </Link>
          </div>

          <div className="">
            <Toggle />
          </div>
        </div>
        {/* end of content */}
      </div>
    </nav>
  );
}

export default Navbar;
