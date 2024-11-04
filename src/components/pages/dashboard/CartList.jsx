import PropTypes from "prop-types";
import { clearFromLS, getFromLS } from "../../../utils/LocalStorage";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";

const CartList = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const storedData = getFromLS("Cart");

  const loadFromLS = () => {
    let storedC_Data = [];

    for (const item of storedData) {
      data.map((i) => {
        i.productID == item ? storedC_Data.push(i) : "";
      });
    }
    setFilteredData(storedC_Data);
  };

  useEffect(() => {
    loadFromLS();
  }, [data]);

  const handleClearFromLS = (item, keyName) => {
    clearFromLS(item, keyName);

    const newData = filteredData.filter((data) => data.productID !== item);
    setFilteredData(newData);
  };

  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 justify-between mt-8">
          <h3>Cart</h3>
          <div className="flex items-center gap-4">
            <p className="font-semibold">Total cost:</p>
            <button className="py-2 px-6 border-2 border-primary rounded-full">
              Sort by price
            </button>
            <button className="py-2 px-6 border-2 border-primary rounded-full bg-primary text-white">
              Purchase
            </button>
          </div>
        </div>

        <div className="mt-10 space-y-5">
          {filteredData.map((item, i) => (
            <CartCard
              key={i}
              item={item}
              handleClearFromLS={handleClearFromLS}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

CartList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CartList;
