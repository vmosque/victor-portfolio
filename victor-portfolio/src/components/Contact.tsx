export default function Contact() {
  return (
    <section className="px-10 py-32 bg-slate-800 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <div className="space-y-4 text-gray-300 text-lg">
        <p>
          📧{" "}
          <a href="mailto:vdmc1804@gmail.com" className="hover:text-pink-400">
            vdmc1804@gmail.com
          </a>
        </p>

        <p>
          💻{" "}
          <a
            href="https://github.com/vmosque"
            target="_blank"
            className="hover:text-pink-400"
          >
            github.com/vmosque
          </a>
        </p>

        <p>
          🔗{" "}
          <a
            href="https://linkedin.com/in/vicmosqueda"
            target="_blank"
            className="hover:text-pink-400"
          >
            linkedin.com/in/vicmosqueda
          </a>
        </p>
      </div>
    </section>
  );
}
