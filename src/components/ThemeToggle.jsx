import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2.5 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-md hover:shadow-lg transition"
      aria-label="Toggle theme"
    >
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
    </button>
  );
}