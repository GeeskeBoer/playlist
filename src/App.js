import React from "react";
import "./App.css";
import SongOverview from "./components/SongOverview";

function App() {
  return (
    <div className="App">
      <header className="header">Lil' Playlist</header>
      <SongOverview />
    </div>
  );
}

export default App;
