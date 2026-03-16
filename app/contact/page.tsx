// app/contact/page.tsx
"use client"; // Client component required for JS validation
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error while typing
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {/* Success Message */}
        {submitted && <p className="text-green-500 text-center mt-4">Form submitted successfully!</p>}
      </form>
    </main>
  );
}