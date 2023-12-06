import prisma from "@/utils/db";
import Image from "next/image";
import MovieCard from "./MovieCard";

const getData = async () => {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      videoSource: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
};

export default async function RecentlyAdded() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 mt-8 gap-6">
      {data.map((movie) => (
        <div
          key={movie.id}
          className="relative h-48"
        >
          <Image
            src={movie.imageString}
            alt="movie"
            className="rounded-sm absolute w-full h-full object-cover"
            width={500}
            height={400}
          />

          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              <Image
                src={movie.imageString}
                alt="movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              <MovieCard movieId={movie.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
