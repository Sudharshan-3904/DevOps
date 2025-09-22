
import "./Card.css";

export default function Card({ id, title, poster }) {
  return (
    <div className="card" key={String(id)}>
      {poster && <img src={poster} alt={title} className="card__image" />}
      <h4 className="card__title">{title}</h4>
    </div>
  );
}
