import PropTypes from "prop-types";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { setToLS } from "../../../utils/LocalStorage";
import { WishLength } from "../../../Root";

const WishCard = ({ item, handleClearFromLS }) => {
  const {wishLength, setWishLength} = useContext(WishLength);
  const { productID, image, productName, price, description } = item;
  return (
    <div className="flex flex-col md:flex-row items-center border border-zinc-300 rounded-2xl p-5">
      <div className="md:max-w-60 w-full mb-6 md:mb-0">
        <img className="w-full rounded-xl" src={image} alt="" />
      </div>
      <div className="flex-grow md:ml-6 w-full">
        <div className="space-y-2 ">
          <h3 className="text-2xl font-semibold">{productName}</h3>
          <p className="text-zinc-500">{description}</p>
          <p className="font-semibold text-lg">${price}</p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setWishLength(wishLength - 1);
                handleClearFromLS(productID, "Wish");
                setToLS(productID, "Cart");
                toast.success("Product successfully added to Cart");
              }}
              className="bg-primary text-white py-1 px-4 rounded"
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                setWishLength(wishLength - 1);
                handleClearFromLS(productID, "Wish");
                toast.error("Remove the product from the Wishlist");
              }}
              className="text-xl text-red-500 border-2 border-red-500 rounded-full p-2"
            >
              <IoClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

WishCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleClearFromLS: PropTypes.func.isRequired,
};

export default WishCard;
