import React from "react";
import products from "../products/Products"

const FavList = ({ likedProducts }) => {

  if (!likedProducts) {
    return null; 
  }

  return (
    <div className="text-white text-center text-3xl font-extrabold leading-[81px] tracking-wider max-w-[356px]">
      PERSONAL COLLECTION
      <div className="mt-16 max-md:max-w-full max-md:mt-10 max-md:pr-5">
        <div className="shadow-sm bg-white bg-opacity-10 flex w-full grow flex-col items-stretch mx-auto p-5 rounded-lg max-md:mt-3">
          {likedProducts.length === 0 && <p>No liked products yet.</p>}
          {likedProducts.map((product) => (
            <div key={product.id}>
              <img
                className="aspect-[0.89] object-contain object-center w-full overflow-hidden "
                src={product.picture}
                alt={product.name}
              />
              <div className="flew*x justify-center">
                <div className="flex justify-between gap-5 mt-5 px-0.5 items-start">
                  <div className="flex flex-col items-stretch">
                    <div className="text-white text-opacity-50 text-base font-medium whitespace-nowrap">
                      {product.category}
                    </div>
                  </div>
                </div>

                <div className="text-white text-base font-bold whitespace-nowrap mt-6">
                  {product.name}
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavList;