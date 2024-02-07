import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
