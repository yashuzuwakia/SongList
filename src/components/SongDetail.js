import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {

    if (!song) {
        return (
            <div>
                Select A Song!
            </div>
        )
    }
    return (
        <div>
            <h3>Details For :</h3>
            <p>
                Song : {song.title}
                <br />
                Duration : {song.duration}
            </p>
        </div>
    )
}

const mapStateToProp = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProp)(SongDetail);