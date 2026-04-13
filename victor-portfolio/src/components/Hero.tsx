export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-20 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 max-w-7xl mx-auto gap-16"
    >
      {/* LEFT */}
      <div className="flex-1 max-w-2xl">
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

        {/* TECH STACK */}
        <div className="mt-8">
          <div className="flex items-center justify-center md:justify-start gap-5 flex-wrap">
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
                className="w-7 h-7 opacity-80 hover:opacity-100 hover:scale-110 transition"
              />
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-xl font-semibold transition shadow-lg">
            View Projects
          </button>

          <button className="border border-purple-400 px-6 py-3 rounded-xl hover:bg-purple-500/10 transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center w-full md:w-1/2">
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
              className="hover:text-pink-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vicmosqueda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              LinkedIn
            </a>
          </div>

          {/* CV */}
          <h3 className="text-lg font-semibold mb-3">Curriculum</h3>

          <div className="flex gap-3">
            <a
              href="https://drive.google.com/file/d/126selxTELdFFN7vIKb40-YtoMXVCFQBm/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-white/10 rounded-lg py-2 hover:bg-white/10 text-sm"
            >
              Preview
            </a>

            <a
              href="https://drive.google.com/file/d/126selxTELdFFN7vIKb40-YtoMXVCFQBm/view"
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
