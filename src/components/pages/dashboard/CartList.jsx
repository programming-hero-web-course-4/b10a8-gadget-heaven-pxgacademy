import PropTypes from "prop-types";
import { clearFromLS, clearLS, getFromLS } from "../../../utils/LocalStorage";
import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { BsSortNumericDownAlt } from "react-icons/bs";
import pIcon from "../../../assets/Group.png";
import { CartLength } from "../../../Root";
import { useNavigate } from "react-router-dom";

const CartList = ({ data }) => {
  const { setCartLength } = useContext(CartLength);
  const [filteredData, setFilteredData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const storedData = getFromLS("Cart");
  const navigate = useNavigate();

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

  const handlePurchase = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const handleModalClose = () => {
    // document.getElementById("my_modal_5").close();
    setTotalCost(0);
    setFilteredData([]);
    clearLS("Cart");
    setCartLength(0);
    navigate("/");
  };

  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-5 justify-between mt-8">
          <h3 className="text-xl font-semibold">Cart</h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="font-semibold">Total cost: ${totalCost.toFixed(2)} </p>
            <button
              onClick={handleSortByPrice}
              className="py-2 px-6 border-2 border-primary rounded-full flex items-center gap-2"
            >
              Sort by price <BsSortNumericDownAlt />
            </button>
            <button
              onClick={handlePurchase}
              className="py-2 px-6 border-2 border-primary rounded-full bg-primary text-white"
            >
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

      <section>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box text-center">
            <img className="p-4 mx-auto" src={pIcon} alt="icon" />
            <h3 className="font-bold text-2xl border-b pb-3">
              Payment Successfully Paid!
            </h3>
            <p className="py-4 text-xl text-zinc-500">Thanks for purchasing.</p>
            <p className="text-lg font-semibold">Total: ${totalCost}</p>
            <div className="modal-action">
              <form method="dialog" className="w-full">
                <button
                  onClick={handleModalClose}
                  className="w-full bg-zinc-300 hover:bg-zinc-200 py-2 rounded-full text-lg font-semibold"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </section>
  );
};

CartList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CartList;
