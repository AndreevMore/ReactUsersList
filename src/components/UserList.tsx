import { User } from "../types/user";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  isLoading: boolean;
}

const UserList: React.FC<UserListProps> = ({ users, isLoading }) => {
  if (isLoading) {
    return <div className="info">Loading...</div>;
  }

  if (users.length === 0) {
    return <div className="info">No users found.</div>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
