import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { getPopularTvShows } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const PopularTvShowPage = (props) => {
  
  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Popular TV Shows"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default PopularTvShowPage;