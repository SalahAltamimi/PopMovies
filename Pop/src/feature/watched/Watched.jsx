function Watched({ movie }) {
  return (
    <li
      key={movie.imdbID}
      className="px-6 py-4 flex space-x-4 cursor-pointer hover:bg-slate-600 transition-all duration-300"
    >
      <img src={movie.Poster} alt={movie.imdbID} className="h-20 w-15" />
      <div className="flex flex-col space-y-4">
        <h3 className="text-stone-100 capitalize text-base">{movie.Title}</h3>
        <p className="text-stone-100  text-base space-x-2">
          <span>⭐{movie.imdbRating}</span>
          <span>🌟{movie.userRating}</span>
          <span>⏳{movie.runtime}</span>
        </p>
      </div>
    </li>
  );
}

export default Watched;
