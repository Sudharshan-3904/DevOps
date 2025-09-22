import React from "react";
import "./Category.css";

const Movies = ({ movies }) => (
  <section className="category">
    <h2>Movies</h2>
    <ul className="grid">
      {movies.map((movie) => (
        <li key={movie.id} className="card">
          <img src={movie.posterUrl} alt={movie.title} />
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Movies;
