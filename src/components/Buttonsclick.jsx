import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import "./Buttonclick.css"
import Navbar from './Navbar';
export default function Buttonsclick() {
    const name = useParams([]);
    const [cato, setcato] = useState({})
    const [state, setmovieData] = useState({
        movieData: [],
        num:1
    })


    const pageincrement = (cat) =>{
        console.log("kkk==>",state)

     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${state.num}&with_genres=${cat}&with_watch_monetization_types=flatrate`).then((movies) => {
        const movieData = movies.data.results
        var num =state.num+1
        setmovieData({...state,movieData,num})
    }).catch((error) => {
        console.log(error);
    })
   
   



    }
    const pagedecrement = (cat)=>{
        console.log("kkk==>",state)

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${state.num}&with_genres=${cat}&with_watch_monetization_types=flatrate`).then((movies) => {
            const movieData = movies.data.results
            var num =state.num-1
            setmovieData({...state,movieData,num})
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US").then((catagories) => {
            const genre = catagories.data.genres

           const  cat = genre.filter((data) => {
                return data.name == name.name
            })
            setcato({...cato,cat})
return pageincrement(cat[0].id)
 

        

        })



    }, [])

  
    const movieid = (id)=>{
localStorage.setItem("movieid",id)
    }
   
    return (
        <>
        <Navbar/>
        <div className='col-sm-12' id='btnclck-spacer'></div>
<p id='crsl-text-clr1'>{name.name}</p>

            <div className='row'>

                {state.movieData.map(datas=>

                <>
                
                <div className='col-sm-2' id='crsl-ovrflw-hei'>

                                        <a href='/movieview' target="_blank" onClick={()=>movieid(datas.id)}>
                                            <p>{ }</p>
                                            <img src={`https://image.tmdb.org/t/p/w500/${datas.backdrop_path}`} id='crsl-ovrflw-images' alt="" />
                                        </a>
                                    </div>


                </>
                    )}
            </div >

<br />

<div id='btnclck-dflx'>
    
<button id='btnclck-btns' onClick={ pagedecrement } >Prev</button> &nbsp;
    <button id='btnclck-btns' onClick={ pageincrement }>Next</button>
     </div>



        </>
    )
}
