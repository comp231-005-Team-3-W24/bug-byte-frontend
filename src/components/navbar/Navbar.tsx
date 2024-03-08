import { Link } from "react-router-dom";
import logo from "../../assets/GrayLogo.png";
import { useAuth } from "../../hooks/useAuth";
import "./index.css";
import { RolesEnum } from "../../types";
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
              <>            </>
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
