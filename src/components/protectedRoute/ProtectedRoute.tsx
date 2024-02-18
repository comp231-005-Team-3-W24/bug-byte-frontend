import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  return user == null ? <Navigate to="/login" /> : children;
}
