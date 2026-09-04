export default function About() {
  const highlights = [
    { icon: '🧠', title: 'Deep Learning', desc: 'Neural networks, transformers, and LLMs' },
    { icon: '📊', title: 'Data Science', desc: 'Analysis, visualization, and feature engineering' },
    { icon: '⚙️', title: 'MLOps', desc: 'Deployment, monitoring, and CI/CD pipelines' },
    { icon: '🚀', title: 'Product Mindset', desc: 'Shipping AI that delivers real value' },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm an AI engineer passionate about building intelligent systems that
              push the boundaries of what's possible. With a strong foundation in
              computer science and a deep specialization in machine learning, I've
              spent the last five years designing, training, and deploying models
              that power everything from recommendation engines to conversational AI.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              My approach combines rigorous engineering with creative problem-solving.
              I believe the best AI solutions are not just technically sound, but
              also intuitive, ethical, and accessible. Whether it's fine-tuning a
              large language model or optimizing a computer vision pipeline, I focus
              on delivering measurable impact.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring the latest research
              papers, contributing to open source, or mentoring aspiring engineers
              in the AI community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-dark-800 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}