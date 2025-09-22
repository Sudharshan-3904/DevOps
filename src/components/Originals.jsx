import Card from "./Card";
import "./Originals.css";

export default function Originals({ items }) {
  return (
    <section className="list originals">
      <h2>Originals</h2>
      <div className="cards">
        {items.map((original) => (
          <Card key={original.id} {...original} />
        ))}
      </div>
    </section>
  );
}
