import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from "./axios";
import "./Row.css"

const base_URL="https://image.tmdb.org/t/p/original/";


function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
           setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    // console.table(movies);
      const opts={
        height:"1200",
        width:"100%",
        playerVars:{

          autoplay:1,
        },
      }
      const handleClick=(movie)=>{
        if(trailerUrl){
          setTrailerUrl('');
        }else{
          movieTrailer(movie?.name||"")
          .then((url)=>{
            const urlParms=new URLSearchParams(new URL(url).search);
            setTrailerUrl (urlParms.get('v'));
          })
          .catch(error=>console.log(error))
        }
      }

  return (
    <div className='row'>
      
        <h1>{title}</h1>
        <div className="row__posters">
          {/* sevral row posters */}
          {movies.map(movie=>(
            <img 
            key={movie.id}
            onClick={()=>handleClick(movie)
            }
            className={`row__poster ${isLargeRow && "row__posterlarge"}`} 
            src={`${base_URL}${ movie.poster_path}`} alt={movie.name}/>
            ))}
        </div>
        {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row