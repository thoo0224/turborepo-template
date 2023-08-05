"use client";

import { signIn } from "next-auth/react";

import { Button } from "@cfxstore/ui";

export function LoginButton() {
  return <Button onClick={() => signIn("discord")}>Login</Button>;
}
