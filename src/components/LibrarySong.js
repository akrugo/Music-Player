import React from "react";

const Librarysong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  songs,
}) => {
  const songSelectHandler = () => {
    const selectedSong = song;
    setCurrentSong(selectedSong);
    //add active state
    console.log(song);

    //check the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default Librarysong;
