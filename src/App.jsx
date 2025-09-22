import React from "react";
import Movies from "./components/movies";
import TvShows from "./components/tvShows";
import Specials from "./components/specials";
import Originals from "./components/originals";
import { sampleData } from "./assets/sampleData";

function App() {
  return (
    <div>
      <Movies movies={sampleData.movies} />
      <TvShows shows={sampleData.shows} />
      <Specials specials={sampleData.specials} />
      <Originals originals={sampleData.originals} />
    </div>
  );
}

export default App;
