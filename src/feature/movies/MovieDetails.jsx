import { useEffect, useState } from "react";
import { UseMovies } from "../../context/useMovies";
import Loading from "../../ui/Loading";
import Rating from "../../ui/Rating";
import Error from "../../ui/Error";

function MovieDetails() {
  const [userRating, setRating] = useState(0);

  const { movie, isLoadings, errors, select, handelAdd, watched } = UseMovies();

  const {
    Actors,
    Director,
    Genre,
    Plot,
    Poster,
    Released,
    Runtime,
    Title,
    Writer,
    Year,
    imdbID,
    imdbRating,
  } = movie;
  const isNew = select === imdbID;
  const isRating = watched.map((el) => el.imdbID).includes(select);

  const rating = watched.find((el) => el.imdbID === select)?.userRating;

  useEffect(
    function () {
      if (isNew) {
        setRating(0);
      }
    },
    [isNew]
  );

  useEffect(
    function () {
      if (Title) document.title = Title;
      return () => (document.title = "🍿usePopcorn");
    },
    [Title]
  );
  function onAdd(e) {
    e.preventDefault();
    const newWatch = {
      Poster,
      Title,
      imdbID: select,
      imdbRating,
      userRating,
      runtime: Runtime,
    };
    handelAdd(newWatch);
  }
  if (isLoadings) return <Loading />;
  if (errors) return <Error error={errors} />;
  return (
    <div className="overflow-y-scroll h-full flex flex-col">
      <div className="flex  space-x-4 bg-slate-600 h-44">
        <img src={Poster} alt={Title} className="h-full" />
        <div className="text-stone-100 py-4 space-y-2">
          <h3 className="text-xl">{Title}</h3>
          <p className="text-xs">
            {Released}.{Runtime}
          </p>
          <p className="text-xs">{Genre}</p>
          <p className="text-xs">⭐ {imdbRating} IMDb rating</p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className="bg-slate-600 py-4 w-72 rounded-xl flex items-center justify-center flex-col">
          {isRating ? (
            <p className="text-stone-100">You rated with movie {rating} ⭐️</p>
          ) : (
            <>
              <Rating userRating={userRating} setRating={setRating} />
              {userRating > 0 && (
                <button
                  onClick={onAdd}
                  className="bg-violet-700 text-stone-100 px-16 py-2 rounded-full hover:shadow-lg hover:bg-violet-600 duration-300 transition-all"
                >
                  +Add to List
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <div className="text-stone-100 flex flex-col space-y-4 px-4 py-8 italic text-sm">
        <p>{Plot}</p>
        <span>{Actors}</span>
        <span>Director by {Director}</span>
      </div>
    </div>
  );
}

export default MovieDetails;
