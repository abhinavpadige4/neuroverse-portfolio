export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-900" id="contact">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-gray-400">Let's build the future of AI together.</p>
          <a href="mailto:abhinav.padige@example.com" className="inline-block mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors font-medium">
            Email Me
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p>abhinav.padige@example.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p>San Francisco, CA</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p>linkedin.com/in/abhinavpadige</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p>github.com/abhinavpadige</p>
          </div>
        </div>
      </div>
    </section>
  )
}