import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { MoviesContext } from "../../contexts/moviesContext";
import { PlaylistAdd } from "@mui/icons-material";

export default function MovieCard({ movie, action }) {
    const { favourites, mustWatch } = useContext(MoviesContext);
  
     if (favourites.find((id) => id === movie.id)) {
       movie.favourite = true;
     } else {
       movie.favourite = false
     }

     if (mustWatch.find((id) => id === movie.id)) {
      movie.mustWatch = true;
    } else {
      movie.mustWatch = false
    }
   

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
            <FavoriteIcon />
          </Avatar>
              ) :
              movie.mustWatch ? (
                <Avatar sx={{ backgroundColor: 'red' }}>
                <PlaylistAdd />
              </Avatar>
              ) : null
      }
        title={
          <Typography variant="h5" component="p">
            {movie.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      
    </Card>
  );
}