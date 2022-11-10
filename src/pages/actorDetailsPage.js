import React from "react";
import { getActor } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const ActorDetailsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getActor)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  return (
    <PageTemplate
    title="Actors"
    actors={actors}
    
  />
);
};
export default ActorDetailsPage;