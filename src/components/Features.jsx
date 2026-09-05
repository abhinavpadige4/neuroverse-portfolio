export default function Features() {
  const features = [
    { title: "Machine Learning", desc: "Building predictive models with scikit-learn, TensorFlow, PyTorch." },
    { title: "Deep Learning", desc: "Designing neural networks for computer vision and NLP." },
    { title: "MLOps", desc: "Deploying models with Docker, Kubernetes, and CI/CD pipelines." },
    { title: "Data Engineering", desc: "ETL pipelines using Apache Spark, Airflow, and SQL." },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="glass p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}