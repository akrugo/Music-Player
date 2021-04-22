import React, { useState } from "react";
//assging styles
import "./styles/app.scss";
//adding componenets
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//adding util(our data)
import data from "./util";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[8]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
