import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/mainLayout";

export default function Home() {
  return (
    <div className="tracking-widest text-gray-700 duration-300 dark:text-gray-100">
      <div className="flex flex-col items-center justify-between mt-10 sm:mt-32 lg:items-start lg:flex-row">
        {/* left text */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="block text-5xl md:text-8xl">Portfolio.</div>
          <p className="block text-xl">A showcase of my working history</p>
        </div>
        {/* left text */}

        {/* right text */}
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-2 md:items-end">
          <div className="p-6 text-base border-4 border-gray-700 border-dashed cursor-pointer md:text-2xl dark:border-gray-100">
            Things I've been working so far
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            {/* vertical dashed line */}
            <div className="hidden mt-1 text-xl border-l-4 border-gray-700 border-dashed md:block dark:border-gray-100 h-60 lg:h-52 2xl:h-72"></div>
            {/* end of vertical dashed line */}

            {/* arrow */}
            <div className="mt-2 cursor-pointer">
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
            </div>
            {/* end of arrow */}
          </div>
          {/* end of right text */}
        </div>
      </div>
    </div>
  );
}
