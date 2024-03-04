import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import UserCard from "../components/userCard/UserCard";
import { User } from "../types";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <>
        {users.length ? (
          users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <h1>No users registered</h1>
        )}
      </>
    </div>
  );
}
