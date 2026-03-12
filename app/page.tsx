import ProjectGrid from './components/ProjectGrid';

export default function Home() {
  const name = "Soma Zahoor";
  const role = "Frontend Developer";
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"];
  return (
    <main className="bg-[#fafafa] text-slate-900">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I’m <span className="text-blue-600">{name}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
  I’m soma zahoor <span className="font-medium text-slate-800">{role}</span> — I build clean, fast, and responsive web apps using React and Next.js.
</p>          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition shadow-lg">
              Start a Project
            </button>
            <button className="bg-white border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition">
              Resume Download
            </button>
          </div>
        </div>
      </section>

      <ProjectGrid />

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        © 2026 Developer Portfolio. All rights reserved.
      </footer>
    </main>
  );
}