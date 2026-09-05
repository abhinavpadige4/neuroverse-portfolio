export default function WorkExperience() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">AI Engineer</h3>
          <p className="text-gray-400 mb-2">Tech Innovations Inc. | Jan 2022 - Present</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed and deployed 5+ production ML models serving 1M+ daily users</li>
            <li>Improved model accuracy by 23% through feature engineering and ensemble techniques</li>
            <li>Led migration of legacy ML pipelines to Kubernetes, reducing inference latency by 40%</li>
            <li>Architected MLOps platform using MLflow and Docker, cutting deployment time from weeks to hours</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Machine Learning Intern</h3>
          <p className="text-gray-400 mb-2">DataSolutions Corp. | Jun 2021 - Dec 2021</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Built NLP pipeline for sentiment analysis achieving 91% F1-score on customer feedback</li>
            <li>Automated data preprocessing workflows, saving 15+ hours/week in manual effort</li>
            <li>Collaborated with cross-functional team to integrate ML features into core product</li>
          </ul>
        </div>
      </div>
    </section>
  )
}