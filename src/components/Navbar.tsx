"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-30 bg-black/95 backdrop-blur-lg shadow-lg border-b border-primary/30 rounded-b-[2.5rem]">
      <div className="flex items-center justify-between w-full px-16 py-8 rounded-[2.5rem]">
        <Link href="/" className="flex items-center">
          <span className="self-center text-3xl font-extrabold tracking-wide whitespace-nowrap text-primary">Aran Gupta</span>
        </Link>
        <ul className="flex flex-row gap-14 items-center justify-center mx-auto font-bold text-xl">
          <li>
            <Link href="/" className="px-7 py-4 rounded-2xl bg-transparent text-white shadow hover:bg-primary/10 transition-all duration-200">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="px-7 py-4 rounded-2xl bg-transparent text-white shadow hover:bg-primary/10 transition-all duration-200">Projects</Link>
          </li>
          <li>
            <Link href="/about" className="px-7 py-4 rounded-2xl bg-transparent text-white shadow hover:bg-primary/10 transition-all duration-200">About Me</Link>
          </li>
          <li>
            <Link href="/resume" className="px-7 py-4 rounded-2xl bg-transparent text-white shadow hover:bg-primary/10 transition-all duration-200">Resume</Link>
          </li>
          <li>
            <Link href="/contact" className="px-7 py-4 rounded-2xl bg-transparent text-white shadow hover:bg-primary/10 transition-all duration-200">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 