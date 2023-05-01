import React from 'react'
import { useState } from 'react';
import Caroasel from './Caroasel';
import "./Movieovrflw.css"
export default function Slider({ movieData }) {
    console.log("movieData====>", movieData)
    const movieid = (moviesdatass, id) => {
        console.log("iddd===>",moviesdatass,id)
        localStorage.setItem("movieid", id)
        const movies = JSON.stringify(moviesdatass);
        localStorage.setItem("moviedatas", movies)
       return singlemovie
  function singlemovie() {
    <Caroasel movieDatas={movieData}/>

    
 }

    }
    return (
        <>
            {movieData.map((datas, key) =>
                <>
                    <div className='col-sm-12'>
                        <p id='crsl-text-clr' style={{ color: "white" }}>{datas.name}</p>
                    </div>

                    <div className='col-sm-12' id='idddd'>
                        <>
                            {datas?.names?.map((details) =>
                                <>
                                    <div className='col-sm-2' id='crsl-ovrflw-hei'>
                                        <a href='/movieview' target="_blank" onClick={()=>movieid(datas,details.id)}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} id='crsl-ovrflw-images' alt="" />
                                            <p id='slider-title'>{details.original_title }</p>

                                        </a>

                                    </div>
                                </>
                            )}
                        </>
                    </div>

                    <br />
                </>



            )}
        </>

    )
}
