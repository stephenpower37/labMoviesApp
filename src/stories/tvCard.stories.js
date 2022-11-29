import React from "react";
import TvCard from "../components/tvCard";
import SampleTvShow from "./sampleDataTv";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ] ,
};

export const Basic = () => {
  return (
    <TvCard
      movie={SampleTvShow}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";