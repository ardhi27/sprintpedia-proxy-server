"use client";
import { Stack, Text, Box } from "@mantine/core";
import { useResponseInstagramDataStore } from "../store/useInstagramResponse";

const JsonInformation = () => {
  const { data } = useResponseInstagramDataStore();

  if (!data.data) {
    return <></>;
  }

  return (
    <Stack className="w-2xl h-full bg-gray-500/40 p-3 outline-1 outline-black rounded-md ">
      <Text className="text-black font-bold">JSON Response</Text>
      <Box className="w-full overflow-auto text-black">
        <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </Stack>
  );
};

export { JsonInformation };
