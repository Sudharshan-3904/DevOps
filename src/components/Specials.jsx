import Card from "./Card";
import "./Specials.css";

export default function Specials({ items }) {
  return (
    <section className="list specials">
      <h2>Specials</h2>
      <div className="cards">
        {items.map((special) => (
          <Card key={special.id} {...special} />
        ))}
      </div>
    </section>
  );
}
