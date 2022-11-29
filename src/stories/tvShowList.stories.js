import React from "react";
import TvList from "../components/tvList";
import SampleMovie from "./sampleDataTv";
import { MemoryRouter } from "react-router";
import Grid from "@mui/material/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/TvShowList",
  component: TvList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ] ,
};

export const Basic = () => {
  const tv = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
  ];
  return (
    <Grid container spacing={5}>
      <TvList
        tvs={tv}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
