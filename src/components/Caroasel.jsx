import React, { useEffect, useRef, useState } from 'react'
import "./Caroasel.css"
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios'
// Import Swiper styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Slider from './Slider';

import Buttonsclick from './Buttonsclick';
import { useNavigate } from 'react-router-dom';

export default function Caroasel({movieData}) {
console.log("movieeeeeeeeeeeeeeeeeeeee====>",movieData)
    const [popularmovie, setpopularmovie] = useState([])
  const navigate = useNavigate()
 
  
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US&page=1").then((popular) => {
            setpopularmovie(popular.data.results)
        })
    }, [])
 


    useEffect(() => {

        AOS.init({

            once: true,
        });


    }, [])
    const calling = (name)=>{

        navigate(`/buttonsclick/${name}`)
    }

    
     
    return (
      

        <>

            <div className='col-sm-12' id='crsl-start-shadow' >
                <Swiper

                    spaceBetween={30}
                    effect={"fade"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {popularmovie.map(popular =>
                        <SwiperSlide>
                            <img id='crsl-img2' src={`https://image.tmdb.org/t/p/original/${popular.backdrop_path}`} />
                            <div className='row' id='name'>
                                <div className='col-sm-12' id='crsl-height3'></div>

                                <div className='col-sm-1'></div>
                                <div className='col' data-aos="fade-right" >
                                    <div id='crsl-title-width'>
                                        <p id='crsl-title'>{popular.title}</p>
                                        <div>
                                            <button id='crsl-btns'>Whatch now</button>
                                            &nbsp;
                                            <button id='crsl-btns'>More info</button>

                                        </div>
                                        <br />

                                        <div id='crsl-discription'>
                                            <p>{popular.overview}</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-sm-1'></div>



                            </div>



                        </SwiperSlide>
                    )}


                </Swiper>
            </div>

            <div className='col-sm-12' id='crsl-height'></div>

            <div id='crsl-border' data-aos="flip-left">

                <div className='row' id='crsl-trnds'>
                    <div className='col-sm-4' id='crsl-trnds1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                        </svg>
                        &nbsp;
                        <p >Trends Now</p>
                    </div>
                    <div className='col' id='crsl-trnd-names'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill=" rgba(255, 255, 255, 0.633)" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                        </svg>
                        &nbsp;

                        <p id='crsl-trnds-names'>Popular</p>
                    </div>
                    <div className='col' id='crsl-trnd-names'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        &nbsp;

                        <p id='crsl-trnds-names'>Premieres</p>

                    </div>
                    <div className='col' id='crsl-trnd-names'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        &nbsp;

                        <p id='crsl-trnds-names'>Resently Added</p>

                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-sm-1'></div>
                <div className='col'>
                    <div id='crsl-height1'></div>

                </div>
                <div className='col-sm-1'></div>

            </div>
            <div className='col-sm-12' id='crsl-height2'></div>

            <div className='row'>
                <div className='col-sm-1'></div>
                <div className='col'>
                    <div className='row' id='crsl-movie-names'>
                        <div className='col'>
                            <button  id='crsl-selection-btns'  onClick={()=>{calling("Action")}   } >
                                <p>Action</p>

                            </button>
                        </div>
                        <div className='col'>
                            <button id='crsl-selection-btns' onClick={()=>{calling("Adventure")} }>
                                <p>Adventure</p>

                            </button>
                        </div><div className='col'>
                            <button id='crsl-selection-btns' onClick={()=>{calling("Comedy")} }>
                                <p>Comedy</p>

                            </button>
                        </div><div className='col'>
                            <button id='crsl-selection-btns' onClick={()=>{calling("Crime")} }>
                                <p>Crime</p>

                            </button>
                        </div>
                        <div className='col'>
                            <button id='crsl-selection-btns' onClick={()=>{calling("Drama")} }>
                                <p>Drama</p>

                            </button>
                        </div><div className='col'>
                            <button id='crsl-selection-btns' onClick={()=>{calling("Fantasy")} }>
                                <p>Fantasy</p>

                            </button>
                        </div><div className='col'>
                            <button id='crsl-selection-btns' onClick={()=>{calling("Music")} }>
                                <p>Music</p>

                            </button>
                        </div>
                        <div className='col'>
                            <button id='crsl-selection-btns' onClick={()=>{calling("Romance")} }>
                                <p>Romance</p>

                            </button>
                        </div>
                    </div>

                </div>
                <div className='col-sm-1'></div>
            </div>             

        </>
    )
}
