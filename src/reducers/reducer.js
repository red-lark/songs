import { combineReducers } from "redux";


const songsReducer = () => {
    return [
        {
            title:"aaaaaa", duration: '4:05'
        },
        {
            title:"bbbb", duration: '1:05'
        }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});