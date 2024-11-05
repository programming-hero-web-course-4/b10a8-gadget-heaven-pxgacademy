import { useEffect, useState } from "react";
import Banner from "./Banner";
import GadgetCards from "./GadgetCards";
import { Helmet } from "react-helmet";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);



  return (
    <>
    <Helmet>
      <title>
        Home | Gadget Heaven
      </title>
    </Helmet>
    <section className="lg:px-8 px-5 pb-16">
      <Banner />
      <GadgetCards data={cards} />
    </section>
    </>
  );
};

export default Home;
