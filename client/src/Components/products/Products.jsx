import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api/product/all';
    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="container mx-auto my-8 flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-200">
        {/* Add content for your sidebar here */}
        <h2 className="text-2xl font-bold mb-4">Filter</h2>
        <ul>
          <li onClick={() => setShowOptions(!showOptions)}>Categories</li>
          {showOptions && (
            <ul>
              <li>Hoodies</li>
              <li>Sneakers</li>
              <li>T-Shirts</li>
              <li>Pants</li>
            </ul>
          )}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-4">
        <h2 className="text-3xl font-bold mb-6">Product Cart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-md shadow-md">
              <img src={product.picture} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <div className="text-xl font-semibold mb-2">{product.name}</div>
              <div className="text-gray-500 mb-2">{product.category}</div>
              <div className="text-lg font-bold text-green-600">${product.price}</div>
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md self-center">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;