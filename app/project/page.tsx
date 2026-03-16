import ProjectGrid from "../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">

          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-500 mb-2 sm:mb-3 uppercase">
            Projects
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4">
            Some of my <span className="text-blue-600">recent work</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto px-2">
            A collection of projects where I&apos;ve worked with React, Next.js,
            APIs, and modern UI design to build clean and responsive web
            experiences.
          </p>

        </div>

        {/* Projects */}
        <ProjectGrid />

      </div>

    </main>
  );
}