import React, { useState } from "react";
import Movies from "./components/Movies";
import TVShows from "./components/TvShows";
import Specials from "./components/Specials";
import Originals from "./components/Originals";
import Header from "./header";
import "./App.css";

const sampleData = {
  movies: [
    { id: 1, title: "Inception", poster: "/pics/inception.jpg" },
    { id: 2, title: "The Matrix", poster: "/pics/matrix.jpg" },
    { id: 3, title: "Interstellar", poster: "/pics/interstellar.jpg" },
    { id: 4, title: "The Dark Knight", poster: "/pics/darkknight.jpg" },
    { id: 5, title: "Parasite", poster: "/pics/parasite.jpg" },
    { id: 6, title: "Dune", poster: "/pics/dune.jpg" },
    { id: 7, title: "Oppenheimer", poster: "/pics/oppenheimer.jpg" },
    { id: 8, title: "Spider-Verse", poster: "/pics/spiderverse.jpg" },
  ],
  tvShows: [
    { id: 101, title: "Breaking Bad", poster: "/pics/breakingbad.jpg" },
    { id: 102, title: "Stranger Things", poster: "/pics/strangerthings.jpg" },
    { id: 103, title: "The Witcher", poster: "/pics/witcher.jpg" },
    { id: 104, title: "The Boys", poster: "/pics/theboys.jpg" },
    { id: 105, title: "The Last of Us", poster: "/pics/lastofus.jpg" },
    { id: 106, title: "House of the Dragon", poster: "/pics/hotd.jpg" },
    { id: 107, title: "Loki", poster: "/pics/loki.jpg" },
    { id: 108, title: "Severance", poster: "/pics/severance.jpg" },
  ],
  specials: [
    { id: 201, title: "The Oscars 2024", poster: "/pics/oscar.jpg" },
    { id: 202, title: "New Year Countdown", poster: "/pics/newyear.jpg" },
    { id: 203, title: "Comedy Night Live", poster: "/pics/comedy.jpg" },
    { id: 204, title: "Nature Live: Oceans", poster: "/pics/oceans.jpg" },
    { id: 205, title: "Tech Keynote 2025", poster: "/pics/keynote.jpg" },
    {
      id: 206,
      title: "World Cup Final Highlights",
      poster: "/pics/worldcup.jpg",
    },
  ],
  originals: [
    { id: 301, title: "Squid Game", poster: "/pics/squidgame.jpg" },
    { id: 302, title: "The Crown", poster: "/pics/crown.jpg" },
    { id: 303, title: "Money Heist", poster: "/pics/moneyheist.jpg" },
    { id: 304, title: "The Queen's Gambit", poster: "/pics/queensgambit.jpg" },
    { id: 305, title: "Narcos", poster: "/pics/narcos.jpg" },
    { id: 306, title: "Wednesday", poster: "/pics/wednesday.jpg" },
    { id: 307, title: "Arcane", poster: "/pics/arcane.jpg" },
    { id: 308, title: "The Diplomat", poster: "/pics/diplomat.jpg" },
  ],
};

/* Replace poster paths with online placeholders so images always render */
function titlePlaceholder(title) {
  const text = encodeURIComponent(title);
  return `https://placehold.co/400x600/222/fff?text=${text}`;
}
function addPlaceholders(db) {
  return {
    movies: db.movies.map((x) => ({ ...x, poster: titlePlaceholder(x.title) })),
    tvShows: db.tvShows.map((x) => ({
      ...x,
      poster: titlePlaceholder(x.title),
    })),
    specials: db.specials.map((x) => ({
      ...x,
      poster: titlePlaceholder(x.title),
    })),
    originals: db.originals.map((x) => ({
      ...x,
      poster: titlePlaceholder(x.title),
    })),
  };
}
const data = addPlaceholders(sampleData);

export default function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState({
    movies: true,
    tvShows: true,
    specials: true,
    originals: true,
  });

  return (
    <div>
      <Header onLocationChange={setCurrentLocation} />
      <main className="app">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Endless Entertainment</h1>
            <p className="hero__subtitle">
              Stream top Movies, TV Shows, Specials and Originals
              {currentLocation ? ` · Location: ${currentLocation}` : ""}
            </p>

            {/* Search and filters */}
            <div
              style={{
                marginTop: 14,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <input
                type="search"
                placeholder="Search titles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(0,0,0,.25)",
                  color: "inherit",
                  minWidth: 200,
                }}
              />
              {Object.keys(activeCategories).map((key) => (
                <label
                  key={key}
                  style={{
                    display: "inline-flex",
                    gap: 6,
                    alignItems: "center",
                    padding: "8px 10px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,.18)",
                    background: "rgba(0,0,0,.15)",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={activeCategories[key]}
                    onChange={(e) =>
                      setActiveCategories((p) => ({
                        ...p,
                        [key]: e.target.checked,
                      }))
                    }
                  />
                  {key}
                </label>
              ))}
            </div>
          </div>
        </section>

        {activeCategories.movies && (
          <Movies
            items={data.movies.filter((m) =>
              m.title.toLowerCase().includes(query.toLowerCase())
            )}
          />
        )}
        {activeCategories.tvShows && (
          <TVShows
            items={data.tvShows.filter((s) =>
              s.title.toLowerCase().includes(query.toLowerCase())
            )}
          />
        )}
        {activeCategories.specials && (
          <Specials
            items={data.specials.filter((s) =>
              s.title.toLowerCase().includes(query.toLowerCase())
            )}
          />
        )}
        {activeCategories.originals && (
          <Originals
            items={data.originals.filter((o) =>
              o.title.toLowerCase().includes(query.toLowerCase())
            )}
          />
        )}
      </main>
    </div>
  );
}
