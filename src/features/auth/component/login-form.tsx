"use client";
import { Button, Group, Input, Stack } from "@mantine/core";
import { useState } from "react";
import useCsrfToken from "../hooks/useCsrfToken";
import AuthFormProps from "@/shared/types/form/auth-form";
import { useForm } from "react-hook-form";
import serverHttp from "@/shared/libs/server-http";
import axios from "axios";

const LoginForm = () => {
  const { csrfToken, isLoading: tokenLoading } = useCsrfToken();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { register, handleSubmit } = useForm<AuthFormProps>({
    defaultValues: {
      username: "agungardhiyanda",
      password: "Aldhie2703",
      csrf_token: csrfToken || "",
    },
  });

  const onSubmit = async (data: AuthFormProps) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("csrf_token", data.csrf_token);
      formData.append("username", data.username);
      formData.append("password", data.password);

      const res = await serverHttp.post("/api/auth/ardhi/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.href = "/home";
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data);
      } else if (err instanceof Error) {
        console.error("Error:", err.message);
      } else {
        console.error("Unexpected error:", err);
      }
      setMessage(String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack className="w-full">
        <Input hidden {...register("csrf_token")} />
        <Input hidden {...register("username")} />
        <Input hidden {...register("password")} />
        <Group className="w-full justify-center">
          <Button type="submit" disabled={loading || tokenLoading}>
            {loading || tokenLoading ? "Loading..." : "Continue"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export { LoginForm };
