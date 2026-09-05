export default function Projects() {
  return (
    <section className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="max-w-5xl mx-auto px-6 grid gap-6">
        <div className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">LLM-Powered Code Assistant</h3>
          <p className="text-gray-400 mb-4">Fine-tuned Llama 2 7B on Python code datasets to generate context-aware code suggestions. Integrated with VS Code extension.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Python</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">PyTorch</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Hugging Face</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">VS Code API</span>
          </div>
          <a href="#" className="text-indigo-400 hover:text-indigo-300">GitHub →</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Real-time Video Analytics Platform</h3>
          <p className="text-gray-400 mb-4">Built end-to-end system for object tracking and anomaly detection in surveillance feeds using YOLOv8 and DeepSORT.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Python</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">OpenCV</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">YOLOv8</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">AWS Lambda</span>
          </div>
          <a href="#" className="text-indigo-400 hover:text-indigo-300">GitHub →</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Federated Learning for Healthcare</h3>
          <p className="text-gray-400 mb-4">Implemented privacy-preserving federated learning framework for hospital collaboration on medical image diagnosis without sharing raw data.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Python</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">TensorFlow Federated</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Docker</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Kubernetes</span>
          </div>
          <a href="#" className="text-indigo-400 hover:text-indigo-300">GitHub →</a>
        </div>
      </div>
    </section>
  )
}