import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ai-kid.png"
          title="AI kids Story Genrator"
          description="
The AI Kids Story Generator is an interactive web application that uses AI to create personalized stories based on user preferences, fostering creativity and enhancing literacy for children. It combines modern technologies like Next.js, Gemini AI API, Tailwind CSS, and Clerk to deliver an engaging, fun, and educational storytelling experience."
        />
        <ProjectCard
          src="/ems.png"
          title="Employee Managment System"
          description="Developed an Employee Management System using React.js, enabling administrators to efficiently manage employee data, leave requests, and payroll through a secure and user-friendly interface. Integrated role-based authentication and dynamic CRUD operations for streamlined functionality"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="
Developed an animated portfolio website using Next.js, showcasing full-stack development expertise with smooth transitions and interactive design. Demonstrated proficiency in modern web technologies, ensuring an engaging user experience."
        />
      </div>
    </div>
  );
};

export default Projects;
