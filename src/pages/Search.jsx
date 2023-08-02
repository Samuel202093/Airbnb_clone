import React from "react";
import NavBar from "../components/NavBar";
import SearchCard from "../components/SearchCard";
import { useLocation } from "react-router-dom";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const Search = () => {
    const location = useLocation()
    const viewport = location.state[1]
    const resultCity = location.state[2]
    
  return (
    <div>
      <NavBar />
      <div className="flex justify-between gap-5">
        <div className="flex-col space-y-6 lg:w-[65%] md:w-full pl-[0.8rem] mt-3">
          <div className="mt-2 hidden md:block">
            <h1 className="text-[0.9rem]">Over 1,000 places</h1>
          </div>
          <div className="w-inherit flex justify-between border-[1px] border-greyish py-[0.5rem] rounded-xl">
            <span className="py-[0.2rem] px-[1rem] border-r-[1px] border-greyish">Display total price</span>
            <span className="py-[0.2rem] px-[1rem] border-r-[1px] border-greyish">Include all fees, before taxes</span>
            <div>
              <label className="switch">
                <input type="checkbox" className="input"/>
                <span className="slider">
                  <svg
                    class="slider-icon"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="m4 16.5 8 8 16-16"></path>
                  </svg>
                </span>
              </label>
            </div>
           
          </div>
          <div className="w-full">
            <SearchCard result={resultCity}/>
          </div>
        </div>

        <div className="hidden lg:block min-h-[30vh] w-[35%] border-[1px] border-black">
        
          <ReactMapGL
            mapboxAccessToken={import.meta.env.VITE_APP_MAP_TOKEN}
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
            <NavigationControl position="top-right" />
           
          </ReactMapGL>
      
        </div>
      </div>
    </div>
  );
};

export default Search;
