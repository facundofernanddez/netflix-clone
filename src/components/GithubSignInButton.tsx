"use client";

import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function GithubSignInButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => signIn("github")}
    >
      <GithubIcon className="w-4 h-4" />
    </Button>
  );
}
