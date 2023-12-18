// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BsFilterLeft } from "react-icons/bs";
// import SlideBar from "./SlideBar";
// import { FcLikePlaceholder } from "react-icons/fc";
// import { FcLike } from "react-icons/fc";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showOptions, setShowOptions] = useState(false);
//   const [isCartHovered, setIsCartHovered] = useState(false);
//   const [like, setLike] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const apiUrl = "http://localhost:3000/api/product/all";
//       const response = await axios.get(apiUrl);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const showAllProducts = () => {
//     setFilteredProducts([]);
//     setSelectedCategory(null);
//   };

//   const toggleOptions = () => {
//     setShowOptions(!showOptions);
//   };

//   const filter = (cat) => {
//     const res = products.filter((current) => current.category === cat);
//     setFilteredProducts(res);
//     setSelectedCategory(cat);
//     setShowOptions(false);
//   };

//   const Newrelease = () => {
//     const res = products.filter((current) => current.isNew);
//     setFilteredProducts(res);
//     setSelectedCategory(null);
//     setShowOptions(false);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar with white background */}
//       <div className="w-1/4 p-4 ">
//         <div className="flex items-center mb-8">
//           <BsFilterLeft className="text-3xl mr-2 text-black" />
//           <span className="text-xl font-bold text-black">Filter</span>
//         </div>
//         <button onClick={showAllProducts}>...</button>
//         <div className="mt-4">
//           <div
//             className="cursor-pointer hover:text-blue-500"
//             onClick={toggleOptions}
//           >
//             Categories
//           </div>
//           {showOptions && (
//             <div className="mt-2">
//               <ul>
//                 <li
//                   className={`cursor-pointer hover:text-blue-500 ${
//                     selectedCategory === "Hoodies" && "text-blue-500 font-bold"
//                   }`}
//                   onClick={() => filter("Hoodies")}
//                 >
//                   Hoodies
//                 </li>
//                 <li
//                   className={`cursor-pointer hover:text-blue-500 ${
//                     selectedCategory === "Sneakers" && "text-blue-500 font-bold"
//                   }`}
//                   onClick={() => filter("Sneakers")}
//                 >
//                   Sneakers
//                 </li>
//                 <li
//                   className={`cursor-pointer hover:text-blue-500 ${
//                     selectedCategory === "T-Shirts" && "text-blue-500 font-bold"
//                   }`}
//                   onClick={() => filter("T-Shirts")}
//                 >
//                   T-Shirts
//                 </li>
//                 <li
//                   className={`cursor-pointer hover:text-blue-500 ${
//                     selectedCategory === "Pants" && "text-blue-500 font-bold"
//                   }`}
//                   onClick={() => filter("Pants")}
//                 >
//                   Pants
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//         <div className="mt-4">
//           <div
//             className="cursor-pointer hover:text-blue-500"
//             onClick={Newrelease}
//           >
//             New Release
//           </div>
//           <SlideBar setFilteredProducts={setFilteredProducts} />
//           <div className="cursor-pointer hover:text-blue-500">
//             Personal Collection
//           </div>
//         </div>
//       </div>

//       {/* Product Grid with white background */}
//       <div className="w-3/4 p-4 ">
//         <h2 className="text-3xl font-bold mb-6">Product Cart</h2>
//         <div
//           className={`mb-4 ${
//             isCartHovered
//               ? "bg-white"
//               : "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"
//           } `}
//           onMouseEnter={() => setIsCartHovered(true)}
//           onMouseLeave={() => setIsCartHovered(false)}
//         ></div>
//         <div>
//           {!selectedCategory &&
//             !filteredProducts.length &&
//             `${products.length} items`}
//           {selectedCategory && `in ${selectedCategory}`}
//           {filteredProducts.length > 0 && ` | ${filteredProducts.length} items`}
//         </div>

//         <br />
//         <br />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {(selectedCategory || filteredProducts.length > 0
//             ? filteredProducts
//             : products
//           ).map((product) => (
//             <div
//               key={product.id}
//               className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
//             >
//               <img
//                 src={product.picture}
//                 alt={product.name}
//                 className="w-full h-100 object-cover mb-2 rounded-md"
//               />
//               <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
//                 {product.category}
//               </div>
//               <div className="flex">
//                 <div className=" mb-1 mr-20 text-white text-base font-bold max-w-[96px]">
//                   {product.name}
//                 </div>
//                 <div className="text-sm font-bold text-green-600 ">
//                   ${product.price}
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <div
//                   className="mr-4 "
//                   onClick={() => {
//                     setLike(!like);
//                   }}
//                 >
//                   {like ? <FcLikePlaceholder /> : <FcLike />}
//                 </div>
//                 <button className="mt-5 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center absolute bottom-0 right-2 mb-5 ">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BsFilterLeft } from "react-icons/bs";
// import SlideBar from "./SlideBar";
// import { FcLikePlaceholder } from "react-icons/fc";
// import { FcLike } from "react-icons/fc";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showOptions, setShowOptions] = useState(false);
//   const [isCartHovered, setIsCartHovered] = useState(false);
//   const [like, setLike] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const apiUrl = "http://localhost:3000/api/product/all";
//       const response = await axios.get(apiUrl);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const showAllProducts = () => {
//     setFilteredProducts([]);
//     setSelectedCategory(null);
//   };

