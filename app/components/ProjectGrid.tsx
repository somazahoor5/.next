import Image from "next/image";
import Link from "next/link";

const projects = [
  {
  id: 1,
  title: "Portfolio",
  tech: "Next.js, Tailwind CSS",
  image: "/images/po.jpg",
  desc:  "A responsive personal portfolio built with Next.js and Tailwind CSS to showcase my frontend development projects, skills, and experience.",
  liveUrl: "https://somawebdesign.netlify.app",
  viewCode: "https://github.com/somazahoor5/Djourney-webpage"
},
  {
  id: 2,
 title: "IndoFood",
  tech: "HTML, CSS, JavaScript",
  image: "/images/food1.jpg",
  desc: "IndoFood is a responsive website showcasing traditional Indonesian dishes. It features interactive menus, high-quality food images, and a clean, user-friendly layout.",
  liveUrl: "https://poetic-meringue-c048b4.netlify.app/",
  viewCode: "https://github.com/somazahoor5/soma-web"
},

  {
  id: 3,
  title: "ToDo-List",
  tech: "React, Redux, API",
  image: "/images/todo.jpg",
  desc: "My First Project is a dynamic web app built with React and Redux, fetching data from an external API. It demonstrates state management, API integration, and interactive UI components.",
  liveUrl: "https://spiffy-unicorn-367702.netlify.app/",
  viewCode: "https://github.com/somazahoor5/my-first-project"
}
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-gray-100">

            {/* Image Container */}
            <div className="relative w-full h-48 rounded-xl mb-4 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Info */}
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {p.tech}
            </span>
            <h3 className="text-xl font-bold mt-2">{p.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{p.desc}</p>
           <div className="flex gap-4 mt-6">
  
  <a
    href={p.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition duration-300 shadow-md"
  >
    Live Demo
  </a>

  <a
    href={p.viewCode}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition duration-300"
  >
    View Code
  </a>

</div>
          </div>
        ))}
      </div>
    </section>
  );
}