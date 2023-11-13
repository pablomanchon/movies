import { Card } from "./Card";
import "../styles/Cards.scss";
import { DotLoader } from "react-spinners";
import { Movie } from "../types";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";

interface props {
  query: UseInfiniteQueryResult<
    InfiniteData<
      {
        movies: Movie[];
        nextPage: number;
      },
      unknown
    >,
    Error
  >;
}

export const Cards = ({ query }: props) => {
  const movies = query.data?.pages?.flatMap((page) => page.movies) ?? [];

  return (
    <section className='cards-movies'>
      <ul className='movies'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>
      <button className='btn-next' onClick={() => query.fetchNextPage()}>
        {query.isFetchingNextPage ? (
          <DotLoader color='black' size={20} />
        ) : (
          "Cargar mas resultados"
        )}
      </button>
    </section>
  );
};
