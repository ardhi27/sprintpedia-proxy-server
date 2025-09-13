import { FormInput } from "@/features/common/component/form-input";
import { InstagramInformation } from "@/features/common/component/instagram-information";
import { JsonInformation } from "@/features/common/component/json-information";
import LayoutPage from "@/features/common/component/layout";
import { Box, Stack, Text } from "@mantine/core";

import { cookies } from "next/headers";
const HomePage = async () => {
  const cookieStore = await cookies();
  const csrfCookie = cookieStore.get("csrf_cookie");
  console.log("Hasil get cookie:", csrfCookie);

  if (csrfCookie) {
    console.log("Cookie theme ada dengan nilai:", csrfCookie.value);
  } else {
    console.log("Cookie theme tidak ditemukan");
  }

  return (
    <LayoutPage>
      <Stack className="w-full h-full items-center" gap={10}>
        <Text className="text-black font-bold text-lg">
          Instagram Spam Filter Check!(Based On Sprintpedia)
        </Text>
        <Stack
          className="w-2xl bg-gray-500/40 p-3 outline-1 outline-black rounded-md h-full "
          gap={10}
        >
          <Text className="text-black font-bold">Find Data Below!</Text>
          <FormInput />
          <Box className="w-full h-[0.1rem] bg-black"></Box>
          <Text className="text-black">Hasil</Text>
          <InstagramInformation />
        </Stack>
        <JsonInformation />
      </Stack>
    </LayoutPage>
  );
};

export default HomePage;
