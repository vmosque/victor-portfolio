import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-28 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 max-w-2xl">
          A selection of projects focused on real-world problems, performance
          and scalable architecture.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="NearBite – Food Sharing Platform"
          description="Full-stack platform that connects neighbors to share home-cooked meals. Includes authentication, REST APIs and real-time data handling."
          stack={["React", "Node.js", "MongoDB", "Express"]}
          image="/project1.png"
          github="https://github.com/vmosque/nearbite-client"
          live="https://nearbite.netlify.app"
        />

        <ProjectCard
          title="FoundIt – Product Discovery App"
          description="Responsive frontend application with API integration, dynamic filtering and reusable component architecture."
          stack={["React", "JavaScript", "API"]}
          image="/project2.png"
          github="https://github.com/wai-coding/foundit-app"
          live="https://foundit-app.netlify.app/"
        />

        <ProjectCard
          title="Coffee Game – JavaScript Logic Project"
          description="Interactive browser game built with pure JavaScript. Features custom game logic, timers, scoring system and DOM manipulation."
          stack={["JavaScript", "HTML", "CSS"]}
          image="/project3.png"
          github="https://github.com/vmosque/not-starbucks-coffee-shop"
          live="https://vmosque.github.io/not-starbucks-coffee-shop/"
        />
      </div>
    </section>
  );
}
