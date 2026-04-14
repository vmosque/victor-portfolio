export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80; // altura navbar
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      {/* LOGO */}
      <button
        onClick={() => scrollTo("home")}
        className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition"
      >
        Victor
      </button>

      {/* LINKS */}
      <div className="flex gap-6 text-sm text-gray-300">
        <button
          onClick={() => scrollTo("home")}
          className="hover:text-white transition"
        >
          Home
        </button>

        <button
          onClick={() => scrollTo("projects")}
          className="hover:text-white transition"
        >
          Projects
        </button>

        <button
          onClick={() => scrollTo("about")}
          className="hover:text-white transition"
        >
          About
        </button>
      </div>
    </nav>
  );
}
