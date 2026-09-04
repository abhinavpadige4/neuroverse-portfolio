export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm an AI engineer passionate about building systems that learn,
              reason, and adapt. With a strong foundation in machine learning,
              deep learning, and software engineering, I bridge the gap between
              cutting-edge research and real-world applications.
            </p>
            <p>
              My work spans natural language processing, computer vision, and
              large language models — from training custom models to deploying
              scalable inference pipelines. I care deeply about writing clean,
              maintainable code and shipping products that deliver real value.
            </p>
            <p>
              When I'm not building models, I'm exploring the latest in AI
              research, contributing to open source, and mentoring aspiring
              engineers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '30+', label: 'Projects Shipped' },
              { value: '15+', label: 'Models Deployed' },
              { value: '10+', label: 'Open Source Contributions' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}