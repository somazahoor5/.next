// app/contact/page.tsx
export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#fafafa] text-slate-900 px-6 pt-40">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Yahan apna email, social links (LinkedIn, GitHub), ya contact form waghera rakh sakte hain.
        </p>
  
        <div className="space-y-2 text-gray-700">
          <p>Email: <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></p>
          <p>GitHub: <a href="https://github.com/yourname" className="text-blue-600" target="_blank">github.com/yourname</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourname" className="text-blue-600" target="_blank">linkedin.com/in/yourname</a></p>
        </div>
      </main>
    );
  }