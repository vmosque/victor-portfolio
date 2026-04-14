type Props = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  live: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  image,
  github,
  live,
}: Props) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
      {/* IMAGE */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-sm text-gray-400 mb-4">{description}</p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 text-sm">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            Live
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
