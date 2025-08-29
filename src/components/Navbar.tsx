import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <ul className="flex gap-6 justify-center font-semibold">
        <li>
          <Link
            to="/todos"
            className={`px-3 py-2 rounded-lg transition ${
              location.pathname === "/todos" ? "bg-white text-blue-600 shadow" : "hover:bg-blue-500"
            }`}
          >
            Todos
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className={`px-3 py-2 rounded-lg transition ${
              location.pathname === "/settings" ? "bg-white text-blue-600 shadow" : "hover:bg-blue-500"
            }`}
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
