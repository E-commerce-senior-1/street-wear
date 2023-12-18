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
        <div className="text-white text-opacity-50 text-xl  font-medium font-['SFProDisplay'] leading-9 text-center">
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
  <img className="w-80 h-96 left-[800px] top-[50px] absolute rounded-lg" src="https://media.gqmagazine.fr/photos/64551119ce0c708b2278c458/4:3/w_5120,h_3840,c_limit/chris-henry-tV8yaU09t7w-unsplash.jpg" />
  <img className="w-80 h-96 left-[400px] top-[50px] absolute rounded-lg shadow" src="      https://decoglam.net/storage/images/image?remote=https%3A%2F%2Fdecoglam.net%2FWebRoot%2FStore20%2FShops%2F57b2465e-10e3-4ede-a8d1-6ede59d24921%2F5EA7%2FFEAF%2F8768%2FC8A6%2FD03D%2F0A48%2F3549%2F35C5%2Fstickers-off-white-logo.jpg&shop=57b2465e-10e3-4ede-a8d1-6ede59d24921
" />
  <img className="w-80 h-96 left-[600px] top-[25px] absolute rounded-lg shadow" src="https://cdn.shopify.com/s/files/1/0272/9059/9521/files/off-white-sweatshirt-hoodie-photography-shooting.jpg?v=1583596666" />
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
    class="w-50 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://media.discordapp.net/attachments/1183822766143721482/1186273589410938951/IMG_4613.png?ex=6592a65f&is=6580315f&hm=02c531beed27acfef6cffa7c43025d767699d881bd4e28ebe95cc6d1093cdd37&=&format=webp&quality=lossless&width=496&height=662"
 
  />
  <img
    class="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/310062341_5646326968793591_844162573503166586_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=EqThCy1SIbkAX8ULDkw&_nc_ht=scontent.ftun7-1.fna&oh=00_AfALSbjyWbPDmuNm7x22rLHPwRtLg0nZgwutkjv5MkK3dQ&oe=6584C2BE"
  />
  <img
    class="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://media.discordapp.net/attachments/1183822766143721482/1186259340965969920/409430057_665648919103193_229707522078181122_n.jpg?ex=6592991a&is=6580241a&hm=730daa341dd699c37c3ff0c59c8c489e0dae83b96a4ebc92e25f6152494d446a&=&format=webp&width=662&height=662"
  />
  <img
    class="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://media.discordapp.net/attachments/1183822766143721482/1186274893046743170/yen.jpg?ex=6592a796&is=65803296&hm=6aba2a750eb622aeac50e5aeae882ba67d3e77715401e57b74ec13c5985c863a&=&format=webp&width=453&height=453"
  />
  <img
    class="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://firebasestorage.googleapis.com/v0/b/e-commerce-aa77a.appspot.com/o/Posts%2F15%2Fimage_2023-12-18_130445086.png?alt=media&token=eb756bae-643b-4b2b-8147-ad460a888242"
  />
  
</div>
    </>
  );
};


