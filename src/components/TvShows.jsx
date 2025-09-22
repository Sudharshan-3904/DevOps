import React from "react";
import "./Category.css";

const TvShows = ({ shows }) => (
  <section className="category">
    <h2>TV Shows</h2>
    <ul className="grid">
      {shows.map((show) => (
        <li key={show.id} className="card">
          <img src={show.posterUrl} alt={show.title} />
          <p>{show.title}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default TvShows;
