import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

const CartCard = ({ item, handleClearFromLS }) => {
  const { productID, image, productName, price, description } = item;
  return (
    <div className="flex items-center border border-zinc-300 rounded-2xl p-5">
      <div className="max-w-60">
        <img className="w-full rounded-xl" src={image} alt="" />
      </div>
      <div className="flex justify-between items-center flex-grow ml-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{productName}</h3>
          <p className="text-zinc-500">{description}</p>
          <p className="font-semibold text-lg">${price}</p>
        </div>
        <div>
          <button
            onClick={() => handleClearFromLS(productID, "Cart")}
            className="text-xl text-red-500 border-2 border-red-500 rounded-full p-2"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleClearFromLS: PropTypes.func.isRequired,
};

export default CartCard;
