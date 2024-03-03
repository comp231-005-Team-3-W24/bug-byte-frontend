import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";
import "./index.css";
export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div>
        <img src={logo} />
      </div>
      <h1>Bug Byte</h1>
      <ul>
        {user ? (
          <>
            {user.role == "admin" && (
              <li>
                <Link to="/users">Users</Link>
              </li>
            )}
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
              <>            </>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
