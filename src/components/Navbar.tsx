import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <h1>Bug Byte</h1>
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/register">Register</Link></button>
      </ul>
    </nav>
  );
}
