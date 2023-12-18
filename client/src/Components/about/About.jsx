import React from "react";
import { Box } from "./box";
import { SiNike, SiAdidas, SiNewbalance, SiPuma } from "react-icons/si";
// import { TbTruckDelivery } from "react-icons/tb";
// import { FaChild } from "react-icons/fa";
// import { GrRestroomMen } from "react-icons/gr";
// import { GrRestroomWomen } from "react-icons/gr";
import { BsStars } from "react-icons/bs";

export const About = () => {
  return (
    <>
      <br />
      <br />
      <div className="flex flex-col items-center">
        <div className="text-center text-white text-6xl font-extrabold font-['SF Pro Display'] leading-[81px] tracking-wide">
          Who we are
        </div>
        <div className="text-white text-opacity-50 text-xl font-medium font-medium font-['SFProDisplay'] leading-9 text-center">
          StreetWear Haven, means more than an online store. We're a cool group
          of people who love street fashion. <br /> We're all about quality and
          staying up-to-date with what's hot. <br /> We're all about being real
          and staying true to yourself.
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="text-white text-xl font-medium font-Poppins hover:bg-transparent bg-zinc-800">
            More +
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex mt-[0px] justify-end mr-[-1000px] ">
          <Box />
        </div>

        <div className=" absolute top-[400px] flex  space-x-[-350px]">
          <div className="ml-[-850px] mt-[40px] transform -rotate-90 origin-center text-6xl font-bold text-gray-800">
            Elegance Present Us
          </div>
 
          <div className="ml-[-800px] flex flex-col items-center gap-[60px]">
            <SiNike className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
            <SiAdidas className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
            <SiNewbalance className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
            <SiPuma className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
          </div>
        </div>
      </div>
      {/* <br />
      <br /> */}
     <div className="mt-[-200px] mr-[150px] text-center text-gray-800 text-4xl font-mono font-['SF Pro Display'] leading-[71px] tracking-wide">
  Discover the best fashion trends <BsStars className="inline-block" />
</div>
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />

      <div className="mt-[50px]">
      <div className="text-center text-white text-6xl font-extrabold font-['SF Pro Display'] leading-[81px] tracking-wide">
        when we start
      </div>
      <div className="text-white text-opacity-50 text-xl font-medium font-medium font-['SFProDisplay'] leading-9 text-center">
        Brace yourself for the moment when streetwear takes center stage. Our
        upcoming launch is not just about where you shop <br />
        but the instant when the newest collections, limited editions, and
        trendsetting styles drop
      </div>
      </div>
      <br />
      <div className="w-96 h-96 relative  justify-center">
  <img className="w-80 h-96 left-[900px] top-[50px] absolute rounded-lg" src="https://media.gqmagazine.fr/photos/64551119ce0c708b2278c458/4:3/w_5120,h_3840,c_limit/chris-henry-tV8yaU09t7w-unsplash.jpg" />
  <img className="w-80 h-96 left-[500px] top-[50px] absolute rounded-lg shadow" src="      https://decoglam.net/storage/images/image?remote=https%3A%2F%2Fdecoglam.net%2FWebRoot%2FStore20%2FShops%2F57b2465e-10e3-4ede-a8d1-6ede59d24921%2F5EA7%2FFEAF%2F8768%2FC8A6%2FD03D%2F0A48%2F3549%2F35C5%2Fstickers-off-white-logo.jpg&shop=57b2465e-10e3-4ede-a8d1-6ede59d24921
" />
  <img className="w-80 h-96 left-[700px] top-[25px] absolute rounded-lg shadow" src="https://cdn.shopify.com/s/files/1/0272/9059/9521/files/off-white-sweatshirt-hoodie-photography-shooting.jpg?v=1583596666" />
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<div className="mt-[-200px] mr-[150px] text-center text-gray-800 text-4xl font-mono font-['SF Pro Display'] leading-[71px] tracking-wide">
  Be you with us <BsStars className="inline-block" />
</div>

      <br />
      <br />
      <br />
      <br />
      <div className="text-center text-stone-400  text-6xl font-mono font-['SF Pro Display'] leading-[81px] tracking-wide">
        Our Makers
      </div>
      <div class="flex justify-center space-x-4">
  <img
    class="w-60 h-86 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/KUNDARA_JOHNY.jpg/640px-KUNDARA_JOHNY.jpg"
 
  />
  <img
    class="w-60 h-86 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/KUNDARA_JOHNY.jpg/640px-KUNDARA_JOHNY.jpg"
  />
  <img
    class="w-60 h-86 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdp21vG2U3hJ7BfQ5c8ijOiufBGKG2bRFDw&usqp=CAU"
  />
  <img
    class="w-60 h-86 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdp21vG2U3hJ7BfQ5c8ijOiufBGKG2bRFDw&usqp=CAU"
  />
  <img
    class="w-60 h-86 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdp21vG2U3hJ7BfQ5c8ijOiufBGKG2bRFDw&usqp=CAU"
  />
  
</div>
    </>
  );
};


