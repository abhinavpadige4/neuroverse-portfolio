export default function TechStack() {
  const stacks = [
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "⚙️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⛵" },
    { name: "AWS", icon: "☁️" },
    { name: "Git", icon: "🌱" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
        <div className="glass p-6 flex flex-wrap justify-center gap-4">
          {stacks.map((s, idx) => (
            <div key={idx} className="flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded">
              <span>{s.icon}</span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}