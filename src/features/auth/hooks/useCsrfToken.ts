import serverHttp from "@/shared/libs/server-http";
import { useQuery } from "@tanstack/react-query";

const useCsrfToken = () => {
  const getToken = async () => {
    const res = await serverHttp.get("/api/auth/ardhi/token");
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
