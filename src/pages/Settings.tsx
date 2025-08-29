import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center">
      <h1 className="text-2xl font-bold mb-6">⚙️ Paramètres</h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition"
      >
        Passer en mode {theme === "light" ? "🌙 sombre" : "☀️ clair"}
      </button>
    </div>
  );
}
