import PropTypes from "prop-types";
import { clearFromLS, getFromLS } from "../../../utils/LocalStorage";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { BsSortNumericDownAlt } from "react-icons/bs";

const CartList = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const storedData = getFromLS("Cart");

  const loadFromLS = () => {
    let storedC_Data = [];
    let cost = 0;

    for (const item of storedData) {
      data.map((i) => {
        if (i.productID == item) {
          storedC_Data.push(i);
          cost += i.price;
        }
      });
    }
    setFilteredData(storedC_Data);
    setTotalCost(cost);
  };

  useEffect(() => {
    loadFromLS();
  }, [data]);

  const handleSortByPrice = () => {
    const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
    setFilteredData(sortedData);
  };

  const handleClearFromLS = (item, keyName) => {
    clearFromLS(item, keyName);

    const newData = filteredData.filter((data) => data.productID !== item);
    setFilteredData(newData);

    let cost = 0;
    newData.map((data) => (cost += data.price));
    setTotalCost(cost);
  };

  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 justify-between mt-8">
          <h3 className="text-xl font-semibold">Cart</h3>
          <div className="flex items-center gap-4">
            <p className="font-semibold">Total cost: ${totalCost} </p>
            <button
              onClick={handleSortByPrice}
              className="py-2 px-6 border-2 border-primary rounded-full flex items-center gap-2"
            >
              Sort by price <BsSortNumericDownAlt />
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
        <div>
          {filteredData.length <= 0 && (
            <h2 className="text-xl font-semibold text-center">No Data Found</h2>
          )}
        </div>
      </div>
    </section>
  );
};

CartList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CartList;
