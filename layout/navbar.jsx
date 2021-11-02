import Link from "next/link";
import Toggle from "../components/UI/Toggle";

function Navbar() {
  return (
    <nav className="text-gray-800 dark:text-white">
      <Toggle />
      <div className="container flex-wrap py-8 mx-auto md:flex md:justify-between md:items-center">
        {/* content */}
        <div className="flex items-center justify-between w-full text-xs md:text-base">
          <div className="text-lg md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
            <Link href="/">
              <a>
                <span className="mr-2 border-t-4 border-blue-600 dark:border-blue-500">
                  Firdaus
                </span>
                Baihaqi
              </a>
            </Link>
          </div>
          <div className="items-center md:flex">
            <div className="flex flex-col text-sm text-right md:flex-row md:text-lg md:text-left">
              <span>Frontend Developer</span>
              <span className="hidden mx-2 border-l-2 md:block" />
              <span>Web Designer</span>
            </div>
          </div>
        </div>
        {/* end of content */}
      </div>
    </nav>
  );
}

export default Navbar;
