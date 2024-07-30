import { UseMovies } from "../context/useMovies";

function Header() {
  const { query, setquery, movies } = UseMovies();
  return (
    <header className="m-5 bg-indigo-700 rounded-lg">
      <nav className=" px-6 py-4 flex items-center justify-between text-stone-100 flex-wrap">
        <h3 className="text-xl">🍿 usePopcorn</h3>
        <input
          type="text"
          className="rounded-full max-w-36 focus:max-w-max px-2 py-1 focus:ring focus:ring-yellow-400 transition-all duration-300 outline-none bg-slate-300 placeholder:text-stone-700 text-stone-600"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <p className="text-xl">Found {movies?.length} results</p>
      </nav>
    </header>
  );
}

export default Header;
