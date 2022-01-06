import Footer from "./footer";
import { motion } from "framer-motion";

export default function MainLayout({ children, full = false }) {
  const containerVariant = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        when: "beforeChildren",
        type: "spring",
        bounce: 0,
      },
    },
  };

  return (
    <motion.main
      variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "linear" }}
      className={`min-h-screen ${!full && "px-5 xl:px-20"}`}
    >
      <section className={`mx-auto ${!full && "lg:max-w-5xl"}`}>
        {children}
      </section>
      <Footer />
    </motion.main>
  );
}
