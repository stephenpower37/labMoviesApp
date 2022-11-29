import React, { useState } from "react";

export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )

  const addToFavourites = (tv) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tv.id)) {
      newFavourites.push(tv.id);
    }
    setFavourites(newFavourites);
    console.log(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites( favourites.filter(
      (tId) => tId !== tv.id
    ) )
  };

  return (
    <TvShowContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </TvShowContext.Provider>
  );
};

export default TvShowContextProvider;