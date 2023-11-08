import { Card } from "./Card";
import "../styles/Cards.scss";
import { useFetchMovies } from "../hooks/useMovies";
import { DotLoader } from "react-spinners";

export const Cards = () => {
  const { data, error, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useFetchMovies();
  const movies = data?.pages?.flatMap((page) => page.movies) ?? [];
  if (isLoading) return <span>Loading...</span>;
  else if (isError) return <span>{error.message}</span>;
  return (
    <section className='cards-movies'>
      <ul className='movies'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>
      <button className='btn-next' onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? (
          <DotLoader color='black' size={20} />
        ) : (
          "Cargar mas resultados"
        )}
      </button>
    </section>
  );
};
