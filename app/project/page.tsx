// app/projects/page.tsx
export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-[#fafafa] text-slate-900 px-6 pt-40">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Yahan aap apne major projects, tech stack, links, screenshots waghera show kar sakte hain.
        </p>
  
        {/* Agar aap ProjectGrid ko yahan use karna chahein */}
        {/* <ProjectGrid /> */}
      </main>
    );
  }