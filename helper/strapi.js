const ApiProject = `${process.env.NEXT_PUBLIC_API_ENDPOINT}projects/`
const ApiProjects = `${process.env.NEXT_PUBLIC_API_ENDPOINT}projects`
const ApiProjectsByTechs = `${process.env.NEXT_PUBLIC_API_ENDPOINT}projects?technologies.Slug=`
const ApiTechs = `${process.env.NEXT_PUBLIC_API_ENDPOINT}technologies`

export { ApiProject, ApiProjects, ApiTechs, ApiProjectsByTechs }