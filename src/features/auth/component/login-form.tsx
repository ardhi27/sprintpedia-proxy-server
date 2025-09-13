"use client";
import { Button, Group, Input, Stack } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios.get("/api/auth/ardhi/token", {
          withCredentials: true,
        });
        if (res.data.csrf_token) {
          setCsrfToken(res.data.csrf_token);
        }
      } catch (err: any) {
        console.error("Gagal fetch token:", err.message);
      }
    };
    fetchToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("csrf_token", csrfToken);
      formData.append("username", "agungardhiyanda");
      formData.append("password", "Aldhie2703");

      const res = await axios.post("/api/auth/ardhi/login", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Login berhasil");
      console.log("Login response:", res.data);
      window.location.href = "/home";
    } catch (err: any) {
      setMessage("Login gagal: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack className="w-full">
        <Input hidden value={csrfToken} name="csrf_token" readOnly />
        <Input hidden value="agungardhiyanda" name="username" readOnly />
        <Input hidden value="Aldhie2703" name="password" readOnly />
        <Group className="w-full justify-center">
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Continue"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export { LoginForm };
