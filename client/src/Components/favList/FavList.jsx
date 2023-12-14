// const favlist =()=>{
//   return(
//     <div>
// <div className="w-3/4 p-4 ">
//         <h2 className="text-3xl font-bold mb-6">Product Cart</h2>
//         <div
//           className={mb-4 ${
//             isCartHovered
//               ? "bg-white"
//               : "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"
//           } }
//           onMouseEnter={() => setIsCartHovered(true)}
//           onMouseLeave={() => setIsCartHovered(false)}
//         ></div>
//         <div>
//           {!selectedCategory &&
//             !filteredProducts.length &&
//             ${products.length} items}
//           {selectedCategory && in ${selectedCategory}}
//           {filteredProducts.length > 0 &&  | ${filteredProducts.length} items}
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
//               className={p-4 rounded-md shadow-md transition-transform transform hover:bg-transparent hover:scale-105 hover:opacity-80}
//             >
//               <img
//                 src={product.picture}
//                 alt={product.name}
//                 className="w-full h-24 object-cover mb-2 rounded-md"
//               />
//               <div className="text-base font-semibold mb-1">
// alt={product.name}
//                 className="w-full h-24 object-cover mb-2 rounded-md"
//               />
//               <div className="text-base font-semibold mb-1">{product.name}</div>
//               <div className="text-gray-500 mb-1">{product.category}</div>
//               <div className="text-sm font-bold text-green-600">
//                 ${product.price}
//               </div>

//               <div className="flex items-center">
//                 <div className="mr-2 " onClick={()=>{setLike(!like) }}>
//                   {like ?< FcLikePlaceholder  /> : <FcLike />}
//                 </div>
//                 <button className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md self-center">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
//     </div>
//   )
// }
// export default favlist;