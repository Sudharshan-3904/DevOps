import React from "react";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows";
import Specials from "./components/Specials";
import Originals from "./components/Originals";
import "./App.css";

const sampleData = {
  movies: [
    { id: 1, title: "Inception", poster: "/pics/inception.jpg" },
    { id: 2, title: "The Matrix", poster: "/pics/matrix.jpg" },
  ],
  tvShows: [
    { id: 101, title: "Breaking Bad", poster: "/pics/breakingbad.jpg" },
    { id: 102, title: "Stranger Things", poster: "/pics/strangerthings.jpg" },
  ],
  specials: [
    { id: 201, title: "The Oscars 2024", poster: "/pics/oscar.jpg" },
    { id: 202, title: "New Year Countdown", poster: "/pics/newyear.jpg" },
  ],
  originals: [
    { id: 301, title: "Squid Game", poster: "/pics/squidgame.jpg" },
    { id: 302, title: "The Crown", poster: "/pics/crown.jpg" },
  ],
};

export default function App() {
  return (
    <div className="app">
      <Movies items={sampleData.movies} />
      <TVShows items={sampleData.tvShows} />
      <Specials items={sampleData.specials} />
      <Originals items={sampleData.originals} />
    </div>
  );
}
