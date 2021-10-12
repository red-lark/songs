import React from 'react';

import SongList from '../components/SongList'
import { selectSong } from '../actions/actions';

const App = () => {
    return(
        <div><SongList /></div>
    );
}

export default App;