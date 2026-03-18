import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const name = "Soma Zahoor";
  const role = "Frontend Developer";

  return (
    <main className="bg-[#fafafa] text-slate-900">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-500 mb-4 uppercase">
              {role}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-5 md:mb-6">
              
              <span className="block text-xs sm:text-sm md:text-base font-semibold text-blue-500 mb-2 tracking-[0.25em] uppercase">
                Hi, I'm
              </span>

              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {name}
                </span>

                <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-full opacity-80" />
              </span>

              <br />

              <span className="text-slate-800 text-lg sm:text-xl md:text-3xl mt-3 inline-block">
                I build modern web experiences.
              </span>

            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
              I'm {name}, a {role.toLowerCase()} who loves building clean, fast and
              responsive web applications using React, Next.js and modern UI tools.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-8">
              {["HTML","CSS","JavaScript","React","Next.js","Tailwind"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start">

              <Link href="/project">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
                  View Projects
                </button>
              </Link>

              <Link href="/about">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold text-white 
                bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500
                hover:scale-105 hover:shadow-xl transition duration-300">
                  About Me
                </button>
              </Link>

            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative flex justify-center md:justify-end mt-10 md:-mt-12">

            {/* Glow */}
            <div className="absolute w-[250px] sm:w-[320px] md:w-[420px] h-[250px] sm:h-[320px] md:h-[420px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>

            <div className="relative">
              <Image
                src="/images/profils.jpg"
                alt="Soma Zahoor"
                width={420}
                height={420}
                className="w-[220px] sm:w-[300px] md:w-[420px] h-auto rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition duration-500"
              />

              {/* Ring */}
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