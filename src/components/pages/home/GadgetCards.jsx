import { useState } from "react";
import CardList from "./CardList";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const GadgetCards = () => {
  const data = useLoaderData();
  const [activeList, setActiveList] = useState({
    index: 0,
    activeList: "All Products",
  });
  const cardList = [
    { name: "All Products", category: "All Products" },
    { name: "Laptops", category: "Laptop" },
    { name: "Phones", category: "Smartphone" },
    { name: "Accessories", category: "Accessory" },
    { name: "Smart Watches", category: "Smart Watch" },
    { name: "MacBooks", category: "MacBook" },
    { name: "Power Banks", category: "Power Bank" },
  ];



  const getFilteredProducts = () => {
    if (activeList.activeList === "All Products") {
      return data;
    }
    return data.filter((product) => product.category === activeList.activeList);
  };

  return (
    <div className="max-w-7xl mx-auto mt-[500px]">
      <h2 className="text-4xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex gap-x-5 mt-14">
        <div className="w-[20%]">
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

        <div className="w-[80%] grid grid-cols-3 gap-5">
          {getFilteredProducts().map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GadgetCards;
