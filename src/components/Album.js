import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './style.css'

const Album = ({ data }) => {
  const { artist, title, year, image, id } = data
  return (
    <div className="album">
      <img alt={title} src={image} className="album-art" />
      <div className="album-info-hold">
        <Link to={`/album/${id}`}>
          <p>
            {artist} - {title}
          </p>
        </Link>
        <p>{year}</p>
      </div>
    </div>
  )
}
export default withRouter(Album)
