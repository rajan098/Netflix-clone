import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from './requests';
import './Banner.css'

function Banner() {
    const[movie,setMovie]=useState([]);
    
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(
            request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]
            );
            return request;
        }
        fetchData();
    },[])
       console.log(">>>>>>>>>",movie);
       function truncate(str,n){
           return str?.length>n?str.substr(0,n-1)+"...":str;
       }
  return (
  <header className='banner' id='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original//m7FqiUOvsSk7Ulg2oRMfFGcLeT9.jpg"
        )`,
        
        backgroundPosition:"center center",
    }
    }
  >
      <div className="banner__contents">

      {/* title */}
      <h1>
          Worlds best movie
      </h1>
      {/* div>2 buttons */}
      <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
      </div>
      {/* discription */}
      <h2 className='banner__discription'>Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Quam, aut dolore sapiente quiai 
      non ea, aperiam ab quas doloribus delectus molestiae? Deserunt, ab!
      
      </h2>
      </div>
<div className="banner--fadebottom"/>
  </header>
  )
}

export default Banner