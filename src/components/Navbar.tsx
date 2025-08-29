import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <nav className="navbar" data-theme={theme}>
      <div className="nav-container">
        <h1 className="nav-title">Application - To Do</h1>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Todos
          </Link>
          <Link
            to="/settings"
            className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;