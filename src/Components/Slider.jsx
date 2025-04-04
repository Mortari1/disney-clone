import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])
    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-95
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-95
    }
  return (
    <div>
        <HiChevronLeft className=' hidden md:block text-white text-[30px] absolute
        mx-8 mt-[155px] cursor-pointer' 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[155px] cursor-pointer right-0'
        onClick={()=>sliderRight(elementRef.current)}/>
        <div className='flex  w-full px-16 py-4
        overflow-x-auto no-scrollbar scroll-smooth' ref={elementRef}>
            
            {movieList.map((item)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} 
                className='min-w-full md:h-[310px] object-cover 
                object-left-top mr-5 rounded-md 
                hover:border-[4px] border-gray-200 transition-all duration-100 ease-in-out'/>
                
            ))}
        </div>
    </div>
   
  )
}

export default Slider