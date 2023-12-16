import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrCart } from "react-icons/gr";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems.name, "cartItems");
  const [quantity, setQuantity] = useState(1);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    fetchData();
    getone ()
    
  }, []);
console.log(window.localStorage);
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/cart/getone/${idprod}`
      );
      console.log(response, "list cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const deleteArticle = async (iduser, idprod) => {
    axios
      .delete(`http://localhost:3000/api/cart/delete/${iduser}/${idprod}`)
      .then((response) => {
        console.log("Deleted successfully!");
        // fetchData();
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
      });
  };

  const getone = (id) => {
    axios
      .get(`http://localhost:3000/api/cart/getone/117`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error article:");
      });
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, ele) => total + ele.price * quantity, 0)
      .toFixed(2);
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
    <div className="relative">
      <div>
        <GrCart
          onClick={toggleCartVisibility}
          className="cursor-pointer text-3xl"
        />
      </div>

      {cartVisible && (
        <div className="fixed top-30 right-4 bg-white p-4 rounded shadow-md w-80">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

          {cartItems.map((ele, i) => (
            <div
              key={i}
              className="flex items-center justify-between mb-4 border-b pb-2"
            >
              <div>
                <img
                  src={ele.picture}
                  alt="Product Image"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="flex flex-col ml-4">
                <p className="font-semibold">{ele.name}</p>
                <p className="text-gray-500">
                  ${(ele.price * quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => deleteArticle(ele.iduser, ele.idprod)}
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
