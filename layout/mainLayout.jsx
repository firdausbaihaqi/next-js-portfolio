import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";

export default function MainLayout({
  children,
  full = false,
  delayNavbar = true,
}) {
  const containerVariant = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1.5,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        when: "afterChildren",
        staggerChildren: 1.5,
      },
    },
  };

  return (
    <motion.main
      variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`min-h-screen ${!full && "px-5 xl:px-20"}`}
    >
      <Navbar delayNavbar={delayNavbar} />
      <section className={`mx-auto ${!full && "lg:max-w-5xl"}`}>
        {children}
      </section>
      <Footer />
    </motion.main>
  );
}
