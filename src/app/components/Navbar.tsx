"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 w-full sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="font-bold text-lg text-gray-900">
          BlogView
        </Link>
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
        </button>
        <ul
          className={`${
            menuOpen
              ? "block absolute top-14 right-4 bg-white shadow-md rounded-md w-40 py-2"
              : "hidden"
          } md:flex md:static md:bg-transparent md:shadow-none md:rounded-none md:w-auto md:py-0 md:space-x-8 space-y-2 md:space-y-0 transition-all`}
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 text-gray-900 font-medium md:p-0 md:text-gray-900 md:font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="block px-4 py-2 text-gray-500 hover:text-gray-900 md:p-0"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-500 hover:text-gray-900 md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-500 hover:text-gray-900 md:p-0"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

