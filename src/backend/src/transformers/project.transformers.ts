import { Prisma } from "@prisma/client";
import { projectQueryArgs } from "../prisma-query-args/projects.query-args";
import { userTransformer } from "./user.transformer";
import { Project } from "shared";

export const projectTransformer = (project: Prisma.ProjectGetPayload<typeof projectQueryArgs>): 
Project => {
    return {
        ...project,
        url: project.githubUrl,
        creator: userTransformer(project.userCreated)
    }
}