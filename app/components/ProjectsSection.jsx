"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    // description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parasadkurkar/Personal-Portfolio",
    previewUrl: "https://paras.vercel.app/",
  },
  {
    id: 2,
    title: "E-seva",
    // description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parasadkurkar/E-seva-",
    previewUrl: "https://miniproject-10-frontend.onrender.com",
  },
  {
    id: 3,
    title: "YouTube-v1.0",
    // description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parasadkurkar/YouTube-Clone-1.0",
    previewUrl: "https://roaring-macaron-bc3f20.netlify.app/",
  },
  {
    id: 4,
    title: "MedXpert delivery website",
    // description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parasadkurkar/MedXpert1",
    previewUrl: "medxpertbyparas.vercel.app",
  },
  // {
  //   id: 5,
  //   title: "Threads-v1.0",
  //   // description: "Project 5 description",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Parasadkurkar/Modern-Threads-Clone-v1.0",
  //   previewUrl: "https://github.com/Parasadkurkar/Modern-Threads-Clone-v1.0",
  // },
  // {
  //   id: 6,
  //   title: "UnitySphere",
  //   // description: "Project 6 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Parasadkurkar/UnitySphere",
  //   previewUrl: "https://unitysphere.vercel.app",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pb-16">
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-5">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
