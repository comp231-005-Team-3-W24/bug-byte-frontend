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
              <button>
              <Link to="/">Projects</Link>
              </button> 
              </li>
              <li>
              <button>        
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
              </button>
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
