export default function Education() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">M.S. in Computer Science (AI Specialization)</h3>
          <p className="text-gray-400 mb-2">Stanford University | 2020 - 2022</p>
          <p className="text-gray-300">Thesis: "Efficient Transformer Architectures for Edge Deployment"
          GPA: 3.9/4.0 | Relevant Coursework: Deep Learning, Probabilistic Graphical Models, Optimization</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h3>
          <p className="text-gray-400 mb-2">Indian Institute of Technology Delhi | 2016 - 2020</p>
          <p className="text-gray-300">GPA: 8.7/10 | Honors: Dean's List (6 semesters), Undergraduate Research in Computer Vision</p>
        </div>
      </div>
    </section>
  )
}