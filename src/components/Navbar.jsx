import { useState } from "react";
import { profile } from "../data";

const links = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-beige/60 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl">{profile.name}</a>
        <ul className="hidden gap-8 text-sm text-mute md:flex">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="transition-colors hover:text-brown">{label}</a></li>
          ))}
        </ul>
        <button
          className="text-sm md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul className="space-y-4 border-t border-beige/60 px-6 py-5 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
