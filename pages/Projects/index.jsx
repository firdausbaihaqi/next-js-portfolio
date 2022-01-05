import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../../layout/mainLayout";
import { ApiTechs } from "../../helper/strapi";
import ProjectList from "./ProjectList";
import Loader from "../../components/UI/Loader";

const projectsVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: "-100vh" },
};

function Projects() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // get categories on mounted
  useEffect(() => {
    axios.get(ApiTechs).then((response) =>
      setTimeout(() => {
        setCategories(response.data);
      }, 1500)
    );
  }, []);

  const handleSelectCategory = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <MainLayout>
      <div className="w-full min-h-screen mt-32 -translate-y-10">
        <div className="w-full md:w-2/3">
          <h1 className="flex text-5xl font-bold md:text-7xl">Projects.</h1>
          <p className="w-5/6 mt-5 text-xl text-gray-500 md:text-2xl dark:text-gray-400">
            Selection of projects i&apos;ve been working on as a Frontend
            Developer.
          </p>
        </div>

        <AnimatePresence>
          {categories.length == 0 && (
            <motion.div variants={projectsVariant} className="mt-20">
              <Loader />
            </motion.div>
          )}
        </AnimatePresence>

        {categories.length > 0 && (
          <div className="mt-20 md:-ml-2">
            <motion.div variants={projectsVariant}>
              <button
                onClick={() => handleSelectCategory("All")}
                type="button"
                className={
                  "category-button " +
                  (selectedCategory == "All" && "category-button-active")
                }
              >
                All
              </button>

              {categories.map((category) => {
                return (
                  category.projects.length > 0 && (
                    <button
                      onClick={() => handleSelectCategory(category.Slug)}
                      type="button"
                      className={
                        "category-button " +
                        (selectedCategory == category.Slug &&
                          "category-button-active")
                      }
                      key={category.id}
                    >
                      {category.Name}
                    </button>
                  )
                );
              })}
            </motion.div>

            <ProjectList selectedCategory={selectedCategory} />
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Projects;
