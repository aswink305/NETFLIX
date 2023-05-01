import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Movieovrflw.css"
import Slider from './Slider';
import Caroasel from './Caroasel';
export default function Movieoverflows(props) {
    const [obj, setobj] = useState({})
    const [object, setobject] = useState([
    ])
    let data = [];
    let name = [];


// Converted useffect function into async for adding await to wait until the entire data get

        useEffect(  () => {
    async function ak  ()  {

            await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US").then((catagories) => {
                data = catagories.data.genres
            }).catch((error) => {
                console.log(error);
            })

            for (let i = 0; i < data.length; i++) {
                name = data[i].name;
            await  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${data[i].id}&with_watch_monetization_types=flatrate`).then((movies) => {
                    const mov = movies.data.results
                    setobj({...obj,names:mov,name})
                }).catch((error) => {
                    console.log(error);
                })
            }

        }
    return ak
        }, [])

    useEffect(() => {
        setobject([...object,obj])
    }, [obj])
    
    

    console.log("OBJ===", obj);
    console.log("OBJECT===", object);
    return (

        <>
            <div className='col-sm-12' id='crsl-height2'></div>

            <>
            <Slider movieData={object} />

            </>


          

 </>
 )
}