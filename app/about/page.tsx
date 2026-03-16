// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const skills = ["HTML","CSS","JavaScript","React","Next.js","Tailwind"];

  const journey = [
    { title: "Started Learning Web Development", desc: "Learned HTML & CSS basics.", color: "bg-blue-400" },
    { title: "JavaScript & Interactive UI", desc: "Built interactive features with JS.", color: "bg-purple-400" },
    { title: "React & Next.js Development", desc: "Building modern web applications.", color: "bg-pink-400" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 px-6 pt-36 pb-20">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          I'm a frontend developer who loves creating modern, responsive, and stylish web applications.
        </p>
      </div>

      {/* Profile + Intro */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">

        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition transform">
          <h2 className="text-3xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi! I'm <strong>Soma Zahoor</strong>, a frontend developer focused on building modern, responsive, and user-friendly web experiences.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I work with technologies like React, Next.js, and Tailwind CSS to craft clean and efficient web applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I enjoy learning new tools, solving problems, and creating projects that make an impact.
          </p>
        </div>

        {/* Profile Image with glow */}
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
          <Image
            src="/images/profils.jpg"
            alt="Soma Zahoor"
            width={320}
            height={320}
            className="rounded-2xl shadow-2xl object-cover border-4 border-white"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full text-sm font-medium text-white
                         bg-gradient-to-r from-blue-500 to-purple-500
                         shadow-md hover:shadow-xl hover:-translate-y-1
                         transition transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">My Journey</h2>
        <div className="relative border-l-2 border-gray-300 pl-6 space-y-10">
          {journey.map((item, idx) => (
            <div key={idx} className="relative group hover:scale-105 transition transform">
              <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-2 border-white ${item.color} group-hover:shadow-lg transition`}></div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Stats */}
      <div className="max-w-6xl mx-auto mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-3xl font-bold text-blue-500">10+</h3>
          <p className="text-gray-700">Projects</p>
        </div>
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-3xl font-bold text-blue-500">6+</h3>
          <p className="text-gray-700">Technologies</p>
        </div>
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-3xl font-bold text-blue-500">1+</h3>
          <p className="text-gray-700">Years Learning</p>
        </div>
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-3xl font-bold text-blue-500">100%</h3>
          <p className="text-gray-700">Passion</p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
        <p className="text-gray-600 mb-6">Have a project idea or want to collaborate? Feel free to reach out!</p>
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Contact Me
          </button>
        </Link>
      </div>

    </main>
  );
}