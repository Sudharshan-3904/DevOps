import React from "react";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Specials from "./components/Specials";
import Originals from "./components/Originals";

const sampleData = {
  movies: [
    { id: 1, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 2, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 3, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 4, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 5, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 6, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 7, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 8, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 9, title: "Inception", posterUrl: "/images/inception.jpg" },
    { id: 10, title: "Inception", posterUrl: "/images/inception.jpg" },
  ],
  shows: [
    { id: 101, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 102, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 103, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 104, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 104, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 105, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 106, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 107, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 108, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 109, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
    { id: 110, title: "Stranger Things", posterUrl: "/images/stranger.jpg" },
  ],
  specials: [
    { id: 201, title: "Live Concert", posterUrl: "/images/concert.jpg" },
  ],
  originals: [
    { id: 301, title: "My Original", posterUrl: "/images/original.jpg" },
  ],
};

function App() {
  return (
    <main>
      <Movies movies={sampleData.movies} />
      <TvShows shows={sampleData.shows} />
      <Specials specials={sampleData.specials} />
      <Originals originals={sampleData.originals} />
    </main>
  );
}

export default App;
