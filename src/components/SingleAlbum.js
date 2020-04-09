import React, { Component } from 'react'
import albums from '../data.json'
import './style.css'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }

  componentDidMount() {
    const album = albums.find(element => element.id === +this.props.match.params.id)
    this.setState({album: album})
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !==this.props.match.params.id){
      const album = albums.find(element => element.id === +this.props.match.params.id)
      this.setState({album: album})
    }
  }

  handleBuyAlbum = () => {
    alert('YOU BOUGHT IT DUDE')
    this.props.history.push('/albums')
  }

  render() {
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => this.handleBuyAlbum()} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default SingleAlbum
