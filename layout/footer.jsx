import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-center px-4 text-gray-800 dark:text-white">
      <div className="container py-6">
        <hr className="h-px mt-6 border-gray-300 border-none dark:bg-gray-700" />

        <div className="flex flex-col items-center justify-center mt-6 md:flex-row">
          <div className="text-sm ">
            Designed & Built by {""}
            <a href="https://github.com/firdausbaihaqi" className="hover:underline underline-offset-2">
              {/* <span className="mr-2 border-t-4 border-blue-600 dark:border-blue-500"></span> */}
              Firdaus Baihaqi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
