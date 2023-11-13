import { PropagateLoader } from "react-spinners";
import { useFetchMovies } from "../hooks/useMovies";
import { Cards } from "./Cards";

export const All = () => {
  const query = useFetchMovies(null);
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
