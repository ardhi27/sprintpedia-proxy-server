import { useQuery } from "@tanstack/react-query";
import http from "@/shared/libs/http";

const useCsrfToken = () => {
  const getToken = async () => {
    const res = await http.get("/api/auth/ardhi/token");
    return res.data.csrf_token;
  };
  const {
    data: csrfToken,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["csrfToken"],
    queryFn: getToken,
  });
  return { csrfToken, isLoading, isError, error };
};

export default useCsrfToken;
