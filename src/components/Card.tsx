import { useState } from "react";
import { Movie } from "../types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

interface props {
  movie: Movie;
}

export const Card = ({ movie }: props) => {
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate(`/movie/${movie.id}`)}>
      <>
        <img
          onLoad={() => setIsLoad(true)}
          style={{ display: !isLoad ? "none" : "" }}
          src={movie.primaryImage?.url}
          alt={movie.originalTitleText.text}
          loading='eager'
        />
        {!isLoad && (
          <Skeleton
            width={"10rem"}
            height={"17rem"}
            style={{ zIndex: 0 }}
            baseColor='gray'
          />
        )}
        <h3>{movie.originalTitleText.text}</h3>
      </>
    </div>
  );
};
