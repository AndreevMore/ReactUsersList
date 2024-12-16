import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UserDetails from "../components/UserDetails";
import GoBackButton from "./../components/GoBackButton";
import httpClient from '../services/httpService';
import { User } from "../types/user";

export const fetchUserById = async (id: string): Promise<User> => {
  try {
  const { data } = await httpClient.get(`/users/${id}`);
    return data;
  } catch (err) {
    console.error("Failed to fetch user", err);
    throw err;
  }
};


const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Loading user details...</div>;
  }

  return user ? (
    <div className="user-page">
      <h1>User Details</h1>

      <UserDetails user={user} extendedInfo={true} />
      <GoBackButton />
    </div>
  ) : (
    <div>User not found.</div>
  );
};

export default UserDetailsPage;
