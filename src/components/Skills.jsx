export default function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Languages</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Python</li>
            <li>JavaScript/TypeScript</li>
            <li>SQL</li>
            <li>Bash</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Frameworks & Libraries</h3>
          <ul className="space-y-2 text-gray-300">
            <li>PyTorch</li>
            <li>TensorFlow/Keras</li>
            <li>Scikit-learn</li>
            <li>Hugging Face Transformers</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Tools & Platforms</h3>
          <ul className="space-y-2 text-gray-300">
            <li>AWS (SageMaker, EC2, S3)</li>
            <li>GCP (AI Platform, BigQuery)</li>
            <li>Docker & Kubernetes</li>
            <li>MLflow & Weights & Biases</li>
            <li>Git & GitHub</li>
            <li>Linux/Unix</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">AI/ML Specialties</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Deep Learning</li>
            <li>NLP & LLMs</li>
            <li>Computer Vision</li>
            <li>Reinforcement Learning</li>
            <li>MLOps</li>
            <li>Model Optimization</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Data & Analytics</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Pandas & NumPy</li>
            <li>Spark</li>
            <li>Data Visualization (Matplotlib, Seaborn, Plotly)</li>
            <li>ETL Pipelines</li>
            <li>Statistical Analysis</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Soft Skills</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Problem Solving</li>
            <li>Technical Communication</li>
            <li>Cross-functional Collaboration</li>
            <li>Agile Methodologies</li>
            <li>Mentorship</li>
          </ul>
        </div>
      </div>
    </section>
  )
}