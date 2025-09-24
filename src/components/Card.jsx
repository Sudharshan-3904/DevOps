import "./Card.css";

export default function Card({ id, title, poster, loading = false }) {
  return (
    <div className="card" key={String(id)}>
      {loading ? (
        <div className="card__skeleton" />
      ) : (
        <>
          {poster && (
            <img
              src={poster}
              alt={title}
              className="card__image"
              onError={(e) => {
                if (e.currentTarget.dataset.fallback) return;
                e.currentTarget.dataset.fallback = "1";
                e.currentTarget.src = "/pics/placeholder.svg";
              }}
            />
          )}
          <h4 className="card__title">{title}</h4>
        </>
      )}
    </div>
  );
}
