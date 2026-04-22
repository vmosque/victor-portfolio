export default function Working() {
  const items = [
    "Building a full-stack application solving real user problems",
  ];

  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Currently Working On
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-105 transition"
          >
            <p className="text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
