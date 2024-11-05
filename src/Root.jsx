import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const CartLength = createContext(0);
export const WishLength = createContext(0);

function Root() {
  const [cartLength, setCartLength] = useState(0);
  const [wishLength, setWishLength] = useState(0);

  return (
    <>
      <WishLength.Provider value={[wishLength, setWishLength]}>
        <CartLength.Provider value={[cartLength, setCartLength]}>
          <Header />
          <Outlet />
          <Footer />
        </CartLength.Provider>
      </WishLength.Provider>
    </>
  );
}

export default Root;
