import { useLoaderData, useParams } from "react-router-dom";
import Ratings from "./ratings/Ratings";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { setToLS } from "../utils/LocalStorage";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartLength, WishLength } from "../Root";

const ShowDetails = () => {
  const {cartLength, setCartLength} = useContext(CartLength);
  const {wishLength, setWishLength} = useContext(WishLength);
  const [cartBtnDisable, setCartBtnDisable] = useState(false);
  const [wishBtnDisable, setWishBtnDisable] = useState(false);
  const { pId } = useParams();
  const data = useLoaderData();
  const item = data.find((p) => p.productID === pId);

  const handleLS = (keyName) => {
    setToLS(item.productID, keyName);
  };

  const { image, productName, price, available, description, specifications } =
    item;

  return (
    <section>
      <div className="bg-primary w-full px-5">
        <div className="max-w-7xl mx-auto pt-14 pb-20 md:pb-40">
          <div className="text-white text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold mb-2">Product Details</h2>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>

          <div className="relative w-full flex justify-center mt-10">
            <div className="absolute w-full bg-white flex flex-col lg:flex-row gap-5 lg:gap-10 items-center p-5">
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">{productName}</h2>
                <p className="font-semibold mb-2">Price: ${price}</p>
                <span
                  className={`border rounded-full py-1 px-4 inline-block my-1
                    ${
                      available
                        ? "border-green-400 bg-green-500/20"
                        : "border-red-400 bg-red-500/20"
                    }`}
                >
                  {available ? "In Stock" : "Out of Stock"}
                </span>

                <p className="text-zinc-500 mt-1">{description}</p>
                <p className="font-semibold text-lg mt-3">Specification:</p>
                <ol className="pl-7">
                  {specifications.map((p, i) => (
                    <li className="list-decimal text-zinc-500" key={i}>
                      {p}
                    </li>
                  ))}
                </ol>
                <Ratings />

                <div className="flex items-center gap-5 mt-5">
                  <button
                    onClick={() => {
                      handleLS("Cart");
                      toast.success("Product successfully added to Cart");
                      setCartLength(cartLength + 1);
                      setCartBtnDisable(true);
                    }}
                    disabled={cartBtnDisable}
                    className="flex items-center gap-2 bg-primary text-white py-2 px-6 rounded-full"
                  >
                    Add to Cart <FaShoppingCart />
                  </button>
                  <button
                    onClick={() => {
                      handleLS("Wish");
                      toast.success("Product successfully added to Wishlist");
                      setWishLength(wishLength + 1);
                      setWishBtnDisable(true);
                    }}
                    disabled={wishBtnDisable}
                    className="border border-zinc-400 p-2 rounded-full"
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[800px] lg:mt-96"></div>
    </section>
  );
};

export default ShowDetails;
