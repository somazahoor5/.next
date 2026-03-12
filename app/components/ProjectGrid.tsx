import Image from "next/image";

const projects = [
  { 
    id: 1, 
    title: "project", 
    tech: "HTML & CSS", 
    image: "/images/w.jpg", 
    desc: "I am Soma, a frontend developer focused on creating clean, responsive, and user-friendly web interfaces." 
  },
  { 
    id: 2, 
    title: "Website", 
    tech: "Next.js & CSS",
    image: "/images/c.jpg", 
    desc: "I work with React, Next.js, and Tailwind CSS to build modern web applications that look great on any device." 
  },
  { 
    id: 3, 
    title: "Redux API", 
    tech: "API & Redux", 
    image: "/images/r.jpg", 
    desc: "I enjoy turning ideas into real products, from UI design to fully functional web apps." 
  },
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
            
          </div>
        ))}
      </div>
    </section>
  );
}