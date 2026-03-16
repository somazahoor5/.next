
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const name = "Soma Zahoor";
  const role = "Frontend Developer";

  return (
    <main className="bg-[#fafafa] text-slate-900">

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-500 mb-4 uppercase">
              {role}
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">

              <span className="block text-sm md:text-base font-semibold text-blue-500 mb-2 tracking-[0.25em] uppercase">
                Hi, I'm
              </span>

              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {name}
                </span>

                <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-full opacity-80" />
              </span>

              <br />

              <span className="text-slate-800 text-2xl md:text-3xl mt-3 inline-block">
                I build modern web experiences.
              </span>

            </h1>

            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed max-w-lg">
              I'm {name}, a {role.toLowerCase()} who loves building clean, fast and
              responsive web applications using React, Next.js and modern UI tools.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["HTML","CSS","JavaScript","React","Next.js","Tailwind"].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <Link href="/project">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
                  View Projects
                </button>
              </Link>

              <Link href="/about">
                <button className="px-8 py-3 rounded-full font-semibold text-white 
                bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500
                hover:scale-105 hover:shadow-xl transition duration-300">
                  About Me
                </button>
              </Link>

            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative flex justify-center md:justify-end -mt-12">

            {/* Glow background */}
            <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>

            <div className="relative">

              <Image
                src="/images/profils.jpg"
                alt="Soma Zahoor"
                width={420}
                height={420}
                className="rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition duration-500"
              />

              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-30 animate-pulse"></div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        © 2026 Developer Portfolio. All rights reserved.
      </footer>

    </main>
  );
}

