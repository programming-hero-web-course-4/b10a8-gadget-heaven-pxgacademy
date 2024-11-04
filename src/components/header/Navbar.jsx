import { useLocation } from "react-router-dom";
import NavList from "./NavList";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { getFromLS } from "../../utils/LocalStorage";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [iconV, setIconV] = useState({ cart: 0, wish: 0 });

  const navbar = [
    {
      id: "nav1",
      name: "Home",
      path: "/",
    },
    {
      id: "nav2",
      name: "Statistics",
      path: "/statistics",
    },
    {
      id: "nav3",
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "nav4",
      name: "Blogs",
      path: "/blogs",
    },
  ];

  const handleIconV = () => {
    const cart = getFromLS("cart");
    const wish = getFromLS("wish");
    setIconV({ cart: cart.length, wish: wish.length });
    console.log('ami');
  };

  useEffect(() => {
    handleIconV();
  }, []);

  return (
    <nav
      className={`
            ${pathName === "/" ? "bg-primary" : "bg-transparent"}
            w-full py-8 px-5 rounded-t-3xl`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h3
          className={`${
            pathName === "/" ? "text-white" : "text-primary"
          } text-xl font-semibold`}
        >
          Gadget Heaven
        </h3>

        <ul
          className={`flex items-center gap-x-1
            ${pathName === "/" ? "text-white" : "text-primary"}`}
        >
          {navbar.map((list) => (
            <NavList key={list.id} list={list} />
          ))}
        </ul>

        <div className="flex items-center gap-x-6">
          <div className="relative">
            <button className="bg-zinc-100 p-2 rounded-full text-xl">
              <FaShoppingCart />
            </button>
            <span className="absolute -top-5 left-7 bg-white py-1 px-2 text-red-500 rounded-full">
              {iconV.cart}
            </span>
          </div>
          <div className="relative">
            <button className="bg-zinc-100 p-2 rounded-full text-xl">
              <FaHeart />
            </button>
            <span className="absolute -top-5 left-7 bg-white py-1 px-2 text-red-500 rounded-full">
              {iconV.wish}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
