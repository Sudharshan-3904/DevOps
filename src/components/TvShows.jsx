// src/components/TVShows.jsx
import Card from "./Card";
import "./TVShows.css";

export default function TVShows({ items }) {
  return (
    <section className="list tv-shows">
      <h2>TV Shows</h2>
      <div className="cards">
        {items.map((show) => (
          <Card key={show.id} {...show} />
        ))}
      </div>
    </section>
  );
}
