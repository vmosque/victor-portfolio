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
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300 shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-gray-400 mt-2 text-sm">{description}</p>

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

        <div className="flex gap-4 mt-4">
          <a href={live} className="text-pink-400 text-sm">
            Live
          </a>
          <a href={github} className="text-cyan-400 text-sm">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
