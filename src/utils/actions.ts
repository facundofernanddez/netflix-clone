"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { authOptions } from "./auth";
import { getServerSession } from "next-auth/next";

export const addToWatchList = async (formData: FormData) => {
  "use server";

  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname") as string;
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
};

export const deleteFromWatchList = async (formData: FormData) => {
  "use server";

  const watchlistId = formData.get("watchlistId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchlistId,
    },
  });

  revalidatePath(pathname);
};
