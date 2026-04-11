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
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
      {/* IMAGE */}
      <div className="aspect-video w-full overflow-hidden bg-slate-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-300 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          {description}
        </p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2 mt-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 mt-5">
          <a
            href={live}
            target="_blank"
            className="text-sm text-pink-400 hover:underline"
          >
            Live
          </a>

          <a
            href={github}
            target="_blank"
            className="text-sm text-cyan-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
