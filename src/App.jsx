import React, { useState } from "react";
import Movies from "./components/Movies";
import TVShows from "./components/Shows";
import Specials from "./components/Specials";
import Originals from "./components/Originals";
import Header from "./header";
import "./App.css";
import { sampleData } from "./assets/sampleData";

// Helper to add placeholder poster URLs for all items
function titlePlaceholder(title) {
    const text = encodeURIComponent(title);
    return `https://placehold.co/400x600/222/fff?text=${text}`;
}
function addPlaceholders(db) {
    return {
        movies: db.movies.map((x) => ({ ...x, posterUrl: x.posterUrl || titlePlaceholder(x.title) })),
        tvShows: db.tvShows ? db.tvShows.map((x) => ({ ...x, posterUrl: x.posterUrl || titlePlaceholder(x.title) })) : [],
        specials: db.specials ? db.specials.map((x) => ({ ...x, posterUrl: x.posterUrl || titlePlaceholder(x.title) })) : [],
        originals: db.originals ? db.originals.map((x) => ({ ...x, posterUrl: x.posterUrl || titlePlaceholder(x.title) })) : [],
    };
}

export default function App() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [query, setQuery] = useState("");
    const [activeCategories, setActiveCategories] = useState({
        movies: true,
        tvShows: true,
        specials: true,
        originals: true,
    });

    // Prepare data based on location
    let dataToShow = addPlaceholders(sampleData);
    let showStreamPriceOnly = false;
    if (currentLocation && currentLocation.toUpperCase() !== "NEW YORK, USA") {
      showStreamPriceOnly = true;
      // Only show stream price for movies, hide other categories
      dataToShow = {
        movies: sampleData.movies.map((m) => ({
          id: m.id,
          title: m.title,
          posterUrl: m.posterUrl,
          streamProce: m.streamProce,
        })),
        tvShows: sampleData.shows.map((m) => ({
          id: m.id,
          title: m.title,
          posterUrl: m.posterUrl,
          streamProce: m.streamProce,
        })),
        specials: sampleData.specials.map((m) => ({
          id: m.id,
          title: m.title,
          posterUrl: m.posterUrl,
          streamProce: m.streamProce,
        })),
        originals: sampleData.originals.map((m) => ({
          id: m.id,
          title: m.title,
          posterUrl: m.posterUrl,
          streamProce: m.streamProce,
        })),
      };
    }

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

          {activeCategories.movies && dataToShow.movies.length && (
            <Movies
              items={dataToShow.movies.filter((m) =>
                m.title.toLowerCase().includes(query.toLowerCase())
              )}
            />
          )}
          {activeCategories.tvShows && dataToShow.tvShows.length > 0 && (
            <TVShows
              items={dataToShow.tvShows.filter((s) =>
                s.title.toLowerCase().includes(query.toLowerCase())
              )}
            />
          )}
          {activeCategories.specials && dataToShow.specials.length > 0 && (
            <Specials
              items={dataToShow.specials.filter((s) =>
                s.title.toLowerCase().includes(query.toLowerCase())
              )}
            />
          )}
          {activeCategories.originals && dataToShow.originals.length > 0 && (
            <Originals
              items={dataToShow.originals.filter((o) =>
                o.title.toLowerCase().includes(query.toLowerCase())
              )}
            />
          )}
        </main>
      </div>
    );
}
