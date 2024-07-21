"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      size="md"
      color="orange.5"
      variant="subtle"
      onClick={() => router.back()}
    >
      Take me back to home page
    </Button>
  );
};
