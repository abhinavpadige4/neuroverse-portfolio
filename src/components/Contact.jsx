export default function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6">I'm always open to discussing AI opportunities, collaborations, or just chatting about the latest in machine learning.</p>
          <div className="space-y-4">
            <p className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex-shrink-0">📧</span>
              <span>abhinav.padige@email.com</span>
            </p>
            <p className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex-shrink-0">📍</span>
              <span>San Francisco, CA</span>
            </p>
            <p className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex-shrink-0">🔗</span>
              <span>linkedin.com/in/abhinavpadige</span>
            </p>
            <p className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex-shrink-0">🐙</span>
              <span>github.com/abhinavpadige</span>
            </p>
          </div>
        </div>
        <form className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
            <textarea
              rows="4"
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}