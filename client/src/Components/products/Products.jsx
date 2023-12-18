import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFilterLeft } from "react-icons/bs";
import SlideBar from "./SlideBar";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { MdOutlineWhatshot } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [likes, setLikes] = useState({});
  const [displayNewReleaseIcon, setDisplayNewReleaseIcon] = useState(false);

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
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <div className="flex items-center mb-8">
          <BsFilterLeft className="text-3xl mr-2 text-black" />
          <span className="text-xl font-bold text-black">Filter</span>
        </div>
        <div className="mt-4">
          <div
            className="cursor-pointer hover:text-blue-500 border-t-2 border-b-2 border-gray-300 py-2 rounded-md"
            onClick={toggleCategoriesOptions}
          >
            Categories
          </div>
          
          <br />
          {showOptions && (
            <div className="mt-2">
              <ul>
                <li
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => filter("Hoodies")}
                >
                  Hoodies
                </li>
                <li
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => filter("Sneakers")}
                >
                  Sneakers
                </li>
                <li
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => filter("T-Shirts")}
                >
                  T-Shirts
                </li>
                <li
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => filter("Pants")}
                  >
                  Pants
                </li>
              </ul>
            </div>
          )}
        </div>
        <button onClick={showAllProducts}>...</button>
        <br /><br />
          <div
          className="cursor-pointer hover:text-blue-500 border-t-2 border-b-2 border-gray-300 py-2 rounded-md  "
          onClick={showNewReleases}
        >
          New Releases
        </div>

        <br />
<br />
        <br />
        <div className="mt-4">
          <SlideBar setFilteredProducts={setFilteredProducts} filter={filter} />
          <br />
          <br />
          <br />
          <div className="cursor-pointer hover:text-blue-500 border-t-2 border-b-2 border-gray-300 py-2 rounded-md">
            Personal Collection
          </div>
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
                    setLikes((prevLikes) => ({
                      ...prevLikes,
                      [product.id]: !prevLikes[product.id],
                    }));
                  }}
                >
                  {likes[product.id] ? <FcLikePlaceholder /> : <FcLike />}
                </div>
                <button className="mt-2 ml-6 bg-green-500 hover:bg-purple-300 text-white px-10 py-2 rounded-md self-center">
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
