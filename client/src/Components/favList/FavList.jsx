import React from "react";
import axios from "axios";

export const FavList = ({ iduser, idprod, fetchData }) => {
  const deleteFavList = () => {
    axios
      .delete(`http://localhost:3000/api/favlist/delete/${iduser}/${idprod}`)
      .then((response) => {
        console.log("Deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
      });
  };

  return (
    <div>
       <div
              
              className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
            >
              <img
                src=""
                alt={name}
                className="w-full h-100 object-cover mb-2 rounded-md"
              />
              <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
                
              </div>
              <div className="flex">
                <div className="text-sm text-white font-extralight mb-1 mr-20">
                  
                </div>
                <div className="text-sm font-bold text-green-600">
                  $
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="mr-4 "
                  onClick={() => {
                    ;
                  }}
                >
                 
                </div>
                <button
                  onClick={() => Addaricle(idusers, idproducts)}
                  className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center"
                >
                  Buy Now
                </button>
              </div>
            </div>
    </div>
  );
};
