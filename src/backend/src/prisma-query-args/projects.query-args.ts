import { Prisma } from "@prisma/client";

export const projectQueryArgs = Prisma.validator<Prisma.ProjectDefaultArgs>()({
    include: {
        // creator defined as userCreated
        userCreated: true
    }
})