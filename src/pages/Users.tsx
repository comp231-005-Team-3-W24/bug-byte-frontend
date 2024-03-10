import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import UserCard from "../components/userCard/UserCard";
import { User } from "../types";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  async function getAllUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsers();
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : users.length ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <h1>No users registered</h1>
      )}
    </div>
  );
}
