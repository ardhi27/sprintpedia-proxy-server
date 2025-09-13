import { Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import companyLogo from "@/assets/logo-color.png";
import type { LayoutProps } from "@/shared/types/layout-types";
import sprintPediaLogo from "@/assets/logo-sprintpedia.png";

const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <Stack className={`w-screen min-h-screen bg-gray-200/50`}>
      <header className={`w-full h-[6rem] bg-gray-200/50 shadow-md`}>
        <Group className="w-full h-full py-2 px-5 justify-between" gap={5}>
          <Image src={companyLogo} className="w-20 h-11" alt="company-logo" />
          <Group>
            <Text className="font-bold text-black">Powered By </Text>
            <Image
              src={sprintPediaLogo}
              className="w-18 h-12"
              alt="sprintpedia-logo"
            />
          </Group>
          <Text className=" text-purple-600 font-bold">Experiment Website</Text>
        </Group>
      </header>
      <Stack className={`text-white`}>{children}</Stack>
    </Stack>
  );
};

export default LayoutPage;
