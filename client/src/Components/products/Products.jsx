import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFilterLeft } from "react-icons/bs";
import SlideBar from "./SlideBar";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";



const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [like, setLike] = useState(false);



 
  
  
  const fetchData = async () => {
    try {
      const apiUrl = "http://localhost:3000/api/product/all";
      const response = await axios.get(apiUrl);
      setProducts(response.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const showAllProducts = () => {
    setFilteredProducts([]);
    setSelectedCategory(null);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const filter = (cat) => {
    const res = products.filter((current) => current.category === cat);
    setFilteredProducts(res);
    setSelectedCategory(cat);
    setShowOptions(false);
  };

  const Newrelease = () => {
    const res = products.filter((current) => current.isNew);
    setFilteredProducts(res);
    setSelectedCategory(null);
    setShowOptions(false);
  };

  const Addaricle = (  idusers,idproducts ) => {
    axios.post('http://localhost:3000/api/cart/post', { idusers,idproducts  })
      .then(response => {
        console.log("Item added to the cart successfully");
    
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="flex min-h-screen">
     
      <div className="w-1/4 p-4 ">
        <div className="flex items-center mb-8">
          <BsFilterLeft className="text-3xl mr-2 text-black" />
          <span className="text-xl font-bold text-black">Filter</span>
        </div>
        <button onClick={showAllProducts}>...</button>
        <div className="mt-4">
          <div
            className="cursor-pointer hover:text-blue-500"
            onClick={toggleOptions}
          >
            Categories
          </div>
          {showOptions && (
            <div className="mt-2">
              <ul>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    selectedCategory === "Hoodies" && "text-blue-500 font-bold"
                  }`}
                  onClick={() => filter("Hoodies")}
                >
                  Hoodies
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    selectedCategory === "Sneakers" && "text-blue-500 font-bold"
                  }`}
                  onClick={() => filter("Sneakers")}
                >
                  Sneakers
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    selectedCategory === "T-Shirts" && "text-blue-500 font-bold"
                  }`}
                  onClick={() => filter("T-Shirts")}
                >
                  T-Shirts
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    selectedCategory === "Pants" && "text-blue-500 font-bold"
                  }`}
                  onClick={() => filter("Pants")}
                >
                  Pants
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mt-4">
          <div
            className="cursor-pointer hover:text-blue-500"
            onClick={Newrelease}
          >
            New Release
          </div>
          <SlideBar setFilteredProducts={setFilteredProducts} />
          <div className="cursor-pointer hover:text-blue-500">
            Personal Collection
          </div>
        </div>
      </div>

     
      <div className="w-3/4 p-4 ">
        <h2 className="text-3xl font-bold mb-6">Product Cart</h2>
        <div
          className={`mb-4 ${
            isCartHovered
              ? "bg-white"
              : "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"
          } `}
          onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
        ></div>
        <div>
          {!selectedCategory &&
            !filteredProducts.length &&
            `${products.length} items`}
          {selectedCategory && `in ${selectedCategory}`}
          {filteredProducts.length > 0 && ` | ${filteredProducts.length} items`}
        </div>

        <br />
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
              <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
                {product.category}
              </div>
              <div className="flex">
                <div className="text-sm text-white font-extralight mb-1 mr-20">
                  {product.name}
                </div>
                <div className="text-sm font-bold text-green-600">
                  ${product.price}
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="mr-4 "
                  onClick={() => {
                    setLike(!like);
                  }}
                >
                  {like ? <FcLikePlaceholder /> : <FcLike />}
                </div>
                <button
                  onClick={() => Addaricle(1, product.id )}
                  className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center"
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
