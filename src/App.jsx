import React from "react";
import Header from "./header";
import Movies from "./components/movies";
import TvShows from "./components/tvShows";
import Specials from "./components/specials";
import Originals from "./components/originals";
import { sampleData } from "./assets/sampleData";

function App() {
  const [location, setLocation] = useState("Unknown");

  return (
    <div>
      <Header onLocationChange={setLocation} />

      <main style={{ marginTop: 70 }}>
        <h2>Current location: {location}</h2>

        <Movies movies={sampleData.movies} />
        <TvShows shows={sampleData.shows} />
        <Specials specials={sampleData.specials} />
        <Originals originals={sampleData.originals} />
      </main>
    </div>
  );
}

export default App;
