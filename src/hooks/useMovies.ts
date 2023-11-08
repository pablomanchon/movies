import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../api/movies";
import { Movie } from "../types";

async function fetchMovies({ pageParam = 1 }: { pageParam?: number }) {
  const { data } = await api.get("/titles", {
    params: { page: pageParam },
  });
  const nextPage = parseInt(data.page) + 1;
  const movies: Movie[] = data.results;
  return { movies, nextPage };
}

export function useFetchMovies() {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });
}
