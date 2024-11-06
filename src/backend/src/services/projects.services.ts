import { prisma } from "../prisma/prisma";
import { Project } from "shared";
import { projectTransformer } from "../transformers/project.transformers";

export default class ProjectsServices {
    static async getProjects(): 
    Promise<Project[]> {
        const projects = await prisma.project.findMany({
            where: {
                dateDeleted: null
            },
            include: {
                userCreated: true,
            }
        });

        
        return projects.map(projectTransformer); // TODO Transform
    }
}