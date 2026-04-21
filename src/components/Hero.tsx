export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-32 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 max-w-7xl mx-auto gap-12"
    >
      {/* LEFT */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
          Hi, I'm Victor
        </h1>

        <h2 className="text-lg md:text-2xl mt-6 text-pink-400 font-semibold">
          Full-Stack Developer
        </h2>

        <p className="mt-6 text-gray-300 text-base md:text-lg">
          Full-stack developer specialized in building modern web applications
          with the MERN stack. Focused on clean architecture, performance and
          real-world problem solving.
        </p>

        {/* TECH ICONS */}
        <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap">
          {[
            "react",
            "node",
            "mongodb",
            "express",
            "typescript",
            "javascript",
            "html",
            "tailwind",
          ].map((tech) => (
            <img
              key={tech}
              src={`/icons/${tech}.svg`}
              alt={tech}
              className="w-8 h-8 opacity-80 hover:opacity-100 hover:scale-110 transition"
            />
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-xl font-semibold transition shadow-lg text-center"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="border border-purple-400 px-6 py-3 rounded-xl hover:bg-purple-500/10 transition text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center w-full md:w-auto">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 w-full max-w-md lg:max-w-lg text-center shadow-[0_0_80px_rgba(168,85,247,0.3)]">
          {/* FOTO */}
          <img
            src="/profile.jpg"
            alt="Victor"
            className="w-44 h-44 md:w-60 md:h-60 mx-auto rounded-2xl object-cover mb-6"
          />

          {/* SOCIAL */}
          <div className="flex justify-center gap-6 text-gray-300 text-sm mb-4">
            <a
              href="https://github.com/vmosque"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/vicmosqueda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              LinkedIn
            </a>
          </div>

          {/* CV */}
          <h3 className="text-lg font-semibold mb-3">Curriculum</h3>

          <div className="flex gap-3">
            <a
              href="https://drive.google.com/file/d/1LIDwexqmzm_8wcn-9kCrDfGexvt4CGjQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-white/10 rounded-lg py-2 hover:bg-white/10 text-sm"
            >
              Preview
            </a>

            <a
              href="https://drive.google.com/file/d/1LIDwexqmzm_8wcn-9kCrDfGexvt4CGjQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-purple-500 rounded-lg py-2 text-sm hover:bg-purple-400"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
