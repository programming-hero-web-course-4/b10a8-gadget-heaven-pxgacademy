import { useState } from "react";
import CartList from "./CartList";
import Wishlist from "./Wishlist";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [cart, setCart] = useState("cart");
  const data = useLoaderData();

  return (
    <section className="pb-16">
      <div className="bg-primary w-full px-5">
        <div className="max-w-7xl mx-auto py-12">
          <div className="text-white text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold mb-2">Dashboard</h2>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 mt-8">
            <button
              onClick={() => setCart("cart")}
              className={`font-semibold  py-2 px-8 rounded-full border border-white
                ${cart === "cart" ? 'bg-white text-primary' : 'bg-transparent text-white'}  `}
            >
              Cart
            </button>
            <button
              onClick={() => setCart("Wishlist")}
              className={`font-semibold py-2 px-8 rounded-full border border-white
                ${cart === "cart" ? 'bg-transparent text-white' : 'bg-white text-primary'}`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {cart === "cart" ? <CartList data={data} /> : <Wishlist data={data} />}
      </div>
    </section>
  );
};

export default Dashboard;
