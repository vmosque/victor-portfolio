import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-24 bg-slate-900 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard
          title="Full-Stack MERN Application"
          description="Full-stack web application with authentication, REST APIs and CRUD operations, built with React, Node.js and MongoDB."
          stack={["React", "Node.js", "MongoDB", "Express"]}
          image="/project1.png"
          github="#"
          live="https://nearbite.netlify.app"
        />

        <ProjectCard
          title="React Frontend Application"
          description="Responsive frontend application with component-based architecture and API integration, focused on UI and user experience."
          stack={["React", "JavaScript", "API"]}
          image="/project2.png"
          github="#"
          live="https://foundit-app.netlify.app"
        />

        <ProjectCard
          title="JavaScript Coffee Game"
          description="Browser-based game built with vanilla JavaScript, featuring custom game logic, timers, scoring and dynamic DOM manipulation."
          stack={["JavaScript", "HTML", "CSS"]}
          image="/project3.png"
          github="https://github.com/vmosque/not-starbucks"
          live="#"
        />
      </div>
    </section>
  );
}
