export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-10 py-4 flex justify-between items-center bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <h1 className="text-xl font-bold">Victor</h1>

      <div className="flex gap-6 text-sm">
        <button
          onClick={() => scrollTo("home")}
          className="hover:text-pink-400 transition"
        >
          Home
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="hover:text-pink-400 transition"
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo("about")}
          className="hover:text-pink-400 transition"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
