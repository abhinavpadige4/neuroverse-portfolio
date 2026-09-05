export default function Architecture() {
  return (
    <section className="py-16 bg-gray-900/20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">System Architecture</h2>
        <div className="glass p-8">
          <p className="text-gray-300">
            A high‑level overview of the AI pipeline: data ingestion → preprocessing → model training → evaluation → deployment → monitoring.
          </p>
          {/* Simple diagram placeholder */}
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-primary-500/20 rounded flex items-center justify-center">1</div>
            <div className="w-16 h-16 bg-primary-500/20 rounded flex items-center justify-center">2</div>
            <div className="w-16 h-16 bg-primary-500/20 rounded flex items-center justify-center">3</div>
            <div className="w-16 h-16 bg-primary-500/20 rounded flex items-center justify-center">4</div>
          </div>
        </div>
      </div>
    </section>
  );
}