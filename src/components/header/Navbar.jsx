import { Link, useLocation } from "react-router-dom";
import NavList from "./NavList";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartLength, WishLength } from "../../Root";
import { getFromLS } from "../../utils/LocalStorage";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [cartLength, setCartLength] = useContext(CartLength);
  const [wishLength, setWishLength] = useContext(WishLength);
  const location = useLocation();
  const pathName = location.pathname;

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

  const cart = getFromLS("Cart");
  if (cart) {
    setCartLength(cart.length);
  } else {
    setCartLength(0);
  }

  const wish = getFromLS("Wish");
  if (wish) {
    setWishLength(wish.length);
  } else {
    setWishLength(0);
  }

  return (
    <nav
      className={`
            ${pathName === "/" ? "bg-primary" : "bg-transparent"}
            relative w-full py-8 px-3 rounded-t-3xl`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <span
            className={`lg:hidden ${
              pathName === "/" ? "text-white" : "text-primary"
            }`}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </span>
          <h3
            className={`${
              pathName === "/" ? "text-white" : "text-primary"
            } text-xl font-semibold`}
          >
            Gadget Heaven
          </h3>
        </div>

        <ul
          className={`absolute z-10 lg:sticky ${
            isOpen ? "top-24" : "-top-60"
          } duration-300 border lg:border-none border-zinc-400 rounded-lg px-4 py-6 lg:p-0 bg-primary/60 lg:bg-transparent backdrop-blur flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center gap-x-1
            ${pathName === "/" ? "text-white" : "text-white lg:text-primary"}`}
        >
          {navbar.map((list) => (
            <NavList key={list.id} list={list} />
          ))}
        </ul>

        <div className="flex items-center gap-x-6">
          <div className="relative">
            <Link to="/dashboard">
              <button className="bg-zinc-100 p-2 rounded-full text-xl">
                <FaShoppingCart />
              </button>
            </Link>
            <span className="absolute -top-5 left-7 bg-white py-1 px-2 text-red-500 rounded-full">
              {cartLength}
            </span>
          </div>
          <div className="relative">
            <button className="bg-zinc-100 p-2 rounded-full text-xl">
              <FaHeart />
            </button>
            <span className="absolute -top-5 left-7 bg-white py-1 px-2 text-red-500 rounded-full">
              {wishLength}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
