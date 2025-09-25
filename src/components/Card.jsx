import "./Card.css";

export default function Card({ id, title, poster, posterUrl, loading = false, streamProce, offerPrice }) {
    const imgSrc = poster || posterUrl;
    return (
        <div className="card" key={String(id)}>
            {loading ? (
                <div className="card__skeleton" />
            ) : (
                <>
                    {imgSrc && (
                        <img
                            src={imgSrc}
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
                    {(streamProce || offerPrice) && (
                        <div className="card__pricing" style={{ margin: "8px 10px 12px", fontSize: "0.92rem" }}>
                            {streamProce && (
                                <span>
                                    Stream: <strong>{streamProce}</strong>
                                </span>
                            )}
                            {offerPrice && (
                                <span style={{ marginLeft: 8, color: "#4caf50" }}>
                                    Offer: <strong>{offerPrice}</strong>
                                </span>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
