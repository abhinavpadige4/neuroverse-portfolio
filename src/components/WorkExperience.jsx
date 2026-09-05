export default function WorkExperience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-indigo-500">
          <h3 className="text-xl font-semibold mb-2">AI Engineer</h3>
          <p className="text-gray-400 mb-2">TechCorp Inc. | Jan 2022 - Present</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Led development of NLP pipeline for customer sentiment analysis, improving accuracy by 35% using BERT-based models.</li>
            <li>Designed and deployed scalable ML microservices on AWS SageMaker, reducing inference latency by 60%.</li>
            <li>Automated model retraining workflows with MLflow, cutting deployment cycle from weeks to hours.</li>
            <li>Mentored 5 junior engineers in ML best practices and code review standards.</li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-indigo-500">
          <h3 className="text-xl font-semibold mb-2">Machine Learning Intern</h3>
          <p className="text-gray-400 mb-2">DataSolutions Ltd. | Jun 2021 - Dec 2021</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Built computer vision model for defect detection in manufacturing, achieving 92% precision.</li>
            <li>Optimized data preprocessing pipelines using Pandas and Dask, reducing processing time by 40%.</li>
            <li>Collaborated with software team to integrate ML models into production REST API.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}