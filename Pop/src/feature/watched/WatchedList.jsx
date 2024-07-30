import { UseMovies } from "../../context/useMovies";
import Watched from "./Watched";

function WatchedList() {
  const { watched } = UseMovies();
  return (
    <ul className="overflow-scroll h-4/6 divide-y divide-stone-100 border-b border-stone-100">
      {watched.map((movie) => (
        <Watched movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedList;
