import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import httpClient from "../services/httpService";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const { data } = await httpClient.get("/users");
    return data;
  } catch (err) {
    console.error("Failed to fetch users", err);
    throw err;
  }
};

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
