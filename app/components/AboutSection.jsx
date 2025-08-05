"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/ C++</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>Java</li>
        <li>
          MERN Stack: (MongoDB, Express.js, React.js, and Node. js)
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vidyavardhini's College of engineering and Technology University Of Mumbai</li>
        <li>B.E Computer Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> JavaScript basic
          <Link href="/documents/certificates/javaScript basic.pdf" target="_blank">
            🔗
          </Link>
        </li>
        <li>SQL - Advanced
          <Link href="/documents/certificates/SQL-Advanced.pdf" target="_blank">
            🔗
          </Link>
        </li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="textColor1 z-10 relative aboutSection" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-justify">
            I am proficient in DevOps, MERN stack, AWS, and UI/UX designing.
            I aim to apply my skills to drive innovation in a tech-centric role.
            I seek opportunities to collaborate with diverse teams,
            leveraging my expertise to develop cutting-edge solutions.
            My goal is to continuously learn and grow within an organization
            that values creativity and fosters professional development.
          </p>
        </div>
        <div>
          <div className="flex flex-row justify-start mt-8 font-black text-lg">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
