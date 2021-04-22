import React from "react";
import Librarysong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <Librarysong song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
