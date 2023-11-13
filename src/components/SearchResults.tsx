import { PropagateLoader } from "react-spinners";
import { useFetchSearch } from "../hooks/useMovies";
import { Cards } from "./Cards";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const SearchResults = () => {
  const { searchParam } = useParams();
  const query = useFetchSearch(searchParam ? searchParam : "");

  useEffect(() => {
    query.refetch();
  }, [query, searchParam]);

  if (query.isLoading)
    return (
      <PropagateLoader
        style={{ alignSelf: "center", marginTop: "1rem" }}
        color='cyan'
        size={20}
      />
    );
  else if (query.isError) return <span>{query.error.message}</span>;
  return <Cards query={query} />;
};
