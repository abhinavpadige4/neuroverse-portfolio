const projects = [
  {
    title: 'NeuroChat',
    description:
      'A production-grade conversational AI assistant powered by a fine-tuned LLM with retrieval-augmented generation for accurate, context-aware responses.',
    tags: ['LLM', 'RAG', 'FastAPI', 'React'],
    link: '#',
  },
  {
    title: 'VisionForge',
    description:
      'Computer vision platform for real-time object detection and segmentation, optimized for edge deployment with TensorRT and ONNX.',
    tags: ['Computer Vision', 'PyTorch', 'TensorRT'],
    link: '#',
  },
  {
    title: 'ML Pipeline Orchestrator',
    description:
      'End-to-end MLOps platform for automating model training, evaluation, and deployment with experiment tracking and model registry.',
    tags: ['MLOps', 'Kubernetes', 'MLflow'],
    link: '#',
  },
  {
    title: 'Semantic Search Engine',
    description:
      'Vector-based search engine using embeddings and approximate nearest neighbor search for fast, semantically relevant results at scale.',
    tags: ['NLP', 'Vector DB', 'Embeddings'],
    link: '#',
  },
  {
    title: 'Anomaly Detection Suite',
    description:
      'Real-time anomaly detection system for time-series data using autoencoders and statistical methods, with alerting and dashboards.',
    tags: ['Deep Learning', 'Time Series', 'Grafana'],
    link: '#',
  },
  {
    title: 'Diffusion Art Studio',
    description:
      'Generative AI application for text-to-image synthesis using diffusion models, with fine-tuning capabilities and a sleek UI.',
    tags: ['Generative AI', 'Diffusion', 'Next.js'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}