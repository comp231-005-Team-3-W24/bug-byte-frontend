import { Link } from "react-router-dom";
import logo from "../../assets/GrayLogo.png";
import { useAuth } from "../../hooks/useAuth";
import { RolesEnum } from "../../types";
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
            {user.role == RolesEnum.administrator && (
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
              <button>
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/register">Register</Link>
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