//   const toggleOptions = () => {
//     setShowOptions(!showOptions);
//   };

//   const filter = (cat) => {
//     const res = products.filter((current) => current.category === cat);
//     setFilteredProducts(res);
//     setSelectedCategory(cat);
//     setShowOptions(false);
//   };

//   const Newrelease = () => {
//     const res = products.filter((current) => current.isNew);
//     setFilteredProducts(res);
//     setSelectedCategory(null);
//     setShowOptions(false);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar with white background */}
//       <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
//         <div className="shadow-sm bg-white bg-opacity-10 flex w-full grow flex-col items-stretch mt-1 mx-auto pl-7 pr-5 py-11 rounded-xl max-md:mt-10 max-md:pl-5">
//           <div className="flex items-stretch justify-between gap-5 pr-3.5">
//             <div className="flex flex-col items-stretch">
//               <div className="flex items-center justify-between gap-4">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/300cd292d494e77036915e0b960f551719046842ecc6ee255b15386277011bbf?"
//                   className="aspect-[1.71] object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full my-auto"
//                 />
//                 <button className="text-white text-2xl font-semibold self-stretch">
//                   Filters
//                 </button>
//               </div>
//               <SlideBar setFilteredProducts={setFilteredProducts} />
//               <button className="text-white text-base font-medium mt-14 max-md:mt-10">
//                 Personal Collections
//               </button>
//               <button
//                 className="text-white text-base font-medium mt-14 max-md:mt-10"
//                 onClick={toggleOptions} 
//               >
//                 Categories
//               </button>
//               {showOptions && (
//                 <div className="mt-2">
//                   <ul>
//                     <li
//                       className={`cursor-pointer hover:text-blue-500 ${
//                         selectedCategory === "Hoodies" &&
//                         "text-blue-500 font-bold"
//                       }`}
//                       onClick={() => filter("Hoodies")}
//                     >
//                       Hoodies
//                     </li>
//                     <li
//                       className={`cursor-pointer hover:text-blue-500 ${
//                         selectedCategory === "Sneakers" &&
//                         "text-blue-500 font-bold"
//                       }`}
//                       onClick={() => filter("Sneakers")}
//                     >
//                       Sneakers
//                     </li>
//                     <li
//                       className={`cursor-pointer hover:text-blue-500 ${
//                         selectedCategory === "T-Shirts" &&
//                         "text-blue-500 font-bold"
//                       }`}
//                       onClick={() => filter("T-Shirts")}
//                     >
//                       T-Shirts
//                     </li>
//                     <li
//                       className={`cursor-pointer hover:text-blue-500 ${
//                         selectedCategory === "Pants" &&
//                         "text-blue-500 font-bold"
//                       }`}
//                       onClick={() => filter("Pants")}
//                     >
//                       Pants
//                     </li>
//                   </ul>
//                 </div>
//               )}

//               <button
//                 className="text-white text-base font-medium mt-14 max-md:mt-10"
//                 onClick={Newrelease}
//               >
//                 Newrelease
//               </button>
//             </div>

//             <div className="flex flex-col items-center mt-24 self-end max-md:hidden max-md:mt-10"></div>
//           </div>
//           <div className="flex items-stretch justify-between gap-5 mt-12 mb-[724px] pr-4 max-md:my-10">
           
//           </div>
//         </div>
//       </div>

//       {/* Product Grid with white background */}
//       <div className="w-3/4 p-4 ">
//         <h2 className="text-3xl font-bold mb-6">Product Cart</h2>
//         <div
//           className={`mb-4 ${
//             isCartHovered
//               ? "bg-white"
//               : "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"
//           } `}
//           onMouseEnter={() => setIsCartHovered(true)}
//           onMouseLeave={() => setIsCartHovered(false)}
//         ></div>
//         <div>
//           {!selectedCategory &&
//             !filteredProducts.length &&
//             `${products.length} items`}
//           {selectedCategory && `in ${selectedCategory}`}
//           {filteredProducts.length > 0 && ` | ${filteredProducts.length} items`}
//         </div>

//         <br />
//         <br />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {(selectedCategory || filteredProducts.length > 0
//             ? filteredProducts
//             : products
//           ).map((product) => (
//             <div
//               key={product.id}
//               className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
//             >
//               <img
//                 src={product.picture}
//                 alt={product.name}
//                 className="w-full h-100 object-cover mb-2 rounded-md"
//               />
//               <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
//                 {product.category}
//               </div>
//               <div className="flex">
//                 <div className="text-sm text-white font-extralight mb-1 mr-20">
//                   {product.name}
//                 </div>
//                 <div className="text-sm font-bold text-green-600">
//                   ${product.price}
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <div
//                   className="mr-4 "
//                   onClick={() => {
//                     setLike(!like);
//                   }}
//                 >
//                   {like ? <FcLikePlaceholder /> : <FcLike />}
//                 </div>
//                 <button className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFilterLeft } from "react-icons/bs";
import SlideBar from "./SlideBar";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { MdOutlineWhatshot } from "react-icons/md";

