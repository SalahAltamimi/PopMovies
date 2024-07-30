import { UseMovies } from "../../context/useMovies";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import Movie from "./Movie";

function MoivesList() {
  const { movies, isLoading, error } = UseMovies();
  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <ul className="overflow-scroll divide-y divide-stone-100 border-b border-stone-100 h-full">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MoivesList;
