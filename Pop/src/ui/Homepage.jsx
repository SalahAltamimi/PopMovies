import MoivesList from "../feature/movies/MoivesList";
import WatchedList from "../feature/watched/WatchedList";
import Summary from "../feature/watched/Summary";
import Box from "./Box";
import { UseMovies } from "../context/useMovies";
import MovieDetails from "../feature/movies/MovieDetails";

function Homepage() {
  const { select } = UseMovies();
  return (
    <div className="grid grid-cols-2 gap-x-4 h-[75vh]">
      <Box>
        <MoivesList />
      </Box>
      <Box className="bg-slate-700 rounded-lg relative overflow-hidden">
        {select ? (
          <MovieDetails />
        ) : (
          <>
            <Summary />
            <WatchedList />
          </>
        )}
      </Box>
    </div>
  );
}

export default Homepage;
