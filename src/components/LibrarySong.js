import React from "react";

const Librarysong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  songs,
  currentSong,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = song;
    await setCurrentSong(selectedSong);
    //add active state
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check the song is playing
    if (isPlaying) audioRef.current.play();
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
