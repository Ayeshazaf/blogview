import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (

  <footer className="bg-neutral-900 text-neutral-200 pt-10 pb-4 px-4">
    <div className="max-w-7xl mx-auto border-b border-neutral-700 pb-8 flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold mb-2 text-white">About BlogView</h3>
        <p className="text-sm text-neutral-400">
          Discover the latest insights and trends in technology, lifestyle, and more.
        </p>
      </div>
      <div className="flex-1 min-w-[140px]">
        <h3 className="font-semibold mb-2 text-white">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/categories" className="hover:underline">Categories</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      <div className="flex-1 min-w-[140px]">
        <h3 className="font-semibold mb-2 text-white">Categories</h3>
        <ul className="space-y-1 text-sm">
          <li>Technology</li>
          <li>Lifestyle</li>
          <li>Development</li>
          <li>Photography</li>
        </ul>
      </div>
      <div className="flex-1 min-w-[140px]">
        <h3 className="font-semibold mb-2 text-white">Follow Us</h3>
        <div className="flex space-x-4 mt-2">
          <Link href="#" aria-label="Twitter" className="hover:text-white">
            <FaTwitter size={18} />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-white">
            <FaFacebookF size={18} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-white">
            <FaInstagram size={18} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedinIn size={18} />
          </Link>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-neutral-400">
      © 2024 BlogView. All rights reserved.
    </div>
  </footer>
);
}