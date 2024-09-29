import { prisma } from "../prisma/prisma";

export default class ProjectServices {
    static async getProjects() {
        const projects = await prisma.project.findMany();
        return projects; // TODO Transform
    }
}