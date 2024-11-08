import { NextFunction, Request, Response } from "express";
import ProjectsServices from "../services/projects.services";

export default class ProjectsController {
    static async getProjects(_req: Request, res: Response, next: NextFunction) {
    
    try {
        const projects = await ProjectsServices.getProjects();
        return res.json(projects);
    
    } catch (error: unknown){
            return next(error)
        }
    }
}
