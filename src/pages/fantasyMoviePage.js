import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import SampleMovie from "../components/fantasyMovie";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'

const FantasyMoviesPage = (props) => {

  const movies = [
    { ...SampleMovie, id: 1 },
    console.log(SampleMovie)
  ];

  return (
    <PageTemplate
      title="Fantasy Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default FantasyMoviesPage;