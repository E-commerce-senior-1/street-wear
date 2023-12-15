import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
    {/* main and creators buttons */}
      <div className="flex justify-center pt-[104px] ">
        <div className="flex w-full   justify-around">
          <div className="flex items-center justify-center gap-4 p-4 bg-purple-600 rounded-full w-[164px] h-[45px]">
            <Link to={"/Drops"} className="text-white text-lg font-semibold">
              Main Collection
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 p-4 bg-zinc-700 rounded-full w-[164px] h-[45px]">
            <Link to={"/Profiles"} className="text-white text-lg font-semibold">
              Creators Profile
            </Link>
          </div>
        </div>
      </div>
{/* text and images */}
      <div className="mx-auto mt-8 flex flex-col items-center justify-evenly pt-20 gap-20 ">
        <div className="flex justify-evenly "> 
        {/* text */}
          <div className="w-full text-white text-6xl font-extrabold font-['SF Pro Display'] leading-[81px] tracking-wide">
            Clothes are the
            <br />
            Spirit of Fashion
            <div className="w-90 text-white text-opacity-50 text-xs font-medium font-['SF Pro Display'] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </div>
          </div>
  {/* images */}
          <div
            style={{
              "grid-template-columns":
                "repeat( auto-fill, minmax(170px, 1fr) )",
            }}
            className="w-full  items-center justify-center grid  mt-8 "
          >
            <img
              className="w-48 h-56  rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTStMfvc1_3lm43YOoCXGaWLl5007Vkd4O9mN9jbgaM4wq0vHDyp8o5yqCJMWpOfGfJI&usqp=CAU"
              alt=""
            />
            <img
              className="w-48  h-56  row-start-2 rounded-lg"
              src="https://i.ebayimg.com/images/g/JesAAOSwtqxjNFaR/s-l1600.jpg"
              alt=""
            />
            <img
              className="w-48 h-    rounded-lg"
              src="https://static.zara.net/photos///2023/I/0/2/p/4432/415/401/2/w/287/4432415401_6_1_1.jpg?ts=1689085205387"
              alt=""
            />
            
            <img
              className="w-48 h-56  row-span-2 rounded-lg"
              src="https://static.bershka.net/4/photos2/2023/I/0/1/p/9313/702/800/91d54691f2230dc4b5be9cabc2455353-9313702800_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic"
              alt=""
            />
          </div>
        </div>
{/* buttons */}
        <div className="">   
          <div className="w-fit h-11 px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex  mr-[10px]">
            <Link
              to={"/Drops"}
              className="text-white text-xl font-medium font-['Poppins']"
            >
              Explore Now
            </Link>
          </div>

          <div className="w-fit h-11 px-5 py-2.5 bg-white bg-opacity-10 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <Link
              to={""}
              className="text-white text-xl font-medium font-['Poppins']"
            >
              Create
            </Link>
          </div>
        </div>
{/* stats */}
        <div className="w-full h-20 flex justify-evenly mt-8">
          <div className="w-16 h-20">
            <h1 className="text-white text-3xl font-bold font-['Poppins']">
              100+
            </h1>
            <div className="text-white text-opacity-50 text-xl font-medium font-['Poppins']">
              Brands
            </div>
          </div>
          <div className="w-44 h-20">
            <div className="text-white text-3xl font-bold font-['Poppins']">
              20k+
            </div>
            <div className="text-white text-opacity-50 text-xl font-medium font-['Poppins']">
              Fashion Designer
            </div>
          </div>
          <div className="w-36 h-20">
            <div className="text-white text-3xl font-bold font-['Poppins']">
              60+
            </div>
            <div className="text-white text-opacity-50 text-xl font-medium font-['Poppins']">
              Fashion Shows
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
