import { UseMovies } from "../../context/useMovies";

function Summary() {
  const { watched } = UseMovies();
  console.log(watched.at(0));
  const sum = watched
    .map((el) => Number(el.runtime.split(" ")[0]))
    .reduce((a, b) => a + b, 0);
  const avg = watched
    .map((el) => Number(el.imdbRating))
    .reduce((a, b) => a + b, 0);
  const avgimdbRating = (avg / watched.length).toFixed(2);
  const userRatings = watched
    .map((el) => Number(el.userRating))
    .reduce((a, b) => a + b, 0);
  const avguserRating = (userRatings / watched.length).toFixed(1);
  console.log(sum);
  return (
    <div className="bg-slate-700 shadow-lg rounded-md px-6 py-4 flex flex-col space-y-4">
      <h3 className="text-stone-100 font-semibold">Movies you watched</h3>
      <ul className="flex items-center justify-between text-stone-100">
        <li>#️⃣ {watched.length} movies</li>
        <li>⭐ {watched.length ? avgimdbRating : 0}</li>
        <li>🌟 {watched.length ? avguserRating : 0}</li>
        <li>⏳{sum} min</li>
      </ul>
    </div>
  );
}

export default Summary;
