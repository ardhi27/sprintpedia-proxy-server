"use client";
import { Button, Group, Input, Stack, Text } from "@mantine/core";
import Image from "next/image";
import axios from "axios";
import searchIcon from "@/assets/logo-search.svg";
import { useResponseInstagramDataStore } from "../store/useInstagramResponse";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { InstagramUsername } from "@/shared/types/form/instagram-username-form";

const InstagramDataInput = () => {
  const { data, updateData } = useResponseInstagramDataStore();
  const [loading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<InstagramUsername>();

  const onSubmit = async (data: InstagramUsername) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/instagramdata`, {
        params: { username: data.username },
        withCredentials: true,
      });
      updateData(res.data);
      console.log("API result:", res.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data);
      } else if (err instanceof Error) {
        console.error("Error:", err.message);
      } else {
        console.error("Unexpected error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack className="w-full max-md:w-lg">
        <Group className="max-md:w-sm h-full items-center flex-nowrap" gap={2}>
          <Input
            className="w-full rounded-lg"
            size="md"
            {...register("username")}
            placeholder="Masukkan username"
          />
          <Button type="submit" className="bg-purple-500 hover:bg-purple-500">
            <Image src={searchIcon} alt="search-icon" className="text-white" />
          </Button>
        </Group>
        {loading ? (
          <Text className="text-black font-bold">Sedang Mengambil Data!</Text>
        ) : (
          <></>
        )}
      </Stack>
    </form>
  );
};

export { InstagramDataInput };
