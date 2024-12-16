import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: users = [], isLoading } = useUsers();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1>Users List</h1>
      <SearchBar onSearch={setSearchQuery} />
      <UserList users={filteredUsers} isLoading={isLoading} />
    </>
  );
};

export default Home;
