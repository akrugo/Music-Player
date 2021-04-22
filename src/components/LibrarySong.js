import React from "react";

const Librarysong = ({ song }) => {
  return (
    <div className="song-container">
      <img src={song.cover} alt="" />
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </div>
  );
};

export default Librarysong;
