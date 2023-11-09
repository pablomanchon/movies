import { useParams } from "react-router-dom";
import { useFetchGetById } from "../hooks/useMovies";
import { FaStar } from "react-icons/fa6";
import "../styles/MovieDetails.scss";
import { PropagateLoader } from "react-spinners";

export const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isError, error } = useFetchGetById(id || "");
  if (isLoading || movie?.id !== id)
    return (
      <PropagateLoader
        style={{ alignSelf: "center", marginTop: "1rem" }}
        color='cyan'
        size={20}
      />
    );
  if (isError) return <span>{error.message}</span>;
  return (
    <div className='movie-details'>
      <section className='primary-attributes'>
        <article>
          <img src={movie?.primaryImage?.url} alt={movie?.titleText.text} />
          <section className='secondary-attributes'>
            <p className='rating'>
              <span>
                <FaStar />
              </span>
              {movie?.ratingsSummary.aggregateRating}
            </p>
            <p className='year'>
              Year: <span>{movie?.releaseYear.year}</span>
            </p>
            <p className='language-title'>
              Language: <span>{movie?.plot?.language.id}</span>
            </p>
          </section>
        </article>
        <div>
          <h3 className='name'>{movie?.titleText.text}</h3>
          <p className='description'>{movie?.plot?.plotText.plainText}</p>
        </div>
      </section>

      <h3 className='casting-title'>Casting</h3>
      <section className='actors'>
        {movie?.actors.map((actor) => (
          <article key={actor.node.name.id} className='actor'>
            <img
              src={actor.node.name.primaryImage?.url}
              alt={actor.node.name.nameText.text}
            />
            <span>
              <p>{actor.node.characters[0].name}</p>
              <p>({actor.node.name.nameText.text})</p>
            </span>
          </article>
        ))}
      </section>
    </div>
  );
};
