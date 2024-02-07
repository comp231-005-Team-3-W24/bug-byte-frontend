import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>Bug Byte</li>
        <Link to="/login">Login</Link>
        <button></button>
      </ul>
    </nav>
  );
}
