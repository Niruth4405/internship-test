"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-slate-400 cursor-pointer rounded-full p-1"
    >
      <FaMoon className="text-white" size={18} />
      <div className='absolute bg-white dark:bg-medium'>

      </div>
    </div>
  );
};
export default ThemeToggle;
