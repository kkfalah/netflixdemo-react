import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'

function randomInt(max) {
  return Math.floor(Math.random() * max);
}


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results)
      setMovie(response.data.results[randomInt(20)])
    })    
  }, [])
  
  return (
    <div className="banner" style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}  >
      <div className="content">
        <h1 className="title">{movie ? movie.original_title : ''}</h1>
        <div className="banner_buttons">
          {/* <button className="button">Play</button>
          <button className="button">My List</button> */}
        </div>
        <h1 className="description">{movie ? movie.overview : ''}</h1>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Banner
