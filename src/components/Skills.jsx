const skillCategories = [
  {
    title: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Hugging Face'],
  },
  {
    title: 'Deep Learning',
    skills: ['Transformers', 'CNNs', 'RNNs', 'GANs', 'Diffusion Models'],
  },
  {
    title: 'LLMs & NLP',
    skills: ['LangChain', 'RAG', 'Fine-tuning', 'Prompt Engineering', 'Vector DBs'],
  },
  {
    title: 'MLOps & Infra',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'MLflow', 'Kubeflow'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'SQL', 'C++', 'Rust'],
  },
  {
    title: 'Tools & Frameworks',
    skills: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Git', 'CI/CD'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-gradient">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}