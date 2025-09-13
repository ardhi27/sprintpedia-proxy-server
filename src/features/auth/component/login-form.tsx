"use client";
import { Button, Group, Input, Stack, Text } from "@mantine/core";
import { useState } from "react";
import useCsrfToken from "../hooks/useCsrfToken";
import http from "@/shared/libs/http";
import AuthFormProps from "@/shared/types/form/auth-form";
import { useForm } from "react-hook-form";
import serverHttp from "@/shared/libs/server-http";

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

      //fetch data to api
      const res = await serverHttp.post("/api/auth/ardhi/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.href = "/home";
    } catch (error: any) {
      setMessage(error);
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
