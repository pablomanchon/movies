import { useParams } from "react-router-dom";

export const ActorDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Actor</h3>
    </div>
  );
};
