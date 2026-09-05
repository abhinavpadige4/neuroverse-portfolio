export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Abhinav Padige</h1>
      <p className="text-xl text-gray-400 mb-6">AI Engineer</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">Download Resume</a>
        <a href="#contact" className="px-6 py-3 border border-indigo-600 hover:bg-indigo-600 rounded-lg transition">Contact Me</a>
      </div>
    </section>
  )
}