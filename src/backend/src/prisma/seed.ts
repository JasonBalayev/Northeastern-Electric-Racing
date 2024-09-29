import { prisma } from "./prisma";

const performSeed = async () => {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      username: "johndoe",
      email: "johndoe@example.com",
      role: "ADMIN",
      title: "Software Engineer",
      bio: "A passionate software developer.",
      imageUrl: "https://example.com/johndoe.jpg",
      githubLink: "https://github.com/johndoe",
      linkedInLink: "https://linkedin.com/in/johndoe",
    },
  });

  // Seed Projects
  const project1 = await prisma.project.create({
    data: {
      title: "Project 1",
      description: "A project about X",
      imageUrls: ["https://example.com/image1.jpg"],
      skills: ["React", "Node.js"],
      githubUrl: "https://github.com/johndoe/project1",
      userCreatedID: user1.id,
    },
  });

  const project2 = await prisma.project.create({
    data: {
      title: "Project 2",
      description: "A project about Y",
      imageUrls: ["https://example.com/image2.jpg"],
      skills: ["Python", "Django"],
      githubUrl: "https://github.com/johndoe/project2",
      userCreatedID: user1.id,
    },
  });

  const project3 = await prisma.project.create({
    data: {
      title: "Project 3",
      description: "A project about Z",
      imageUrls: ["https://example.com/image3.jpg"],
      skills: ["Java", "Spring Boot"],
      githubUrl: "https://github.com/johndoe/project3",
      userCreatedID: user1.id,
    },
  });

  // Seed Experiences
  const experience1 = await prisma.experience.create({
    data: {
      title: "Experience 1",
      description: "Worked on X technology",
      companyName: "Tech Corp",
      location: "Remote",
      imageUrls: ["https://example.com/experience1.jpg"],
      startDate: new Date("2020-01-01"),
      endDate: new Date("2021-01-01"),
      userCreatedID: user1.id,
    },
  });

  const experience2 = await prisma.experience.create({
    data: {
      title: "Experience 2",
      description: "Worked on Y technology",
      companyName: "Another Tech Corp",
      location: "Onsite",
      imageUrls: ["https://example.com/experience2.jpg"],
      startDate: new Date("2019-01-01"),
      endDate: new Date("2020-01-01"),
      userCreatedID: user1.id,
    },
  });

  const experience3 = await prisma.experience.create({
    data: {
      title: "Experience 3",
      description: "Worked on Z technology",
      companyName: "Different Tech Corp",
      location: "Hybrid",
      imageUrls: ["https://example.com/experience3.jpg"],
      startDate: new Date("2021-01-01"),
      endDate: new Date("2022-01-01"),
      userCreatedID: user1.id,
    },
  });
};

performSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
