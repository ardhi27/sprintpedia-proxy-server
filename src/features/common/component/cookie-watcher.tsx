"use client";
import useCsrfToken from "@/features/auth/hooks/useCsrfToken";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface CookieWatcherProps {
  children: React.ReactNode;
}
const CookieWatcher = ({ children }: CookieWatcherProps) => {
  const router = useRouter();
  const { csrfToken, isLoading, isError } = useCsrfToken();
  useEffect(() => {
    if (!isLoading) {
      if (isError || !csrfToken) {
        router.push("/");
      }
    }
  }, [csrfToken, isLoading, isError, router]);
  return <>{children}</>;
};

export default CookieWatcher;
