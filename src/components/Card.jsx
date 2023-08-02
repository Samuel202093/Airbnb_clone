import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineRightCircle, AiFillRightCircle } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { cardData } from "../data/data";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({data}) => {

 let navigate = useNavigate()

 const handleNavigation = (id, singleListing)=>{
   navigate(`/listing/${id}`, {state:[singleListing]})
 }

  return (
    <>
      {data?.map((x, index) => {
        // const {  images, description, price, ratings, } = x;
        return (
          <div className="relative" key={index} onClick={()=> handleNavigation(x.info.id, x)}>
            {/* Image container div */}
            <div className="imgContainer h-[300px] w-[300px]y rounded-lg">
              <img
                src={x.info.images.data[0].url}
                className="h-full w-full object-cover rounded-xl cursor-pointer"
              />
            <AiFillRightCircle className='circleIcon text-[1.8rem] absolute top-[35%] right-[5%] text-white'/>

            </div>
            {/* like Icon */}
            <BsHeartFill className="absolute top-3 right-3 text-white" />

            {/* Name and rating container */}
            <div className="flex justify-between mt-3">
              <span className="text-[0.8rem] text-base font-semibold">
                {`${x.info.location.country.title},${x.info.location.city}`}
              </span>
              <span className="flex gap-x-2 items-center">
                <BsFillStarFill /> <small>{x.info.ratings.value}</small>
              </span>
            </div>
            {/* stay with-owner name div */}
            <div>
              <span className="text-[1rem] font-[400] text-[rgba(0,0,0,0.7)]">{x.info.title}</span>
            </div>
            {/* Price */}
            <div>
              <span className="underline">
                <small className="font-bold">${`${x.info.price}`}</small> per night
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;


