export default function Projects() {
  return (
    <section className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-border">
          <h3 className="text-xl font-semibold mb-3">Multimodal AI Assistant</h3>
          <p className="text-gray-400 mb-3">Built a vision-language model combining CLIP and Llama 2 for image understanding and conversational AI. Deployed on AWS SageMaker with auto-scaling endpoints.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Python</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">PyTorch</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">AWS</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">CLIP</span>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-border">
          <h3 className="text-xl font-semibold mb-3">Real-time Fraud Detection System</h3>
          <p className="text-gray-400 mb-3">Streaming ML pipeline using Apache Kafka and TensorFlow Serving to detect fraudulent transactions with <200ms latency. Reduced false positives by 35%.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">TensorFlow</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Kafka</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Docker</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">MLflow</span>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-border">
          <h3 className="text-xl font-semibold mb-3">Medical Image Segmentation Tool</h3>
          <p className="text-gray-400 mb-3">U-Net based model for tumor segmentation in MRI scans achieving 0.89 Dice coefficient. Integrated into hospital PACS system for radiologist assistance.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">PyTorch</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">OpenCV</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">Docker</span>
            <span className="bg-indigo-600 text-xs px-2 py-1 rounded">HIPAA</span>
          </div>
        </div>
      </div>
    </section>
  )
}