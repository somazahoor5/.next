import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm py-4 px-8 flex justify-between items-center z-50">
      <h1 className="font-bold text-xl text-blue-600">DevPortfolio</h1>
      <ul className="flex gap-8">
        <li>
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/project" className="hover:text-blue-600 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}