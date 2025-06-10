"use client";

import clsx from "clsx";
import Link from "next/link";

const pages = [
  { href: "/get-started", label: "Get Started" },
  { href: "/about-personal", label: "About Personal" },
];

export default function HomeMenu() {
  return (
    <section className="max-w-3xl mx-auto p-6 flex flex-col items-center">
      <h2 className="font-inter font-normal text-[16px] leading-[24px] text-black tracking-[3px] mb-4 w-full text-left">
        WELCOME
      </h2>

      <h1 className="font-mono font-normal text-[48px] leading-[48px] text-black mb-8 text-center tracking-[0%]">
        Hey you! <b>Ready to explore?</b>
      </h1>

      <nav className="flex flex-col space-y-4 w-auto mx-auto">
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="bg-black text-white rounded-sm flex items-center gap-2 w-full justify-center py-4 px-8 hover:bg-gray-800 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            {label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
