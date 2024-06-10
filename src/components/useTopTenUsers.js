import { useQuery } from "@tanstack/react-query";
import APIClient from "./apiconnection";

function useTopTenUsers() {
  const apiClient = new APIClient("ttt/top");
  return useQuery({
    queryKey: ["players"],
    queryFn: () => apiClient.getTopTen(),
  });
}
export default useTopTenUsers;
