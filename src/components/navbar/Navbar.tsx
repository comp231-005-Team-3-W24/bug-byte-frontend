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
      <h1 className="bugbyte">Bug Byte</h1>
      <ul>
        {user ? (
          <>
            {user.role == RolesEnum.administrator && (
              <li className="format">
                <Link to="/users">Users</Link>
              </li>
            )}
            <li className="format2">
              <Link to="/">Projects</Link>
            </li>
            <li className="rightside">
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="removeborder">
              <button>
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li className="removeborder">
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
