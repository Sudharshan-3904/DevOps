import React from "react";
import "./Category.css";

const Specials = ({ specials }) => (
  <section className="category">
    <h2>Specials</h2>
    <ul className="grid">
      {specials.map((special) => (
        <li key={special.id} className="card">
          <img src={special.posterUrl} alt={special.title} />
          <p>{special.title}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Specials;
