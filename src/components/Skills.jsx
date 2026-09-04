const skills = [
  { name: 'Python', level: 95 },
  { name: 'PyTorch', level: 90 },
  { name: 'TensorFlow', level: 85 },
  { name: 'Machine Learning', level: 92 },
  { name: 'Deep Learning', level: 90 },
  { name: 'NLP / LLMs', level: 88 },
  { name: 'Computer Vision', level: 82 },
  { name: 'SQL & Data Engineering', level: 80 },
  { name: 'React & Frontend', level: 75 },
  { name: 'Docker & Kubernetes', level: 78 },
  { name: 'MLOps & Deployment', level: 85 },
  { name: 'Cloud (AWS/GCP)', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            The technologies and tools I use to build intelligent, scalable AI systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-xl bg-dark-700 border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}