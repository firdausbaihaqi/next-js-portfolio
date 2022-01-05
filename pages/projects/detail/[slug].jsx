import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../../layout/mainLayout";
import { ApiProject } from "../../../helper/strapi";
import Loader from "../../../components/UI/Loader";

const projectsVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: "-100vh" },
};

function Detail() {
  const [project, setProject] = useState(null);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(async () => {
    if (router.isReady) {
      const res = await axios
        .get(ApiProject + slug)
        .then((res) => {
          // console.log(res.data);
          return res;
        })
        .catch((error) => {
          if (error.response) {
            console.log("catch error response : ", error.response.status);
            // console.log("error response : ", error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
            console.log("error request : ", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }

          return error;
        });

      if (res.status == 200) {
        setProject(res.data);
      } else if (res.response) {
        // if project not found set project with dummy data
        if (res.response.status == 404) {
          const emptyProject = {
            id: null,
            Title: "Project not found",
            Description:
              "Something went wrong, please select another project from 'My Projects' page",
            Slug: "",
            created_at: "",
            updated_at: "",
            ShortDescription: "I'm sorry, it's on me :(",
            Images: [],
            technologies: [],
          };
          setProject(emptyProject);
        } else {
          alert("error with status : ", res.response.status);
        }
      } else {
        alert(
          "Sometimes we forget to connect our device to the internet :), please make sure you have an internet connection then reload the page"
        );
      }
    }
  }, [slug]);

  return (
    <MainLayout delayNavbar={false}>
      <AnimatePresence>
        {!project && (
          <motion.div className="mt-16" variants={projectsVariant}>
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-xl min-h-screen mx-auto mt-2 2xl:max-w-2xl">
        {project && (
          <motion.div className="w-full mt-16" variants={projectsVariant}>
            <div className="flex gap-1 mb-4 text-sm md:gap-2 md:text-base brightness-200 dark:brightness-75">
              <Link href="/">
                <button className="!no-underline link ">Home</button>
              </Link>
              <div>/</div>
              <Link href="/Projects">
                <button className="!no-underline link">My Projects</button>
              </Link>
              <div>/</div>
              <div>{project.id == null ? slug : project.Title}</div>
            </div>
            <div className="prose dark:prose-invert prose-zinc lg:prose-xl">
              <div>
                <h1 className="!mb-2">{project.Title}</h1>
                <span className="brightness-150 dark:brightness-75">
                  {project.ShortDescription}
                </span>
              </div>
              {project?.Images.length > 0 && (
                <img
                  src={project.Images[1].formats.medium.url}
                  alt=""
                  className="w-full max-h-[80vh] object-cover rounded-lg dark:brightness-[0.85] duration-300"
                />
              )}
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 text-base">
                  <div>Technologies :</div>
                  {project.technologies.map((tech) => (
                    <button
                      key={tech.id}
                      className="!no-underline italic link after:content-[','] last:after:content-['']"
                    >
                      {tech.Name}
                    </button>
                  ))}
                </div>
              )}

              <article>
                <ReactMarkdown>{project.Description}</ReactMarkdown>
              </article>
            </div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
}

export default Detail;
