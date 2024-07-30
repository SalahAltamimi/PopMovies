import axios from "axios";
export async function apiMovies(query) {
  const data = await axios({
    method: "GET",
    url: `https://www.omdbapi.com/?apikey=53f9eba3&s=${query}`,
  });
  return data;
}
export async function apiMovie(select) {
  const data = await axios({
    method: "GET",
    url: `https://www.omdbapi.com/?apikey=53f9eba3&i=${select}`,
  });
  return data;
}
