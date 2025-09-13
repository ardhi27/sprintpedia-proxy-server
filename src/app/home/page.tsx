import { InstagramDataInput } from "@/features/common/component/instagram-data-input";
import { InstagramInformation } from "@/features/common/component/instagram-information";
import { JsonInformation } from "@/features/common/component/json-information";
import LayoutPage from "@/features/common/component/layout";
import { Box, Stack, Text } from "@mantine/core";

const HomePage = async () => {
  return (
    <LayoutPage>
      <Stack className=" h-full items-center" gap={10}>
        <Text className="text-black font-bold text-lg">
          Instagram Spam Filter Check!(Based On Sprintpedia)
        </Text>
        <Stack
          className="w-2xl max-md:w-sm bg-white shadow-xl p-3 outline-1 outline-black rounded-md h-full "
          gap={10}
        >
          <Text className="text-black font-bold">Find Data Below!</Text>
          <InstagramDataInput />
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
