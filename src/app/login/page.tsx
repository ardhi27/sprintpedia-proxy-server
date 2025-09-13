"use client";
import { LoginForm } from "@/features/auth/component/login-form";
import LayoutPage from "@/features/common/component/layout";
import { Stack, Group, Text, Button } from "@mantine/core";
const LoginPage = () => {
  return (
    <LayoutPage>
      <Stack className="w-full p-3 ">
        <Stack className="w-full items-center">
          <Stack className="bg-yellow-400/70 rounded-md p-5 w-xl max-md:max-w-sm h-full">
            <Group className="w-full">
              <Text className="text-black font-bold text-sm">
                Website ini digunakan untuk kepentingan submission saja!
              </Text>
            </Group>
          </Stack>
        </Stack>
        <Stack className="w-full items-center">
          <Stack className="bg-yellow-400/70 rounded-md p-5 w-xl max-md:max-w-sm h-full">
            <Group className="w-full">
              <Text className="text-black font-bold text-sm">
                Demi etik kerja yang profesional, endpoint yang digunakan
                berasal dari Sprintpedia, agar tidak melanggar SOP dalam
                mengakses endpoint yang bersifat privat dan terproteksi,
                silahkan gunakan akun dari Sprintpedia anda!
              </Text>
              <LoginForm />
            </Group>
          </Stack>
        </Stack>
      </Stack>
    </LayoutPage>
  );
};

export default LoginPage;
