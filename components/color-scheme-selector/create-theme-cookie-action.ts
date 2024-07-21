"use server";
import type { MantineColorScheme } from "@mantine/core";
import { cookies } from "next/headers";

export const createThemeCookieAction = (theme: MantineColorScheme) => {
  cookies().set({ name: "theme", value: String(theme), httpOnly: true });
};
