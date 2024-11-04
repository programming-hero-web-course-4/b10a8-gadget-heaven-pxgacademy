import { useLocation } from "react-router-dom";
import NavList from "./NavList";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = () => {
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

  return (
    <nav
      className={`
            ${pathName === "/" ? "bg-primary" : "bg-transparent"}
            w-full py-8 rounded-t-3xl`}
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
          <button className="bg-zinc-100 p-2 rounded-full text-xl">
            <FaShoppingCart />
          </button>
          <button className="bg-zinc-100 p-2 rounded-full text-xl">
            <FaHeart />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
