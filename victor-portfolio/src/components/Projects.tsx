import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-24 bg-slate-900 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard
          title="Full-Stack MERN App with Authentication"
          description="Full-stack web application with authentication, REST APIs and CRUD operations."
          stack={["React", "Node.js", "MongoDB", "Express"]}
          image="/project1.png"
          github="#"
          live="https://nearbite.netlify.app"
        />

        <ProjectCard
          title="React Frontend Application"
          description="Responsive frontend app with API integration and component-based architecture."
          stack={["React", "JavaScript", "API"]}
          image="/project2.png"
          github="#"
          live="https://foundit-app.netlify.app"
        />

        <ProjectCard
          title="JavaScript Coffee Game"
          description="Browser-based game with custom logic, timers, scoring and DOM manipulation."
          stack={["JavaScript", "HTML", "CSS"]}
          image="/project3.png"
          github="https://github.com/vmosque/not-starbucks"
          live="#"
        />
      </div>
    </section>
  );
}
