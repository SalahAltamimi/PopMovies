import { UseMovies } from "../../context/useMovies";

function Movie({ movie }) {
  const { handelSelect } = UseMovies();
  return (
    <li
      onClick={() => handelSelect(movie?.imdbID)}
      className="sm:px-6 py-4 flex space-x-4 cursor-pointer hover:bg-slate-600 transition-all duration-300 flex-wrap space-y-1"
    >
      <img src={movie.Poster} alt={movie.imdbID} className="h-20 w-15" />
      <div className="flex flex-col space-y-4">
        <h3 className="text-stone-100 capitalize text-sm">{movie.Title}</h3>
        <p className="text-stone-100 capitalize text-sm">
          <span>❕</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
