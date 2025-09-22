import { useState, useEffect } from "react";
import "./header.css";

const PREDEFINED_LOCATIONS = [
  { id: 1, name: "New York, USA" },
  { id: 2, name: "San Francisco, USA" },
  { id: 3, name: "London, UK" },
  { id: 4, name: "Tokyo, Japan" },
  { id: 5, name: "Sydney, Australia" },
];

export default function Header({ onLocationChange }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [currentLoc, setCurrentLoc] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [manualLoc, setManualLoc] = useState("");

  useEffect(() => {
    if (!currentLoc && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setCurrentLoc(
            `${Math.round(pos.coords.latitude)}, ${Math.round(
              pos.coords.longitude
            )}`
          ),
        () => console.warn("Could not auto-detect location")
      );
    }
  }, [currentLoc]);

  const toggleLogin = () => {
    setLoggedIn((prev) => !prev);
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const locString = `${Math.round(pos.coords.latitude)}, ${Math.round(
          pos.coords.longitude
        )}`;
        setCurrentLoc(locString);
        onLocationChange && onLocationChange(locString);
      },
      () => alert("Unable to retrieve your location")
    );
  };

  const handleSetLocation = (loc) => {
    setCurrentLoc(loc.name);
    onLocationChange && onLocationChange(loc.name);
    setModalOpen(false);
  };

  return (
    <header className="app-header">
      <div className="logo">MyStream</div>

      <div className="user-controls">
        <button
          className="dropdown-toggle"
          onClick={() => setDropdownOpen((o) => !o)}
        >
          {currentLoc ? currentLoc : "Detect Location"}{" "}
          <span style={{ marginLeft: 5 }}>{loggedIn ? "🔓" : "🔒"}</span>
        </button>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={toggleLogin}>
              {loggedIn ? "Logout" : "Login"}
            </button>
            <button onClick={detectLocation}>Detect Location</button>
            <button onClick={() => setModalOpen(true)}>Set Location</button>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Select a location</h3>
            <ul className="location-list">
              {PREDEFINED_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <button onClick={() => handleSetLocation(loc)}>
                    {loc.name}
                  </button>
                </li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
