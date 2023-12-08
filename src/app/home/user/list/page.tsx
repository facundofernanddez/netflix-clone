import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import { getServerSession } from "next-auth";

const getData = async (userId: string) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          release: true,
          overview: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });

  return data;
};

export default async function WatchList() {
  const session = await getServerSession(authOptions);
  const data = await getData("abc");
  return <h1>Holaaaa</h1>;
}
