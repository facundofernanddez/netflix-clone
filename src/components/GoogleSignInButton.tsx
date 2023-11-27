"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import googleIcon from "../../public/google.svg";

export default function GoogleSignInButton() {
  return (
    <Button
      variant="outline"
      size="icon"
    >
      <Image
        src={googleIcon}
        alt="Google icon"
        className="w-6 h-6"
      />
    </Button>
  );
}
