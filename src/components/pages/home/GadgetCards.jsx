import PropTypes from "prop-types";
import { useState } from "react";
import CardList from "./CardList";
import ProductCard from "./ProductCard";

const GadgetCards = ({ data }) => {
  const cardList = [
    { name: "All Products", category: "All Products" },
    { name: "Laptops", category: "Laptop" },
    { name: "Phones", category: "Smartphone" },
    { name: "Accessories", category: "Accessory" },
    { name: "Smart Watches", category: "Smart Watch" },
    { name: "MacBooks", category: "MacBook" },
    { name: "Power Banks", category: "Power Bank" },
  ];
  const [activeList, setActiveList] = useState({
    index: 0,
    activeList: "All Products",
  });

  const filteredData = () => {
    if (activeList.activeList === "All Products") {
      return data;
    }
    return data.filter((product) => product.category === activeList.activeList);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 md:mt-80 lg:mt-[500px]">
      <h2 className="lg:text-4xl text-2xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="lg:flex gap-x-5 mt-14">
        <div className="lg:w-[20%] mb-5 lg:mb-0">
          <ul className="bg-white p-5 flex flex-col gap-3  rounded-2xl border border-zinc-200">
            {cardList.map((list, index) => (
              <CardList
                key={index}
                list={list}
                index={index}
                activeList={activeList}
                setActiveList={setActiveList}
              />
            ))}
          </ul>
        </div>

        <div className="lg:w-[80%] grid lg:grid-cols-3 gap-5">
          {filteredData().map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

GadgetCards.propTypes = {
  data: PropTypes.array.isRequired,
};

export default GadgetCards;
