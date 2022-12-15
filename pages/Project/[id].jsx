import axios from "axios";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import MainLayout from "../../layout/mainLayout";
import { ApiProject, ApiProjects } from "../../helper/strapi";
import Image from "next/image";

const projectsVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: "-100vh" },
};

function Detail({ project }) {
  const selectedImage =
    project.Images[1].formats.medium?.url ??
    project.Images[0].formats.medium?.url;

  return (
    <MainLayout delayNavbar={false}>
      <div className="max-w-xl min-h-screen mx-auto mt-2 2xl:max-w-2xl">
        {project && (
          <motion.div className="w-full mt-16" variants={projectsVariant}>
            <div className="flex gap-1 mb-4 text-sm md:gap-2 md:text-base brightness-200 dark:brightness-75">
              <Link href="/" scroll={false}>
                <button className="!no-underline link ">Home</button>
              </Link>
              <div>/</div>
              <Link href="/Projects" scroll={false}>
                <button className="!no-underline link">My Projects</button>
              </Link>
              <div>/</div>
              <div>{project.Title}</div>
            </div>
            <div className="prose dark:prose-invert prose-zinc lg:prose-xl">
              <div>
                <h1 className="!mb-2">{project.Title}</h1>
                <span className="brightness-150 dark:brightness-75">
                  {project.ShortDescription}
                </span>
              </div>
              {project.Images.length > 0 && (
                <div className="w-full h-[350px] 2xl:h-[420px] max-h-[80vh] object-cover rounded-lg overflow-hidden brightness-100 dark:brightness-[0.85] duration-300">
                  <Image
                    src={selectedImage}
                    alt="project's image"
                    layout="fill"
                  />
                </div>
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

export async function getStaticPaths() {
  // get Projects Paths
  const paths = await axios
    .get(ApiProjects)
    .then((response) => response.data.data)
    .then((data) => {
      return data.map((data) => ({
        params: { id: String(data.id) || "" },
      }));
    });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = await axios
    .get(ApiProject + params.id + "?populate=*")
    .then((response) => response.data.data)
    .then((projectResp) => {
      const Images = projectResp.attributes.Images.data.map((image) => {
        return {
          id: image.id,
          ...image.attributes,
        };
      });

      return {
        id: projectResp.id,
        ...projectResp.attributes,
        Images,
      };
    });

  // console.log(project.Images);

  return {
    props: { project },
  };
}

export default Detail;
