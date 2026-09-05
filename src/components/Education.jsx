export default function Education() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">M.S. in Computer Science (AI Specialization)</h3>
          <p className="text-gray-400 mb-2">Stanford University | 2020 - 2022</p>
          <p className="text-gray-300">Thesis: "Efficient Transformer Architectures for Low-Resource NLP"
          GPA: 3.9/4.0 | Relevant Coursework: Deep Learning, Probabilistic Graphical Models, Optimization Techniques</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science and Engineering</h3>
          <p className="text-gray-400 mb-2">Indian Institute of Technology Delhi | 2016 - 2020</p>
          <p className="text-gray-300">GPA: 8.7/10 | Honors: Dean's List (6 semesters), Published 2 papers in IEEE conferences</p>
        </div>
      </div>
    </section>
  )
}