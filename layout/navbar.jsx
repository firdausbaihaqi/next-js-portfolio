import Link from "next/link";
import Toggle from "../components/UI/Toggle";

const Navbar = () => {
  return (
    <nav className="text-gray-800 dark:text-white">
      <Toggle />
      <div className="container flex-wrap py-8 mx-auto md:flex md:justify-between md:items-center">
        {/* content */}
        <div className="flex items-center justify-between w-full text-xs md:text-base">
          <div className="text-sm md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
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
            <div className="flex flex-col border-r md:flex-row md:mx-6 md:border-none">
              <span className="pr-3 md:border-r">Frontend Developer</span>
              <span className="pl-3 ">Web Designer</span>
            </div>
          </div>
        </div>
        {/* end of content */}
      </div>
    </nav>
  );
};

export default Navbar;
