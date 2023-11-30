import Navbar from "@/components/Navbar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl max-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
