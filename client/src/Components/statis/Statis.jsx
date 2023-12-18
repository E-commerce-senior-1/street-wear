import React from "react";

const Statis = () => {
  return (
    <div>
      <div className="self-stretch flex w-full flex-col pl-12 pr-8 pb-8 max-md:max-w-full max-md:px-5">
        <div className="text-white text-center text-6xl font-extrabold leading-[81px] tracking-wider max-w-[620px] self-center mt-64 max-md:max-w-full max-md:text-4xl max-md:leading-[60px] max-md:mt-10">
          <button>Top Market Statistics</button>
        </div>
        <div className="text-white text-opacity-50 text-center text-xl font-medium leading-9 max-w-[651px] self-center mt-9 max-md:max-w-full">
          The top NFTs ranked by volume, floor price and other statistics.
        </div>
        <div className="self-center flex w-full max-w-[1242px] items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <button className="flex items-center justify-center gap-4 p-4 bg-purple-600 rounded-full w-[250px] h-[50px] text-white text-center text-lg ">
            Marketplace Perfomence
          </button>
          <div className="flex items-center justify-center">
            <div className="w-full flex gap-3">
              <select className="flex items-center justify-center gap-4 p-4 text-white bg-zinc-700 rounded-full w-[140px] h-[55px]">
              <option>Last 7 Days</option>
              <option>Last Month </option>
              <option>Last Day</option>
            </select>
          </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full flex gap-3">
              <select className="flex items-center justify-center gap-4 p-4  text-white bg-zinc-700 rounded-full w-[145px] h-[55px]">
                <option>All categorie</option>
                <option>All brands</option>
                <option>All collection </option>
              </select>
            </div>
          </div>
        </div>

        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">
            Rank
          </div>
          <div className="text-white text-center text-lg font-semibold">
            Collection
          </div>
          <div className="text-white text-center text-lg font-semibold">
            Volume
          </div>
          <div className="text-white text-center text-lg font-semibold">
            24H%
          </div>
          <div className="text-white text-center text-lg font-semibold">
            7D%
          </div>
          <div className="text-white text-center text-lg font-semibold">
            Floor Price
          </div>
          <div className="text-white text-center text-lg font-semibold">
            Owners
          </div>
          <div className="text-white text-center text-lg font-semibold">
            Items
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">1</div>
          <div className="text-white text-center text-lg font-semibold">
            Adidas
          </div>
          <div className="text-white text-center text-lg font-semibold">
            27.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            12.99
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +92.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -16.38
          </div>
          <div className="text-white text-center text-lg font-semibold">
            5.9K
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">2</div>
          <div className="text-white text-center text-lg font-semibold">
            Nike
          </div>
          <div className="text-white text-center text-lg font-semibold">
            26.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            11.99
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +82.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -14.38
          </div>
          <div className="text-white text-center text-lg font-semibold">
            4.9K
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">3</div>
          <div className="text-white text-center text-lg font-semibold">
            Lacoste
          </div>
          <div className="text-white text-center text-lg font-semibold">
            27.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            12.99
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +92.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -16.38
          </div>
          <div className="text-white text-center text-lg font-semibold">
            5.9K
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">4</div>
          <div className="text-white text-center text-lg font-semibold">
            Zandalo
          </div>
          <div className="text-white text-center text-lg font-semibold">
            25.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            10.99
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +72.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -13.38
          </div>
          <div className="text-white text-center text-lg font-semibold">
            3.9K
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">5</div>
          <div className="text-white text-center text-lg font-semibold">
            Zara
          </div>
          <div className="text-white text-center text-lg font-semibold">
            23.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            9.99
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +62.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -13.38
          </div>
          <div className="text-white text-center text-lg font-semibold">3K</div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">6</div>
          <div className="text-white text-center text-lg font-semibold">
            Cartier
          </div>
          <div className="text-white text-center text-lg font-semibold">
            27.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            12.99
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +92.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -16.38
          </div>
          <div className="text-white text-center text-lg font-semibold">
            5.9K
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">7</div>
          <div className="text-white text-center text-lg font-semibold">
            Dior
          </div>
          <div className="text-white text-center text-lg font-semibold">
            27.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            12.99
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +92.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -16.38
          </div>
          <div className="text-white text-center text-lg font-semibold">
            5.9K
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-center text-lg font-semibold">8</div>
          <div className="text-white text-center text-lg font-semibold">
            Hermes
          </div>
          <div className="text-white text-center text-lg font-semibold">
            27.34
          </div>
          <div className="text-white text-center text-lg font-semibold">
            8.5
          </div>
          <div className="text-green-500 text-center text-lg font-semibold">
            +52.96
          </div>
          <div className="text-red-600  text-center text-lg font-semibold">
            -11.38
          </div>
          <div className="text-white text-center text-lg font-semibold">
            2.5K
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
    </div>
  );
};

export default Statis;
