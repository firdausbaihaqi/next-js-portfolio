const ApiProject = `${process.env.NEXT_PUBLIC_API_ENDPOINT}projects/`
const ApiProjects = `${process.env.NEXT_PUBLIC_API_ENDPOINT}projects?_sort=id:DESC`
const ApiProjectsByTechs = (tech) => {
    return `${process.env.NEXT_PUBLIC_API_ENDPOINT}projects?technologies.Slug=${tech}&_sort=id:DESC`
}
const ApiTechs = `${process.env.NEXT_PUBLIC_API_ENDPOINT}technologies`

export { ApiProject, ApiProjects, ApiTechs, ApiProjectsByTechs }