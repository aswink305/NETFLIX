import React, { useEffect, useState } from 'react'
import "./Movieviewing.css"
import axios from 'axios'
import "react-youtube"
import YouTube from 'react-youtube'
import Navbar from './Navbar'
export default function Movieviewing() {

  const [moviedata, setmoviedata] = useState([])
  const [videokeys, setvideokeys] = useState({})
  const [movie, setMovie] = useState("")
let overdatas = [] ;
  const movieid = JSON.parse(localStorage.getItem("movieid"))
  const overflwdatas = JSON.parse(localStorage.getItem("moviedatas"));
  overdatas = overflwdatas.names ;
  console.log("dtaaaaaaa==>",overflwdatas.names);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US`).then((singledata) => {
      console.log("singledata====>", singledata);
      setmoviedata(singledata.data)
    })
    axios.get(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US`).then((getting) => {
      setvideokeys(getting.data.results[0].key)
      console.log("exmovie===>", videokeys)

    })
  }, [])
  const movieids = (id) => {
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US`).then((getting) => {
      console.log(getting.data.results[0].key);
      setMovie(getting.data.results[0].key)

    })
  }
  return (
    <>
      <Navbar />

      <p id='crsl-text-clr'  style={{ color: 'white' }}> Suggestions</p>

      <div className='col-sm-12' id='crsl-ovrflw'>
        {overdatas.map(datas =>

          <div className='col-sm-3' id='crsl-ovrflw-hei'>
            <a onClick={() => { movieids(datas.id) }}>
              <img src={`https://image.tmdb.org/t/p/w500/${datas.backdrop_path}`} id='crsl-ovrflw-images' alt="" />
            </a>
          </div>
        )}
      </div>
      <br />
      <br />
      <div className='row container-fluid'>
        <div className='col-sm-5'>
          <p id='vw-orginal-title'>{moviedata.original_title}</p>
          <p style={{ color: "white" }} id='vw-'>{moviedata.overview}</p>
          <p style={{ color: "white" }} id='vw-dis'>release_date: {moviedata.release_date}</p>
          <p style={{ color: "white" }} id='vw-dis'>Language: {moviedata.original_language}</p>
        </div>
        <div className='col'>
          {
            movie ?
              <iframe id='vw-vdeotag' src={`https://www.youtube.com/embed/${movie}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              :
              <iframe id='vw-vdeotag' src={`https://www.youtube.com/embed/${videokeys}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          }
        </div>
      </div>
    </>
  )
}
