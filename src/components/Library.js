import React from "react";
import Librarysong from "./LibrarySong";

const Library = ({ songs, setSongs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <Librarysong
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
