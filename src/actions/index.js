//Action Creator
export const selectSong = (song) => {
  //return action

  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
