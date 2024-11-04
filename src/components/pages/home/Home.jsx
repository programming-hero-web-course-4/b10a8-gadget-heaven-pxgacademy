import { useEffect, useState } from "react";
import Banner from "./Banner";
import GadgetCards from "./GadgetCards";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <section className="px-8">
      <Banner />
      <GadgetCards data={cards} />
    </section>
  );
};

export default Home;
