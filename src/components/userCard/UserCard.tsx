import { useNavigate } from "react-router-dom";
import { User } from "../../types";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  const navigate = useNavigate();

  function handleUser(id: string) {
    navigate(`/users/${id}`, { state: user });
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={() => handleUser(user.id)}>Edit</button>
    </div>
  );
}
