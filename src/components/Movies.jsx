import Card from "./Card";
import "./Movies.css";

export default function Movies({ items }) {
    return (
        <section className="list movies">
            <h2>Movies</h2>
            <div className="cards">
                {items.map((movie) => (
                    <Card key={movie.id} {...movie} />
                ))}
            </div>
        </section>
    );
}