const Products = ({ addToFavorites }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [likes, setLikes] = useState(false);

  const [favorites, setFavorites] = useState([]);
 

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const initialLikes = {};
    products.forEach((product) => {
      initialLikes[product.id] = false;
    });
    setLikes(initialLikes);
  }, [products]);

  const fetchData = async () => {
    try {
      const apiUrl = "http://localhost:3000/api/product/all";
      const response = await axios.get(apiUrl);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showAllProducts = () => {
    setFilteredProducts([]);
    setSelectedCategory(null);
  };

  const filter = (cat) => {
    const res = products.filter((current) => current.category === cat);
    setFilteredProducts(res);
    setSelectedCategory(cat);
    setShowOptions(false);
  };

  const showNewReleases = () => {
    const newReleases = products.filter((current) => (current.isNew));
  
    // Update the state correctly
    setFilteredProducts(newReleases);
    setSelectedCategory(null);
    setShowOptions(false);
    setDisplayNewReleaseIcon(true);
  };

  const toggleCategoriesOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with white background */}
      <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
        <div className="shadow-sm bg-white bg-opacity-10 flex w-full grow flex-col items-stretch mt-1 mx-auto pl-7 pr-5 py-11 rounded-xl max-md:mt-10 max-md:pl-5">
          <div className="flex items-stretch justify-between gap-5 pr-3.5">
            <div className="flex flex-col items-stretch">
              <div className="flex items-center justify-between gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/300cd292d494e77036915e0b960f551719046842ecc6ee255b15386277011bbf?"
                  className="aspect-[1.71] object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <button className="text-white text-2xl font-semibold self-stretch">
                  Filters
                </button>
              </div>
              <SlideBar setFilteredProducts={setFilteredProducts} />
              <button className="text-white text-base font-medium mt-14 max-md:mt-10">
                Personal Collections
              </button>
              <button
                className="text-white text-base font-medium mt-14 max-md:mt-10"
                onClick={toggleCategoriesOptions}
              >
                Categories
              </button>
              {showOptions && (
                <div className="mt-2">
                  <ul>
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        selectedCategory === "Hoodies" &&
                        "text-blue-500 font-bold"
                      }`}
                      onClick={() => filter("Hoodies")}
                    >
                      Hoodies
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        selectedCategory === "Sneakers" &&
                        "text-blue-500 font-bold"
                      }`}
                      onClick={() => filter("Sneakers")}
                    >
                      Sneakers
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        selectedCategory === "T-Shirts" &&
                        "text-blue-500 font-bold"
                      }`}
                      onClick={() => filter("T-Shirts")}
                    >
                      T-Shirts
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        selectedCategory === "Pants" &&
                        "text-blue-500 font-bold"
                      }`}
                      onClick={() => filter("Pants")}
                    >
                      Pants
                    </li>
                  </ul>
                </div>
              )}

              <button
                className="text-white text-base font-medium mt-14 max-md:mt-10"
                onClick={showNewReleases}
              >
                Newrelease
              </button>
            </div>

            <div className="flex flex-col items-center mt-24 self-end max-md:hidden max-md:mt-10"></div>
          </div>
          <div className="flex items-stretch justify-between gap-5 mt-12 mb-[724px] pr-4 max-md:my-10"></div>
        </div>
      </div>
      

      {/* Product Grid */}
      <div className="w-3/4 p-4 pl-[60px]">
        <div
          className={`mb-4 ${
            isCartHovered
              ? "bg-white"
              : "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"
          } `}
          onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
        ></div>
        <div className=" font-semibold text-pink-100">
          {!selectedCategory &&
            !filteredProducts.length &&
            `|${products.length} items`}
          {filteredProducts.length > 0 && ` | ${filteredProducts.length} items`}
        </div>

        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(selectedCategory || filteredProducts.length > 0
            ? filteredProducts
            : products
            ).map((product) => (
              <div
              key={product.id}
              className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
              >
    
              <img
              src={product.picture}
                alt={product.name}
                className="w-full h-100 object-cover mb-2 rounded-md"
              />
              <div className="text-sm font-medium font-['Poppins'] text-gray-500 mb-1 ">
                {product.category}
              </div>

              <div className="flex items-center">
                <div className="text-sm text-white font-extralight mb-2">
                  {product.name}
                </div>
                <div className="flex-grow"></div>
                <div className="text-sm font-bold text-green-600 mr-10">
                  ${product.price}
                </div>
              </div>
              
              <div className="absolute top-2 right-2 text-yellow-400 mt-2">
  {product.isNew && <MdOutlineWhatshot className="text-2xl" />}
</div>

              <div className="flex items-center">
                <div
                  className="mr-6"
                  onClick={() => {
                    setLike(!like);
                    addToFavorites(product); // Pass the product to addToFavorites
                  }}
                >
                  {likes[product.id] ? <FcLikePlaceholder /> : <FcLike />}
                </div>
                <button
                  className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center"
                  onClick={() => addToFavorites(product)} // Also add the product to favorites on button click
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;