"use client";

import { signOut } from "next-auth/react";

import { Button } from "@cfxstore/ui";

export function LogoutButton() {
  return <Button onClick={() => signOut()}>Logout</Button>;
}
