import React from "react";
import "./Category.css";

const Originals = ({ originals }) => (
  <section className="category">
    <h2>Originals</h2>
    <ul className="grid">
      {originals.map((original) => (
        <li key={original.id} className="card">
          <img src={original.posterUrl} alt={original.title} />
          <p>{original.title}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Originals;
