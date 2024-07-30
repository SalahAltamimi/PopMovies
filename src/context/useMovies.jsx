import { createContext, useContext, useState } from "react";
import useMovies from "../hooks/useMovies";
import useMovie from "../hooks/useMovie";

const Provider = createContext();

function Movies({ children }) {
  const [select, setselect] = useState(null);
  const { movies, query, isLoading, error, setquery } = useMovies();
  const { movie, isLoadings, errors } = useMovie(select);
  const [watched, setwatched] = useState([]);

  function handelSelect(value) {
    setselect((s) => (s === value ? null : value));
  }
  function handelAdd(value) {
    setwatched((w) => [...w, value]);
    setselect(null);
  }

  return (
    <Provider.Provider
      value={{
        movie,
        isLoadings,
        errors,
        handelSelect,
        select,
        movies,
        isLoading,
        error,
        query,
        setquery,
        watched,
        handelAdd,
      }}
    >
      {children}
    </Provider.Provider>
  );
}

export default Movies;

export function UseMovies() {
  const x = useContext(Provider);
  if (x === undefined) throw new Error("unkonw");
  return x;
}
