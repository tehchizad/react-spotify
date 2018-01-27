import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}
let fakeServer = {
  user: {
    name: 'Chizzy',
    playlists: [
      {
        name: 'Favorites',
        songs: 
        [
          {name:'FIrst one', duration: 1345},
          {name:'second One', duration: 1236},
          {name:'THIRD', duration: 7000}
        ]
      },
      {
        name: 'Favorites',
        songs: 
        [
          {name:'FIrst one', duration: 1345},
          {name:'second One', duration: 1236},
          {name:'THIRD', duration: 7000}
        ]
      },
      {
        name: 'Favorites',
        songs: 
        [
          {name:'FIrst one', duration: 1345},
          {name:'second One', duration: 1236},
          {name:'THIRD', duration: 7000}
        ]
      },
      {
        name: 'Favorites',
        songs: 
        [
          {name:'FIrst one', duration: 1345},
          {name:'second One', duration: 1236},
          {name:'THIRD', duration: 7000}
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width:"40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length}Playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [] )
   let totalDuration = allSongs.reduce((sum, eachSong) => {
    return sum + eachSong.duration
   }, 0)
    return(
      <div style={{...defaultStyle, width:"40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 1</li>
          <li>Song 1</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData:fakeServer}) 
    }, 1000)   
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? 
        <div>
          <h1 style={{...defaultStyle, 'font-size':'54px'}}>
          {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists = {this.state.serverData.user.playlists}/>
          <HoursCounter playlists = {this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div>:<h1 style={defaultStyle}>Loading...</h1>}
      </div>
    );
  }
}

export default App;
