interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
}

export default function MovieCard({
  movieId,
  overview,
  title,
  watchList,
  watchListId,
  youtubeUrl,
}: iAppProps) {
  return <h1>hola</h1>;
}
