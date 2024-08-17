import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full p-4 flex flex-col items-center gap-6 bg-slate-200 md:flex-row justify-center dark:bg-[#2d3b51] shadow-md z-50">
      <ul className="flex flex-col items-center md:flex-row gap-4 uppercase">
        {navItems.map((d) => (
          <Link href={`#${d.id}`} key={d.id}>
            <li className="hover:text-blue-400 cursor-pointer md:mb-0 dark:text-slate-300 dark:hover:text-blue-300">
              {d.name}
            </li>
          </Link>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;

const navItems = [
  { id: "overview", name: "Overview" },
  { id: "Authentication", name: "Authentication" },
  { id: "endpoints", name: "Endpoints" },
  { id: "tutorial", name: "Tutorial" },
  { id: "code-examples", name: "Code Examples" },
  { id: "pricing", name: "Pricing" },
];
