export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
    >
      {/* LEFT */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm Victor
        </h1>

        <h2 className="text-3xl mt-4 text-pink-400 font-semibold">
          Full-Stack Developer
        </h2>

        <p className="mt-6 text-gray-300 text-lg max-w-lg">
          I build scalable and performant web applications using the MERN stack,
          focusing on clean architecture, user experience and real-world
          solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-xl font-semibold transition">
            View Projects
          </button>

          <button className="border border-purple-400 px-6 py-3 rounded-xl hover:bg-purple-500/10 transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex">
        <div className="bg-slate-800 rounded-2xl p-4 shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-purple-500/20">
          <img
            src="/project-preview.png"
            alt="project preview"
            className="rounded-xl w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
