export default function Skills() {
  return (
    <section className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Languages</h3>
          <p className="text-gray-400">Python, SQL, JavaScript, Bash</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
          <p className="text-gray-400">TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, React, Tailwind CSS</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Tools & Platforms</h3>
          <p className="text-gray-400">AWS, GCP, Docker, Kubernetes, Git, MLflow, Jupyter, Linux</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">AI/ML Specialties</h3>
          <p className="text-gray-400">Deep Learning, NLP, Computer Vision, MLOps, Model Deployment, Reinforcement Learning</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Concepts</h3>
          <p className="text-gray-400">Transformer Architectures, Attention Mechanisms, Optimization, Statistics, Experiment Design</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Soft Skills</h3>
          <p className="text-gray-400">Problem Solving, Communication, Team Leadership, Agile, Documentation</p>
        </div>
      </div>
    </section>
  )
}