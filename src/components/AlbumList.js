import React from 'react'
import Album from './Album'
import albums from '../data.json'
import './style.css'

const AlbumList = (props) => {
  return (
    <div className="album-list">
      <h2 className="album-list-title">All Albums</h2>
      <div className="list-hold">
        {albums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </div>
    </div>
  )
}
export default AlbumList
