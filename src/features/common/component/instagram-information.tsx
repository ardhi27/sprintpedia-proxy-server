"use client";
import { Box, SimpleGrid, Stack, Text } from "@mantine/core";
import { useResponseInstagramDataStore } from "../store/useInstagramResponse";

const InstagramInformation = () => {
  const { data } = useResponseInstagramDataStore();

  if (!data.data) {
    return (
      <Stack>
        <Text className="font-bold text-black"></Text>
      </Stack>
    );
  }

  const profile = data.data;
  return (
    <Stack className="p-3">
      <SimpleGrid cols={2} className="text-black">
        <Text>Nama</Text>
        <Text>{profile.full_name}</Text>
        <Text>Followers </Text>
        <Text>{profile.follower_count}</Text>
        <Text>Following</Text>
        <Text>{profile.following_count}</Text>
        <Text>Status Private</Text>
        <Box
          className={`${
            profile.is_private ? "bg-red-500/50" : "bg-green-500/50"
          } w-[8rem] p-2 rounded-lg`}
        >
          {profile.is_private ? (
            <Text className="text-red-700 font-bold text-xs">
              Private is on
            </Text>
          ) : (
            <Text className="text-green-700 font-bold text-xs">
              Private is off
            </Text>
          )}
        </Box>
        <Text>Spam Filter</Text>
        <Box
          className={`${
            profile.spam_follower_setting_enabled
              ? "bg-red-500/50"
              : "bg-green-500/50"
          } w-[8rem] p-2 rounded-lg`}
        >
          {profile.spam_follower_setting_enabled ? (
            <Text className="text-red-700 font-bold text-xs">
              Spam filter is on
            </Text>
          ) : (
            <Text className="text-green-700 font-bold text-xs">
              Spam filter is off
            </Text>
          )}
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export { InstagramInformation };
