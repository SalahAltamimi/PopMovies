import { useEffect, useState } from "react";
import { apiMovie, apiMovies } from "../services/apiMovies";

function useMovie(select) {
  const [movie, setMovies] = useState({});
  const [isLoadings, setisLoading] = useState(false);
  const [errors, seterror] = useState("");
  useEffect(
    function () {
      async function getApi() {
        try {
          setisLoading(true);
          const data = await apiMovie(select);
          setMovies(data?.data);
          setisLoading(false);
        } catch (err) {
          console.error(err);
          seterror(err.response.data.Error);
          setisLoading(false);
        }
      }
      getApi();
    },
    [select]
  );
  return { movie, isLoadings, errors };
}

export default useMovie;
