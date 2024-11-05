import PropTypes from "prop-types";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CartLength } from "../../../Root";
import { toast } from "react-toastify";

const CartCard = ({ item, handleClearFromLS }) => {
  const [cartLength, setCartLength] = useContext(CartLength);
  const { productID, image, productName, price, description } = item;
  return (
    <div className="flex flex-col md:flex-row items-center border border-zinc-300 rounded-2xl p-5">
      <div className="md:max-w-60 w-full mb-6 md:mb-0">
        <img className="w-full rounded-xl" src={image} alt="" />
      </div>
      <div className="flex gap-x-7 justify-between items-center flex-grow md:ml-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{productName}</h3>
          <p className="text-zinc-500">{description}</p>
          <p className="font-semibold text-lg">${price}</p>
        </div>
        <div>
          <button
            onClick={() => {
              handleClearFromLS(productID, "Cart");
              setCartLength(cartLength - 1);
              toast.error('Remove the product from the cart')
            }}
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
