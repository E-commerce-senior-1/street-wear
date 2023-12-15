import React, { useState, useEffect } from 'react';

const SlideBar = ({ setFilteredProducts }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    setSliderValue(parseFloat(e.target.value));
  };

  useEffect(() => {
    fetchItemsUnderPrice();
  }, [sliderValue]);

  const fetchItemsUnderPrice = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/0/${sliderValue}`);
      const newData = await response.json();
      setFilteredProducts(newData);
      console.log('Items under the price:', newData);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div>
      <label
        htmlFor="customRange3"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 cursor-pointer hover:text-blue-500"
      >
        Price
      </label>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        min="0"
        max="1000"
        step="50"
        id="customRange3"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p className="text-neutral-700 dark:text-neutral-200 text-center mt-2">
        Current Price: ${sliderValue}
      </p>
    </div>
  );
};

export default SlideBar;