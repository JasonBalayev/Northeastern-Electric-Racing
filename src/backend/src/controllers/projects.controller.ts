
export default class ProjectsController {
    static async getProjects(req: Request, res: Response, next: NextFunction)
    try {
        const projects = await ProjectServices.getProjects();

    } catch (error: unknown){

    }
}
