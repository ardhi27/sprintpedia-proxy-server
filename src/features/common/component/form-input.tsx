"use client";

import { Button, Group, Input } from "@mantine/core";
import Image from "next/image";
import axios from "axios";
import searchIcon from "@/assets/logo-search.svg";
import { useResponseInstagramDataStore } from "../store/useInstagramResponse";

const FormInput = () => {
  const { data, updateData } = useResponseInstagramDataStore();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("username");

    try {
      const res = await axios.get(`/api/instagramdata`, {
        params: { username: userName },
        withCredentials: true,
      });
      updateData(res.data);
      console.log("API result:", res.data);
    } catch (err: any) {
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group className="w-full h-full items-center flex-nowrap" gap={2}>
        <Input
          className="w-full rounded-lg"
          size="md"
          name="username"
          placeholder="Masukkan username"
        />
        <Button type="submit" className="bg-purple-500 hover:bg-purple-500">
          <Image src={searchIcon} alt="search-icon" className="text-white" />
        </Button>
      </Group>
    </form>
  );
};

export { FormInput };
