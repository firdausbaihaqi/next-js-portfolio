import Link from "next/link";

function ProjectList({ projects }) {
  return (
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
                        ? project.Images[0].url
                        : "https://cdn.icon-icons.com/icons2/1378/PNG/512/imagemissing_92832.png"
                    }
                  )`,
                }}
              >
                <div className="w-full h-full lg:text-zinc-700 text-zinc-50 lg:dark:text-zinc-200 bg-black lg:bg-transparent bg-opacity-60 p-8 sm:p-10 lg:p-0 rounded-lg">
                  <h1 className="mb-4 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">
                    {project.Title}
                  </h1>
                  <div className="mb-4 text-xs font-bold tracking-widest uppercase">
                    {project.ShortDescription}
                  </div>
                  <div className="mb-4 text-base leading-relaxed text-left text-gray-300 lg:text-gray-500 lg:dark:text-gray-400">
                    <p className="line-clamp-3 mb-2">{project.Description}</p>
                    <Link href="#">
                      <button className="underline underline-offset-4 hover:text-zinc-100 lg:hover:text-zinc-900 lg:dark:hover:text-zinc-100 duration-100 transition-all hover:scale-105">
                        Read more
                      </button>
                    </Link>
                  </div>

                  {/* techs */}
                  {/* <div className="flex flex-wrap w-full gap-2 mt-1 text-left">
                    {project.technologies.map((tech) => tech.Name)}
                  </div> */}

                  {/* links */}
                  <div className="flex -ml-1 items-center">
                    <button className="social-button !text-[32px]">
                      <i className="w-10 fab fa-github-square"></i>
                    </button>
                    <button className="social-button mb-1">
                      <i className="w-10 fas fa-external-link-alt"></i>
                    </button>
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
                      project.Images[0]
                        ? project.Images[0].url
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
  );
}

export default ProjectList;