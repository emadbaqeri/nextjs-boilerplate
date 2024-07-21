"use client";

import { ActionIcon, rem, useMantineColorScheme } from "@mantine/core";
import { Menu, MenuDropdown, MenuItem, MenuTarget } from "@mantine/core";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTransition } from "react";
import { match } from "ts-pattern";

import { createThemeCookieAction } from "./create-theme-cookie-action";

const renderColorschemeIcon = () => {
  const { colorScheme } = useMantineColorScheme();
  return match(colorScheme)
    .with("light", () => <IconSun />)
    .with("dark", () => <IconMoon />)
    .with("auto", () => <IconDeviceDesktop />)
    .exhaustive();
};

export function ColorSchemeSelector() {
  const colorSchemeIcon = renderColorschemeIcon();
  const [, startTransition] = useTransition();
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Menu trigger="hover" openDelay={10} closeDelay={400}>
      <MenuTarget>
        <ActionIcon
          size="lg"
          radius="md"
          color="gray"
          style={{ width: rem(24), height: rem(24) }}
        >
          {colorSchemeIcon}
        </ActionIcon>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem
          onClick={() => {
            setColorScheme("light");
            startTransition(() => createThemeCookieAction("light"));
          }}
          leftSection={<IconSun style={{ width: rem(16), height: rem(16) }} />}
        >
          Light
        </MenuItem>
        <MenuItem
          onClick={() => {
            setColorScheme("dark");
            startTransition(() => createThemeCookieAction("dark"));
          }}
          leftSection={<IconMoon style={{ width: rem(16), height: rem(16) }} />}
        >
          Dark
        </MenuItem>
        <MenuItem
          onClick={() => {
            setColorScheme("auto");
            startTransition(() => createThemeCookieAction("auto"));
          }}
          leftSection={
            <IconDeviceDesktop style={{ width: rem(16), height: rem(16) }} />
          }
        >
          System
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
