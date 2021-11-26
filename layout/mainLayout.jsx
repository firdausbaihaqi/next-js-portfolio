import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";

export default function MainLayout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: "0vh" }}
      exit={{ opacity: 0, y: "-100vh" }}
      transition={{ duration: 1 }}
      className="min-h-screen px-4 bg-gray-100 dark:bg-gray-800 xl:px-20 "
    >
      <Navbar />
      <section className="mx-auto 2xl:max-w-6xl">{children}</section>
      <Footer />
    </motion.main>
  );
}
