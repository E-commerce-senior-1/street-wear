import React, { useEffect, useState } from "react";
import axios from "axios";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/cart/get");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteArticle = (id) => {
    axios
      .delete(`http://localhost:3000/api/cart/delete/${id}`)
      .then((response) => {
        console.log("Deleted successfully!");
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
      });
  };
  
  
  const addaricle = ( idusers,idprducts) => {
    axios.post('http://localhost:3000/api/cart/post', { idusers, idprducts })
      .then(response => {
        console.log("Item added to the cart successfully");

        setCartItems(prevItems => [...prevItems, response.data.result]);
        
      })
      .catch(error => {
        console.error(error);
      });
  };
  const getTotalPrice = () => {
    return cartItems.reduce((total, ele) => total + ele.price * quantity, 0).toFixed(2);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      
      <button
        onClick={toggleCartVisibility}
        className="fixed right-4 top-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Cart
      </button>
      {cartVisible && (
        <div className="fixed top-20 right-4 bg-gradient-to-r from-indigo-50 via-purple-600 to-pink-500 p-4 rounded shadow-md w-80 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

          {cartItems.map((ele, i) => (
            <div key={i} className="flex items-center justify-between mb-4">
              <div>
                <img src={ele.picture} alt="Product Image" className="w-16 h-16 rounded-full" />
              </div>
              
              <div className="flex flex-col ml-4">
                <p className="font-semibold">{ele.name}</p>
                <p className="text-gray-500">${(ele.price * quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => deleteArticle(ele.id)}
                className="text-red-500 hover:underline ml-4"
              >
                Delete
              </button>
            </div>
          ))}

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Total:</span>
            <span className="text-xl font-bold">${getTotalPrice()}</span>
          </div>

          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="text-xl font-bold">{quantity}</span>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
