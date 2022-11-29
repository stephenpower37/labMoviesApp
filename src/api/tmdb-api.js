export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = async () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getTopRatedMovies = async () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getTV = (args) => {
    console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getTvShowImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getPopularTvShows = async () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getFantasyMovies = () => {
    return fetch(
       {
        adult: false,
        backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
        belongs_to_collection: {
          id: 10,
          name: "Star Wars Collection",
          poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
          backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg", 
        },
        budget: 200000000,
        genres: [
          {
            id: 14,
            name: "Fantasy",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 28,
            name: "Action",
          },
        ],
        homepage:
          "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
        id: 181808,
        imdb_id: "tt2527336",
        original_language: "en",
        original_title: "Star Wars: The Last Jedi",
        overview:
          "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        popularity: 44.208,
        poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        production_companies: [
          {
            id: 1,
            logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
            name: "Lucasfilm",
            origin_country: "US",
          },
          {
            id: 11092,
            logo_path: null,
            name: "Ram Bergman Productions" ,
            origin_country: "US",
          },
          {
            id: 2,
            logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
            name: "Walt Disney Pictures",
            origin_country: "US",
          },
        ],
        production_countries: [
          {
            iso_3166_1: "US",
            name: "United States of America",
          },
        ],
        release_date: "2017-12-13",
        revenue: 1332459537,
        runtime: 152,
        spoken_languages: [
          {
            iso_639_1: "en",
            name: "English",
          },
        ],
        status: "Released",
        tagline: "Darkness rises... and light to meet it",
        title: "Star Wars: The Last Jedi",
        video: false,
        vote_average: 7,
        vote_count: 9692,
      });
  };
      




