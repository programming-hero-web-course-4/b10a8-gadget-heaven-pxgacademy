import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { clearFromLS, getFromLS } from "../../../utils/LocalStorage";
import WishCard from "./WishCard";

const Wishlist = ({ data }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const storedData = getFromLS("Wish");

  const loadFromLS = () => {
    let storedW_Data = [];

    for (const item of storedData) {
      data.map((i) => {
        i.productID == item ? storedW_Data.push(i) : "";
      });
    }
    setWishlistData(storedW_Data);
  };

  useEffect(() => {
    loadFromLS();
  }, [data]);

  const handleClearFromLS = (item, keyName) => {
    clearFromLS(item, keyName);

    const newData = wishlistData.filter((data) => data.productID !== item);
    setWishlistData(newData);
  };

  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 justify-between mt-8">
          <h3 className="text-xl font-semibold">Wishlist</h3>
        </div>

        <div className="mt-10 space-y-5">
          {wishlistData.map((item, i) => (
            <WishCard
              key={i}
              item={item}
              handleClearFromLS={handleClearFromLS}
            />
          ))}
        </div>
        <div>
          {wishlistData.length <= 0 && (
            <h2 className="text-xl font-semibold text-center">No Data Found</h2>
          )}
        </div>
      </div>
    </section>
  );
};

Wishlist.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Wishlist;
