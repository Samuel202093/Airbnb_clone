import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/img/host_share_bg.png";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'
import { TbWorld } from "react-icons/tb";
import { AiOutlineRightCircle } from "react-icons/ai";
import { RiSoundModuleFill } from "react-icons/ri";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import Modal from "./Modal";
import { linkData } from "../data/data";
import { useModalContext } from "../context/data";

const NavBar = () => {
  const { handleShow, modalShow, windowWidth } = useModalContext();
  const navigate = useNavigate()

  const handleHome = ()=>{
    navigate('/')
  }

  const displayList = linkData.map((x) => {
    // destructuring x to get the name, icon, and id.
    const { name, Icon, id } = x;
    return (
      <div
        key={id}
        className="flex-col justify-center items-center gap-1 md:min-w-[15%]y min-h-[5vh]y opacity-[0.5] cursor-pointer"
      >
        <Icon className="text-xl mx-auto" />
        <span className="text-xs md:mx-auto">{name}</span>
      </div>
    );
  });

 

  return (
    <nav className="">
      <div className="flex justify-between items-center gap-1 p-[1rem] border-greyish">
        {/* LOGO */}
        <div className="lg:pt-3 lg:pl-3y pt-1y hidden md:block cursor-pointer" onClick={handleHome}>
          <img src={logo} className="lg:w-[160px] w-[100px] " />
        </div>
        <div className="w-full md:w-fit">

          {/* mobile veiw */}
          <div className="sm:hidden flex justify-around py-[0.7rem]  border-[1px] border-greyish gap-2 rounded-[100px] h-[8vh] w- mt-2">
            <BsSearch className="mt-2 ml-[-1.2rem]" />
            <div className="flex-col mt-[-0.6rem] ml-[-3.5rem]">
              <span
                className="py-[0.2rem]y px-[0.4rem] cursor-pointer text-[15px]"
                onClick={handleShow}
              >
                Anywhere
              </span>
              <div className="flex opacity-[0.5]">
                <span
                  className="py-[0.2rem]y px-[0.4rem] cursor-pointer text-[15px]"
                  onClick={handleShow}
                >
                  Any Week.
                </span>
                <span
                  className="py-[0.2rem]y px-[0.4rem] cursor-pointer text-[15px]"
                  onClick={handleShow}
                >
                  Any guest
                </span>
              </div>
            </div>
            <RiSoundModuleFill className="mt-2 mr-[-1rem]" />
          </div>

          {/* desktop view */}
          <div className="hidden md:flex lg:py-[0.5rem] md:py-[0.9rem] px-[0.5rem] md:px-[0.4rem] border-[1px] border-greyish gap-2 rounded-[100px] lg:h-[8vh] h-[7vh] w-fit mt-2">
            <span
              className="py-[0.2rem] lg:px-[0.68rem] md:px-[0.2rem] border-r-[1px] border-greyish cursor-pointer"
              onClick={handleShow}
            >
              Anywhere
            </span>
            <span
              className="py-[0.3rem] lg:px-[0.68rem] md:px-[0.7rem] border-r-[1px] border-greyish cursor-pointer md:text-[0.86rem]"
              onClick={handleShow}
            >
              Any Week
            </span>
            <span
              className="py-[0.3rem] lg:px-[0.68rem] border-r-[1px] border-greyish cursor-pointer md:text-[0.86rem]"
              onClick={handleShow}
            >
              Any guest
            </span>
            <div className="h-[40px] w-[40px] lg:mt-[-0.2rem] cursor-pointer bg-red-500 rounded-full">
              <BsSearch className="text-2xl text-[#ffff] transform translate-x-[10px] translate-y-[10px]" />
            </div>
          </div>
        </div>
        {modalShow && <Modal />}

        <div className="hidden md:flex w-[30%] md:w-[35%] h-[10vh] justify-around py-[1.2rem] md:py-[2rem] px-[1rem] md:px-[0.5rem] mt-[-1rem]">
          <div className="flex justify-between px-[1rem] py-[0.5rem]">
            <span>
              <a href={`/contact`} className="lg:text-[1rem] md:text-[0.7rem]">
                Airbnb your Home
              </a>
            </span>
          </div>

          <div className="">
            <span className="">
              <TbWorld className="text-[1.3rem] my-2 md:my-3 lg:my-[0.8rem]" />
            </span>
          </div>

          <div className="lg:w-[25%] h-[6vh] rounded-[100px] flex justify-around px-[0.35rem] py-[0.5rem] lg:border-[1px] lg:border-greyish mt-1 lg:px-1">
            <span>
              <RxHamburgerMenu className="text-[1.3rem] md:ml-[0.5rem]" />
            </span>
            <span>
              {" "}
              <RxAvatar className="text-[1.3rem] opacity-[0.5] md:ml-[0.5rem]" />
            </span>
          </div>
        </div>
      </div>

      {/* links section */}
      <div className="flex justify-betweeny items-center lg:p-[1rem]">
        <div className="flex md:gap-[0.8rem] gap-6 justify-around lg:px-4 lg:w-[85%] md:w-[100%] sm:w-[100%]y">
         
          {windowWidth < 600 ? displayList.slice(0, 5) : displayList.slice(0, 10) }
        </div>
        <div className="hidden w-[15%] pr-[2rem] lg:flex lg:flexy justify-between  items-center gap-x-4 pl-[1.5rem]">
          <AiOutlineRightCircle className="text-[1.5rem] opacity-[0.5]" />

          <div className="flex items-center gap-x-4 border border-greyish py-3 px-4 rounded-lg">
            <RiSoundModuleFill className="text-" />
            <span className="text-xs font-semibold">Filter</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
