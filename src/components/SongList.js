import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {

  renderList() {
    return this.props.song.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary"
              onClick={() => { this.props.selectSong(song) }}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {

    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const getMyState = (state) => {
  return { song: state.song };
};

export default connect(getMyState, { selectSong })(SongList);
