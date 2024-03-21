import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import BugReport from "./components/bugReport/BugReport";
import Navbar from "./components/navbar/Navbar";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Projects from "./pages//Projects/Projects";
import CreateBugReport from "./pages/CreateBugReport";
import CreateProject from "./pages/CreateProject";
import LogIn from "./pages/Login";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Register from "./pages/Register";
import { UserDetails } from "./pages/UserDetails/UserDetails";
import Users from "./pages/UserDetails/Users";
import BugReportDetails from "./components/bugReportDetails/BugReportDetails";
import BugReportUpdate from "./components/bugReportUpdate/BugReportUpdate";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/project-details/:id"
            element={
              <ProtectedRoute>
                <ProjectDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-project"
            element={
              <ProtectedRoute>
                <CreateProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-bug-report"
            element={
              <ProtectedRoute>
                <CreateBugReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bug-reports"
            element={
              <ProtectedRoute>
                <BugReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bug-reports/details/:bugReportId"
            element={
              <ProtectedRoute>
                <BugReportDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bug-reports/update/:bugReportId"
            element={
              <ProtectedRoute>
                <BugReportUpdate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
