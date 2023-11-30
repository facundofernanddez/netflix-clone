"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import googleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => signIn("google")}
    >
      <Image
        src={googleIcon}
        alt="Google icon"
        className="w-6 h-6"
      />
    </Button>
  );
}
