import { useState } from "react";
import Bio from "../components/sections/bio";
import Intro from "../components/sections/Intro";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../layout/mainLayout";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <Layout>
      <div className="tracking-widest text-gray-700 duration-300 dark:text-gray-100">
        {/* <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100vh", transition: { duration: 2 } }}
          >
            <Intro showIntro={showIntro} setShowIntro={setShowIntro} />
          </motion.div>
        )}
      </AnimatePresence> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen"
        >
          <Bio />
        </motion.div>
      </div>
    </Layout>
  );
}
