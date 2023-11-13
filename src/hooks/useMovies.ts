import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { api, searchApi } from "../api/movies";
import { Movie } from "../types";

async function fetchMovies({
  pageParam = 1,
  typeOfMovie,
}: {
  pageParam?: number;
  typeOfMovie: string | null;
}) {
  const { data } = await api.get("/titles", {
    params: {
      page: pageParam,
      titleType: typeOfMovie,
      list: typeOfMovie ? null : "most_pop_movies",
    },
  });
  const nextPage = parseInt(data.page) + 1;
  const movies: Movie[] = data.results;
  return { movies, nextPage };
}

export function useFetchMovies(typeOfMovie: string | null) {
  return useInfiniteQuery({
    queryKey: ["movies", typeOfMovie],
    queryFn: ({ pageParam = 1 }) => fetchMovies({ pageParam, typeOfMovie }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });
}

async function fetchGetById(id: string) {
  const res = await api.get(`/titles/${id}`);
  const movie: Movie = res.data.results;
  movie.actors = await fetchGetActorsFromMovie(id);
  return movie;
}

export function useFetchGetById(id: string) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => await fetchGetById(id),
  });
}

async function fetchGetActorsFromMovie(id: string) {
  const res = await api.get(`/titles/${id}`, {
    params: {
      info: "extendedCast",
    },
  });
  return res.data.results.cast.edges;
}

export function useFetchGetActorById(id: string) {
  return useQuery({
    queryKey: ["actor", id],
    queryFn: async () => await fetchGetActorById(id),
  });
}

async function fetchGetActorById(id: string) {
  const res = await api.get(`/actors/${id}`);
  console.log(res.data);
  return res.data;
}

export function useFetchSearch(searchParam: string) {
  return useInfiniteQuery({
    queryKey: ["movies", "search"],
    queryFn: ({ pageParam = 1 }) => fetchSearch({ pageParam, searchParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });
}

async function fetchSearch({
  pageParam = 1,
  searchParam,
}: {
  pageParam?: number;
  searchParam: string | null;
}) {
  const { data } = await searchApi.get(`/${searchParam}`, {
    params: {
      page: pageParam,
    },
  });
  const nextPage = parseInt(data.page) + 1;
  const movies: Movie[] = data.results;
  return { movies, nextPage };
}
