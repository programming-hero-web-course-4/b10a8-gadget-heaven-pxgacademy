import { Link, useLocation } from "react-router-dom";
import NavList from "./NavList";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartLength, WishLength } from "../../Root";
import { getFromLS } from "../../utils/LocalStorage";

const Navbar = () => {
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
