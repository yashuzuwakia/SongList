import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Crazy", duration: "5:17" },
    { title: "Santeria", duration: "3:03" },
    { title: "There She Goes", duration: "2:42" },
    { title: "All Star", duration: "3:21" },
    { title: "Viva Forever", duration: "5:11" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  song: songReducer,
  selectedSong: selectedSongReducer,
});
