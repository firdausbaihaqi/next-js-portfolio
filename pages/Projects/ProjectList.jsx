import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ApiProjects, ApiProjectsByTechs } from "../../helper/strapi";
import Loader from "../../components/UI/Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const projectsVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: "-100vh" },
};

function ProjectList({ selectedCategory }) {
  const [projects, setProjects] = useState([]);

  // on selectedCategory change get projects based on new category
  useEffect(() => {
    setProjects([]); //set projects empty so the user can see the loader
    // setTimeout(() => {
    if (selectedCategory !== "All") {
      axios.get(ApiProjectsByTechs(selectedCategory)).then((response) => {
        // console.log(response.data);
        setProjects(response.data);
      });
    } else {
      axios.get(ApiProjects).then((response) => {
        // console.log(response.data);
        setProjects(response.data);
      });
    }
    // }, 1500);
  }, [selectedCategory]);

  return (
    <>
      <AnimatePresence>
        {projects.length == 0 && (
          <motion.div className="mt-20" variants={projectsVariant}>
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {projects.length > 0 && (
          <motion.div variants={projectsVariant}>
            <div className="grid gap-2 mt-10 ml-2 ">
              {projects.map((project) => {
                return (
                  <div className="w-full lg:py-12" key={project.id}>
                    {/* card */}
                    <div className="flex items-start w-full">
                      {/* left side */}
                      <div
                        className="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 lg:mb-0 object-cover bg-cover bg-center lg:!bg-none rounded-lg"
                        style={{
                          backgroundImage: `url(
                    ${
                      project.Images[0]
                        ? project.Images[0].formats.medium.url
                        : "https://cdn.icon-icons.com/icons2/1378/PNG/512/imagemissing_92832.png"
                    }
                  )`,
                        }}
                      >
                        <div className="w-full h-full p-8 bg-black rounded-lg lg:text-zinc-700 text-zinc-50 lg:dark:text-zinc-200 lg:bg-transparent bg-opacity-60 sm:p-10 lg:p-0">
                          <h1 className="mb-4 text-4xl font-bold leading-none tracking-normal md:text-7xl lg:text-5xl">
                            {project.Title}
                          </h1>
                          <div className="mb-4 text-xs font-bold tracking-widest uppercase">
                            {project.ShortDescription}
                          </div>
                          <div className="mb-4 text-base leading-relaxed text-left text-gray-300 lg:text-gray-500 lg:dark:text-gray-400">
                            <div className="mb-2 line-clamp-3">
                              <ReactMarkdown>
                                {project.Description}
                              </ReactMarkdown>
                            </div>
                            <Link href={`Projects/detail/${project.Slug}`}>
                              <button className="link">Read more</button>
                            </Link>
                          </div>

                          {/* techs */}
                          {/* <div className="flex flex-wrap w-full gap-2 mt-1 text-left">
                    {project.technologies.map((tech) => tech.Name)}
                  </div> */}

                          {/* links */}
                          <div className="flex items-center -ml-1">
                            {project.repository ? (
                              <a
                                href={project.repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="social-button !text-[32px]">
                                  <i className="w-10 fab fa-github-square"></i>
                                </button>
                              </a>
                            ) : (
                              <button className="social-button-disabled !text-[32px] ">
                                <i className="w-10 fab fa-github-square"></i>
                              </button>
                            )}

                            {project.liveDemo ? (
                              <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="mb-1 social-button">
                                  <i className="w-10 fas fa-external-link-alt"></i>
                                </button>
                              </a>
                            ) : (
                              <button className="mb-1 social-button-disabled">
                                <i className="w-10 fas fa-external-link-alt"></i>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* left side */}

                      {/* right side */}
                      <div className="hidden w-1/2 mt-12 lg:inline lg:max-w-lg rounded-xl xl:mt-0">
                        <div className="relative w-full max-w-lg">
                          <img
                            className="object-cover object-center mx-auto rounded-lg shadow-xl dark:brightness-90 duration-300 max-h-[300px]"
                            alt="hero"
                            src={
                              project.Images[1]
                                ? project.Images[1].formats.small.url
                                : "https://cdn.icon-icons.com/icons2/1378/PNG/512/imagemissing_92832.png"
                            }
                          />
                        </div>
                      </div>
                      {/* right side */}
                    </div>
                    {/* end of card */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectList;
